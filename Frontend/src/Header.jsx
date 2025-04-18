import React from 'react';
import magali from '/Magali.jpeg';
import thatha from '/Thatha.jpeg';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <img src={magali} alt="Logo" className="w-30 h-30 rounded-full object-cover" />

        
        <div className="text-center flex-1">
          <h1 className="text-4xl font-extrabold tracking-wide text-green-400 uppercase">
            Sai Associate
          </h1>
          <p className="text-sm text-gray-300 mt-1 tracking-widest">
            Supporting Financial Growth & Empowering Success
          </p>
        </div>

        
        <img src={thatha} alt="Logo" className="w-30 h-30 rounded-full object-cover" />
      </div>
    </header>
  );
}

export default Header;
