import { tools } from '@/lib/tools-data';
import { notFound } from 'next/navigation';
import { type Lang } from '@/lib/types';
import { Metadata } from 'next';
import JSONFormatter from '@/components/JSONFormatter';

type Params = {
  params: {
    lang: Lang;
    slug: string;
  };
};

const toolStyles: Record<
  string,
  {
    containerBg: string;
    titleColor: string;
    descriptionColor: string;
    buttonBg: string;
    buttonHoverBg: string;
  }
> = {
  jsonFormatter: {
    containerBg: 'bg-blue-50 dark:bg-blue-900',
    titleColor: 'text-blue-800 dark:text-blue-300',
    descriptionColor: 'text-blue-700 dark:text-blue-200',
    buttonBg: 'bg-blue-600',
    buttonHoverBg: 'hover:bg-blue-700',
  },
  imageConverter: {
    containerBg: 'bg-green-50 dark:bg-green-900',
    titleColor: 'text-green-800 dark:text-green-300',
    descriptionColor: 'text-green-700 dark:text-green-200',
    buttonBg: 'bg-green-600',
    buttonHoverBg: 'hover:bg-green-700',
  },
  colorPicker: {
    containerBg: 'bg-purple-50 dark:bg-purple-900',
    titleColor: 'text-purple-800 dark:text-purple-300',
    descriptionColor: 'text-purple-700 dark:text-purple-200',
    buttonBg: 'bg-purple-600',
    buttonHoverBg: 'hover:bg-purple-700',
  },
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = params;
  const tool = tools.find(t => t.slugs[lang] === slug);

  if (!tool) return notFound();

  return {
    title: tool.titles[lang],
    description: tool.descriptions[lang],
    alternates: {
      canonical: `https://tudominio.com/${lang}/${slug}`,
      languages: {
        es: `https://tudominio.com/es/${tool.slugs.es}`,
        en: `https://tudominio.com/en/${tool.slugs.en}`,
        fr: `https://tudominio.com/fr/${tool.slugs.fr}`,
      },
    },
    openGraph: {
      title: tool.titles[lang],
      description: tool.descriptions[lang],
      url: `https://tudominio.com/${lang}/${slug}`,
      locale: lang,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return tools.flatMap(tool =>
    Object.entries(tool.slugs).map(([lang, slug]) => ({
      lang,
      slug,
    }))
  );
}

export default function ToolPage({ params }: Params) {
  const { lang, slug } = params;
  const tool = tools.find(t => t.slugs[lang] === slug);

  if (!tool) return notFound();

  const style = toolStyles[tool.id] || {
    containerBg: 'bg-white dark:bg-gray-800',
    titleColor: 'text-gray-900 dark:text-gray-100',
    descriptionColor: 'text-gray-700 dark:text-gray-300',
    buttonBg: 'bg-gray-600',
    buttonHoverBg: 'hover:bg-gray-700',
  };

  return (
    <div className="min-h-screen w-100 bg-gray-50 dark:bg-gray-900 flex justify-center relative">
      {/* Publicidad izquierda */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-48 bg-gray-200 dark:bg-gray-800 p-4 text-center text-sm text-gray-600 dark:text-gray-300">
        Espacio para Google Ads (izquierda)
      </aside>

      {/* Publicidad derecha */}
      <aside className="hidden lg:block fixed right-0 top-0 h-full w-48 bg-gray-200 dark:bg-gray-800 p-4 text-center text-sm text-gray-600 dark:text-gray-300">
        Espacio para Google Ads (derecha)
      </aside>

      <div className="flex flex-col max-w-4xl w-full mx-4 my-8 z-10">
        {/* Publicidad arriba */}
        <div className="mb-6 p-4 border rounded bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          Espacio para Google Ads (arriba)
        </div>

        <main
  className={`${style.containerBg} p-6 rounded-md shadow-md w-full max-w-full transition-colors duration-500`}
>
  <h1 className={`${style.titleColor} text-3xl font-bold mb-4`}>
    {tool.titles[lang]}
  </h1>
  <p className={`${style.descriptionColor} mb-6`}>
    {tool.descriptions[lang]}
  </p>

  <JSONFormatter />
</main>


        {/* Publicidad abajo */}
        <div className="mt-6 p-4 border rounded bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          Espacio para Google Ads (abajo)
        </div>
      </div>
    </div>
  );
}
