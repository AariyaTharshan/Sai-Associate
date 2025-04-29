'use client';

import React , { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import SubCompanyCard from './components/sub-company-card';
import PartnerCard from './components/partner-card';
import { Globe } from 'lucide-react';
import { Button } from './components/ui/button';

export default function Home() {
  const [lang, setLang] = useState('en');

  const subCompanies = [
    {
      name: { en: 'Home Loan', ta: 'வீட்டுக் கடன்' },
      description: {
        en: 'Get easy and flexible home loans via our verified associates.',
        ta: 'எளிதான மற்றும் நெகிழ்வான வீட்டு கடன்கள் எங்களின் உறுதிப்படுத்தப்பட்ட ஒத்துழைப்பாளர்களிடமிருந்து பெறுங்கள்.',
      },
      icon: 'home',
    },
    {
      name: { en: 'Mortgage Loan', ta: 'அடமனா கடன்' },
      description: {
        en: 'Mortgage-based loans through trusted partners at low interest.',
        ta: 'குறைந்த வட்டியில் நம்பகத்தன்மையுள்ள பங்குதாரர்களின் மூலம் தரகு அடிப்படையிலான கடன்கள்.',
      },
      icon: 'building',
    },
    {
      name: { en: 'Construction Loan', ta: 'கட்டிடம் கடன்' },
      description: {
        en: 'Build your dream home with easy construction loan options.',
        ta: 'எளிய கட்டிடம் கடன் விருப்பங்களுடன் உங்கள் கனவு இல்லத்தை கட்டுங்கள்.',
      },
      icon: 'hammer',
    },
    {
      name: { en: 'Land Loan', ta: 'நிலம் கடன்' },
      description: {
        en: 'Secure land purchase loans with fast approval.',
        ta: 'விரைவான ஒப்புதலுடன் நிலம் வாங்க கடன்கள்.',
      },
      icon: 'map',
    },
    {
      name: { en: 'Car Loan', ta: 'கார் கடன்' },
      description: {
        en: 'Buy your dream vehicle through our car loan partners.',
        ta: 'எங்கள் கார் கடன் பங்குதாரர்களின் மூலம் உங்கள் கனவு வாகனத்தை வாங்குங்கள்.',
      },
      icon: 'car',
    },
    {
      name: { en: 'Personal Loan', ta: 'தனிநபர் கடன்' },
      description: {
        en: 'Fulfill personal needs with low-interest personal loans.',
        ta: 'குறைந்த வட்டி விகிதத்தில் தனிப்பட்ட தேவைகளை பூர்த்தி செய்ய தனிநபர் கடன்கள்.',
      },
      icon: 'wallet',
    },
  ];

  const title = lang === 'en' ? 'Our Loan Services' : 'எங்கள் கடன் சேவைகள்';
  const partnersTitle = lang === 'en' ? 'Our Associates' : 'எங்கள் இணைந்த நிறுவனங்கள்';
  const heroTitle =
    lang === 'en'
      ? 'Financial Solutions Tailored for You'
      : 'உங்களுக்காக வடிவமைக்கப்பட்ட நிதி தீர்வுகள்';
  const heroSubtitle =
    lang === 'en'
      ? 'Connecting you with the best financial partners for all your loan needs'
      : 'உங்கள் அனைத்து கடன் தேவைகளுக்கும் சிறந்த நிதி பங்குதாரர்களுடன் உங்களை இணைக்கிறோம்';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Language Switcher */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ta' : 'en'))}
          >
            <Globe className="h-4 w-4" />
            {lang === 'en' ? 'தமிழில் பார்க்க' : 'View in English'}
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-emerald-800 to-green-600 text-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{heroTitle}</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-emerald-100">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                {lang === 'en' ? 'Get Started' : 'தொடங்குங்கள்'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                {lang === 'en' ? 'Contact Us' : 'எங்களை தொடர்பு கொள்ளுங்கள்'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-companies Section */}
      <section id="services" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">{title}</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            {lang === 'en'
              ? 'We offer a wide range of loan services to meet your financial needs'
              : 'உங்கள் நிதித் தேவைகளைப் பூர்த்தி செய்ய பரந்த அளவிலான கடன் சேவைகளை வழங்குகிறோம்'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {subCompanies.map((company, index) => (
              <SubCompanyCard
                key={index}
                name={company.name[lang]}
                description={company.description[lang]}
                icon={company.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            {lang === 'en' ? 'Why Choose Us' : 'எங்களை ஏன் தேர்ந்தெடுக்க வேண்டும்'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {lang === 'en' ? 'Trusted Partners' : 'நம்பகமான கூட்டாளிகள்'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {lang === 'en' 
                  ? 'We work with only verified and trusted financial institutions' 
                  : 'நாங்கள் சரிபார்க்கப்பட்ட மற்றும் நம்பகமான நிதி நிறுவனங்களுடன் மட்டுமே பணிபுரிகிறோம்'}
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {lang === 'en' ? 'Fast Approval' : 'விரைவான ஒப்புதல்'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {lang === 'en' 
                  ? 'Quick processing and approval of your loan applications' 
                  : 'உங்கள் கடன் விண்ணப்பங்களின் விரைவான செயலாக்கம் மற்றும் ஒப்புதல்'}
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {lang === 'en' ? 'Competitive Rates' : 'போட்டி விகிதங்கள்'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {lang === 'en' 
                  ? 'We ensure you get the best interest rates in the market' 
                  : 'சந்தையில் சிறந்த வட்டி விகிதங்களைப் பெறுவதை நாங்கள் உறுதி செய்கிறோம்'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">{partnersTitle}</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            {lang === 'en' 
              ? 'We partner with leading financial institutions to provide you the best services' 
              : 'உங்களுக்கு சிறந்த சேவைகளை வழங்க முன்னணி நிதி நிறுவனங்களுடன் கூட்டாக இணைந்துள்ளோம்'}
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-center">
            <PartnerCard imageSrc="/s-logo.png" altText="Sundaram Home Loan" partnerName="Sundaram Home Loan" />
            <PartnerCard imageSrc="/LIC-Logo.png" altText="LIC Home Loan" partnerName="LIC Home Loan" />
            <PartnerCard imageSrc="/ICICI-Loan.png" altText="ICICI Home Loan" partnerName="ICICI Home Loan" />
            <PartnerCard imageSrc="/c-logo.png" altText="Cholamandalam Home Loan" partnerName="Cholamandalam Home Loan" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {lang === 'en' ? 'Ready to Get Started?' : 'தொடங்க தயாரா?'}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-emerald-100">
            {lang === 'en' 
              ? 'Contact us today to discuss your loan requirements and get the best options available for you.' 
              : 'உங்கள் கடன் தேவைகளைப் பற்றி விவாதிக்க இன்றே எங்களைத் தொடர்பு கொண்டு, உங்களுக்கு கிடைக்கும் சிறந்த விருப்பங்களைப் பெறுங்கள்.'}
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            {lang === 'en' ? 'Contact Us Now' : 'இப்போது எங்களை தொடர்பு கொள்ளுங்கள்'}
          </Button>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
