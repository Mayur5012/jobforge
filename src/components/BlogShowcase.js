import React from 'react';

const blogs = [
  {
    title: 'Most popular design systems to learn from in 2022',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tag: 'Design Systems',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Understanding accessibility makes you a better',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tag: 'Accessibility',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    title: '15 best tools that will help you build your website',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    tag: 'Technology',
    tagColor: 'bg-blue-100 text-blue-700',
  },
];

const BlogShowcase = () => {
  return (
    <section className="w-full bg-[#fafcff] py-16 px-2 md:px-8">
      <div className="text-center mb-4">
        <span className="text-gray-500 text-base">Learn new technology <span className="inline-block align-middle ml-1 bg-yellow-200 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-semibold">NEW</span></span>
      </div>
      <h2 className="text-5xl font-bold text-[#22336c] text-center mb-12">Read our blog</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full max-w-sm mx-auto flex flex-col"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${blog.tagColor} w-auto`} style={{minWidth: 'unset'}}>{blog.tag}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{blog.title}</h3>
              
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="#" className="text-gray-900 font-medium underline underline-offset-2">Read More &gt;</a>
      </div>
    </section>
  );
};

export default BlogShowcase; 