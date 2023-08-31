import { Account } from "@/modules/register/domain/entities";

export interface IRegisterViewProps {
  onSubmit: (account: Account) => void;
  isLoading: boolean;
  isSuccess: boolean;
}
