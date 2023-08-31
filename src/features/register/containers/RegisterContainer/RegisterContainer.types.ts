import { AccountRepository } from "@/modules/register/domain/repositories";
import { AccountFetcher } from "@/modules/register/domain/fetchers";

export interface IRegisterContainerProps {
  repository: AccountRepository;
  fetcher: AccountFetcher;
}
