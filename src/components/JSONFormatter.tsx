'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

export default function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const t = useTranslation();

  function formatJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setCopied(false);
    } catch {
      setOutput(t.error);
      setCopied(false);
    }
  }

  async function copyToClipboard() {
    if (!output || output === t.error) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Opcional: manejar error
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <label htmlFor="json-input" className="block font-semibold mb-2">
        JSON Input:
      </label>
      <textarea
        id="json-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={14}
        className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 transition-colors"
        placeholder={t.placeholder}
      />

      <div className="mt-4 flex gap-3">
        <button
          onClick={formatJSON}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {t.format}
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!output || output === t.error}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? 'Copiado!' : 'Copiar resultado'}
        </button>
      </div>

      {/* Publicidad abajo */}
      <div className="my-8 p-4 border rounded bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        Espacio para Google Ads (abajo)
      </div>

      <label htmlFor="json-output" className="block font-semibold mb-2">
        JSON Formateado:
      </label>
      <pre
        id="json-output"
        className="w-full min-h-[200px] p-4 bg-gray-50 rounded-md whitespace-pre-wrap font-mono text-sm dark:bg-gray-900 dark:text-gray-100"
      >
        {output}
      </pre>
    </div>
  );
}
