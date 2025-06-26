import React, { useState } from 'react';
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

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);

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

  return (
    <div className="lg:col-span-3">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest Job Openings</h2>
        <p className="text-gray-500">{jobs.length} jobs found</p>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="card hover:shadow-md transition-shadow duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedJob(job)}
          >
            <div className="flex items-start space-x-4">
              <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-lg" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.posted}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary">
                    Apply Now
                  </button>
                </div>
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