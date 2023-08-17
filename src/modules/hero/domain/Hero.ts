interface HeroInfo {
  summary: HeroSummary;
  illustration: HeroIllustration;
}

interface HeroIllustration {
  title: string;
  description: string;
  image: string;
}

export interface HeroSummary {
  totalSale: string;
  totalAuctions: string;
  totalArtists: string;
}

export default HeroInfo;
