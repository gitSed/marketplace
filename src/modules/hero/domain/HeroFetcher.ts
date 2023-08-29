import Hero from "./Hero";

interface HeroFetcher {
  readonly getHeroInfoQuery: (queryFn: () => Promise<Hero>) => {
    data?: Hero;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
  };
}

export default HeroFetcher;
