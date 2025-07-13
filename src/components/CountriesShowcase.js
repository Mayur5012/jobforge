import React from 'react';

const countries = [
  { name: 'USA', flag: 'https://flagcdn.com/us.svg' },
  { name: 'UK', flag: 'https://flagcdn.com/gb.svg' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
  { name: 'UAE', flag: 'https://flagcdn.com/ae.svg' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
];

const CountriesShowcase = () => (
  <section className="w-full my-12 px-2 md:px-8 py-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#22336c] mb-8">
      Find your dream job across top global destinations
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
      {countries.map((country) => (
        <div
          key={country.name}
          className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
        >
          <img
            src={country.flag}
            alt={country.name}
            className="w-12 h-12 mb-2 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800">{country.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CountriesShowcase; 