import { useEffect } from "react";

import { HeroContainer } from "@/features/home/containers";
import { getAllUsers } from "@/modules/user/application";

import { IHomeContainerProps } from "./HomeContainer.types";

function HomeContainer(props: IHomeContainerProps) {
  const { repositories } = props;

  useEffect(() => {
    getAllUsers(repositories.userRepository);
  }, []);

  return (
    <>
      <HeroContainer repository={repositories.heroRepository} />
    </>
  );
}

export default HomeContainer;
