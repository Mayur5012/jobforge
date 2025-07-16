import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileProgressIndicator from '../components/ProfileProgressIndicator';
import ProfileStep1BasicInfo from '../components/ProfileStep1BasicInfo';
import ProfileStep2Education from '../components/ProfileStep2Education';
import ProfileStep3Employment from '../components/ProfileStep3Employment';
import ProfileStep4AdditionalInfo from '../components/ProfileStep4AdditionalInfo';
import ProfileStep5UploadResume from '../components/ProfileStep5UploadResume';

const ProfileCompletePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleComplete = () => {
    console.log('Profile data:', formData);
    navigate('/');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProfileStep1BasicInfo
            onNext={handleNext}
            onSkip={handleSkip}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <ProfileStep2Education
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <ProfileStep3Employment
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <ProfileStep4AdditionalInfo
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <ProfileStep5UploadResume
            onNext={handleNext}
            onBack={handleBack}
            onSkip={handleSkip}
            formData={formData}
            setFormData={setFormData}
          />
        );
      default:
        return (
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Complete!</h2>
            <p className="text-gray-600 mb-6">Thank you for completing your profile.</p>
            <button
              onClick={handleComplete}
              className="w-full bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition"
            >
              Get Started
            </button>
          </div>
        );
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#172554] bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: 'url(/src/assets/banner.png)' }}
    >
      <div
        className="bg-white rounded-[2rem] shadow-lg px-6 py-8 sm:px-8 sm:py-10 w-full max-w-lg flex flex-col items-center mx-4 sm:mx-6 my-6"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
      >
        <ProfileProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default ProfileCompletePage;