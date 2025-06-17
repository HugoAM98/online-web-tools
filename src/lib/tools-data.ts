// src/lib/tools-data.ts

import JSONFormatter from '@/components/JSONFormatter';

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

  // Puedes añadir más herramientas similares aquí, por ejemplo:
  // {
  //   id: 'image-converter',
  //   titles: { es: 'Convertidor de imágenes', en: 'Image Converter', fr: 'Convertisseur d\'images' },
  //   descriptions: { es: 'Convierte imágenes entre formatos.', en: 'Convert images between formats.', fr: 'Convertissez des images entre formats.' },
  //   slugs: { es: 'convertidor-imagenes', en: 'image-converter', fr: 'convertisseur-images' },
  //   component: ImageConverterComponent,
  // },

];
