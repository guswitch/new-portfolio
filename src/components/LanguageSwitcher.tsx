'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { setLanguageCookie } from '../utils/setLanguage';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = async () => {
    const newLocale = locale === 'en' ? 'pt' : 'en';
    await setLanguageCookie(newLocale);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="size-4" />
      <span className="font-medium">{locale.toUpperCase()}</span>
    </button>
  );
}
