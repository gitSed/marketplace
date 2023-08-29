import { HeroFetcher, HeroRepository } from "@/modules/hero/domain";
import { UserFetcher, UserRepository } from "@/modules/user/domain";

export interface IHomeContainerProps {
  repositories: {
    heroRepository: HeroRepository;
    userRepository: UserRepository;
  };
  fetchers: {
    userFetcher: UserFetcher;
    heroFetcher: HeroFetcher;
  };
}
