import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { filterOptions } from '../data/teammateData';
import ProfileImageUpload from '../pages/ ProfileImageUpload';

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
    traits: [] as string[],
    profilePicture: null as File | null,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSelection = (field: 'housingPreference' | 'traits', value: string) => {
    setFormData((prev) => {
      const current = [...prev[field]];
      const index = current.indexOf(value);

      if (index === -1) current.push(value);
      else current.splice(index, 1);

      return { ...prev, [field]: current };
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile Data:', {
      userId: user?.id,
      ...formData,
    });
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
            <div className="flex justify-between text-sm text-blue-700 font-semibold mb-2">
              <span>Step {step} of 3</span>
              <span>{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded h-2">
              <div
                style={{ width: `${(step / 3) * 100}%` }}
                className="bg-blue-600 h-2 rounded transition-all duration-500"
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>

                <ProfileImageUpload
                  previewUrl={previewUrl}
                  onImageSelect={(file, url) => {
                    setFormData((prev) => ({ ...prev, profilePicture: file }));
                    setPreviewUrl(url);
                  }}
                />

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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                      required
                    >
                      <option value="">Select Gender</option>
                      {filterOptions.gender.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                      required
                    >
                      <option value="">Select Year</option>
                      {filterOptions.year.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
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
              <div className="animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Housing Preferences</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What type of accommodation are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.housingPreference.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleSelection('housingPreference', option)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          formData.housingPreference.includes(option)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {formData.housingPreference.length === 0 && (
                    <p className="text-sm text-red-600 mt-1">Please select at least one option.</p>
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
              <div className="animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Traits</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select traits that describe you
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.traits.map((trait) => (
                      <button
                        key={trait}
                        type="button"
                        onClick={() => toggleSelection('traits', trait)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          formData.traits.includes(trait)
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        {trait}
                      </button>
                    ))}
                  </div>
                  {formData.traits.length === 0 && (
                    <p className="text-sm text-red-600 mt-1">Please select at least one trait.</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button type="submit" disabled={formData.traits.length === 0}>
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
