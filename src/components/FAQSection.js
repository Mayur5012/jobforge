import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I create an account on JobForge?',
    answer:
      'Click on the "Sign Up" button at the top right, fill in your details, and verify your email. You can then start searching and applying for jobs tailored to your profile.',
  },
  {
    question: 'How do I find jobs suited for my qualifications?',
    answer:
      'Use the search bar and filters to specify your skills, experience, and preferred location. Our smart matching system will show you jobs that best fit your qualifications.',
  },
  {
    question: 'How can I improve my chances of getting hired?',
    answer:
      'Complete your profile, upload a well-crafted CV, and regularly update your skills. Applying early and writing personalized cover letters can also boost your chances.',
  },
  {
    question: 'Do I need to upload my CV to apply for jobs?',
    answer:
      'While not always required, uploading your CV increases your visibility to employers and makes your applications stronger. Some jobs may require a CV to apply.',
  },
  {
    question: 'How do I track my job applications?',
    answer:
      'Go to your dashboard and click on "My Applications" to view the status of all jobs you have applied for, including interview invitations and feedback.',
  },
  {
    question: 'Will I receive job notifications on JobForge?',
    answer:
      'Yes! Enable notifications in your account settings to receive updates about new jobs, application status, and personalized job recommendations.',
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(idx === openIdx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-16 px-2 md:px-0">
      <div className="w-full mx-auto px-0 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22336c] mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 text-base md:text-lg mb-10">Find answers to common questions about using JobForge.</p>
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-5 px-4 md:px-8 focus:outline-none text-left hover:bg-[#f5f7fa] transition-colors"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-base md:text-lg font-medium text-gray-800 block">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIdx === idx ? (
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#22336c"/></svg>
                  ) : (
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#22336c"/><rect x="9" y="4" width="2" height="12" rx="1" fill="#22336c"/></svg>
                  )}
                </span>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`overflow-hidden transition-all duration-400 ease-in-out bg-white px-4 md:px-8 ${openIdx === idx ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                aria-hidden={openIdx !== idx}
              >
                {faq.answer && (
                  <p className="text-gray-600 text-sm md:text-base mb-2 mt-1 leading-relaxed">{faq.answer}</p>
                )}
              </div>
              {idx !== faqs.length - 1 && (
                <div className="w-full h-px bg-gray-200 mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Contact Card at the bottom */}
      <div className="w-full mx-auto mt-12 px-0 md:px-0">
        <div className="bg-[#fafbfc] rounded-2xl py-10 px-4 flex flex-col items-center justify-center shadow-sm w-full">
          <div className="flex -space-x-4 mb-3">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar3" className="w-10 h-10 rounded-full border-2 border-white shadow" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Still have questions?</h3>
          <p className="text-gray-500 mb-5 text-center max-w-md text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="bg-[#22336c] text-white px-6 py-2 rounded-full font-medium text-sm shadow hover:bg-[#1a237e] transition-all">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 