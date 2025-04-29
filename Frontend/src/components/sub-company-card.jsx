import React, { useState } from "react";
import {
    Home,
    Building,
    Hammer,
    Map,
    Car,
    Wallet,
    CreditCard,
    Landmark,
    Briefcase,
    PiggyBank,
    DollarSign,
    BarChart4,
    Phone,
    X
  } from "lucide-react";
  
  export default function SubCompanyCard({ name, description, icon = "home" }) {
    const [showPopup, setShowPopup] = useState(false);
    
    const getIcon = () => {
      switch (icon) {
        case "home":
          return <Home className="h-6 w-6" />;
        case "building":
          return <Building className="h-6 w-6" />;
        case "hammer":
          return <Hammer className="h-6 w-6" />;
        case "map":
          return <Map className="h-6 w-6" />;
        case "car":
          return <Car className="h-6 w-6" />;
        case "wallet":
          return <Wallet className="h-6 w-6" />;
        case "credit-card":
          return <CreditCard className="h-6 w-6" />;
        case "landmark":
          return <Landmark className="h-6 w-6" />;
        case "briefcase":
          return <Briefcase className="h-6 w-6" />;
        case "piggy-bank":
          return <PiggyBank className="h-6 w-6" />;
        case "dollar":
          return <DollarSign className="h-6 w-6" />;
        case "chart":
          return <BarChart4 className="h-6 w-6" />;
        default:
          return <Home className="h-6 w-6" />;
      }
    };
  
    const handleLearnMore = (e) => {
      e.preventDefault();
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
          <div className="p-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              {getIcon()}
            </div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <button
              onClick={handleLearnMore}
              className="text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors duration-300 flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Contact Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/80" onClick={handleClosePopup}></div>
            <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-4 sm:p-6 shadow-lg">
              <button
                onClick={handleClosePopup}
                className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
              
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-700">{name}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Contact us to learn more about this service</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-emerald-50 rounded-lg">
                  <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Call us at</p>
                    <a href="tel:+919789470700" className="text-emerald-600 font-medium text-base sm:text-lg">+91 97894 70700</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-emerald-50 rounded-lg">
                  <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Or call us at</p>
                    <a href="tel:+919080314100" className="text-emerald-600 font-medium text-base sm:text-lg">+91 90803 14100</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 flex justify-center">
                <a 
                  href="tel:+919789470700" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  