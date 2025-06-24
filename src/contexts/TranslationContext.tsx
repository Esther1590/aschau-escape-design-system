
import React, { createContext, useContext, useState } from 'react';
import { Translations } from '@/types/translations';
import { enTranslations } from '@/translations/en';
import { deTranslations } from '@/translations/de';

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

const translations: Record<'EN' | 'DE', Translations> = {
  EN: enTranslations,
  DE: deTranslations,
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
