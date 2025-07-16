import React, { useState } from 'react';

const ProfileStep2Education = ({ onNext, onBack, onSkip, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const educationOptions = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Doctorate',
    'Other'
  ];

  const sectorOptions = [
    'Computer Science',
    'Engineering',
    'Business',
    'Arts & Humanities',
    'Medicine',
    'Law',
    'Education',
    'Other'
  ];

  const yesNoOptions = ['Yes', 'No'];

  const englishProficiencyOptions = [
    'Beginner',
    'Elementary',
    'Intermediate',
    'Upper Intermediate',
    'Advanced',
    'Native'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.highestQualification) {
      newErrors.highestQualification = 'Please select your highest qualification';
    }
    
    if (!formData.qualificationSector) {
      newErrors.qualificationSector = 'Please select your qualification sector';
    }
    
    if (!formData.qualificationRecognized) {
      newErrors.qualificationRecognized = 'Please select if your qualification is recognized';
    }
    
    if (!formData.motherTongue?.trim()) {
      newErrors.motherTongue = 'Mother tongue is required';
    }
    
    if (!formData.englishProficiency) {
      newErrors.englishProficiency = 'Please select your English proficiency';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user makes a selection
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <div className="w-full">
      {/* Title and Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Education and Qualification</h2>
        <p className="text-gray-600">Fill out your details to get job recommendations that match your skills.</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Highest Qualification */}
        <div>
          <select
            value={formData.highestQualification || ''}
            onChange={(e) => handleInputChange('highestQualification', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white ${
              errors.highestQualification ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Highest Qualification</option>
            {educationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.highestQualification && (
            <p className="text-red-500 text-sm mt-1">{errors.highestQualification}</p>
          )}
        </div>

        {/* Qualification Sector */}
        <div>
          <select
            value={formData.qualificationSector || ''}
            onChange={(e) => handleInputChange('qualificationSector', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white ${
              errors.qualificationSector ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Qualification Sector</option>
            {sectorOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.qualificationSector && (
            <p className="text-red-500 text-sm mt-1">{errors.qualificationSector}</p>
          )}
        </div>

        {/* Qualification Recognized by Government */}
        <div>
          <select
            value={formData.qualificationRecognized || ''}
            onChange={(e) => handleInputChange('qualificationRecognized', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white ${
              errors.qualificationRecognized ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Qualification Recognized by Government?</option>
            {yesNoOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.qualificationRecognized && (
            <p className="text-red-500 text-sm mt-1">{errors.qualificationRecognized}</p>
          )}
        </div>

        {/* Mother Tongue */}
        <div>
          <input
            type="text"
            placeholder="Mother Tongue"
            value={formData.motherTongue || ''}
            onChange={(e) => handleInputChange('motherTongue', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.motherTongue ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.motherTongue && (
            <p className="text-red-500 text-sm mt-1">{errors.motherTongue}</p>
          )}
        </div>

        {/* English Proficiency */}
        <div>
          <select
            value={formData.englishProficiency || ''}
            onChange={(e) => handleInputChange('englishProficiency', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white ${
              errors.englishProficiency ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">English Proficiency</option>
            {englishProficiencyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.englishProficiency && (
            <p className="text-red-500 text-sm mt-1">{errors.englishProficiency}</p>
          )}
        </div>
      </div>

      {/* Skip Option */}
      <div className="text-center mb-6">
        <span className="text-gray-500">or </span>
        <button
          type="button"
          onClick={onSkip}
          className="text-gray-500 underline hover:text-gray-700 transition"
        >
          Skip
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-3 text-lg font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileStep2Education; 