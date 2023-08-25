import { useState } from "react";

import { RegisterView } from "@/features/register/components";
import { FetchError } from "@/modules/shared/domain";
import { CreateAccountRequest, Account } from "@/modules/register/domain";
import { createAccount } from "@/modules/register/application";

import { IRegisterContainerProps } from "./RegisterContainer.types";

function RegisterContainer(props: IRegisterContainerProps) {
  const { repository } = props;

  const [errorAlert, setErrorAlert] = useState<undefined | string>();
  const [successAlert, setSuccessAlert] = useState<undefined | string>();
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (formValues: Account) => {
    setIsFetching(true);

    const request: CreateAccountRequest = {
      email: formValues.email,
      password: formValues.password,
      username: formValues.username,
    };

    createAccount(repository)(request)
      .then(() => {
        setSuccessAlert("Account created successfully");
      })
      .catch((error) => {
        if (error instanceof FetchError) {
          setErrorAlert(error.message);
        } else {
          setErrorAlert("Something went wrong");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  if (!!errorAlert) {
    console.log(errorAlert);
  }

  if (!!successAlert) {
    console.log(successAlert);
  }

  return (
    <RegisterView
      onSubmit={handleSubmit}
      isLoading={isFetching}
      isSuccess={!!successAlert}
    />
  );
}

export default RegisterContainer;
