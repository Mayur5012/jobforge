import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const trendingJobs = [
  'Delivery Boy', 'Ground Staff', 'Security Guard', 'Retail Manager', 'Warehouse Helpers', 'Delivery Driver',
  'Ground Staff', 'Security Guard', 'Spot Boy', 'Retail Manager', 'Delivery Driver'
];

const companies = [
  {
    name: 'Al-Futtaim',
    logo: 'https://www.checkpoint.com/wp-content/uploads/al-futtaim-logo-300x180px.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'Schneider Electric',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Schneider-Electric-Logo.jpg',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'acted',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Acted_logo_2023.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'HCL Tech',
    logo: 'https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'Oracle',
    logo: 'https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'Tata Consultancy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'Capgemini',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/1200px-Capgemini_201x_logo.svg.png',
    rating: 3.5,
    impressions: 13
  },
  {
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png',
    rating: 3.5,
    impressions: 13
  }
];

const HomeHighlights = () => {
  const [startIdx, setStartIdx] = useState(0);

  // Responsive: determine how many cards to show based on screen width
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileJobsToShow, setMobileJobsToShow] = useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
        setIsMobile(false);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
        setIsMobile(false);
      } else {
        setCardsToShow(4);
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automate carousel to move right every 0.5s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1 >= companies.length ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Reset shown jobs when switching to mobile
    if (isMobile) setMobileJobsToShow(4);
  }, [isMobile]);

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 < 0 ? companies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1 >= companies.length ? 0 : prev + 1));
  };

  const visibleCompanies = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCompanies.push(companies[(startIdx + i) % companies.length]);
  }

  // Trending jobs logic for mobile
  const jobsToRender = isMobile ? trendingJobs.slice(0, mobileJobsToShow) : trendingJobs;
  const canShowMore = isMobile && mobileJobsToShow < trendingJobs.length;
  const canShowLess = isMobile && mobileJobsToShow >= trendingJobs.length && trendingJobs.length > 4;

  return (
    <section className="w-full my-12 px-2 md:px-8">
      {/* Trending Jobs */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <span className="font-semibold text-lg text-gray-800">Trending Jobs &gt;</span>
        <AnimatePresence initial={false}>
          {jobsToRender.map((job, idx) => (
            <motion.button
              key={idx}
              className="border border-blue-400 text-blue-600 bg-white rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium hover:bg-blue-50 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              layout
            >
              {job}
            </motion.button>
          ))}
        </AnimatePresence>
        {canShowMore && (
          <span
            className="ml-2 text-blue-600 text-xs sm:text-sm md:text-base font-medium underline cursor-pointer select-none hover:text-blue-800 transition-colors"
            onClick={() => setMobileJobsToShow(mobileJobsToShow + 4)}
          >
            Show more
          </span>
        )}
        {canShowLess && (
          <span
            className="ml-2 text-blue-600 text-xs sm:text-sm md:text-base font-medium underline cursor-pointer select-none hover:text-blue-800 transition-colors"
            onClick={() => setMobileJobsToShow(4)}
          >
            Show less
          </span>
        )}
      </div>

      {/* Who is hiring */}
      <div className="flex items-center justify-between mt-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Who is hiring at JobForge?</h2>
        {/* Carousel is now automated, no manual controls */}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-nowrap gap-6 mb-8 transition-transform duration-500 ease-in-out w-full overflow-x-auto sm:overflow-visible">
          {visibleCompanies.map((company, idx) => (
            <div
              key={company.name}
              className="flex flex-col items-center bg-white border border-blue-100 rounded-2xl p-8 w-full min-w-0 sm:w-64 sm:min-w-[220px] shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={company.logo} alt={company.name} className="h-12 object-contain mb-6" />
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                {company.rating} <span className="mx-2">|</span> {company.impressions} Impressions
              </div>
              <button className="flex items-center bg-blue-50 text-blue-700 rounded-full px-5 py-2 text-sm font-medium hover:bg-blue-100 transition-all">
                View Jobs <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#FF4F6D] text-white rounded-full px-10 py-3 text-lg font-semibold shadow-md hover:bg-[#e13b5a] transition-all">
          View all Companies &gt;
        </button>
      </div>
    </section>
  );
};

export default HomeHighlights; 