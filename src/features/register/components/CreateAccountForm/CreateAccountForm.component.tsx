import { useEffect } from "react";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/features/shared/components";
import { AccountSchema } from "@/modules/register/domain/entities";

import {
  ICreateAccountFormProps,
  ICreateAccountFormFields,
} from "./CreateAccountForm.types";

function CreateAccountForm(props: ICreateAccountFormProps) {
  const { initialValues, isSubmitting, isSuccess, onSubmit } = props;

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<ICreateAccountFormFields>({
    resolver: zodResolver(AccountSchema),
    mode: "onBlur",
    defaultValues: { ...initialValues, confirmPassword: "" },
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column">
      <VStack gap="1rem">
        <Input
          hiddenLabel
          label="Username"
          name="username"
          control={control}
          placeholder="Username"
          isDisabled={isSubmitting}
        />
        <Input
          hiddenLabel
          label="Email"
          name="email"
          control={control}
          placeholder="Email Address"
          isDisabled={isSubmitting}
        />
        <Input
          hiddenLabel
          label="Password"
          name="password"
          control={control}
          placeholder="Password"
          isDisabled={isSubmitting}
        />
        <Input
          hiddenLabel
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          placeholder="Confirm Password"
          isDisabled={isSubmitting}
        />
      </VStack>
      <Button
        type="submit"
        marginTop="2rem"
        isDisabled={!isValid}
        isLoading={isSubmitting}
      >
        Create Account
      </Button>
    </Flex>
  );
}

export default CreateAccountForm;
