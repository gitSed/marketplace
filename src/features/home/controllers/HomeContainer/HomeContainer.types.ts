import { HeroRepository } from "@/modules/hero/domain";
import { UserRepository } from "@/modules/user/domain";

export interface IHomeContainerProps {
  repositories: {
    heroRepository: HeroRepository;
    userRepository: UserRepository;
  };
}
