import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileStep5UploadResume = ({ onNext, onBack, onSkip, formData, setFormData }) => {
  const [error, setError] = useState('');
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError('Only PDF, DOC, or DOCX files are allowed.');
        setFormData(prev => ({ ...prev, resume: null }));
        return;
      }
      setError('');
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSaveAndContinue = () => {
    // Save profile data and redirect to jobs page
    console.log('Profile data:', formData);
    navigate('/jobs');
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You're Nearly there!<br/>Upload your CV/Resume</h2>
        <p className="text-gray-600">Fill out your details to get job recommendations that match your skills.</p>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Upload Resume</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-400 transition" onClick={() => fileInputRef.current.click()}>
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mx-auto mb-2 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          {formData.resume ? (
            <span className="text-gray-700">{formData.resume.name}</span>
          ) : (
            <span className="text-gray-500">Browse and chose the files you want to upload from your computer<br/>(File Upload: PDF, DOC, DOCX)</span>
          )}
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div className="text-center mb-6">
        <span className="text-gray-500">or </span>
        <button type="button" onClick={onSkip} className="text-gray-500 underline hover:text-gray-700 transition">Skip</button>
      </div>
      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-3 text-lg font-semibold hover:bg-gray-50 transition">Back</button>
        <button onClick={handleSaveAndContinue} className="flex-1 bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition">Save and Continue</button>
      </div>
    </div>
  );
};

export default ProfileStep5UploadResume; 