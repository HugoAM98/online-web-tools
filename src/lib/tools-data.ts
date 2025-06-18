import JSONFormatter from '@/components/JSONFormatter';
import CodeMinifier from '@/components/CodeMinifier'; // importa tu nuevo componente

import type { Tool } from './types';

export const tools: Tool[] = [
  {
    id: 'json-formatter',
    titles: {
      es: 'Formateador JSON',
      en: 'JSON Formatter',
      fr: 'Formateur JSON',
    },
    descriptions: {
      es: 'Formatea tu JSON para que sea legible.',
      en: 'Format your JSON to be readable.',
      fr: 'Formatez votre JSON pour qu\'il soit lisible.',
    },
    slugs: {
      es: 'formateador-json',
      en: 'json-formatter',
      fr: 'formateur-json',
    },
    component: JSONFormatter,
  },

  {
    id: 'code-minifier',
    titles: {
      es: 'Minificador de Código',
      en: 'Code Minifier',
      fr: 'Minimiseur de Code',
    },
    descriptions: {
      es: 'Minifica tu código JavaScript, CSS o HTML al instante.',
      en: 'Minify your JavaScript, CSS, or HTML code instantly.',
      fr: 'Minimisez votre code JavaScript, CSS ou HTML instantanément.',
    },
    slugs: {
      es: 'minificador-codigo',
      en: 'code-minifier',
      fr: 'minimiseur-code',
    },
    component: CodeMinifier,
  },
];
