import React from 'react';
import { FilterOptions, ActiveFilters } from '../types';

interface FilterPanelProps {
  showFilters: boolean;
  filterOptions: FilterOptions;
  activeFilters: ActiveFilters;
  toggleFilter: (category: keyof ActiveFilters, value: string) => void;
  clearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  showFilters,
  filterOptions,
  activeFilters,
  toggleFilter,
  clearFilters
}) => {
  if (!showFilters) return null;
  
  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button 
          className="text-blue-600 hover:text-blue-800 text-sm"
          onClick={clearFilters}
        >
          Clear all filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Housing Preference Filter */}
        <div>
          <h4 className="font-medium mb-2">Housing Preference</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.housingPreference.map((option) => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilters.housingPreference.includes(option)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleFilter("housingPreference", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {/* Traits Filter */}
        <div>
          <h4 className="font-medium mb-2">Traits</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.traits.map((option) => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilters.traits.includes(option)
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleFilter("traits", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gender Filter */}
        <div>
          <h4 className="font-medium mb-2">Gender</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.gender.map((option) => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilters.gender.includes(option)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleFilter("gender", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {/* Year Filter */}
        <div>
          <h4 className="font-medium mb-2">Year</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.year.map((option) => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeFilters.year.includes(option)
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleFilter("year", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;