import { Account } from "@/modules/register/domain";

export interface ICreateAccountFormProps {
  initialValues: Account;
  onSubmit: (values: Account) => void;
}
