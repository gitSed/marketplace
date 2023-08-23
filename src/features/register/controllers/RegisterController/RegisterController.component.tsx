import { Box } from "@chakra-ui/react";

import { RegisterView } from "@/features/register/components";

function RegisterController() {
  const renderLoading = (): JSX.Element => {
    return (
      <Box
        px={{ base: 4, md: 8, lg: "7rem", xl: "10rem" }}
        pb={{ base: 0, md: 6 }}
      >
        Loading...
      </Box>
    );
  };

  return <RegisterView />;
}

export default RegisterController;
