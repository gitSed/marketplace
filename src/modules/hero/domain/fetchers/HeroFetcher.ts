import Hero from "../entities/Hero";

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
