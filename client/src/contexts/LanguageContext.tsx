import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage or browser preference
    const stored = localStorage.getItem('villabruni-language');
    if (stored && ['es', 'en', 'nl', 'de', 'fr'].includes(stored)) {
      return stored as Language;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en', 'nl', 'de', 'fr'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    // Default to Spanish
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('villabruni-language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
