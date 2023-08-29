import { HeroFetcher, HeroRepository } from "@/modules/hero/domain";

export interface IHeroContainerProps {
  repository: HeroRepository;
  fetcher: HeroFetcher;
}
