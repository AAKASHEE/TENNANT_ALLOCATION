import React from 'react';

interface ProfileImageUploadProps {
  previewUrl: string | null;
  onImageSelect: (file: File, url: string) => void;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ previewUrl, onImageSelect }) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageSelect(file, url);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          {previewUrl ? (
            <img 
              src={previewUrl} 
              alt="Profile preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="profile-image-input"
            className="hidden"
          />
          <label
            htmlFor="profile-image-input"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
          >
            {previewUrl ? 'Change Photo' : 'Upload Photo'}
          </label>
          <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF (max. 2MB)</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUpload;