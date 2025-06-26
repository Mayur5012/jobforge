import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I create an account on JobForg?',
    answer:
      'Creating an account on JobForg is simple! Just click on the "Sign Up" button, fill in your details, including your preferred job location and skills, and you\'re ready to start searching for jobs that match your profile.',
  },
  {
    question: 'How do I find jobs suited for my qualifications?',
    answer: '',
  },
  {
    question: 'How can I improve my chances of getting hired?',
    answer: '',
  },
  {
    question: 'Do I need to upload my CV to apply for jobs?',
    answer: '',
  },
  {
    question: 'How do I track my job applications?',
    answer: '',
  },
  {
    question: 'Will I receive job notifications on JobForg?',
    answer: '',
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx) => {
    setOpenIdx(idx === openIdx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-16 px-2 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-[#22336c] mb-2">Frequently asked questions</h2>
        <p className="text-center text-gray-400 text-lg mb-10">Everything you need to know about the JOBFORGE</p>
        <div className="rounded-2xl overflow-hidden">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white  border-b-2">
              <button
                className="w-full flex justify-between items-center py-6 px-4 md:px-8 focus:outline-none text-left"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-lg  font-semibold text-gray-700 text-left block">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIdx === idx ? (
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f9fb] border border-[#22336c]">
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#22336c"/></svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f9fb] border border-[#22336c]">
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#22336c"/><rect x="9" y="4" width="2" height="12" rx="1" fill="#22336c"/></svg>
                    </span>
                  )}
                </span>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-white px-4 md:px-8 ${openIdx === idx ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                aria-hidden={openIdx !== idx}
              >
                {faq.answer && (
                  <p className="text-gray-500 text-base md:text-lg mb-4 mt-2 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Card at the bottom */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-[#fafbfc] rounded-2xl py-12 px-4 flex flex-col items-center justify-center shadow-lg">
          <div className="flex -space-x-4 mb-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar3" className="w-12 h-12 rounded-full border-2 border-white shadow" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-500 mb-6 text-center max-w-md">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="bg-[#22336c] text-white px-8 py-3 rounded-full font-semibold text-base shadow hover:bg-[#1a237e] transition-all">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 