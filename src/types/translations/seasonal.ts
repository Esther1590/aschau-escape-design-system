
export interface SeasonalTranslations {
  title: string;
  subtitle: string;
  spring: {
    title: string;
    description: string;
    heroImageTitle: string;
    heroImageSubtitle: string;
    activitiesTitle: string;
    activitiesSubtitle: string;
    weatherTitle: string;
    weatherItems: string[];
    packingTitle: string;
    packingItems: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    activities: {
      hiking: {
        title: string;
        description: string;
      };
      meditation: {
        title: string;
        description: string;
      };
      yoga: {
        title: string;
        description: string;
      };
      forestBathing: {
        title: string;
        description: string;
      };
    };
  };
  summer: {
    title: string;
    description: string;
  };
  autumn: {
    title: string;
    description: string;
  };
  winter: {
    title: string;
    description: string;
  };
}
