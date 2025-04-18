import React from 'react';

const PartnerCard = ({ imageSrc, altText, partnerName }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <img
        src={imageSrc}
        alt={altText}
        className="h-24 w-auto mx-auto mb-4 object-contain transition-transform duration-300 hover:scale-105"
      />
      <p className="text-base font-semibold text-gray-800">{partnerName}</p>
    </div>
  );
};

export default PartnerCard;
