import React, { useState, useEffect, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import {
  Instagram,
  Linkedin,
} from 'lucide-react';
import '@fontsource/poppins';


// Types
interface Photo {
  url: string;
  caption: string;
}

interface VideoDetails { // Renamed from `Video` to avoid conflict
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
  videos: VideoDetails[];
}
// Contact Dialog Component
interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}



// Property Data
const propertyData: Property[] = [
  {
    id: ":1",
    location: "113, Ground Floor, 5th Cross, Teacher's Colony,Kumarswamy Layout",
    description: "Kumarswamy Layout, Near Dayananda Sagar College",
    image: "../../img/prop_1/IMG_0151.jpg",
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
      { url: '../img/prop_1/IMG_0149.jpg', caption: 'Entrance' },
      { url: '../img/prop_1/IMG_0150.jpg', caption: 'Front View' },
      { url: '../img/prop_1/IMG_0147.jpg', caption: 'Bedroom 1' },
      { url: '../img/prop_1/IMG_0160.jpg', caption: 'Bedroom 2' },
      { url: '../img/prop_1/IMG_0152.jpg', caption: 'Street View: Towards Main Road' },
      { url: '../img/prop_1/IMG_0153.jpg', caption: 'Street View' },
      { url: '../img/prop_1/IMG_0161.jpg', caption: 'Hall' },
      { url: '../img/prop_1/IMG_0162.jpg', caption: 'Bathroom' },
      { url: '../img/prop_1/IMG_0164.jpg', caption: 'Hallway' },
    ],
    videos: [
      { url: '../vid/prop:1/IMG_0158.mp4', title: 'BEDROOM 01' },
      { url: '../vid/prop:1/IMG_0157.mp4', title: 'BEDROOM 02' },
      { url: '../vid/prop:1/IMG_0167.mp4', title: 'HALL' },
      { url: '../vid/prop:1/IMG_0168.mp4', title: 'KITCHEN' },
      { url: '../vid/prop:1/IMG_0159.mp4', title: 'BATHROOM' },
      { url: '../vid/prop:1/IMG_4844.mp4', title: 'OUTSIDE DAY' },
      { url: '../vid/prop:1/IMG_0169.mp4', title: 'OUTSIDE NIGHT' },
    ]
  },
  {
    id: ":2",
    location: "86, 1sT Floor, 4th Cross,Kumarswamy Layout",
    description: "Kumarswamy Layout, Near Dayananda Sagar College",
    image: "../../img/prop_2/IMG_0222.jpg",
    price: "₹25,000/month",
    amenities: [
      "2 BHK",
      "Semi Furnished",
      "24/7 Power Backup",
      "Modular Kitchen",
      "Metro Distance: 500m",
      "Main Market Vicinity",
      "Balcony Access",
      "Spacious Rooms",
      "Each Bedrooms has Its Own attached Bathrooms"
    ],
    photos: [
      { url: '../../img/prop_2/IMG_0220.jpg', caption: 'Road towards Property' },
      { url: '../../img/prop_2/IMG_0221.jpg', caption: 'Road towards Main Road' },
      { url: '../../img/prop_2/IMG_0222.jpg', caption: 'Front face' },
      { url: '../../img/prop_2/IMG_0223.jpg', caption: 'Stairs ' },
      { url: '../../img/prop_2/IMG_0224.jpg', caption: 'Hall' },
      { url: '../../img/prop_2/IMG_0225.jpg', caption: 'Bedroom 01' },
      { url: '../../img/prop_2/IMG_0226.jpg', caption: 'Bedroom 01' },
      { url: '../../img/prop_2/IMG_0227.jpg', caption: 'Wardrobe Bedroom 01' },
      { url: '../../img/prop_2/IMG_0228.jpg', caption: 'Wardrobe Bedroom 01' },
      { url: '../../img/prop_2/IMG_0229.jpg', caption: 'Full View Bedroom 01' },
      { url: '../../img/prop_2/IMG_0230.jpg', caption: 'Bathroom 01' },
      { url: '../../img/prop_2/IMG_0231.jpg', caption: 'Building Gym' },
      { url: '../../img/prop_2/IMG_0232.jpg', caption: 'Bedroom 02' },
      { url: '../../img/prop_2/IMG_0235.jpg', caption: 'Bedroom 02 Balcony' },
      { url: '../../img/prop_2/IMG_0236.jpg', caption: 'Bedroom 02 Wardrobe' },
      { url: '../../img/prop_2/IMG_0237.jpg', caption: 'Bathroom 02' },
      { url: '../../img/prop_2/IMG_0238.jpg', caption: 'Dedicated Kitchen' },
      { url: '../../img/prop_2/IMG_0239.jpg', caption: 'Dedicated Kitchen Full View' },
      { url: '../../img/prop_2/IMG_0240.jpg', caption: 'Pooja Room/Store Room' },
    ],
    videos: [
      { url: '../../vid/prop:2/IMG_0203.mp4', title: 'Hall' },
      { url: '../../vid/prop:2/IMG_0204.mp4', title: 'Room 01' },
      { url: '../../vid/prop:2/IMG_0242.mp4', title: 'Room 01 Overview' },
      { url: '../../vid/prop:2/IMG_0205.mp4', title: 'Dedicated Kitchen' },
      { url: '../../vid/prop:2/IMG_0206.mp4', title: 'Common Wash Basin' },
      { url: '../../vid/prop:2/IMG_0207.mp4', title: 'Room 02' },
      { url: '../../vid/prop:2/IMG_0233.mp4', title: 'Room 02 Balcony View' },
      { url: '../../vid/prop:2/IMG_0234.mp4', title: 'Balcony View' },
      { url: '../../vid/prop:2/IMG_0241.mp4', title: 'Room 02 Bathroom' },
      { url: '../../vid/prop:2/IMG_0244.mp4', title: 'Room 02 Overview' },
    ]
  }
];




