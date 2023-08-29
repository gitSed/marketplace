import { useMutation } from "react-query";

import { AccountFetcher, CreateAccountRequest } from "../domain";

function useCreateMutation(
  mutationFn: (request: CreateAccountRequest) => Promise<void>
) {
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation(
    "create-account-mutation",
    mutationFn
  );

  return {
    mutate: mutateAsync,
    isLoading,
    isSuccess,
    isError,
    error,
  };
}

class ReactQueryAccountFetcher implements AccountFetcher {
  readonly createAccountMutation = useCreateMutation;
}

export default ReactQueryAccountFetcher;
