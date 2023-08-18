"use client";
import NextLink from "next/link";
import { AspectRatio, Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import { INftCardProps, INftCreatorProps } from "./NftCard.types";

function Creator(props: INftCreatorProps) {
  const { creator } = props;

  return (
    <Link as={NextLink} href={`/creator/${creator.id}`} w="fit-content">
      <Flex gap="0.75rem" w="fit-content">
        <Image
          src={creator.image.url}
          alt={creator.image.title}
          aria-label={creator.image.description}
          width="1.5rem"
          height="1.5rem"
          borderRadius="50%"
        />
        <Text textStyle="subtitle2" fontWeight="400">
          {creator.name}
        </Text>
      </Flex>
    </Link>
  );
}

function NftCard(props: INftCardProps) {
  const { nft } = props;

  return (
    <Box width="100%" borderRadius="1.25rem 1.25rem 0 0" overflow="hidden">
      <Link as={NextLink} href={`/nft/${nft.id}`}>
        <AspectRatio ratio={1} maxH="25rem" overflow="hidden">
          <Image
            src={nft.image.url}
            alt={nft.image.title}
            aria-label={nft.image.description}
            fetchPriority="high"
            objectFit="contain"
          />
        </AspectRatio>
      </Link>
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
        <Creator creator={nft.creator} />
      </Flex>
    </Box>
  );
}

export default NftCard;
