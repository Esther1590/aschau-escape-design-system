
export interface NavigationTranslations {
  wellness: string;
  culture: string;
  planTrip: string;
  booking: string;
}

export interface HeroTranslations {
  title: string;
  subtitle: string;
}

export interface CardsTranslations {
  title: string;
  subtitle: string;
  wellness: {
    title: string;
    description: string;
  };
  culture: {
    title: string;
    description: string;
  };
  plan: {
    title: string;
    description: string;
  };
  booking: {
    title: string;
    description: string;
  };
}

export interface SeasonalTranslations {
  title: string;
  subtitle: string;
  spring: {
    title: string;
    description: string;
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

export interface TestimonialsTranslations {
  title: string;
  subtitle: string;
  1: { text: string };
  2: { text: string };
  3: { text: string };
  4: { text: string };
}

export interface FooterTranslations {
  tagline: string;
  quickLinks: string;
  contact: string;
  address: string;
  phone: string;
  email: string;
  rights: string;
  faq: {
    title: string;
    questions: {
      wellness: {
        question: string;
        answer: string;
      };
      accessibility: {
        question: string;
        answer: string;
      };
      culture: {
        question: string;
        answer: string;
      };
      planning: {
        question: string;
        answer: string;
      };
      timing: {
        question: string;
        answer: string;
      };
    };
  };
}

export interface StickyButtonTranslations {
  bookNow: string;
}

export interface WellnessTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  experiences: {
    title: string;
    subtitle: string;
  };
  spa1: {
    name: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
  };
  spa2: {
    name: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
  };
  spa3: {
    name: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
  };
  features: string;
  bookNow: string;
  tips: {
    title: string;
    subtitle: string;
    tip1: {
      title: string;
      text: string;
    };
    tip2: {
      title: string;
      text: string;
    };
    tip3: {
      title: string;
      text: string;
    };
    tip4: {
      title: string;
      text: string;
    };
  };
  contact: {
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
  support: {
    title: string;
    phone: {
      title: string;
      number: string;
    };
    email: {
      title: string;
      address: string;
    };
    visit: {
      title: string;
      address: string;
    };
    hours: {
      title: string;
      weekdays: string;
      weekends: string;
    };
  };
}

export interface CultureTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  castle: {
    title: string;
    history: string;
    accessibility: string;
  };
  highlights: {
    title: string;
    subtitle: string;
  };
  museum: {
    name: string;
    description: string;
  };
  events: {
    name: string;
    description: string;
  };
  cafe: {
    name: string;
    description: string;
  };
  learnMore: string;
  testimonial: {
    text: string;
    author: string;
  };
  contact: {
    title: string;
    phone: {
      title: string;
      number: string;
    };
    email: {
      title: string;
      address: string;
    };
    visit: {
      title: string;
      address: string;
    };
  };
}

export interface PlanTripTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    startDate: string;
    endDate: string;
    selectDate: string;
    guests: string;
    selectGuests: string;
    guest: string;
    travelStyle: string;
    selectStyle: string;
    wellness: string;
    culture: string;
    both: string;
    generateItinerary: string;
  };
  tips: {
    title: string;
    trails: {
      title: string;
      description: string;
    };
    transport: {
      title: string;
      description: string;
    };
    weather: {
      title: string;
      description: string;
    };
  };
  offers: {
    title: string;
    subtitle: string;
    wellness: {
      title: string;
      description: string;
      price: string;
    };
    cultural: {
      title: string;
      description: string;
      price: string;
    };
    viewAll: string;
  };
}

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
