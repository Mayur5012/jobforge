import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Briefcase, 
  DollarSign,
  Clock,
  Heart,
  Share2,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=TC",
      description: "We're looking for a talented frontend developer to join our team and help build amazing user experiences.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/60x60/10B981/FFFFFF?text=IL",
      description: "Lead product strategy and development for our next-generation platform.",
      skills: ["Product Strategy", "Agile", "User Research", "Analytics"]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "3 days ago",
      logo: "https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=DS",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
      skills: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping"]
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "DataFlow Systems",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "5 days ago",
      logo: "https://via.placeholder.com/60x60/EF4444/FFFFFF?text=DF",
      description: "Build scalable backend services and APIs for our data processing platform.",
      skills: ["Python", "Django", "PostgreSQL", "AWS"]
    }
  ];

  const tagColors = [
    'bg-green-100 text-green-700',
    'bg-blue-100 text-blue-700',
    'bg-pink-100 text-pink-700',
    'bg-yellow-100 text-yellow-700',
    'bg-red-100 text-red-700',
    'bg-purple-100 text-purple-700',
  ];

  return (
    <div className="lg:col-span-3">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest Job Openings</h2>
        <p className="text-gray-500">{jobs.length} jobs found</p>
      </div>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-100 max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/jobs/${job.id}`)}
          >
            <div className="flex-1 w-full min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 min-w-0">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{job.title}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-700 font-medium truncate">{job.company}</span>
                    <span className="text-yellow-500 flex items-center text-sm font-semibold"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>3.5 | 13 Impressions</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>{job.location}</span>
                    <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v12"/><path d="M6 3a6 6 0 0112 0v12a6 6 0 01-12 0z"/></svg>{job.type}</span>
                    <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"/></svg>{job.salary}</span>
                    <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>{job.posted}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {job.skills.map((skill, i) => (
                      <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[i % tagColors.length]}`}>{skill}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2 text-sm truncate max-w-2xl">{job.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 min-w-[48px] max-w-[64px] sm:max-w-[80px] md:max-w-[96px]">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 max-w-full rounded-lg object-contain mb-2 block" style={{minWidth:'48px',maxWidth:'100%'}} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">3 weeks Ago</span>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="btn-secondary inline-flex items-center">
          Load More Jobs
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>
    </div>
  );
};

export default JobList; 