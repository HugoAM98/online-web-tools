'use client';

import { useState } from 'react';

const minifyJS = (code: string) => {
  // Esta es una minificación muy básica y no recomendada para producción
  return code.replace(/\s+/g, ' ').replace(/\s*([{};,:])\s*/g, '$1').trim();
};

const minifyCSS = (code: string) => {
  return code.replace(/\s+/g, ' ').replace(/\s*([{};,:])\s*/g, '$1').trim();
};

const minifyHTML = (code: string) => {
  return code.replace(/\s+/g, ' ').trim();
};

export default function CodeMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [type, setType] = useState<'js' | 'css' | 'html'>('js');

  const handleMinify = () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    let minified = '';
    switch (type) {
      case 'js':
        minified = minifyJS(input);
        break;
      case 'css':
        minified = minifyCSS(input);
        break;
      case 'html':
        minified = minifyHTML(input);
        break;
    }
    setOutput(minified);
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Tipo de código:</label>
      <select
        value={type}
        onChange={e => setType(e.target.value as 'js' | 'css' | 'html')}
        className="mb-4 p-2 border rounded w-full rounded-md border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 transition-colors"
      >
        <option value="js">JavaScript</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
      </select>

      <label className="block mb-2 font-semibold">Código a minificar:</label>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={10}
        className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 transition-colors"
        placeholder="Pega aquí tu código"
      />

      <button
        onClick={handleMinify}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Minificar
      </button>

      <label className="block mt-6 mb-2 font-semibold">Código minificado:</label>
      <pre className="w-full min-h-[200px] p-4 bg-gray-50 rounded-md whitespace-pre-wrap font-mono text-sm dark:bg-gray-900 dark:text-gray-100">
        {output}
      </pre>
    </div>
  );
}
