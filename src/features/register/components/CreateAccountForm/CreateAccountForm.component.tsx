import { Button, Flex, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/features/shared/components";
import { Account, AccountSchema } from "@/modules/register/domain";

import { ICreateAccountFormProps } from "./CreateAccountForm.types";

function CreateAccountForm(props: ICreateAccountFormProps) {
  const { initialValues, isFailed, isSubmitting, onSubmit } = props;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Account>({
    resolver: zodResolver(AccountSchema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column">
      <VStack gap="1rem">
        <Input
          hiddenLabel
          label="Username"
          name="username"
          control={control}
          placeholder="Username"
        />
        <Input
          hiddenLabel
          label="Email"
          name="email"
          control={control}
          placeholder="Email Address"
        />
        <Input
          hiddenLabel
          label="Password"
          name="password"
          control={control}
          placeholder="Password"
        />
        <Input
          hiddenLabel
          label="Confirm Password"
          name=""
          control={control}
          placeholder="Confirm Password"
        />
      </VStack>
      <Button
        type="submit"
        marginTop="2rem"
        isDisabled={!isValid || isFailed}
        isLoading={isSubmitting}
      >
        Create Account
      </Button>
    </Flex>
  );
}

export default CreateAccountForm;
