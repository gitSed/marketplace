import { useQuery } from "react-query";

import { Hero } from "../domain/entities";
import { HeroFetcher } from "../domain/fetchers";

function useGetHeroInfoQuery(queryFn: () => Promise<Hero>) {
  const { data, error, isError, isLoading, isSuccess } = useQuery<Hero>(
    "get-hero-info-query",
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

class ReactQueryHeroFetcher implements HeroFetcher {
  readonly getHeroInfoQuery = useGetHeroInfoQuery;
}

export default ReactQueryHeroFetcher;
