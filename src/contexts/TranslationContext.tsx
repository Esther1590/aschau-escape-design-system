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
      experiences: {
        title: 'Premium Spa Experiences',
        subtitle: 'Discover our exclusive wellness offerings designed for relaxation and rejuvenation'
      },
      spa1: {
        name: 'Alpine Serenity Spa',
        description: 'Experience ultimate relaxation with our signature Alpine treatments featuring local herbs and minerals.',
        feature1: 'Hot stone massage therapy',
        feature2: 'Alpine herb steam room',
        feature3: 'Mineral-rich mud baths',
        feature4: 'Panoramic mountain views'
      },
      spa2: {
        name: 'Aqua Wellness Center',
        description: 'Immerse yourself in our state-of-the-art hydrotherapy facilities with thermal pools and water treatments.',
        feature1: 'Thermal healing pools',
        feature2: 'Hydrotherapy circuits',
        feature3: 'Underwater massage jets',
        feature4: 'Aromatherapy steam rooms'
      },
      spa3: {
        name: 'Mountain Peak Retreat',
        description: 'Connect with nature through our outdoor wellness programs and meditation spaces.',
        feature1: 'Outdoor meditation gardens',
        feature2: 'Forest bathing experiences',
        feature3: 'Mountain yoga sessions',
        feature4: 'Natural cold therapy pools'
      },
      features: 'Features',
      bookNow: 'Book Experience',
      tips: {
        title: 'Daily Wellness Tips',
        subtitle: 'Simple practices to enhance your well-being during your stay',
        tip1: {
          title: 'Morning Mountain Air',
          text: 'Start each day with deep breathing exercises on your balcony to energize your body with fresh Alpine air.'
        },
        tip2: {
          title: 'Thermal Bath Ritual',
          text: 'Alternate between warm thermal pools and cool mountain air for natural circulation therapy.'
        },
        tip3: {
          title: 'Evening Reflection',
          text: 'End your day with gentle stretching while watching the sunset over the Bavarian peaks.'
        },
        tip4: {
          title: 'Hydration Harmony',
          text: 'Drink natural spring water throughout the day to maintain optimal hydration in the mountain climate.'
        }
      },
      contact: {
        title: "Plan Your Wellness Journey",
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your email",
        message: "Special Requests",
        messagePlaceholder: "Tell us about your wellness goals...",
        send: "Send Inquiry"
      },
      support: {
        title: "Wellness Support",
        phone: {
          title: "Wellness Concierge",
          number: "+49 8052 904-200"
        },
        email: {
          title: "Spa Reservations",
          address: "spa@aschau-wellness.de"
        },
        visit: {
          title: "Wellness Center",
          address: "Wellness Pavilion, Aschau im Chiemgau"
        },
        hours: {
          title: "Spa Operating Hours",
          weekdays: "Monday - Friday: 7:00 AM - 9:00 PM",
          weekends: "Saturday - Sunday: 8:00 AM - 8:00 PM"
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
      experiences: {
        title: 'Premium Spa Erlebnisse',
        subtitle: 'Entdecken Sie unsere exklusiven Wellness-Angebote für Entspannung und Verjüngung'
      },
      spa1: {
        name: 'Alpine Ruhe Spa',
        description: 'Erleben Sie ultimative Entspannung mit unseren charakteristischen Alpenbehandlungen mit lokalen Kräutern und Mineralien.',
        feature1: 'Heißstein-Massagetherapie',
        feature2: 'Alpenkräuter-Dampfbad',
        feature3: 'Mineralreiche Schlammbäder',
        feature4: 'Panoramablick auf die Berge'
      },
      spa2: {
        name: 'Aqua Wellness Center',
        description: 'Tauchen Sie ein in unsere hochmodernsten Hydrotherapie-Einrichtungen mit Thermalbecken und Wasserbehandlungen.',
        feature1: 'Thermale Heilbecken',
        feature2: 'Hydrotherapie-Kreisläufe',
        feature3: 'Unterwasser-Massagedüsen',
        feature4: 'Aromatherapie-Dampfbäder'
      },
      spa3: {
        name: 'Berggipfel Retreat',
        description: 'Verbinden Sie sich mit der Natur durch unsere Outdoor-Wellness-Programme und Meditationsräume.',
        feature1: 'Outdoor-Meditationsgärten',
        feature2: 'Waldbad-Erfahrungen',
        feature3: 'Berg-Yoga-Sitzungen',
        feature4: 'Natürliche Kältetherapie-Becken'
      },
      features: 'Eigenschaften',
      bookNow: 'Erlebnis buchen',
      tips: {
        title: 'Tägliche Wellness-Tipps',
        subtitle: 'Einfache Praktiken zur Verbesserung Ihres Wohlbefindens während Ihres Aufenthalts',
        tip1: {
          title: 'Morgenluft der Berge',
          text: 'Beginnen Sie jeden Tag mit Atemübungen auf Ihrem Balkon, um Ihren Körper mit frischer Alpenluft zu energetisieren.'
        },
        tip2: {
          title: 'Thermalbad-Ritual',
          text: 'Wechseln Sie zwischen warmen Thermalbecken und kühler Bergluft für natürliche Kreislauftherapie.'
        },
        tip3: {
          title: 'Abendliche Besinnung',
          text: 'Beenden Sie Ihren Tag mit sanften Dehnübungen beim Betrachten des Sonnenuntergangs über den bayerischen Gipfeln.'
        },
        tip4: {
          title: 'Hydrations-Harmonie',
          text: 'Trinken Sie den ganzen Tag über natürliches Quellwasser, um optimale Hydration im Bergklima aufrechtzuerhalten.'
        }
      },
      contact: {
        title: "Planen Sie Ihre Wellness-Reise",
        name: "Vollständiger Name",
        namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
        email: "E-Mail-Adresse",
        emailPlaceholder: "Geben Sie Ihre E-Mail ein",
        message: "Besondere Wünsche",
        messagePlaceholder: "Erzählen Sie uns von Ihren Wellness-Zielen...",
        send: "Anfrage senden"
      },
      support: {
        title: "Wellness-Support",
        phone: {
          title: "Wellness-Concierge",
          number: "+49 8052 904-200"
        },
        email: {
          title: "Spa-Reservierungen",
          address: "spa@aschau-wellness.de"
        },
        visit: {
          title: "Wellness-Center",
          address: "Wellness-Pavillon, Aschau im Chiemgau"
        },
        hours: {
          title: "Spa-Öffnungszeiten",
          weekdays: "Montag - Freitag: 7:00 - 21:00 Uhr",
          weekends: "Samstag - Sonntag: 8:00 - 20:00 Uhr"
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
