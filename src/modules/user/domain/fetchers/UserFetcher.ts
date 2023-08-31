import User from "../entities/User";

interface UserFetcher {
  readonly getAllUsersQuery: (queryFn: () => Promise<Array<User>>) => {
    data?: Array<User>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
  };
}

export default UserFetcher;
