import { useQuery } from "react-query";

import { User } from "../domain/entities";
import { UserFetcher } from "../domain/fetchers";

function useGetAllUsersQuery(queryFn: () => Promise<Array<User>>) {
  const { data, error, isError, isLoading, isSuccess } = useQuery<Array<User>>(
    "get-all-users-query",
    queryFn,
    { staleTime: 60000 }
  );

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  };
}

class ReactQueryUserFetcher implements UserFetcher {
  readonly getAllUsersQuery = useGetAllUsersQuery;
}

export default ReactQueryUserFetcher;
