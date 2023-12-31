import { Hero } from "../domain/entities";
import { HeroRepository } from "../domain/repositories";

interface ApiHero {
  id: string;
  name: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
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

class FetchHeroRepository implements HeroRepository {
  async get(): Promise<Hero> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/hero`
    );
    const hero = (await response.json()) as ApiHero;

    return {
      nft: {
        id: hero.id,
        name: hero.name,
        creator: {
          id: hero.creator.id,
          image: {
            url: hero.creator.avatar,
            title: hero.creator.name,
            description: hero.creator.name,
            mediaType: "image",
          },
          name: hero.creator.name,
        },
        image: {
          url: hero.illustration.src,
          title: hero.illustration.description,
          description: hero.illustration.description,
          mediaType: "image",
        },
      },
      summary: {
        totalSale: hero.summary.totalSale,
        totalAuctions: hero.summary.auctions,
        totalArtists: hero.summary.artists,
      },
    };
  }
}

export default FetchHeroRepository;
