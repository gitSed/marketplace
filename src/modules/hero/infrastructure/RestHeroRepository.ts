import { Hero, HeroRepository } from "../domain";

interface ApiHero {
  illustration: {
    src: string;
    description: string;
  };
  summary: {
    totalSale: string;
    auctions: string;
    artists: string;
  };
}

class RestHeroRepository implements HeroRepository {
  async get(): Promise<Hero> {
    const response = await fetch("http://localhost:3001/api/hero");
    const hero = (await response.json()) as ApiHero;

    return {
      illustration: {
        description: hero.illustration.description,
        image: hero.illustration.src,
        title: hero.illustration.description,
      },
      summary: {
        totalSale: hero.summary.totalSale,
        totalAuctions: hero.summary.auctions,
        totalArtists: hero.summary.artists,
      },
    };
  }
}

export default RestHeroRepository;
