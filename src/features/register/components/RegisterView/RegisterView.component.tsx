import { Box, Flex } from "@chakra-ui/react";

import { CreateAccountForm } from "@/features/register/components";
import { createAccountEmptyState } from "@/features/register/utils";
import { Account } from "@/modules/register/domain";

function RegisterView() {
  const handleSubmit = (values: Account) => {
    console.log(values);
  };

  return (
    <Flex>
      <Box flex="0 1 50%">
        <h1>Register</h1>
      </Box>
      <Box flex="0 1 50%">
        <CreateAccountForm
          onSubmit={handleSubmit}
          initialValues={createAccountEmptyState()}
        />
      </Box>
    </Flex>
  );
}

export default RegisterView;
