
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'EN' | 'DE';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  EN: {
    // Header
    'nav.wellness': 'Wellness',
    'nav.culture': 'Culture',
    'nav.planTrip': 'Plan Your Trip',
    'nav.booking': 'Booking',
    
    // Hero
    'hero.title1': 'Plan Your',
    'hero.title2': 'Peaceful Escape',
    'hero.subtitle': 'Discover tranquility in the heart of the Bavarian Alps. Experience authentic wellness, rich culture, and breathtaking nature in Aschau im Chiemgau.',
    'hero.startJourney': 'Start Your Journey',
    'hero.learnMore': 'Learn More',
    
    // Navigation Cards
    'cards.wellness.title': 'Wellness & Spa',
    'cards.wellness.description': 'Rejuvenate your body and mind with our premium spa treatments and wellness programs.',
    'cards.culture.title': 'Culture & Heritage',
    'cards.culture.description': 'Explore the rich Bavarian culture, traditions, and historic landmarks of our region.',
    'cards.plan.title': 'Plan Your Stay',
    'cards.plan.description': 'Customize your perfect wellness retreat with our comprehensive planning tools.',
    'cards.booking.title': 'Book Now',
    'cards.booking.description': 'Secure your peaceful escape with our easy and flexible booking system.',
    
    // Seasonal Activities
    'seasonal.title': 'Seasonal Wellness Activities',
    'seasonal.subtitle': 'Discover activities perfect for every season in the Bavarian Alps',
    'seasonal.spring.title': 'Spring Renewal',
    'seasonal.spring.description': 'Fresh mountain air walks and detox programs',
    'seasonal.summer.title': 'Summer Vitality',
    'seasonal.summer.description': 'Outdoor yoga and alpine hiking adventures',
    'seasonal.autumn.title': 'Autumn Balance',
    'seasonal.autumn.description': 'Harvest wellness retreats and thermal spa sessions',
    'seasonal.winter.title': 'Winter Serenity',
    'seasonal.winter.description': 'Cozy spa treatments and peaceful snow walks',
    
    // Testimonials
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Hear from travelers who found their perfect wellness escape',
    'testimonials.1.text': 'The perfect blend of relaxation and culture. Aschau exceeded all my expectations for a wellness retreat.',
    'testimonials.1.author': 'Sarah M.',
    'testimonials.1.location': 'Munich, Germany',
    'testimonials.2.text': 'Exceptional service and truly peaceful surroundings. I left feeling completely refreshed and renewed.',
    'testimonials.2.author': 'Michael R.',
    'testimonials.2.location': 'Vienna, Austria',
    'testimonials.3.text': 'A wonderful experience for seniors. Everything was accessible and the staff was incredibly attentive.',
    'testimonials.3.author': 'Elisabeth K.',
    'testimonials.3.location': 'Salzburg, Austria',
    
    // Footer
    'footer.tagline': 'Your gateway to Alpine wellness and tranquility',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.address': 'Aschau im Chiemgau, Bavaria, Germany',
    'footer.phone': 'Phone: +49 8052 123456',
    'footer.email': 'Email: info@aschau-wellness.com',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 Aschau Wellness Tourism. All rights reserved.',
    
    // Sticky Button
    'stickyButton.bookNow': 'Book Now'
  },
  DE: {
    // Header
    'nav.wellness': 'Wellness',
    'nav.culture': 'Kultur',
    'nav.planTrip': 'Reise Planen',
    'nav.booking': 'Buchung',
    
    // Hero
    'hero.title1': 'Planen Sie Ihre',
    'hero.title2': 'Friedliche Auszeit',
    'hero.subtitle': 'Entdecken Sie Ruhe im Herzen der bayerischen Alpen. Erleben Sie authentisches Wellness, reiche Kultur und atemberaubende Natur in Aschau im Chiemgau.',
    'hero.startJourney': 'Reise Beginnen',
    'hero.learnMore': 'Mehr Erfahren',
    
    // Navigation Cards
    'cards.wellness.title': 'Wellness & Spa',
    'cards.wellness.description': 'Regenerieren Sie Körper und Geist mit unseren erstklassigen Spa-Behandlungen und Wellness-Programmen.',
    'cards.culture.title': 'Kultur & Erbe',
    'cards.culture.description': 'Entdecken Sie die reiche bayerische Kultur, Traditionen und historischen Sehenswürdigkeiten unserer Region.',
    'cards.plan.title': 'Aufenthalt Planen',
    'cards.plan.description': 'Gestalten Sie Ihren perfekten Wellness-Rückzugsort mit unseren umfassenden Planungstools.',
    'cards.booking.title': 'Jetzt Buchen',
    'cards.booking.description': 'Sichern Sie sich Ihre friedliche Auszeit mit unserem einfachen und flexiblen Buchungssystem.',
    
    // Seasonal Activities
    'seasonal.title': 'Saisonale Wellness-Aktivitäten',
    'seasonal.subtitle': 'Entdecken Sie Aktivitäten, die perfekt für jede Jahreszeit in den bayerischen Alpen sind',
    'seasonal.spring.title': 'Frühlings-Erneuerung',
    'seasonal.spring.description': 'Spaziergänge in frischer Bergluft und Entgiftungsprogramme',
    'seasonal.summer.title': 'Sommer-Vitalität',
    'seasonal.summer.description': 'Outdoor-Yoga und alpine Wanderabenteuer',
    'seasonal.autumn.title': 'Herbst-Balance',
    'seasonal.autumn.description': 'Wellness-Retreats zur Erntezeit und Thermalbad-Sitzungen',
    'seasonal.winter.title': 'Winter-Gelassenheit',
    'seasonal.winter.description': 'Gemütliche Spa-Behandlungen und friedliche Schneespaziergänge',
    
    // Testimonials
    'testimonials.title': 'Was Unsere Gäste Sagen',
    'testimonials.subtitle': 'Hören Sie von Reisenden, die ihre perfekte Wellness-Auszeit gefunden haben',
    'testimonials.1.text': 'Die perfekte Mischung aus Entspannung und Kultur. Aschau hat alle meine Erwartungen für einen Wellness-Rückzugsort übertroffen.',
    'testimonials.1.author': 'Sarah M.',
    'testimonials.1.location': 'München, Deutschland',
    'testimonials.2.text': 'Außergewöhnlicher Service und wirklich friedliche Umgebung. Ich ging völlig erfrischt und erneuert.',
    'testimonials.2.author': 'Michael R.',
    'testimonials.2.location': 'Wien, Österreich',
    'testimonials.3.text': 'Eine wunderbare Erfahrung für Senioren. Alles war zugänglich und das Personal war unglaublich aufmerksam.',
    'testimonials.3.author': 'Elisabeth K.',
    'testimonials.3.location': 'Salzburg, Österreich',
    
    // Footer
    'footer.tagline': 'Ihr Tor zu alpinem Wellness und Ruhe',
    'footer.quickLinks': 'Schnelle Links',
    'footer.contact': 'Kontakt',
    'footer.address': 'Aschau im Chiemgau, Bayern, Deutschland',
    'footer.phone': 'Telefon: +49 8052 123456',
    'footer.email': 'E-Mail: info@aschau-wellness.com',
    'footer.followUs': 'Folgen Sie Uns',
    'footer.rights': '© 2024 Aschau Wellness Tourismus. Alle Rechte vorbehalten.',
    
    // Sticky Button
    'stickyButton.bookNow': 'Jetzt Buchen'
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
