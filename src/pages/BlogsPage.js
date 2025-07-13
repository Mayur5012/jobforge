import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from '../components/BlogList';

const mockBlogs = [
  {
    id: '1',
    image: 'https://cdn.dribbble.com/userupload/14045938/file/original-278d053849b942bdc58439489d059baf.gif',
    title: 'Most popular design systems to learn from in 2022',
    date: '12 June 2025',
    tags: ['Design Systems'],
  },
  {
    id: '2',
    image: 'https://cdn.dribbble.com/userupload/25088007/file/original-ff151beab8139c008c3c4803086b503f.png?resize=1200x900&vertical=center',
    title: 'Understanding accessibility makes you a better',
    date: '12 June 2025',
    tags: ['Accessibility'],
  },
  {
    id: '3',
    image: 'https://cdn.dribbble.com/userupload/41543732/file/original-004fcefe01c652cda7c3fd7bbc39ded5.png?resize=1200x900&vertical=center',
    title: '15 best tools that will help you build your website',
    date: '12 June 2025',
    tags: ['Technology'],
  },
  // ...repeat or add more blogs as needed
];

const BLOGS_PER_PAGE = 6;

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(mockBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = mockBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-blue-600 text-sm font-medium mb-2">Our blog</div>
      <h1 className="text-4xl font-bold mb-2">Latest Blog or News</h1>
      <p className="text-gray-500 mb-8">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
      <div className="text-lg font-semibold mb-4">All blog posts</div>
      <BlogList
        blogs={paginatedBlogs}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onBlogClick={(id) => navigate(`/blog/${id}`)}
      />
    </div>
  );
};

export default BlogsPage; 