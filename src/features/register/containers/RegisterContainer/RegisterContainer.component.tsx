import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { RegisterView } from "@/features/register/components";
import { Account } from "@/modules/register/domain";
import { FetchError } from "@/modules/shared/domain";
import { createAccount } from "@/modules/register/application";

import { IRegisterContainerProps } from "./RegisterContainer.types";

function RegisterContainer(props: IRegisterContainerProps) {
  const { repository } = props;

  const [errorAlert, setErrorAlert] = useState<undefined | string>();
  const [successAlert, setSuccessAlert] = useState<undefined | string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: Account) => {
    setIsLoading(true);

    createAccount(repository)(values)
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
        setIsLoading(false);
      });
  };

  const renderLoading = (): JSX.Element => {
    return (
      <Box
        px={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
        pb={{ base: 0, md: 6 }}
      >
        Loading...
      </Box>
    );
  };

  if (!!errorAlert) {
    console.log("CreateAccountErrorAlert: ", errorAlert);
  }

  if (!!successAlert) {
    console.log("CreateAccountSuccessAlert: ", successAlert);
  }

  return (
    <RegisterView
      onSubmit={handleSubmit}
      hasError={!!errorAlert}
      isLoading={isLoading}
    />
  );
}

export default RegisterContainer;
