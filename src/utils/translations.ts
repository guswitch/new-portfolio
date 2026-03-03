import { useTranslations } from 'next-intl';

/**
 * Shorthand hook to get a translator for a given namespace/section.
 *
 * Instead of writing `const t = useTranslations('Hero')` in every component,
 * you can call `const t = useSection('Hero')` or even `useT('Hero')`.
 *
 * You can also pass a dynamic string if you determine the section at runtime.
 */
export function useSectionTranslations(section: string) {
  return useTranslations(section);
}

export const useT = useSectionTranslations; // alias if you like shorter name
