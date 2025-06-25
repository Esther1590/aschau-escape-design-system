
import { NavigationTranslations } from './translations/navigation';
import { HeroTranslations } from './translations/hero';
import { CardsTranslations } from './translations/cards';
import { SeasonalTranslations } from './translations/seasonal';
import { TestimonialsTranslations } from './translations/testimonials';
import { FooterTranslations } from './translations/footer';
import { StickyButtonTranslations } from './translations/stickyButton';
import { WellnessTranslations } from './translations/wellness';
import { CultureTranslations } from './translations/culture';
import { PlanTripTranslations } from './translations/planTrip';

export interface Translations {
  nav: NavigationTranslations;
  hero: HeroTranslations;
  cards: CardsTranslations;
  seasonal: SeasonalTranslations;
  testimonials: TestimonialsTranslations;
  footer: FooterTranslations;
  stickyButton: StickyButtonTranslations;
  wellness: WellnessTranslations;
  culture: CultureTranslations;
  planTrip: PlanTripTranslations;
}

// Re-export all the individual interfaces for convenience
export * from './translations/navigation';
export * from './translations/hero';
export * from './translations/cards';
export * from './translations/seasonal';
export * from './translations/testimonials';
export * from './translations/footer';
export * from './translations/stickyButton';
export * from './translations/wellness';
export * from './translations/culture';
export * from './translations/planTrip';
