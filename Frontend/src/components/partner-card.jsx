import React from "react"

export default function PartnerCard({ imageSrc, altText, partnerName }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
      <div className="h-24 flex items-center justify-center mb-4">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-800">{partnerName}</h3>
        <a href="#" className="mt-2 inline-block text-sm text-emerald-600 hover:text-emerald-700">
          View Details
        </a>
      </div>
    </div>
  );
}
  