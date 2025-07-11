import React from 'react';
import { 
  Header, 
  HeroSection, 
  FiltersSidebar, 
  HomeHighlights,
  JobList, 
  Footer, 
  PopularCategories,
  BlogShowcase,
  TestimonialCarousel,
  WantToHire,
  FAQSection
} from '../components';

const HomePage = () => {
  return (<>
      <Header />
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12">
      <HeroSection />
      <HomeHighlights />
      <PopularCategories />
      <BlogShowcase />
      <TestimonialCarousel />
      <WantToHire />
      <FAQSection />
      {/* Main Content
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FiltersSidebar />
          <JobList />
        </div>
      </div> */}
      
    </div>
      <Footer />
    </>
  );
};

export default HomePage; 