function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Contact Tenant</h2>
        <p className="text-2xl  mb-4" >Tap on the coloured line</p>
        <p className="text-gray-700 mb-2">
          <strong>Name:</strong> Akash Patra
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Year:</strong> 2nd YEAR,EE
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:akashpatra@gmail.com" className="text-blue-600 underline">
            aakashpatra253@gmail.com
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Social Media:</strong>{" "}
          <a
            href="https://www.instagram.com/aakaas.he/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Instagram
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Social Media:</strong>{" "}
          <a
            href="https://wa.me/918170833961?text=Hi%20Akash,%20I%20am%20interested%20in%20your%20rental%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            WhatsApp(only Message)
          </a>
        </p>
        <button
          onClick={onClose}
          className="block w-full bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Components
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AniNavbar />
              <div style={{ backgroundColor: "white", padding: "10px", display: "inline-block" }}>
                <img src="/img/logo.jpeg" alt="Logo" width="100" height="100" />
              </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://wa.me/918170833961?"
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


const PropertyCard = React.memo(({ property }: { property: Property }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View Details
        </a>

        {/* Add margin-top to create space between buttons */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-green-700 transition-colors mt-4"
        >
          Contact Tenant
        </button>
        <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      </div>
    </div>
  );
});

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
      <Footer/>
    </div>
  );
};



