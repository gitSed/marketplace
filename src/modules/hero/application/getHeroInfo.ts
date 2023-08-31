import { HeroRepository } from "../domain/repositories";

function getHeroInfo(repository: HeroRepository) {
  return async () => {
    return await repository.get();
  };
}

export default getHeroInfo;
