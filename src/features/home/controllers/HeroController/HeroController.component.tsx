import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { HeroView } from "@/features/home/components";
import { getHeroInfo } from "@/modules/hero/application";
import { Hero } from "@/modules/hero/domain";

import { IHeroControllerProps } from "./HeroController.types";

function HeroController(props: IHeroControllerProps) {
  const { repository } = props;

  const [hero, setHero] = useState<Hero | undefined>();

  useEffect(() => {
    getHeroInfo(repository).then((hero) => {
      setHero(hero);
    });
  }, []);

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      px={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
      pb={{ base: 0, md: 6 }}
    >
      <HeroView hero={hero} />
    </Box>
  );
}

export default HeroController;
