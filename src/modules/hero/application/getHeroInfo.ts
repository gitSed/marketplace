import { Hero, HeroRepository } from "../domain";

async function getHeroInfo(repository: HeroRepository): Promise<Hero> {
  return repository.get();
}

export default getHeroInfo;