function AniNavbar() {
  const [text, setText] = useState('');
  const initialText = "DDW we've got your back";
  const newText = " HHop in to Never Settle Again!";
  const indexRef = useRef(0);

  useEffect(() => {
    const typeAndErase = () => {
      if (indexRef.current < initialText.length) {
        setText((prev) => prev + initialText.charAt(indexRef.current));
        indexRef.current++;
      } else if (indexRef.current < initialText.length * 2) {
        setText((prev) => prev.slice(0, -1));
        indexRef.current++;
      } else if (indexRef.current < initialText.length * 2 + newText.length) {
        setText((prev) => prev + newText.charAt(indexRef.current - initialText.length * 2));
        indexRef.current++;
      } else {
        // Reset index to start over
        indexRef.current = 0;
        setText('');
      }
    };

    const interval = setInterval(typeAndErase, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-4 bg-gray-100">
      <span
        className="text-xl font-bold text-gray-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}
  const PropertyDetail = () => {
    const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'details'>('photos');
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
     
    
    
    
    const { id } = useParams(); // Get the property ID from the URL param
    const property = propertyData.find((p) => `${p.id}` === id); // Convert p.id to string
    
    // Save the active tab to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem(`activeTab-${id}`, activeTab);
    }, [activeTab, id]);


      // Retrieve the active tab from localStorage when the component mounts
      useEffect(() => {
        const savedTab = localStorage.getItem(`activeTab-${id}`);
        if (savedTab) {
          setActiveTab(savedTab as 'photos' | 'videos' | 'details');
        }
      }, [id]);
    


    if (!property) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Property not found!</h2>
            <p className="text-gray-600">The property you're looking for doesn't exist.</p>
          </div>
        </div>
      );
    }
    
    
  
  
  
   



    const renderCustomDetails = () => {
      if (property.id === ':1') {
        return (
          <>
            <p className="text-lg text-gray-600">
              This flat is located in a <span className="font-bold">prime area</span> 
              within the 200 m radius of <span className="font-bold">DAYANANDA SAGAR COLLEGE</span>, 
              convenient access to transportation, and shopping centers. The flat comes with all 
              necessary amenities, ensuring a comfortable living experience. Additionally, the 
              surrounding neighborhood is quiet and safe, making it an ideal choice for 
              <span className="font-bold"> STUDENTS</span>.
            </p>
            <p className="text-lg text-gray-600">
              The flat offers two spacious bedrooms, a modern kitchen with sufficient storage, 
              and a comfortable living space. The attached bathroom is equipped with a geyser 
              for hot water and well-maintained fittings. For those who enjoy natural light, 
              the large windows in the living areas provide a warm and inviting atmosphere 
              throughout the day.
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-bold">PRICING:</span> Rent: 
              <span className="font-bold"> 13,800/month</span> + Water/Electricity Bill 
              (approx <span className="font-bold"> 1000/month</span>)
              <br />
              <span className="font-bold">SECURITY DEPOSIT:</span> 
              <span className="font-bold"> 35,000</span>
              <br />
              One month rent will be deducted for 
              <span className="font-bold"> Paint Charges</span>. You will be provided with 
              <span className="font-bold"> Rental Agreement Authorized Signature</span>
              <br />
              <span className="font-bold">ALLOWED:</span> For 2 Students belonging to 
              <span className="font-bold"> 1st/2nd Year(Male Only)</span>
            </p>
          </>
        );
      } else if (property.id === ':2') {
        return (
          <>
            <p className="text-lg text-gray-600">
              This flat is located in a <span className="font-bold">prime area</span> 
              within the 200 m radius of <span className="font-bold">DAYANANDA SAGAR COLLEGE</span>, 
              convenient access to transportation, and shopping centers. The flat comes with all 
              necessary amenities, ensuring a comfortable living experience. Additionally, the 
              surrounding neighborhood is quiet and safe, making it an ideal choice for 
              <span className="font-bold"> STUDENTS</span>.
            </p>
            <p className="text-lg text-gray-600">
              The flat offers two spacious bedrooms, a modern kitchen with sufficient storage, 
              and a comfortable living space. The attached bathroom is equipped with a geyser 
              for hot water and well-maintained fittings. For those who enjoy natural light, 
              the large windows in the living areas provide a warm and inviting atmosphere 
              throughout the day.
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-bold">PRICING:</span> Rent: 
              <span className="font-bold"> 25,000/month</span> + Water/Electricity Bill 
              (approx <span className="font-bold"> 1000/month</span>)
              <br />
              <span className="font-bold">SECURITY DEPOSIT:</span> 
              <span className="font-bold"> 60,000</span>
              <br />
              One month rent will be deducted for 
              <span className="font-bold"> Paint Charges</span>. You will be provided with 
              <span className="font-bold"> Rental Agreement Authorized Signature</span>
              <br />
              <span className="font-bold">ALLOWED:</span> For 2 People 
            </p>
          </>
        );
      }
    };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div
          className="relative h-[60vh] rounded-xl overflow-hidden mb-8 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
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

        {/* Hero Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <img
              src={property.image}
              alt="Hero View"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'photos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'videos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'details' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
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
                <p className="mt-2 text-center text-gray-600">{photo.caption}</p>
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
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
                <p className="mt-2 text-center text-gray-600">{video.title}</p>
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
                <p>
                  <span className="font-bold">{property.location}</span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <p>
                  <span className="font-bold">{property.price}</span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Amenities</h3>
                <ul className="list-disc pl-5">
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>

              <section id="details" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Further Details About the Flat</h2>
                    <p className="mt-4 text-gray-600">
                      Learn more about the property and amenities
                    </p>
                  </div>
                  <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                      {renderCustomDetails()}
                    </div>
                  </div>
                </div>
              </section>

              {/* Map Section */}
              <section id="map" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Find Me Here
                    <br /> CLICK ON IT
                  </h2>
                  <a
                    href={property.id === ':1'
                      ? "https://www.google.com/maps?q=12.9113080,77.5665138"
                      : "https://www.google.com/maps?q=12.91166°,77.56592°"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={property.id === ':1'
                        ? "../../img/prop_1/IMG_D835C67C3AEF-1.jpeg"
                        : "../../img/prop_2/IMG_0249.jpg"}
                      alt="Map Location"
                      className="w-full h-auto cursor-pointer"
                    />
                  </a>
                </div>
              </section>
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
              aria-label="Close Media Lightbox"
            >
              ✖
            </button>
            {selectedMedia.includes('video') ? (
              <video
                src={selectedMedia}
                className="max-w-full max-h-[90vh] object-contain"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Selected Media"
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
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
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold">Contact</h3>
            <p>Phone: +91 81708 33961</p>
            <p>Email: aakashpatra253@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aakaas.he" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-white h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/aakashee/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white h-6 w-6" />
              </a>
              <a href="https://x.com/AAKASHEEX" target="_blank" rel="noopener noreferrer">
                <img src=".././x.png" alt="Custom X Icon" className="h-6 w-6 filter invert" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2025 DWella. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* HomePage Route */}
          <Route path="/" element={
            <> <AniNavbar />
              <HomePage />
            </>
          }/>
          
          
          {/* Property Detail Route */}
          <Route path="property/:id" element={<PropertyDetail />} />

          {/* You can add more routes for other pages like "About", "Contact", etc. */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
