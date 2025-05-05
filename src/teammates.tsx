import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Navbar, Footer } from './components'; // These would be imported from your components

// Types
interface Teammate {
  id: string;
  name: string;
  photo: string;
  age: number;
  gender: string;
  course: string;
  year: string;
  housingPreference: string[];
  traits: string[];
  bio: string;
  contact: string;
}

// Sample teammate data
const teammateData: Teammate[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    photo: "/api/placeholder/150/150",
    age: 21,
    gender: "Male",
    course: "Computer Science",
    year: "2nd Year",
    housingPreference: ["2 BHK", "Near College"],
    traits: ["Non-smoker", "Occasional drinking", "Gym enthusiast", "Vegetarian", "Early riser"],
    bio: "Looking for a studious roommate to share a flat near DSC. I'm organized and prefer a quiet environment for studying.",
    contact: "rahul.s@example.com"
  },
  {
    id: "2",
    name: "Priya Patel",
    photo: "/api/placeholder/150/150",
    age: 20,
    gender: "Female",
    course: "Electronics Engineering",
    year: "1st Year",
    housingPreference: ["3 BHK", "Furnished"],
    traits: ["Non-smoker", "Non-drinker", "Yoga practitioner", "Vegetarian", "Night owl"],
    bio: "Hi! I'm looking for female roommates to share a furnished apartment. I'm neat, friendly and respect personal space.",
    contact: "priya.p@example.com"
  },
  {
    id: "3",
    name: "Amit Kumar",
    photo: "/api/placeholder/150/150",
    age: 22,
    gender: "Male",
    course: "Mechanical Engineering",
    year: "3rd Year",
    housingPreference: ["2 BHK", "Budget-friendly"],
    traits: ["Smoker", "Social drinker", "Football player", "Non-vegetarian", "Flexible schedule"],
    bio: "Looking for a laid-back roommate who enjoys sports and doesn't mind occasional parties. I'm easygoing and friendly.",
    contact: "amit.k@example.com"
  },
  {
    id: "4",
    name: "Riya Mehta",
    photo: "/api/placeholder/150/150",
    age: 21,
    gender: "Female",
    course: "Information Technology",
    year: "2nd Year",
    housingPreference: ["1 BHK", "Gated community"],
    traits: ["Non-smoker", "Non-drinker", "Fitness enthusiast", "Vegetarian", "Early riser"],
    bio: "Seeking a female roommate who is clean, organized and respects privacy. I prefer a peaceful living environment.",
    contact: "riya.m@example.com"
  },
  {
    id: "5",
    name: "Vikram Singh",
    photo: "/api/placeholder/150/150",
    age: 23,
    gender: "Male",
    course: "Civil Engineering",
    year: "4th Year",
    housingPreference: ["3 BHK", "Close to metro"],
    traits: ["Non-smoker", "Occasional drinking", "Cricket player", "Non-vegetarian", "Night owl"],
    bio: "Final year student looking for roommates who are okay with occasional gatherings. I'm responsible and considerate.",
    contact: "vikram.s@example.com"
  },
  {
    id: "6",
    name: "Ananya Gupta",
    photo: "/api/placeholder/150/150",
    age: 20,
    gender: "Female",
    course: "Business Administration",
    year: "1st Year",
    housingPreference: ["2 BHK", "Furnished"],
    traits: ["Non-smoker", "Social drinker", "Dance enthusiast", "Vegetarian", "Flexible schedule"],
    bio: "Friendly and outgoing person looking for roommates who enjoy socializing but also respect study time.",
    contact: "ananya.g@example.com"
  }
];

// Filter options
const filterOptions = {
  housingPreference: ["1 BHK", "2 BHK", "3 BHK", "Furnished", "Near College", "Budget-friendly", "Gated community", "Close to metro"],
  traits: ["Non-smoker", "Smoker", "Non-drinker", "Occasional drinking", "Social drinker", "Gym enthusiast", "Yoga practitioner", "Football player", "Cricket player", "Dance enthusiast", "Fitness enthusiast", "Vegetarian", "Non-vegetarian", "Early riser", "Night owl", "Flexible schedule"],
  gender: ["Male", "Female", "Other"],
  year: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
};

// Teammate Card Component
const TeammateCard = ({ teammate }: { teammate: Teammate }) => {
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

// Main TeammatesPage Component
const TeammatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<{
    housingPreference: string[];
    traits: string[];
    gender: string[];
    year: string[];
  }>({
    housingPreference: [],
    traits: [],
    gender: [],
    year: []
  });
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter function
  const filteredTeammates = teammateData.filter(teammate => {
    // Search filter
    if (searchTerm && !teammate.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !teammate.course.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Housing preference filter
    if (activeFilters.housingPreference.length > 0 && 
        !teammate.housingPreference.some(pref => activeFilters.housingPreference.includes(pref))) {
      return false;
    }
    
    // Traits filter
    if (activeFilters.traits.length > 0 && 
        !teammate.traits.some(trait => activeFilters.traits.includes(trait))) {
      return false;
    }
    
    // Gender filter
    if (activeFilters.gender.length > 0 && 
        !activeFilters.gender.includes(teammate.gender)) {
      return false;