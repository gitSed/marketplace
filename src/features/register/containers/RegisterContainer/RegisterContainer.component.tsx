import { useCallback, useEffect, useRef } from "react";
import { ToastId, useToast } from "@chakra-ui/react";

import { RegisterView } from "@/features/register/components";
import { Alert } from "@/features/shared/components";
import { FetchError } from "@/modules/shared/domain";
import { CreateAccountRequest, Account } from "@/modules/register/domain";
import { createAccount } from "@/modules/register/application";

import { IRegisterContainerProps } from "./RegisterContainer.types";

const toastDuration = 40000;

function RegisterContainer(props: IRegisterContainerProps) {
  const { repository, fetcher } = props;

  const toastIdRef = useRef<ToastId>();

  const { mutate, error, isError, isLoading, isSuccess } =
    fetcher.createAccountMutation(createAccount(repository));

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

    mutate(request);
  };

  useEffect(() => {
    if (isSuccess) {
      showToast("success", "Account created successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error instanceof FetchError) {
        showToast("warning", error.message);
      } else {
        showToast("warning", "Something went wrong");
      }
    }
  }, [isError]);

  return (
    <RegisterView
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
}

export default RegisterContainer;
