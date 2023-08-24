import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { HeroView } from "@/features/home/components";
import { getHeroInfo } from "@/modules/hero/application";
import { Hero } from "@/modules/hero/domain";

import { IHeroContainerProps } from "./HeroContainer.types";

function HeroContainer(props: IHeroContainerProps) {
  const { repository } = props;

  const [hero, setHero] = useState<Hero | undefined>();

  const renderLoading = (): JSX.Element => {
    return (
      <Box
        paddingX={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
        paddingBottom={{ base: 0, md: 6 }}
      >
        Loading...
      </Box>
    );
  };

  useEffect(() => {
    getHeroInfo(repository).then((hero) => {
      setHero(hero);
    });
  }, []);

  if (!hero) {
    return renderLoading();
  }

  return (
    <Box
      paddingX={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
      paddingBottom={{ base: 0, md: 6 }}
    >
      <HeroView hero={hero} />
    </Box>
  );
}

export default HeroContainer;
