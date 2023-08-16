import { useEffect } from "react";

import { HomeView } from "@/features/home/components";
import { getAllUsers } from "@/modules/user/application";

import { IHomeContainerProps } from "./HomeContainer.types";

function HomeContainer(props: IHomeContainerProps) {
  const { repository } = props;

  useEffect(() => {
    // TODO - Remove
    getAllUsers(repository);
  }, []);

  return <HomeView />;
}

export default HomeContainer;
