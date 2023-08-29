import { HeroContainer } from "@/features/home/containers";
import { getAllUsers } from "@/modules/user/application";

import { IHomeContainerProps } from "./HomeContainer.types";

function HomeContainer(props: IHomeContainerProps) {
  const {
    repositories: { heroRepository, userRepository },
    fetchers: { userFetcher, heroFetcher },
  } = props;

  userFetcher.getAllUsersQuery(getAllUsers(userRepository));

  return <HeroContainer repository={heroRepository} fetcher={heroFetcher} />;
}

export default HomeContainer;
