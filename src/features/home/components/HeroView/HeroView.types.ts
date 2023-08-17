import { Hero, HeroSummary } from "@/modules/hero/domain";

export interface IHeroViewProps {
  hero: Hero;
}

export interface IHeroDetailsProps {
  summary: HeroSummary;
}

export interface IHeroDetailItemProps {
  figure: string;
  title: string;
}
