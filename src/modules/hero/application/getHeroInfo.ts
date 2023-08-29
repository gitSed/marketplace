import { HeroRepository } from "../domain";

function getHeroInfo(repository: HeroRepository) {
  return async () => {
    return await repository.get();
  };
}

export default getHeroInfo;
