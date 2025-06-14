import React, { createContext, useContext, useState } from 'react';

interface TranslationContextProps {
  language: 'EN' | 'DE';
  setLanguage: (lang: 'EN' | 'DE') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps>({
  language: 'EN',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useTranslation = () => useContext(TranslationContext);

interface TranslationProviderProps {
  children: React.ReactNode;
}

const translations = {
  EN: {
    nav: {
      wellness: 'Wellness',
      culture: 'Culture',
      planTrip: 'Plan Your Trip',
      booking: 'Booking',
    },
    hero: {
      title: 'Welcome to Aschau',
      subtitle: 'Discover the beauty and tranquility of the Bavarian Alps',
    },
    wellness: {
      hero: {
        title: 'Wellness & Spa',
        subtitle: 'Rejuvenate your mind, body, and soul in the heart of Bavaria'
      },
      activities: {
        title: 'Wellness Activities',
        subtitle: 'Explore our range of wellness activities for a relaxing getaway',
        spa: 'Spa & Massages',
        yoga: 'Yoga & Meditation',
        hiking: 'Hiking & Nature Walks',
        nutrition: 'Nutrition & Health',
      },
      packages: {
        title: 'Wellness Packages',
        subtitle: 'Indulge in our exclusive wellness packages for a complete experience',
        detox: 'Detox Package',
        rejuvenation: 'Rejuvenation Package',
        stressRelief: 'Stress Relief Package',
      },
      testimonial: {
        text: "The wellness retreat in Aschau was a life-changing experience. I feel refreshed and rejuvenated!",
        author: "Emma Thompson"
      },
      contact: {
        title: "Contact Us",
        phone: {
          title: "Phone",
          number: "+49 123 456789"
        },
        email: {
          title: "Email",
          address: "info@aschauwellness.com"
        },
        visit: {
          title: "Visit Us",
          address: "Aschau, Bavaria, Germany"
        }
      }
    },
    culture: {
      hero: {
        title: 'Culture & Heritage',
        subtitle: 'Immerse yourself in the rich history and traditions of Aschau'
      },
      castle: {
        title: 'Aschau Castle',
        history: 'Explore the historic Aschau Castle, a landmark of Bavarian heritage. Discover centuries of history and admire the stunning architecture.',
        accessibility: 'The castle is partially accessible for visitors with mobility issues. Guided tours are available in English and German.'
      },
      highlights: {
        title: 'Cultural Highlights',
        subtitle: 'Discover the cultural treasures of Aschau, from historic museums to vibrant local events.'
      },
      museum: {
        name: 'Local History Museum',
        description: 'Explore the rich history of Aschau and the surrounding region through fascinating exhibits and artifacts.'
      },
      events: {
        name: 'Traditional Festivals',
        description: 'Experience the vibrant culture of Aschau at our traditional festivals, featuring music, dance, and local cuisine.'
      },
      cafe: {
        name: 'Artisanal Cafés',
        description: 'Relax and enjoy the local atmosphere in our charming artisanal cafés, offering traditional Bavarian treats and coffee.'
      },
      learnMore: 'Learn More',
      testimonial: {
        text: "Visiting Aschau was like stepping back in time. The castle and local traditions are truly captivating!",
        author: "Hans Müller"
      },
      contact: {
        title: "Contact Us",
        phone: {
          title: "Phone",
          number: "+49 987 654321"
        },
        email: {
          title: "Email",
          address: "culture@aschau.de"
        },
        visit: {
          title: "Visit Us",
          address: "Aschau Cultural Center, Bavaria, Germany"
        }
      }
    },
    planTrip: {
      hero: {
        title: "Start Your Aschau Journey",
        subtitle: "Plan your perfect wellness and cultural retreat with personalized recommendations for senior travelers"
      },
      form: {
        title: "Plan Your Perfect Stay",
        startDate: "Check-in Date",
        endDate: "Check-out Date",
        selectDate: "Select a date",
        guests: "Number of Guests",
        selectGuests: "Select guests",
        guest: "Guest",
        travelStyle: "Travel Style",
        selectStyle: "Select your preference",
        wellness: "Wellness Focus",
        culture: "Cultural Focus",
        both: "Wellness & Culture",
        generateItinerary: "Generate My Itinerary"
      },
      tips: {
        title: "Helpful Travel Tips",
        trails: {
          title: "Accessible Trails",
          description: "Discover gentle walking paths with beautiful Alpine views, designed for comfortable senior exploration with rest areas and clear signage."
        },
        transport: {
          title: "Easy Transport",
          description: "Regular train connections from Munich (1.5h) and Salzburg (1h). Local shuttle services available for seniors with advance booking."
        },
        weather: {
          title: "Weather & Packing",
          description: "Mild Alpine climate year-round. Pack comfortable walking shoes, light layers, and a rain jacket for changing mountain weather."
        }
      },
      offers: {
        title: "Senior Wellness Packages",
        subtitle: "Specially designed packages for travelers 60+ with exclusive benefits and accessible amenities",
        wellness: {
          title: "7-Day Wellness Retreat",
          description: "Spa treatments, gentle yoga, thermal baths, and nutritious Alpine cuisine in a serene mountain setting.",
          price: "From €890 per person"
        },
        cultural: {
          title: "5-Day Cultural Experience",
          description: "Guided castle tours, local museum visits, traditional craft workshops, and authentic Bavarian dining.",
          price: "From €650 per person"
        },
        viewAll: "View All Packages"
      }
    }
  },
  DE: {
    nav: {
      wellness: 'Wellness',
      culture: 'Kultur',
      planTrip: 'Reise Planen',
      booking: 'Buchung',
    },
    hero: {
      title: 'Willkommen in Aschau',
      subtitle: 'Entdecken Sie die Schönheit und Ruhe der bayerischen Alpen',
    },
    wellness: {
      hero: {
        title: 'Wellness & Spa',
        subtitle: 'Verjüngen Sie Geist, Körper und Seele im Herzen Bayerns'
      },
      activities: {
        title: 'Wellness Aktivitäten',
        subtitle: 'Entdecken Sie unser Angebot an Wellnessaktivitäten für einen erholsamen Urlaub',
        spa: 'Spa & Massagen',
        yoga: 'Yoga & Meditation',
        hiking: 'Wandern & Natur',
        nutrition: 'Ernährung & Gesundheit',
      },
      packages: {
        title: 'Wellnesspakete',
        subtitle: 'Gönnen Sie sich unsere exklusiven Wellnesspakete für ein umfassendes Erlebnis',
        detox: 'Detox Paket',
        rejuvenation: 'Verjüngungspaket',
        stressRelief: 'Stressabbau Paket',
      },
      testimonial: {
        text: "Der Wellnessurlaub in Aschau war eine lebensverändernde Erfahrung. Ich fühle mich erfrischt und verjüngt!",
        author: "Emma Thompson"
      },
      contact: {
        title: "Kontaktieren Sie uns",
        phone: {
          title: "Telefon",
          number: "+49 123 456789"
        },
        email: {
          title: "E-Mail",
          address: "info@aschauwellness.com"
        },
        visit: {
          title: "Besuchen Sie uns",
          address: "Aschau, Bayern, Deutschland"
        }
      }
    },
    culture: {
      hero: {
        title: 'Kultur & Erbe',
        subtitle: 'Tauchen Sie ein in die reiche Geschichte und Traditionen von Aschau'
      },
      castle: {
        title: 'Schloss Aschau',
        history: 'Erkunden Sie das historische Schloss Aschau, ein Wahrzeichen bayerischen Erbes. Entdecken Sie Jahrhunderte der Geschichte und bewundern Sie die atemberaubende Architektur.',
        accessibility: 'Das Schloss ist für Besucher mit Mobilitätsproblemen teilweise zugänglich. Führungen sind in Englisch und Deutsch verfügbar.'
      },
      highlights: {
        title: 'Kulturelle Highlights',
        subtitle: 'Entdecken Sie die kulturellen Schätze von Aschau, von historischen Museen bis hin zu lebendigen lokalen Veranstaltungen.'
      },
      museum: {
        name: 'Heimatmuseum',
        description: 'Erkunden Sie die reiche Geschichte von Aschau und der umliegenden Region anhand faszinierender Exponate und Artefakte.'
      },
      events: {
        name: 'Traditionelle Feste',
        description: 'Erleben Sie die lebendige Kultur von Aschau auf unseren traditionellen Festen mit Musik, Tanz und lokaler Küche.'
      },
      cafe: {
        name: 'Handwerkliche Cafés',
        description: 'Entspannen Sie sich und genießen Sie die lokale Atmosphäre in unseren charmanten handwerklichen Cafés, die traditionelle bayerische Köstlichkeiten und Kaffee anbieten.'
      },
      learnMore: 'Mehr erfahren',
      testimonial: {
        text: "Aschau zu besuchen war wie eine Reise in die Vergangenheit. Das Schloss und die lokalen Traditionen sind wirklich fesselnd!",
        author: "Hans Müller"
      },
      contact: {
        title: "Kontaktieren Sie uns",
        phone: {
          title: "Telefon",
          number: "+49 987 654321"
        },
        email: {
          title: "E-Mail",
          address: "culture@aschau.de"
        },
        visit: {
          title: "Besuchen Sie uns",
          address: "Aschau Kulturzentrum, Bayern, Deutschland"
        }
      }
    },
    planTrip: {
      hero: {
        title: "Beginnen Sie Ihre Aschau-Reise",
        subtitle: "Planen Sie Ihren perfekten Wellness- und Kulturaufenthalt mit personalisierten Empfehlungen für Senioren"
      },
      form: {
        title: "Planen Sie Ihren perfekten Aufenthalt",
        startDate: "Anreisedatum",
        endDate: "Abreisedatum",
        selectDate: "Datum auswählen",
        guests: "Anzahl der Gäste",
        selectGuests: "Gäste auswählen",
        guest: "Gast",
        travelStyle: "Reisestil",
        selectStyle: "Ihre Präferenz wählen",
        wellness: "Wellness-Fokus",
        culture: "Kultur-Fokus",
        both: "Wellness & Kultur",
        generateItinerary: "Meine Reiseroute erstellen"
      },
      tips: {
        title: "Hilfreiche Reisetipps",
        trails: {
          title: "Barrierefreie Wanderwege",
          description: "Entdecken Sie sanfte Wanderpfade mit wunderschönen Alpenblicken, entwickelt für komfortable Seniorenerkundung mit Rastplätzen und klarer Beschilderung."
        },
        transport: {
          title: "Einfacher Transport",
          description: "Regelmäßige Zugverbindungen von München (1,5h) und Salzburg (1h). Lokale Shuttle-Services für Senioren mit Voranmeldung verfügbar."
        },
        weather: {
          title: "Wetter & Packen",
          description: "Mildes Alpenklima das ganze Jahr über. Packen Sie bequeme Wanderschuhe, leichte Schichten und eine Regenjacke für wechselndes Bergwetter."
        }
      },
      offers: {
        title: "Wellness-Pakete für Senioren",
        subtitle: "Speziell entwickelte Pakete für Reisende 60+ mit exklusiven Vorteilen und barrierefreien Annehmlichkeiten",
        wellness: {
          title: "7-Tage Wellness-Retreat",
          description: "Spa-Behandlungen, sanftes Yoga, Thermalbäder und nahrhafte Alpenküche in ruhiger Bergkulisse.",
          price: "Ab €890 pro Person"
        },
        cultural: {
          title: "5-Tage Kulturerlebnis",
          description: "Geführte Schlosstouren, lokale Museumsbesuche, traditionelle Handwerks-Workshops und authentische bayerische Küche.",
          price: "Ab €650 pro Person"
        },
        viewAll: "Alle Pakete anzeigen"
      }
    }
  }
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'EN' | 'DE'>('EN');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
