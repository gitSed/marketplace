import { useCallback, useRef, useState } from "react";

import { ToastId, useToast } from "@chakra-ui/react";

import { RegisterView } from "@/features/register/components";
import { Alert } from "@/features/shared/components";
import { FetchError } from "@/modules/shared/domain";
import { CreateAccountRequest, Account } from "@/modules/register/domain";
import { createAccount } from "@/modules/register/application";

import { IRegisterContainerProps } from "./RegisterContainer.types";

const toastDuration = 40000;

function RegisterContainer(props: IRegisterContainerProps) {
  const { repository } = props;

  const toastIdRef = useRef<ToastId>();

  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toast = useToast({
    position: "bottom",
    duration: toastDuration,
  });

  const closeToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toast]);

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
    setIsFetching(true);

    const request: CreateAccountRequest = {
      email: formValues.email,
      password: formValues.password,
      username: formValues.username,
    };

    createAccount(repository)(request)
      .then(() => {
        showToast("success", "Account created successfully");
        setIsSuccess(true);
      })
      .catch((error) => {
        if (error instanceof FetchError) {
          showToast("warning", error.message);
        } else {
          showToast("warning", "Something went wrong");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <RegisterView
      onSubmit={handleSubmit}
      isLoading={isFetching}
      isSuccess={isSuccess}
    />
  );
}

export default RegisterContainer;
