import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SubCompanyCard from './SubCompanyCard';
import PartnerCard from './PartnerCard';

const App = () => {
  const [lang, setLang] = useState('en');

  const subCompanies = [
    {
      name: { en: 'Home Loan', ta: 'வீட்டுக் கடன்' },
      description: {
        en: 'Get easy and flexible home loans via our verified associates.',
        ta: 'எளிதான மற்றும் நெகிழ்வான வீட்டு கடன்கள் எங்களின் உறுதிப்படுத்தப்பட்ட ஒத்துழைப்பாளர்களிடமிருந்து பெறுங்கள்.',
      },
    },
    {
      name: { en: 'Mortgage Loan', ta: 'அடமனா கடன்' },
      description: {
        en: 'Mortgage-based loans through trusted partners at low interest.',
        ta: 'குறைந்த வட்டியில் நம்பகத்தன்மையுள்ள பங்குதாரர்களின் மூலம் தரகு அடிப்படையிலான கடன்கள்.',
      },
    },
    {
      name: { en: 'Construction Loan', ta: 'கட்டிடம் கடன்' },
      description: {
        en: 'Build your dream home with easy construction loan options.',
        ta: 'எளிய கட்டிடம் கடன் விருப்பங்களுடன் உங்கள் கனவு இல்லத்தை கட்டுங்கள்.',
      },
    },
    {
      name: { en: 'Land Loan', ta: 'நிலம் கடன்' },
      description: {
        en: 'Secure land purchase loans with fast approval.',
        ta: 'விரைவான ஒப்புதலுடன் நிலம் வாங்க கடன்கள்.',
      },
    },
    {
      name: { en: 'Car Loan', ta: 'கார் கடன்' },
      description: {
        en: 'Buy your dream vehicle through our car loan partners.',
        ta: 'எங்கள் கார் கடன் பங்குதாரர்களின் மூலம் உங்கள் கனவு வாகனத்தை வாங்குங்கள்.',
      },
    },
    {
      name: { en: 'Personal Loan', ta: 'தனிநபர் கடன்' },
      description: {
        en: 'Fulfill personal needs with low-interest personal loans.',
        ta: 'குறைந்த வட்டி விகிதத்தில் தனிப்பட்ட தேவைகளை பூர்த்தி செய்ய தனிநபர் கடன்கள்.',
      },
    },
  ];

  const title = lang === 'en' ? 'Our Loan Services' : 'எங்கள் கடன் சேவைகள்';

  return (
    <>
      <Header />

      {/* Language Switcher */}
      <div className="text-right max-w-6xl mx-auto px-4 mt-4">
        <button
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 shadow"
          onClick={() => setLang((prev) => (prev === 'en' ? 'ta' : 'en'))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m0 4v2m0 4v2m-6 2h12m-6 0v2m6-2v2"
            />
          </svg>
          {lang === 'en' ? 'தமிழில் பார்க்க' : 'View in English'}
        </button>
      </div>

      {/* Sub-companies Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subCompanies.map((company, index) => (
              <SubCompanyCard
                key={index}
                name={company.name[lang]}
                description={company.description[lang]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {lang === 'en' ? 'Our Associates' : 'எங்கள் இணைந்த நிறுவனங்கள்'}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center">
            <PartnerCard imageSrc="/s-logo.png" altText="Partner 1" partnerName="Sundaram Home Loan" />
            <PartnerCard imageSrc="/LIC-Logo.png" altText="Partner 2" partnerName="LIC Home Loan" />
            <PartnerCard imageSrc="/ICICI-Loan.png" altText="Partner 3" partnerName="ICICI Home Loan" />
            <PartnerCard imageSrc="/c-logo.png" altText="Partner 4" partnerName="Cholamandalam Home Loan" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
