
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
    'cards.title': 'Discover Your Perfect Experience',
    'cards.subtitle': 'From rejuvenating wellness treatments to cultural discoveries, we offer everything you need for an unforgettable Alpine retreat.',
    'cards.wellness.title': 'Wellness',
    'cards.wellness.description': 'Rejuvenate your body and mind with our premium spa treatments, thermal baths, and mindfulness experiences.',
    'cards.culture.title': 'Culture',
    'cards.culture.description': 'Immerse yourself in Bavarian traditions, local crafts, and the rich heritage of the Alpine region.',
    'cards.plan.title': 'Plan Your Trip',
    'cards.plan.description': 'Customize your perfect getaway with our expert recommendations and personalized itineraries.',
    'cards.booking.title': 'Booking',
    'cards.booking.description': 'Secure your stay at our carefully selected accommodations and wellness centers.',
    
    // Seasonal Activities
    'seasonal.title': 'Seasonal Wellness Experiences',
    'seasonal.subtitle': 'Each season brings unique opportunities for renewal and connection with nature. Discover what awaits you throughout the year in Aschau.',
    'seasonal.spring.title': 'Alpine Awakening',
    'seasonal.spring.description': 'Witness nature\'s renewal with guided mountain hikes, wildflower meditation, and outdoor yoga sessions.',
    'seasonal.summer.title': 'Peak Wellness',
    'seasonal.summer.description': 'Enjoy crystal-clear lake swimming, forest bathing, and alpine herb workshops in perfect weather.',
    'seasonal.autumn.title': 'Golden Serenity',
    'seasonal.autumn.description': 'Experience the magical colors of fall with harvest wellness retreats and cozy spa treatments.',
    'seasonal.winter.title': 'Alpine Tranquility',
    'seasonal.winter.description': 'Find peace in snowy landscapes with thermal baths, winter wellness programs, and cozy relaxation.',
    
    // Testimonials
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Discover why travelers from around the world choose Aschau for their wellness journey.',
    'testimonials.1.text': 'The wellness treatments in Aschau were absolutely transformative. The mountain air, combined with the expert spa services, gave me the reset I desperately needed.',
    'testimonials.2.text': 'As a senior traveler, I appreciated the accessibility and thoughtful service. Every detail was designed with comfort and ease in mind. Truly exceptional hospitality.',
    'testimonials.3.text': 'The perfect blend of relaxation and cultural immersion. The local traditions and wellness practices created memories that will last a lifetime.',
    'testimonials.4.text': 'The seasonal activities were perfectly curated. From spring hikes to winter thermal baths, each experience was magical and deeply restorative.',
    
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
    'cards.title': 'Entdecken Sie Ihr Perfektes Erlebnis',
    'cards.subtitle': 'Von verjüngenden Wellness-Behandlungen bis zu kulturellen Entdeckungen bieten wir alles, was Sie für einen unvergesslichen Alpenrückzug benötigen.',
    'cards.wellness.title': 'Wellness',
    'cards.wellness.description': 'Regenerieren Sie Körper und Geist mit unseren erstklassigen Spa-Behandlungen, Thermalbädern und Achtsamkeitserfahrungen.',
    'cards.culture.title': 'Kultur',
    'cards.culture.description': 'Tauchen Sie ein in bayerische Traditionen, lokales Handwerk und das reiche Erbe der Alpenregion.',
    'cards.plan.title': 'Reise Planen',
    'cards.plan.description': 'Gestalten Sie Ihren perfekten Kurzurlaub mit unseren Expertenempfehlungen und personalisierten Reiseplänen.',
    'cards.booking.title': 'Buchung',
    'cards.booking.description': 'Sichern Sie sich Ihren Aufenthalt in unseren sorgfältig ausgewählten Unterkünften und Wellness-Zentren.',
    
    // Seasonal Activities
    'seasonal.title': 'Saisonale Wellness-Erlebnisse',
    'seasonal.subtitle': 'Jede Jahreszeit bringt einzigartige Möglichkeiten für Erneuerung und Verbindung mit der Natur. Entdecken Sie, was Sie das ganze Jahr über in Aschau erwartet.',
    'seasonal.spring.title': 'Alpines Erwachen',
    'seasonal.spring.description': 'Erleben Sie die Erneuerung der Natur mit geführten Bergwanderungen, Wildblumen-Meditation und Outdoor-Yoga-Sitzungen.',
    'seasonal.summer.title': 'Gipfel-Wellness',
    'seasonal.summer.description': 'Genießen Sie kristallklares Seeschwimmen, Waldbaden und alpine Kräuter-Workshops bei perfektem Wetter.',
    'seasonal.autumn.title': 'Goldene Gelassenheit',
    'seasonal.autumn.description': 'Erleben Sie die magischen Farben des Herbstes mit Ernte-Wellness-Retreats und gemütlichen Spa-Behandlungen.',
    'seasonal.winter.title': 'Alpine Ruhe',
    'seasonal.winter.description': 'Finden Sie Frieden in schneebedeckten Landschaften mit Thermalbädern, Winter-Wellness-Programmen und gemütlicher Entspannung.',
    
    // Testimonials
    'testimonials.title': 'Was Unsere Gäste Sagen',
    'testimonials.subtitle': 'Entdecken Sie, warum Reisende aus aller Welt Aschau für ihre Wellness-Reise wählen.',
    'testimonials.1.text': 'Die Wellness-Behandlungen in Aschau waren absolut transformativ. Die Bergluft, kombiniert mit den fachkundigen Spa-Services, gab mir die Erholung, die ich dringend brauchte.',
    'testimonials.2.text': 'Als Senior-Reisender schätzte ich die Zugänglichkeit und den durchdachten Service. Jedes Detail war auf Komfort und Leichtigkeit ausgelegt. Wirklich außergewöhnliche Gastfreundschaft.',
    'testimonials.3.text': 'Die perfekte Mischung aus Entspannung und kulturellem Eintauchen. Die lokalen Traditionen und Wellness-Praktiken schufen Erinnerungen, die ein Leben lang halten werden.',
    'testimonials.4.text': 'Die saisonalen Aktivitäten waren perfekt kuratiert. Von Frühlingswanderungen bis zu Winter-Thermalbädern war jede Erfahrung magisch und tiefgreifend erholsam.',
    
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
