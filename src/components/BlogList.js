import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs, currentPage, totalPages, onPageChange, onBlogClick }) => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} onClick={() => onBlogClick(blog.id)} />
      ))}
    </div>
    <div className="flex items-center mt-6 w-full max-w-2xl mx-auto">
      {/* Previous button left */}
      <div className="flex-1 flex justify-start">
        <button
          className="px-3 py-1 rounded text-gray-500 hover:bg-gray-100 flex items-center"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="mr-1">&#8592;</span> Previous
        </button>
      </div>
      {/* Page numbers center */}
      <div className="flex-1 flex justify-center gap-1">
        {(() => {
          const pages = [];
          const showLeftEllipsis = currentPage > 4;
          const showRightEllipsis = currentPage < totalPages - 3;
          // Always show first page
          pages.push(1);
          // Show left ellipsis if needed
          if (showLeftEllipsis) pages.push('left-ellipsis');
          // Show up to 2 pages before and after current
          for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
            pages.push(i);
          }
          // Show right ellipsis if needed
          if (showRightEllipsis) pages.push('right-ellipsis');
          // Always show last page if more than 1
          if (totalPages > 1) pages.push(totalPages);
          return pages.map((page, idx) => {
            if (page === 'left-ellipsis' || page === 'right-ellipsis') {
              return <span key={page + idx} className="px-2 text-gray-400">...</span>;
            }
            return (
              <button
                key={page}
                className={`px-3 py-1 rounded font-medium transition ${currentPage === page ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            );
          });
        })()}
      </div>
      {/* Next button right */}
      <div className="flex-1 flex justify-end">
        <button
          className="px-3 py-1 rounded text-gray-500 hover:bg-gray-100 flex items-center"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <span className="ml-1">&#8594;</span>
        </button>
      </div>
    </div>
  </div>
);

export default BlogList; 