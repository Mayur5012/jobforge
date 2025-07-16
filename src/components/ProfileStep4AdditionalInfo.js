import React, { useState } from 'react';

const ProfileStep4AdditionalInfo = ({ onNext, onBack, onSkip, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const matrimonialOptions = [
    'Single',
    'Married',
    'Divorced',
    'Widowed',
    'Other'
  ];

  const passportOptions = [
    'Available',
    'Not Available',
    'Applied',
    'Expired'
  ];

  const yesNoOptions = ['Yes', 'No'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.whyAbroad?.trim()) {
      newErrors.whyAbroad = 'Required';
    } else if (formData.whyAbroad.length < 30) {
      newErrors.whyAbroad = 'Minimum 30 characters required';
    } else if (formData.whyAbroad.length > 300) {
      newErrors.whyAbroad = 'Maximum 300 characters allowed';
    }
    
    if (!formData.matrimonialStatus) {
      newErrors.matrimonialStatus = 'Required';
    }
    
    if (!formData.prFuture) {
      newErrors.prFuture = 'Required';
    }
    
    if (!formData.passportAvailability) {
      newErrors.passportAvailability = 'Required';
    }
    
    if (!formData.residencyHistory?.trim()) {
      newErrors.residencyHistory = 'Required';
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
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleTextareaChange = (field, value) => {
    if (value.length <= 300) {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Additional Information</h2>
        <p className="text-gray-600">Fill out your details to get job recommendations that match your skills.</p>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <textarea
            placeholder="Why do you want to work Abroad?"
            value={formData.whyAbroad || ''}
            onChange={e => handleTextareaChange('whyAbroad', e.target.value)}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none ${
              errors.whyAbroad ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.whyAbroad && <p className="text-red-500 text-sm">{errors.whyAbroad}</p>}
            <span className="text-gray-500 text-sm ml-auto">
              {formData.whyAbroad?.length || 0}/300
            </span>
          </div>
        </div>
        <div>
          <select
            value={formData.matrimonialStatus || ''}
            onChange={e => handleInputChange('matrimonialStatus', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white ${
              errors.matrimonialStatus ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Matrimonial Status</option>
            {matrimonialOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.matrimonialStatus && <p className="text-red-500 text-sm mt-1">{errors.matrimonialStatus}</p>}
        </div>
        <div>
          <select
            value={formData.prFuture || ''}
            onChange={e => handleInputChange('prFuture', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white ${
              errors.prFuture ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Do you want to apply for PR in the future?</option>
            {yesNoOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.prFuture && <p className="text-red-500 text-sm mt-1">{errors.prFuture}</p>}
        </div>
        <div>
          <select
            value={formData.passportAvailability || ''}
            onChange={e => handleInputChange('passportAvailability', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white ${
              errors.passportAvailability ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Passport Availability</option>
            {passportOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.passportAvailability && <p className="text-red-500 text-sm mt-1">{errors.passportAvailability}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Previous Residency History"
            value={formData.residencyHistory || ''}
            onChange={e => handleInputChange('residencyHistory', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.residencyHistory ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.residencyHistory && <p className="text-red-500 text-sm mt-1">{errors.residencyHistory}</p>}
        </div>
      </div>
      <div className="text-center mb-6">
        <span className="text-gray-500">or </span>
        <button type="button" onClick={onSkip} className="text-gray-500 underline hover:text-gray-700 transition">Skip</button>
      </div>
      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-3 text-lg font-semibold hover:bg-gray-50 transition">Back</button>
        <button onClick={handleNext} className="flex-1 bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition">Continue</button>
      </div>
    </div>
  );
};

export default ProfileStep4AdditionalInfo; 