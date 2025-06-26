import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    name: 'Hospitality & Food Service',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Retail & Sales Assistants',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Domestic Help & Caregiving',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Transportation & Driving',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Security & Safety',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Healthcare & Medical',
    image: 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=400&q=80',
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full mt-24 mb-12 px-2 md:px-8">
      {/* First row: heading + 2 cards */}
      <div className="flex flex-col md:flex-row md:items-stretch md:gap-8 mb-8">
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
          <h2 className="text-6xl mt-2 font-bold text-gray-900">Popular<br />Categories</h2>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.slice(0, 2).map((cat) => (
            <div
              key={cat.name}
              className="bg-[#f8fbff] rounded-3xl border border-blue-100 p-4 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow min-h-[260px]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover rounded-2xl mb-6"
              />
              <div className="flex items-center text-[17px] font-medium text-[#1a237e] mt-auto">
                {cat.name}
                <ArrowUpRight className="ml-2 text-[#1a237e] w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Second row: 3 cards in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.slice(2, 5).map((cat) => (
          <div
            key={cat.name}
            className="bg-[#f8fbff] rounded-3xl border border-blue-100 p-4 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow min-h-[260px]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover rounded-2xl mb-6"
            />
            <div className="flex items-center text-[17px] font-medium text-[#1a237e] mt-auto">
              {cat.name}
              <ArrowUpRight className="ml-2 text-[#1a237e] w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories; 