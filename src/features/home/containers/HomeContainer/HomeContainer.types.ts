import { HeroRepository } from "@/modules/hero/domain/repositories";
import { HeroFetcher } from "@/modules/hero/domain/fetchers";
import { UserRepository } from "@/modules/user/domain/repositories";
import { UserFetcher } from "@/modules/user/domain/fetchers";

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
