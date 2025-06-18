import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Lang } from '@/lib/types';

const translations: Record<Lang, { home: string; tools: string }> = {
  es: { home: 'Inicio', tools: 'Herramientas' },
  en: { home: 'Home', tools: 'Tools' },
  fr: { home: 'Accueil', tools: 'Outils' },
};

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: Lang } }) {
  const t = translations[params.lang];

  return (
    <div lang={params.lang} className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
          <Link href={`/${params.lang}`} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            QuickToolbox
          </Link>
          <nav className="flex gap-6 items-center text-gray-700 dark:text-gray-300">
            <Link
              href={`/${params.lang}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              aria-current="page"
            >
              {t.home}
            </Link>
            <Link
              href={`/${params.lang}/tools`}
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              {t.tools}
            </Link>
            <LanguageSwitcher currentLang={params.lang} />
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 w-[80%]
">{children}</main>
    </div>
  );
}
