import { HeroRepository } from "@/modules/hero/domain/repositories";
import { HeroFetcher } from "@/modules/hero/domain/fetchers";

export interface IHeroContainerProps {
  repository: HeroRepository;
  fetcher: HeroFetcher;
}
