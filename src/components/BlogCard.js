import React from 'react';

const BlogCard = ({ image, title, date, tags, onClick }) => (
  <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition" onClick={onClick}>
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <div className="text-xs text-gray-500 mb-2">{date}</div>
    <div className="font-semibold text-lg mb-2">{title}</div>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags && tags.map((tag, idx) => (
        <span key={idx} className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-700">{tag}</span>
      ))}
    </div>
    <div className="text-blue-600 text-xs font-medium">Read Now</div>
  </div>
);

export default BlogCard; 