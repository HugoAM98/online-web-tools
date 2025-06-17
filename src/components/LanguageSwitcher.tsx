'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  // agrega más idiomas aquí
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' },
];

type Props = {
  currentLang: string;
};

export default function LanguageSwitcher({ currentLang }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangLabel = LANGUAGES.find(l => l.code === currentLang)?.label || currentLang;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Seleccionar idioma"
      >
        {currentLangLabel}
        <svg
          className="ml-2 -mr-1 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            {LANGUAGES.map(({ code, label }) => (
              <Link
                key={code}
                href={`/${code}`}
                className={`block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  code === currentLang ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
