import HeroInfo from "../entities/Hero";

interface HeroRepository {
  get(): Promise<HeroInfo>;
}

export default HeroRepository;
