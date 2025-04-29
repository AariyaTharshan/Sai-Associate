import { Button } from "./ui/button"
import { Phone, Mail, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet"
import React from "react"

export default function Header() {
  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-emerald-500">
              <img src="/SA.png" alt="Sai Associate Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-emerald-700">Sai Associate</h1>
              <p className="text-xs text-gray-500 hidden xs:block">Financial Solutions Provider</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('partners')} 
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="tel:+919789470700"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600"
            >
              <Phone className="h-4 w-4" />
              <span>+91 97894 70700</span>
            </a>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="hidden lg:inline-flex">Get a Loan</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2 hover:bg-gray-100 rounded-md">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <nav className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <SheetClose asChild>
                    <button 
                      onClick={() => scrollToSection('home')} 
                      className="text-left text-base sm:text-lg font-medium py-2 border-b border-gray-100"
                    >
                      Home
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button 
                      onClick={() => scrollToSection('services')} 
                      className="text-left text-base sm:text-lg font-medium py-2 border-b border-gray-100"
                    >
                      Services
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button 
                      onClick={() => scrollToSection('about')} 
                      className="text-left text-base sm:text-lg font-medium py-2 border-b border-gray-100"
                    >
                      About
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button 
                      onClick={() => scrollToSection('partners')} 
                      className="text-left text-base sm:text-lg font-medium py-2 border-b border-gray-100"
                    >
                      Partners
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="text-left text-base sm:text-lg font-medium py-2 border-b border-gray-100"
                    >
                      Contact
                    </button>
                  </SheetClose>
                </nav>
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <a href="tel:+919789470700" className="flex items-center gap-2 text-emerald-600">
                    <Phone className="h-4 w-4" />
                    <span>+91 97894 70700</span>
                  </a>
                  <a href="tel:+919080314100" className="flex items-center gap-2 text-emerald-600">
                    <Phone className="h-4 w-4" />
                    <span>+91 90803 14100</span>
                  </a>
                  <a href="mailto:p.rajaparamasivam@gmail.com" className="flex items-center gap-2 text-emerald-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm sm:text-base">p.rajaparamasivam@gmail.com</span>
                  </a>
                </div>
                <div className="mt-6 sm:mt-8">
                  <SheetClose asChild>
                    <Button onClick={() => scrollToSection('contact')} className="w-full">Get a Loan</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
