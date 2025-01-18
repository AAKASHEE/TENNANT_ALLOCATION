
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Camera,
  Video,
  X,
  Instagram,
  Linkedin,
} from 'lucide-react';
import '@fontsource/poppins';

// Types
interface Photo {
  url: string;
  caption: string;
}

interface Video {
  url: string;
  title: string;
}

interface Property {
  id: string;
  location: string;
  description: string;
  image: string;
  price: string;
  amenities: string[];
  photos: Photo[];
  videos: Video[];
}

// Property Data
const propertyData: Property[] = [
  {
    id: "1",
    location: "113, Ground Floor, 5th Cross, Teacher's Colony",
    description: "Kumarswamy Layout, Near Dayananda Sagar College",
    image: "/img/properties/property1/main.jpg",
    price: "₹13,800/month",
    amenities: [
      "2 BHK",
      "Semi-Furnished",
      "24/7 Water Supply",
      "Geyser",
      "Water + Electricity Bill Excluded",
      "College Distance: 150m",
      "Main market-vicinity"
    ],
    photos: [
      { url: '../IMG_0150.jpg', caption: 'Entrance' },
      { url: '../../img/IMG_0150.jpg', caption: 'Front View' },
      { url: '../../img/IMG_0147.jpg', caption: 'Bedroom 1' },
      { url: '../../img/IMG_0160.jpg', caption: 'Bedroom 2' },
      { url: '../../img/IMG_0152.jpg', caption: 'Street View: Towards Main Road' },
      { url: '../../img/IMG_0153.jpg', caption: 'Street View' },
      { url: '../../img/IMG_0161.jpg', caption: 'Hall' },
      { url: '../../img/IMG_0162.jpg', caption: 'Bathroom' },
      { url: '../../img/IMG_0164.jpg', caption: 'Hallway' },
    ],
    videos: [
      { url: '../../vid/IMG_0158.mp4', title: 'BEDROOM 01' },
      { url: '../../vid/IMG_0157.mp4', title: 'BEDROOM 02' },
      { url: '../../vid/IMG_0167.mp4', title: 'HALL' },
      { url: '../../vid/IMG_0168.mp4', title: 'KITCHEN' },
      { url: '../../vid/IMG_0159.mp4', title: 'BATHROOM' },
      { url: '../../vid/IMG_4844.mp4', title: 'OUTSIDE DAY' },
      { url: '../../vid/IMG_0169.mp4', title: 'OUTSIDE NIGHT' },
    ]
  },
  {
    id: "2",
    location: "227, 3rd Floor, SLV Residency",
    description: "JP Nagar 6th Phase, Near Metro Station",
    image: "/img/properties/property2/main.jpg",
    price: "₹22,000/month",
    amenities: [
      "3 BHK",
      "Fully Furnished",
      "24/7 Power Backup",
      "Air Conditioning",
      "Modular Kitchen",
      "Metro Distance: 500m",
      "Shopping Mall: 1km"
    ],
    photos: [
      { url: '/img/properties/property2/living.jpg', caption: 'Living Room' },
      { url: '/img/properties/property2/master.jpg', caption: 'Master Bedroom' },
      { url: '/img/properties/property2/kitchen.jpg', caption: 'Modern Kitchen' },
      { url: '/img/properties/property2/bathroom.jpg', caption: 'Premium Bathroom' },
      { url: '/img/properties/property2/balcony.jpg', caption: 'Balcony' },
      { url: '/img/properties/property2/gym.jpg', caption: 'Building Gym' }
    ],
    videos: [
      { url: '/videos/property2/complete-tour.mp4', title: 'Full Property Tour' },
      { url: '/videos/property2/amenities.mp4', title: 'Building Amenities' },
      { url: '/videos/property2/neighborhood.mp4', title: 'Neighborhood Tour' }
    ]
  }
];

// Components
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src="/img/logo.png"
                alt="Company Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Property Listings
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+1234567890"
              className="px-4 py-2 text-blue-600 hover:text-blue-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.location}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{property.location}</h2>
        <p className="text-gray-600 mb-4">{property.description}</p>
        <p className="text-xl font-bold text-blue-600 mb-4">{property.price}</p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Amenities:</h3>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <a
          href={`/property/${property.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Available Properties
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {propertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const PropertyDetail = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const property = propertyData[1]; // For demo, showing second property

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-8">
          <img
            src={property.image}
            alt={property.location}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{property.location}</h1>
              <p className="text-xl">{property.description}</p>
              <p className="text-3xl font-bold mt-4">{property.price}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'photos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'details'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Details
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.photos.map((photo, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedMedia(photo.url)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="mt-2 text-center text-gray-600">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {property.videos.map((video, index) => (
              <div key={index} className="relative">
                <video
                  src={video.url}
                  className="w-full h-64 object-cover rounded-lg"
                  controls
                />
                <p className="mt-2 text-center text-gray-600">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'details' && (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p>{property.location}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <p>{property.price}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Amenities</h3>
                <ul className="list-disc pl-5">
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Media Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedMedia}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center mt-4 text-gray-400">
          © 2024 Property Listings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;



