import { AccountFetcher, AccountRepository } from "@/modules/register/domain";

export interface IRegisterContainerProps {
  repository: AccountRepository;
  fetcher: AccountFetcher;
}
