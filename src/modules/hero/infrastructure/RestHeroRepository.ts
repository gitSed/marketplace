import { Hero, HeroRepository } from "../domain";

interface ApiHero {
  illustration: {
    src: string;
    description: string;
  };
  nftId: string;
  nftName: string;
  nftCreator: {
    name: string;
    avatar: string;
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
      nft: {
        image: {
          url: hero.illustration.src,
          title: hero.illustration.description,
          description: hero.illustration.description,
          mediaType: "image",
        },
        creator: {
          image: {
            url: hero.nftCreator.avatar,
            title: hero.nftCreator.name,
            description: hero.nftCreator.name,
            mediaType: "image",
          },
          name: hero.nftCreator.name,
        },
        name: hero.nftName,
        id: hero.nftId,
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
