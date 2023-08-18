"use client";
import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";

import { INftCardProps } from "./NftCard.types";

function NftCard(props: INftCardProps) {
  const { nft } = props;

  return (
    <Box width="100%" borderRadius="1.25rem 1.25rem 0 0" overflow="hidden">
      <AspectRatio maxH="25rem" ratio={1}>
        <Image
          src={nft.image.url}
          alt={nft.image.title}
          aria-label={nft.image.description}
          fetchPriority="high"
        />
      </AspectRatio>
      <Flex
        flexDirection="column"
        bg="backgroundSecondary"
        padding="1.25rem"
        gap="0.625rem"
        borderRadius="0 0 1.25rem 1.25rem"
      >
        <Text textStyle="h5" fontSize="1.375rem">
          {nft.name}
        </Text>
        <Flex gap="0.75rem">
          <Image
            src={nft.creator.image.url}
            alt={nft.creator.image.title}
            aria-label={nft.creator.image.description}
            width="1.5rem"
            height="1.5rem"
            borderRadius="50%"
          />
          <Text textStyle="subtitle2" fontWeight="400">
            {nft.creator.name}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NftCard;
