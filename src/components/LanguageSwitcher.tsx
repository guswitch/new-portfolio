'use client';

import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { setLanguageCookie } from '../utils/setLanguage';

export function LanguageSwitcher() {
  const locale = useLocale();

  const toggleLanguage = async () => {
    const newLocale = locale === 'en' ? 'pt' : 'en';
    await setLanguageCookie(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="size-4" />
      <span className="font-medium">{locale.toUpperCase()}</span>
    </button>
  );
}
