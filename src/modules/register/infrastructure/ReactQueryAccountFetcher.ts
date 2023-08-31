import { useMutation } from "react-query";

import { CreateAccountRequest } from "../domain/entities";
import { AccountFetcher } from "../domain/fetchers";

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
