import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { filterOptions } from '../data/teammateData';

const ProfileCreation: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    course: '',
    year: '',
    bio: '',
    housingPreference: [] as string[],
    traits: [] as string[]
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Toggle selection for multi-select options
  const toggleSelection = (field: 'housingPreference' | 'traits', value: string) => {
    setFormData(prev => {
      const currentSelections = [...prev[field]];
      const index = currentSelections.indexOf(value);
      
      if (index === -1) {
        currentSelections.push(value);
      } else {
        currentSelections.splice(index, 1);
      }
      
      return {
        ...prev,
        [field]: currentSelections
      };
    });
  };
  
  // Handle next step
  const handleNext = () => {
    setStep(step + 1);
  };
  
  // Handle back
  const handleBack = () => {
    setStep(step - 1);
  };
  
  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save the profile to the backend here
    console.log('Profile data:', {
      userId: user?.id,
      ...formData
    });
    
    // Navigate to the teammates page
    navigate('/teammates');
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Complete Your Profile</h2>
            <p className="text-blue-100">Help others find you as a potential roommate</p>
          </div>
          
          {/* Progress Bar */}
          <div className="px-6 pt-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Step {step} of 3
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {Math.round((step / 3) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: `${(step / 3) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="18"
                    max="100"
                    required
                  />
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select Gender</option>
                      {filterOptions.gender.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Course/Major"
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select Year</option>
                      {filterOptions.year.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Tell potential roommates about yourself..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button type="button" onClick={handleNext}>
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Housing Preferences */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800">Housing Preferences</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What type of accommodation are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.housingPreference.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          formData.housingPreference.includes(option)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => toggleSelection('housingPreference', option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {formData.housingPreference.length === 0 && (
                    <p className="mt-1 text-sm text-red-600">Please select at least one option</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    disabled={formData.housingPreference.length === 0}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Personal Traits */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800">Personal Traits</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select traits that describe you
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.traits.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          formData.traits.includes(option)
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => toggleSelection('traits', option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {formData.traits.length === 0 && (
                    <p className="mt-1 text-sm text-red-600">Please select at least one trait</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    disabled={formData.traits.length === 0}
                  >
                    Complete Profile
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;