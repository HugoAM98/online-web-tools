import Link from 'next/link';
import { tools } from '@/lib/tools-data';
import type { Metadata } from 'next';
import { Lang } from '@/lib/types';

type Props = {
  params: {
    lang: Lang;
  };
};

const translations = {
  es: {
    title:
      'Herramientas Online Gratuitas para Desarrolladores y Diseñadores',
    description:
      'Simplifica tu trabajo con nuestras herramientas rápidas y accesibles: formatea JSON, convierte imágenes, identifica colores y más, todo desde tu navegador.',
    seoTitle:
      'Herramientas Online Gratuitas - Formateador JSON, Convertidor de Imágenes, Color Picker y más',
    seoDescription:
      'Accede a herramientas online gratuitas rápidas y fáciles de usar: formateador JSON, convertidor de imágenes, selector de colores, generador de CSS y mucho más.',
    whyTitle: '¿Por qué elegirnos?',
    benefits: [
      'Acceso instantáneo sin necesidad de registro.',
      'Interfaz limpia y fácil de usar.',
      'Compatibilidad con múltiples idiomas.',
      'Herramientas optimizadas para móviles y escritorio.',
      'Actualizaciones frecuentes con nuevas funciones.',
    ],
    advertising: 'Publicidad',
    footer: 'Todos los derechos reservados.',
    home: 'Inicio',
    tools: 'Herramientas',
  },
  en: {
    title: 'Free Online Tools for Developers and Designers',
    description:
      'Simplify your workflow with our fast and accessible tools: format JSON, convert images, identify colors, and more—all from your browser.',
    seoTitle:
      'Free Online Tools - JSON Formatter, Image Converter, Color Picker & More',
    seoDescription:
      'Access free online tools quickly and easily: JSON formatter, image converter, color picker, CSS generator, and much more.',
    whyTitle: 'Why Choose Us?',
    benefits: [
      'Instant access with no registration required.',
      'Clean and easy-to-use interface.',
      'Multi-language support.',
      'Optimized for mobile and desktop.',
      'Frequent updates with new features.',
    ],
    advertising: 'Advertising',
    footer: 'All rights reserved.',
    home: 'Home',
    tools: 'Tools',
  },
  fr: {
    title: 'Outils en ligne gratuits pour développeurs et designers',
    description:
      'Simplifiez votre travail avec nos outils rapides et accessibles : formatez JSON, convertissez des images, identifiez des couleurs, et plus encore — tout depuis votre navigateur.',
    seoTitle:
      "Outils en ligne gratuits - Formateur JSON, Convertisseur d'images, Sélecteur de couleurs et plus",
    seoDescription:
      'Accédez à des outils en ligne gratuits rapidement et facilement : formateur JSON, convertisseur d’images, sélecteur de couleurs, générateur CSS, et bien plus.',
    whyTitle: 'Pourquoi nous choisir ?',
    benefits: [
      "Accès instantané sans inscription requise.",
      "Interface propre et facile à utiliser.",
      "Support multilingue.",
      "Optimisé pour mobile et ordinateur.",
      "Mises à jour fréquentes avec de nouvelles fonctionnalités.",
    ],
    advertising: 'Publicité',
    footer: 'Tous droits réservés.',
    home: 'Accueil',
    tools: 'Outils',
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const t = translations[params.lang];
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    keywords: [
      'herramientas online',
      'formateador JSON',
      'convertidor de imágenes',
      'selector de color',
      'generador CSS',
      'herramientas gratuitas',
      'servicios online rápidos',
    ].join(', '),
  };
}

export default function HomePage({ params }: Props) {
  const t = translations[params.lang];

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100">{t.title}</h1>

        <p className="text-lg mb-10 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">{t.description}</p>

        {/* Tools grid */}
        <section aria-label="Featured tools" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
          {tools.map(tool => (
            <article
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Link
                href={`/${params.lang}/${tool.slugs[params.lang]}`}
                prefetch={false}
                className="block"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {tool.titles[params.lang]}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{tool.descriptions[params.lang]}</p>
              </Link>
            </article>
          ))}
        </section>

        {/* Benefits */}
        <section aria-label="Benefits" className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.whyTitle}</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-left">
            {t.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Advertising placeholder */}
        <section aria-label="Advertising" className="max-w-3xl mx-auto mb-14 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-center">
          <p className="text-gray-600 dark:text-gray-300">{t.advertising}</p>
          {/* Aquí puedes incluir tu código de anuncios (Google Ads, etc) */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} QuickToolbox. {t.footer}
      </footer>
    </>
  );
}
