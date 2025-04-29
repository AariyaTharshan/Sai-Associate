import { Phone, Mail, MapPin} from "lucide-react"
import React ,{ useState } from "react"

export default function Footer({ lang = "en" }) {
  const contactTitle = lang === "en" ? "Contact Us" : "எங்களை தொடர்பு கொள்ளுங்கள்"
  const quickLinksTitle = lang === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"
  const servicesTitle = lang === "en" ? "Our Services" : "எங்கள் சேவைகள்"
  const followUsTitle = lang === "en" ? "Follow Us" : "எங்களை பின்தொடருங்கள்"

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: { en: "Home", ta: "முகப்பு" }, id: "home" },
    { name: { en: "About Us", ta: "எங்களைப் பற்றி" }, id: "about" },
    { name: { en: "Services", ta: "சேவைகள்" }, id: "services" },
    { name: { en: "Partners", ta: "கூட்டாளிகள்" }, id: "partners" },
    { name: { en: "Contact", ta: "தொடர்பு" }, id: "contact" },
  ]

  const services = [
    { name: { en: "Home Loan", ta: "வீட்டுக் கடன்" }, url: "#" },
    { name: { en: "Mortgage Loan", ta: "அடமனா கடன்" }, url: "#" },
    { name: { en: "Construction Loan", ta: "கட்டிடம் கடன்" }, url: "#" },
    { name: { en: "Land Loan", ta: "நிலம் கடன்" }, url: "#" },
    { name: { en: "Car Loan", ta: "கார் கடன்" }, url: "#" },
    { name: { en: "Personal Loan", ta: "தனிநபர் கடன்" }, url: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-emerald-500">
                <img src="/SA.png" alt="Sai Associate Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-400">Sai Associate</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              {lang === "en"
                ? "Supporting Financial Growth & Empowering Success"
                : "நிதி வளர்ச்சியை ஆதரித்து வெற்றியை அதிகாரமளிக்கிறது."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-emerald-400">{quickLinksTitle}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-emerald-400">{servicesTitle}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.url} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                    {service.name[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-emerald-400">{contactTitle}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">+91 97894 70700</p>
                  <p className="text-gray-400 text-sm sm:text-base">+91 90803 14100</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:p.rajaparamasivam@gmail.com" className="text-gray-400 hover:text-emerald-400 text-sm sm:text-base break-all">
                  p.rajaparamasivam@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm sm:text-base">{lang === "en" ? "Tamil Nadu, India" : "தமிழ்நாடு, இந்தியா"}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Sai Associate.
            {lang === "en" ? " All rights reserved." : " அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
          </p>
        </div>
      </div>
    </footer>
  )
}
