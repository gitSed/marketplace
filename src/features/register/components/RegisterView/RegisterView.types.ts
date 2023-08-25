import { Account } from "@/modules/register/domain";

export interface IRegisterViewProps {
  onSubmit: (account: Account) => void;
  isLoading: boolean;
  isSuccess: boolean;
}
