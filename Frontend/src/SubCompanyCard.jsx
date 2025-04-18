import React from 'react';

const SubCompanyCard = ({ name, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-green-600 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SubCompanyCard;
