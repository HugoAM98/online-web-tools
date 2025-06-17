'use client';

import { useParams } from 'next/navigation';
import { translations } from './translations';
import { Lang } from './types';

export function useTranslation() {
  const { lang } = useParams() as { lang: Lang };
  const t = translations[lang] ?? translations['en'];

  return t;
}
