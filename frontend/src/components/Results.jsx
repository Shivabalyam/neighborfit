import React from 'react';

export default function Results({ neighborhoods }) {
  if (!neighborhoods.length) return null;

  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">
        🏙️ Top Neighborhood Matches
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.map((n, index) => (
          <div
            key={n._id || index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all p-6"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-blue-700">
                {n.name}, {n.city}
              </h4>
             <span className="bg-blue-100 text-blue-700 text-sm font-mono px-3 py-1 rounded-md whitespace-nowrap">
              Score = {(n.score || 0)}
              </span>
            </div>
            <p className="mt-2 text-gray-600">
              Based on your preferences, this neighborhood is a great match.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
