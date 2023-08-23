import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/features/shared/components";
import { Account, AccountSchema } from "@/modules/register/domain";

import { ICreateAccountFormProps } from "./CreateAccountForm.types";

function CreateAccountForm(props: ICreateAccountFormProps) {
  const { initialValues, onSubmit } = props;

  const { control, handleSubmit } = useForm<Account>({
    resolver: zodResolver(AccountSchema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit">Create Account</Button>
    </form>
  );
}

export default CreateAccountForm;
