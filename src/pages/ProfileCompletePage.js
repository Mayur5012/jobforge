import React from 'react';

const ProfileCompletePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#172554] relative" style={{backgroundImage: 'url(/src/assets/banner.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-white rounded-[2rem] shadow-lg px-8 py-10 w-full max-w-lg flex flex-col items-center" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
        {/* Logo */}
        <div className="w-full flex items-center mb-2">
          <span className="text-lg font-bold tracking-widest text-[#E11D48] mr-2">/</span>
          <span className="text-lg font-bold tracking-widest text-black">JOBFORGE</span>
        </div>
        {/* Welcome and Title */}
        <div className="w-full text-left mb-2">
          <h2 className="text-2xl font-bold text-black leading-tight mb-1">Hey, Welcome to JobForge</h2>
          <h3 className="text-xl font-bold text-[#7B8CB5] leading-tight mb-1">Complete Your Profile</h3>
          <p className="text-base text-[#7B8CB5] mb-4">Fill out your details to get job recommendations that match your skills.</p>
        </div>
        {/* Progress Arc */}
        <div className="flex flex-col items-center w-full mb-2">
          <svg width="180" height="90" viewBox="0 0 180 90">
            <path d="M30,90 A60,60 0 1,1 150,90" fill="none" stroke="#D1D9EC" strokeWidth="12" />
            <path d="M30,90 A60,60 0 0,1 66,36" fill="none" stroke="#E11D48" strokeWidth="12" strokeLinecap="round" />
          </svg>
          <div className="-mt-12 text-3xl font-bold text-[#222B45]">20%</div>
        </div>
        <div className="w-full text-center text-base text-[#7B8CB5] mb-6">or <span className="underline cursor-pointer">Skip</span></div>
        <button className="w-full bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition">Continue</button>
      </div>
    </div>
  );
};

export default ProfileCompletePage;
