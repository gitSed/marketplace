import { Hero, HeroSummary } from "@/modules/hero/domain/entities";

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
