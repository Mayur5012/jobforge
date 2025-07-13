import React from 'react';
import { 
  HeroSection, 
  FiltersSidebar, 
  HomeHighlights,
  JobList, 
  PopularCategories,
  BlogShowcase,
  TestimonialCarousel,
  WantToHire,
  FAQSection,
  CountriesShowcase
} from '../components';

const HomePage = () => {
  return (<>
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12">
      <HeroSection />
      <HomeHighlights />
      <CountriesShowcase />
      <PopularCategories />
      <BlogShowcase />
      <TestimonialCarousel />
      {/* <WantToHire /> */}
      <FAQSection />
      {/* Top Global Destinations Section */}
      {/* Main Content
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FiltersSidebar />
          <JobList />
        </div>
      </div> */}
      
    </div>
    </>
  );
};

export default HomePage; 