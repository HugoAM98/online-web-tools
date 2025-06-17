// src/lib/translations.ts

import type { Lang } from './types';

type TranslationStrings = {
  placeholder: string;
  format: string;
  error: string;
};

export const translations: Record<Lang, TranslationStrings> = {
  es: {
    placeholder: 'Pega tu JSON aquí...',
    format: 'Formatear',
    error: 'JSON inválido',
  },
  en: {
    placeholder: 'Paste your JSON here...',
    format: 'Format',
    error: 'Invalid JSON',
  },
  fr: {
    placeholder: 'Collez votre JSON ici...',
    format: 'Formater',
    error: 'JSON invalide',
  },
};
