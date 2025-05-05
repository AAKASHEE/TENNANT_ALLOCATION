import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import TeammateCard from '../components/TeammateCard';
import FilterPanel from '../components/FilterPanel';
import Button from '../components/Button';
import { teammateData, filterOptions } from '../data/teammateData';
import { ActiveFilters } from '../types';

const TeammatesPage: React.FC = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
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
    }
    
    // Year filter
    if (activeFilters.year.length > 0 && 
        !activeFilters.year.includes(teammate.year)) {
      return false;
    }
    
    return true;
  });
  
  // Toggle filter function
  const toggleFilter = (category: keyof ActiveFilters, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
      return newFilters;
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      housingPreference: [],
      traits: [],
      gender: [],
      year: []
    });
    setSearchTerm("");
  };
  
  // Count active filters
  const activeFilterCount = 
    activeFilters.housingPreference.length + 
    activeFilters.traits.length + 
    activeFilters.gender.length + 
    activeFilters.year.length;

  const handleAddProfile = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/signin');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">RoommateFinder</Link>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {user?.name}</span>
                  <Button variant="outline" onClick={() => signOut()}>Sign Out</Button>
                </div>
              ) : (
                <Button onClick={() => navigate('/signin')}>Sign In</Button>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">
            Find Your Perfect Roommate
          </h1>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search by name or course..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            
            <button 
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors relative"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
          
          {/* Filter Panel */}
          <FilterPanel
            showFilters={showFilters}
            filterOptions={filterOptions}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            clearFilters={clearFilters}
          />
        </div>
        
        {/* Results Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {filteredTeammates.length} {filteredTeammates.length === 1 ? 'Result' : 'Results'} Found
          </h2>
          
          {filteredTeammates.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-xl text-gray-700 mb-4">No teammates match your criteria</p>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeammates.map((teammate) => (
                <TeammateCard key={teammate.id} teammate={teammate} />
              ))}
            </div>
          )}
        </div>
        
        {/* Add Yourself Section */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Looking for a roommate?</h2>
          <p className="text-gray-700 mb-4">
            Add your profile to our database and let potential roommates find you!
          </p>
          <Button
            className="inline-flex items-center gap-2"
            onClick={handleAddProfile}
          >
            <UserPlus size={20} />
            <span>{isAuthenticated ? 'Add Your Profile' : 'Sign In to Add Profile'}</span>
          </Button>
        </div>
      </main>
      
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} RoommateFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TeammatesPage;