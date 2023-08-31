import CreateAccountRequest from "../entities/CreateAccountRequest";

interface AccountFetcher {
  readonly createAccountMutation: (
    mutationFn: (request: CreateAccountRequest) => Promise<void>
  ) => {
    mutate: (request: CreateAccountRequest) => Promise<void>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
  };
}

export default AccountFetcher;
