import React, { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results';

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-800">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800">🏡 NeighborFit</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Find neighborhoods that match your lifestyle.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4">
        <Form onResults={setResults} />
        <Results neighborhoods={results} />
      </main>
    </div>
  );
}
