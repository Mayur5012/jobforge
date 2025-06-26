import React from 'react';

const WantToHire = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 px-2 md:px-8 mt-12">
      <div className="w-full max-w-6xl bg-[#e9eef6] rounded-3xl flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8 shadow-sm">
        {/* Left: Text and buttons */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#22336c] mb-4">Want to Hire?</h2>
          <p className="text-gray-600 mb-2">Find the best candidate among all 5000+ active job seekers.</p>
          <p className="text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div className="flex gap-4">
            <button className="bg-[#22336c] text-white px-8 py-3 rounded-full font-semibold text-base shadow hover:bg-[#1a237e] transition-all">Post Job &gt;</button>
            <button className="border-2 border-[#22336c] text-[#22336c] px-8 py-3 rounded-full font-semibold text-base bg-white hover:bg-[#f3f6fa] transition-all">Explore Candidates</button>
          </div>
        </div>
        {/* Right: Image and speech bubble */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-w-[220px]">
          {/* Speech bubble */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:top-2 md:-translate-x-0 z-10">
            <div className="bg-white rounded-lg shadow px-4 py-2 text-gray-700 font-medium text-sm rotate-[-6deg]">Hey, hire today!</div>
          </div>
          {/* Person image */}
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Smiling person"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl z-0"
          />
          {/* Decorative arc */}
          <svg className="absolute right-0 bottom-0 w-40 h-40 md:w-60 md:h-60 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 180 Q100 100 180 20" stroke="#b0c4de" strokeWidth="6" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WantToHire; 