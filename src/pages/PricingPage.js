import React from 'react';

const plans = [
  {
    title: 'Basic plan',
    price: '$10/mth',
    description: 'Billed annually.',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
    button: 'Get started',
    popular: false,
  },
  {
    title: 'Business plan',
    price: '$20/mth',
    description: 'Billed annually.',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
    button: 'Get started',
    popular: true,
  },
  {
    title: 'Enterprise plan',
    price: '$40/mth',
    description: 'Billed annually.',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalised+priority service',
    ],
    button: 'Get started',
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="text-sm text-blue-700 font-medium mb-2">Pricing</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-gray-500 text-lg">We believe Untitled should be accessible to all companies, no matter the size.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              className={`relative bg-white rounded-2xl shadow-md border border-gray-100 flex-1 flex flex-col items-center px-8 py-10 transition-transform duration-200 ${plan.popular ? 'z-10 scale-105 border-blue-500 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <svg width="40" height="40" fill="none" className="mb-1"><path d="M20 0v40M0 20h40" stroke="#2563eb" strokeWidth="2"/></svg>
                    <span className="text-xs font-semibold text-blue-700">Most popular!</span>
                  </div>
                </>
              )}
              <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{plan.title}</div>
              <div className="text-gray-500 mb-6">{plan.description}</div>
              <ul className="text-gray-700 text-left mb-8 space-y-3 w-full max-w-xs mx-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-5 h-5 text-green-500">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full max-w-xs bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg py-3 text-base transition">{plan.button}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
