import React from 'react';
import { useParams } from 'react-router-dom';

const mockBlogs = [
  {
    id: '1',
    image: 'https://cdn.dribbble.com/userupload/41543732/file/original-004fcefe01c652cda7c3fd7bbc39ded5.png?resize=1200x900&vertical=center',
    title: 'Most popular design systems to learn from in 2022',
    date: '12 June 2025',
    tags: ['Design Systems'],
    content: `Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\nIntroduction: Why Design Systems Matter\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nGoogle’s Material Design\n\nPellentesque commodo eros a enim. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.\n\nApple’s Human Interface Guidelines\n\n• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\n• Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n• Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`
  },
  // ...other blogs
];

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const blog = mockBlogs.find((b) => b.id === blogId);

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <div className="text-center mb-2">
        <span className="text-xs text-blue-600 font-semibold tracking-widest">FEATURED</span>
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">{blog.title}</h1>
      <div className="text-center text-gray-500 mb-6">{blog.date}</div>
      <div className="prose max-w-none mb-8 whitespace-pre-line">{blog.content}</div>
    </div>
  );
};

export default BlogDetailPage; 