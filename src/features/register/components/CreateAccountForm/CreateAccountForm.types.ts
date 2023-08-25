import { Account } from "@/modules/register/domain";

export interface ICreateAccountFormProps {
  initialValues: Account;
  isSubmitting: boolean;
  isSuccess: boolean;
  onSubmit: (values: Account) => void;
}

export interface ICreateAccountFormFields extends Account {
  confirmPassword: string;
}
