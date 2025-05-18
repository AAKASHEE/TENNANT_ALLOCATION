// src/components/ProfileImageUpload.tsx
import React from 'react';

interface Props {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string | null;
}

const ProfileImageUpload: React.FC<Props> = ({ onImageChange, previewUrl }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Profile Picture
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      {previewUrl && (
        <div className="mt-4">
          <img
            src={previewUrl}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImageUpload;
