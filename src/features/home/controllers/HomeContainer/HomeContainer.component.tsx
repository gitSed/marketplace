import { useEffect } from "react";

import { HeroController } from "@/features/home/controllers";
import { getAllUsers } from "@/modules/user/application";

import { IHomeContainerProps } from "./HomeContainer.types";

function HomeContainer(props: IHomeContainerProps) {
  const { repositories } = props;

  useEffect(() => {
    getAllUsers(repositories.userRepository);
  }, []);

  return (
    <>
      <HeroController repository={repositories.heroRepository} />
    </>
  );
}

export default HomeContainer;
