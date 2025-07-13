import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
// Example static job data (in real app, fetch by jobId)
const jobs = [
  {
    id: 1,
    title: 'Assistant Security Officer',
    company: 'HCL Tech',
    logo: 'https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png',
    rating: 3.5,
    impressions: 13,
    experience: '0–1 yrs',
    location: 'Riyadh',
    shortDesc: 'Ensuring security and safeguarding of Company assets / Material / People against malicious acts…',
    tags: [
      { label: 'Firefighting Systems', color: 'bg-green-100 text-green-700' },
      { label: 'Plant Security', color: 'bg-blue-100 text-blue-700' },
      { label: 'Vigilance', color: 'bg-pink-100 text-pink-700' },
      { label: 'Safety', color: 'bg-yellow-100 text-yellow-700' },
      { label: 'Loss Prevention', color: 'bg-red-100 text-red-700' },
      { label: 'Physical', color: 'bg-purple-100 text-purple-700' },
    ],
    posted: '3 weeks Ago',
    openings: 1,
    description: `Key Responsibilities:\n\n• Ensure the security and safeguarding of company assets, materials, and personnel against malicious acts, theft, or unauthorized access.\n• Monitor and maintain firefighting systems to ensure they are operational and compliant with safety standards.\n• Oversee plant security by conducting regular patrols, surveillance, and access control.\n• Maintain vigilance to detect and prevent potential security threats or breaches.\n• Promote safety protocols and ensure adherence to company and regulatory guidelines.\n• Implement loss prevention strategies to minimize risks related to theft, damage, or operational inefficiencies.\n• Manage physical security measures, including CCTV monitoring, alarm systems, and perimeter checks.\n\nQualifications & Skills:\n\n• No prior experience required (0–1 years); training will be provided.\n• Basic knowledge of security systems and safety procedures is a plus.\n• Ability to work in a team and respond effectively to emergencies.\n• Strong observational and communication skills.`,
  },
  // ... more jobs if needed ...
];

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => String(j.id) === String(jobId));

  if (!job) return <div className="p-8 text-center text-gray-500">Job not found.</div>;

  // Split description into responsibilities and qualifications
  const [desc, qualifications] = job.description.split('Qualifications & Skills:');

  return (
    <>
    <div className="min-h-screen bg-[#f7f8fc] py-8 px-2 sm:px-0 flex flex-col items-center">
      <div className="mx-auto max-w-6xl">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6 border border-gray-100">
          <div className="flex-1 w-full">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{job.title}</h2>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-700 font-medium">{job.company}</span>
              <span className="text-yellow-500 flex items-center text-sm font-semibold"><Star className="w-4 h-4 mr-1" />{job.rating} | {job.impressions} Impressions</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
              <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>{job.experience}</span>
              <span className="flex items-center"><svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>{job.location}</span>
            </div>
            <div className="text-gray-500 text-sm mb-2 truncate max-w-xl">{job.shortDesc}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {job.tags.map((tag, i) => (
                <span key={tag.label} className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}>{tag.label}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2">
              <span>Posted: {job.posted}</span>
              <span>Openings: {job.openings}</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Login & Apply</button>
              <button className="bg-[#FF4F6D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e13b5a] transition">Register to Apply</button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-2xl object-contain" />
          </div>
        </div>
        {/* Job Description Card */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Job Description</h3>
          <div className="text-gray-800 whitespace-pre-line mb-4">
            <span className="font-semibold">Key Responsibilities:</span>
            {desc && <div className="mt-2">{desc.trim()}</div>}
          </div>
          <div className="text-gray-800 whitespace-pre-line mb-4">
            <span className="font-semibold">Qualifications & Skills:</span>
            {qualifications && <div className="mt-2">{qualifications.trim()}</div>}
          </div>
          <button className="mt-2 bg-gray-900 text-white rounded-full px-6 py-2 font-medium flex items-center gap-2 hover:bg-gray-800 transition" onClick={() => alert('Apply Now!')}>
            Apply Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobDescriptionPage; 