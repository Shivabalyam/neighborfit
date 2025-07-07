import React, { useState } from 'react';
import axios from 'axios';

const preferenceLabels = {
  safety: '🛡️ Safety',
  affordability: '💰 Affordability',
  publicTransport: '🚇 Public Transport',
  greenery: '🌳 Greenery',
  walkability: '🚶‍♂️ Walkability',
};

export default function Form({ onResults }) {
  const [form, setForm] = useState({
    safety: 3,
    affordability: 3,
    publicTransport: 3,
    greenery: 3,
    walkability: 3,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/match', form);
      onResults(res.data);
    } catch (err) {
      if (err.response && err.response.data.warning) {
        alert(err.response.data.warning); // 🎯 Show meaningful message
      } else {
        console.error(err);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
        🎯 Match Your Preferences
      </h2>

      {Object.keys(form).map((key) => (
        <div key={key} className="space-y-2">
          <label
            htmlFor={key}
            className="block text-gray-800 font-semibold"
          >
            {preferenceLabels[key]}:{' '}
            <span className="text-blue-600">{form[key]}</span>
          </label>
          <input
            type="range"
            name={key}
            min="1"
            max="5"
            value={form[key]}
            onChange={handleChange}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      ))}

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition"
        >
          🔍 Find Neighborhoods
        </button>
      </div>
    </form>
  );
}
