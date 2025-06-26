import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'People now recognise that having a good performance conversation means that something happens as a result.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    author: 'Albert Flores',
    role: 'Lorem ipsum dolor',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'This platform helped me land my dream job in just a few weeks!',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Jenny Wilson',
    role: 'Product Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote: 'The process was smooth and the support team was always there to help.',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Robert Fox',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const TestimonialCarousel = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 6000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [active]);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="w-full py-16 px-2 md:px-8 flex justify-center items-center bg-white">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Quote */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="mb-4">
            <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><text x="6" y="26" fontSize="32" fill="#b0c4de">“</text></svg>
            </div>
            <blockquote className="text-2xl md:text-2xl font-medium text-gray-900 mb-6 leading-snug">“{testimonials[active].quote}”</blockquote>
            <p className="text-gray-500 mb-8 max-w-xl">{testimonials[active].description}</p>
            <a href="#" className="text-blue-700 font-medium flex items-center gap-1 hover:underline mb-6">Read Success Story <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8h8m0 0l-3-3m3 3l-3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${active === idx ? 'bg-blue-700' : 'bg-gray-300'} transition-all`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-80 h-80 max-w-full rounded-3xl overflow-hidden shadow-lg">
            <img
              src={testimonials[active].image}
              alt={testimonials[active].author}
              className={`w-full h-full object-cover transition-all duration-500 ${animating ? 'opacity-60 scale-95' : 'opacity-100 scale-100'}`}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-3xl">
              <div className="text-white font-semibold text-lg">{testimonials[active].author}</div>
              <div className="text-gray-200 text-sm">{testimonials[active].role}</div>
            </div>
          </div>
          {/* Carousel arrows */}
          {/* <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel; 