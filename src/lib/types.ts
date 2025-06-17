import type { JSX } from 'react';
export type Lang = 'es' | 'en' | 'fr';

export type Tool = {
  id: string;
  titles: Record<Lang, string>;
  descriptions: Record<Lang, string>;
  slugs: Record<Lang, string>;
  component: () => JSX.Element;
};
