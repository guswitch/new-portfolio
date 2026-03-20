'use client';

import { format, parseISO } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { useLocale } from 'use-intl';

interface PostDateProps {
  date: string;
}

export function PostDate({ date }: PostDateProps) {
  const locale = useLocale();

  return (
    <time
      dateTime={date}
      className="mb-4 block font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground"
    >
      {format(parseISO(date), 'MMMM d, yyyy', {
        locale: locale === 'pt' ? ptBR : enUS,
      })}
    </time>
  );
}
