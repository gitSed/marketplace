import { Box } from "@chakra-ui/react";

import { HeroView } from "@/features/home/components";
import { getHeroInfo } from "@/modules/hero/application";

import { IHeroContainerProps } from "./HeroContainer.types";

function HeroContainer(props: IHeroContainerProps) {
  const { repository, fetcher } = props;

  const { data: hero } = fetcher.getHeroInfoQuery(getHeroInfo(repository));

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
