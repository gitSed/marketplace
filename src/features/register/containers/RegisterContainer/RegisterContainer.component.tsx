import { useCallback, useEffect, useRef } from "react";
import { ToastId, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useMachine } from "@xstate/react";

import { RegisterView } from "@/features/register/components";
import { Alert } from "@/features/shared/components";
import { FetchError } from "@/modules/shared/domain/errors";
import {
  CreateAccountRequest,
  Account,
} from "@/modules/register/domain/entities";
import { createAccount } from "@/modules/register/application";
import { createAccountMachine } from "@/modules/register/domain/machines";

import { IRegisterContainerProps } from "./RegisterContainer.types";

const toastDuration = 40000;

function RegisterContainer(props: IRegisterContainerProps) {
  const { repository, fetcher } = props;

  const router = useRouter();
  const toastIdRef = useRef<ToastId>();

  const { mutate, isLoading, isSuccess } = fetcher.createAccountMutation(
    createAccount(repository)
  );

  const [state, send] = useMachine(createAccountMachine, {
    services: {
      createAccount: (context) => async () => {
        await mutate(context.request);
      },
    },
  });

  const toast = useToast({
    position: "bottom",
    duration: toastDuration,
  });

  const closeToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toastIdRef, toast]);

  const showToast = useCallback(
    (status: "info" | "warning" | "success", message: string) => {
      toastIdRef.current = toast({
        render: () => {
          return (
            <Alert message={message} status={status} onDismiss={closeToast} />
          );
        },
      });
    },
    [toastIdRef, toast]
  );

  const handleSubmit = (formValues: Account) => {
    const request: CreateAccountRequest = {
      email: formValues.email,
      password: formValues.password,
      username: formValues.username,
    };
    send("SUBMIT", { data: request });
  };

  useEffect(() => {
    if (state.value === "success") {
      showToast("success", "Account created successfully");
      router.push("/");
    }

    if (state.value === "error") {
      if (state.event.data instanceof FetchError) {
        showToast("warning", state.event.data.message);
      } else {
        showToast("warning", "Something went wrong");
      }
    }
  }, [state.value]);

  return (
    <RegisterView
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
}

export default RegisterContainer;
