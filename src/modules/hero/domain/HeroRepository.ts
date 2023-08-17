import HeroInfo from "./Hero";

interface HeroRepository {
  get(): Promise<HeroInfo>;
}

export default HeroRepository;
