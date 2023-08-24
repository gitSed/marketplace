import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";

import { CreateAccountForm } from "@/features/register/components";
import { createAccountEmptyState } from "@/features/register/utils";

import { IRegisterViewProps } from "./RegisterView.types";

const imagePlaceholderUrl =
  "https://res.cloudinary.com/dtdygo8fv/image/upload/v1692831661/NFT%20Marketplace/register/kdgoimndgje7c2pnna71.png";

function RegisterView(props: IRegisterViewProps) {
  const { onSubmit, hasError, isLoading, isSuccess } = props;

  return (
    <Flex gap="3.75rem">
      <Box flex="0 1 50%">
        <AspectRatio ratio={100 / 95}>
          <Image
            src={imagePlaceholderUrl}
            alt="SignUp Placeholder Graphic"
            fetchPriority="high"
            objectFit="contain"
          />
        </AspectRatio>
      </Box>
      <Flex
        flex="0 1 50%"
        justifyContent="center"
        flexDirection="column"
        pr={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
      >
        <Text textStyle="h1" mb="0.625rem">
          Create account
        </Text>
        <Text textStyle="h4" fontSize="1.375rem" fontWeight="400" mb="2.5rem">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </Text>
        <Box maxW="25rem">
          <CreateAccountForm
            initialValues={createAccountEmptyState()}
            isFailed={hasError}
            isSubmitting={isLoading}
            isSuccess={isSuccess}
            onSubmit={onSubmit}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RegisterView;
