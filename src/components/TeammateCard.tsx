import React, { useState } from 'react';
import { Teammate } from '../types';

interface TeammateCardProps {
  teammate: Teammate;
}

const TeammateCard: React.FC<TeammateCardProps> = ({ teammate }) => {
  const [showContact, setShowContact] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105">
      <div className="flex items-center p-4 border-b">
        <img 
          src={teammate.photo} 
          alt={teammate.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{teammate.name}</h3>
          <p className="text-gray-600">{teammate.age} • {teammate.gender} • {teammate.year}</p>
          <p className="text-gray-700">{teammate.course}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">HOUSING PREFERENCE</h4>
          <div className="flex flex-wrap gap-2">
            {teammate.housingPreference.map((pref, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{pref}</span>
            ))}
          </div>
        </div>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">TRAITS</h4>
          <div className="flex flex-wrap gap-2">
            {teammate.traits.map((trait, index) => (
              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{trait}</span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{teammate.bio}</p>
        
        <button 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => setShowContact(!showContact)}
        >
          {showContact ? "Hide Contact" : "Show Contact"}
        </button>
        
        {showContact && (
          <div className="mt-3 p-3 bg-gray-100 rounded-md">
            <p className="text-gray-800">Contact: <a href={`mailto:${teammate.contact}`} className="text-blue-600 underline">{teammate.contact}</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeammateCard;