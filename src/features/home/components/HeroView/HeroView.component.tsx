import { Flex, Text, Button } from "@chakra-ui/react";

import { RocketIcon } from "@/features/shared/assets";
import { NftCard } from "@/features/shared/components";

import {
  IHeroViewProps,
  IHeroDetailsProps,
  IHeroDetailItemProps,
} from "./HeroView.types";

function HeroDetailItem(props: IHeroDetailItemProps) {
  const { figure, title } = props;

  return (
    <Flex flexDirection="column" flex="1">
      <Text textStyle="h3" fontSize="1.75rem" fontWeight={700}>
        {figure}+
      </Text>
      <Text textStyle="h4" fontWeight={400}>
        {title}
      </Text>
    </Flex>
  );
}

function HeroDetails(props: IHeroDetailsProps) {
  const { summary } = props;

  return (
    <Flex gap="1.875rem" mt="1.75rem">
      <HeroDetailItem figure={summary.totalSale} title="Total Sale" />
      <HeroDetailItem figure={summary.totalAuctions} title="Auctions" />
      <HeroDetailItem figure={summary.totalArtists} title="Artists" />
    </Flex>
  );
}

function HeroView(props: IHeroViewProps) {
  const { hero } = props;

  return (
    <Flex width="100%" flexDirection="row" gap="2rem" paddingY="5rem">
      <Flex flex="0 1 50%" flexDirection="column">
        <Text
          textStyle="h1"
          fontSize="4.125rem"
          lineHeight="4.625rem"
          textTransform="capitalize"
        >
          Discover digital art & Collect NFTs
        </Text>
        <Text
          textStyle="h6"
          fontSize="1.375rem"
          lineHeight="2.25rem "
          mt="1.875rem"
        >
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </Text>
        <Button maxW="14rem" mt="2.125rem" gap="0.75rem">
          <RocketIcon />
          Get Started
        </Button>
        <HeroDetails summary={hero.summary} />
      </Flex>
      <Flex flex="0 1 50%">
        <NftCard nft={hero.nft} />
      </Flex>
    </Flex>
  );
}

export default HeroView;
