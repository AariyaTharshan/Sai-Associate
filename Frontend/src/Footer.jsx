import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p>Email: <a href="mailto:p.rajaparamasivam@gmail.com" className="text-green-400 hover:underline">p.rajaparamasivam@gmail.com</a></p>
        <p>Phone: <span className="text-green-400">+91 97894 70700</span> <span className="text-green-400">+91 90803 14100</span></p>
        <p className="mt-2 text-sm text-gray-400">© {new Date().getFullYear()} Sai Associate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;