import { Account } from "@/modules/register/domain";

export interface ICreateAccountFormProps {
  initialValues: Account;
  isFailed: boolean;
  isSubmitting: boolean;
  onSubmit: (values: Account) => void;
}
