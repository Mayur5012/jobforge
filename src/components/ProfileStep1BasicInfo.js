import React, { useState } from 'react';

const ProfileStep1BasicInfo = ({ onNext, onSkip, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const countryCodes = [
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'UAE', code: '+971', flag: '🇦🇪' },
    { name: 'US', code: '+1', flag: '🇺🇸' },
    { name: 'UK', code: '+44', flag: '🇬🇧' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.mobile?.trim()) {
      newErrors.mobile = 'Mobile number is required';
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
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleCountryCodeChange = (e) => {
    const selectedCountry = countryCodes.find((country) => country.code === e.target.value);
    setFormData((prev) => ({
      ...prev,
      countryCode: selectedCountry,
    }));
  };

  return (
    <div className="w-full">
      {/* Title and Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
        <p className="text-gray-600">Fill out your details to get job recommendations that match your skills.</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName || ''}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.fullName ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <input
            type="email"
            placeholder="Email Address (hello@example.com)"
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Mobile Number */}
        <div className="flex gap-2 items-start">
          <select
            value={formData.countryCode?.code || '+91'}
            onChange={handleCountryCodeChange}
            className="w-20 sm:w-24 px-2 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
          <div className="flex-1 min-w-0">
            <input
              type="tel"
              placeholder="Mobile number"
              value={formData.mobile || ''}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.mobile ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>
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

      {/* Continue Button */}
      <button
        onClick={handleNext}
        className="w-full bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition"
      >
        Continue
      </button>
    </div>
  );
};

export default ProfileStep1BasicInfo;