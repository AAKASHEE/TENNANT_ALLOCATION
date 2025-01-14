import { SetStateAction, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import {
  Home,
  Building2,
  Camera,
  Video,
  X,
  Instagram,
  Linkedin
} from "lucide-react";
import '@fontsource/poppins';

const houseData = [
  {
    id: "1",
    location: "113, Ground Floor, 5th Cross, Teacher's Colony",
    description: "Kumarswamy Layout, Near Dayananda Sagar College",
    image: "../../img/IMG_4845.jpg",
    price: "₹13,800/month",
    amenities: ["2 BHK", "Semi-Furnished", "24/7 Water Supply", "Geyser", "College Distance: 150m", "Main market-vicinity"],
    photos: [
      { url: '../../img/IMG_0149.jpg', caption: 'Entrance' },
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
  }
];

// Contact Dialog Component
interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

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

// Homepage Component
function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                DW <br /> Hop in to never settle
              </span>
              <div style={{ backgroundColor: "white", padding: "10px", display: "inline-block" }}>
                <img src="../../img/logo.jpeg" alt="Logo" width="100" height="100" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Available Properties
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {houseData.map((house) => (
            <div
              key={house.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={house.image}
                alt={house.location}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {house.location}
                </h2>
                <p className="text-gray-600 mb-4">{house.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{house.price}</p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {house.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`/house/${house.id}`}
                    className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-green-700 transition-colors"
                  >
                    Contact Tenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}

// HouseTourPage Component
function HouseTourPage() {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id } = useParams();
  const house = houseData.find((h) => h.id === id); // Dynamic data based on URL

  if (!house) return <div>House not found</div>;

  const openPhotoLightbox = (url: SetStateAction<string>) => {
    setCurrentImage(url);
    setIsPhotoLightboxOpen(true);
  };

  const openVideoLightbox = (url: SetStateAction<string>) => {
    setCurrentVideo(url);
    setIsVideoLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">House Tour</span>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="text-lg font-semibold text-gray-900"
            >
              Contact Tenant
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900">{house.location}</h1>
        <p className="text-xl text-gray-600 mb-4">{house.description}</p>
        <p className="text-2xl text-blue-600 mb-6">{house.price}</p>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Photos</h3>
          <div className="grid grid-cols-3 gap-6">
            {house.photos.map((photo, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openPhotoLightbox(photo.url)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          {isPhotoLightboxOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-96 h-96">
                <img src={currentImage} alt="Photo Lightbox" className="w-full h-full object-cover" />
                <button
                  onClick={() => setIsPhotoLightboxOpen(false)}
                  className="absolute top-4 right-4 text-white bg-gray-900 p-2 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          )}
          <h3 className="text-2xl font-semibold">Videos</h3>
          <div className="grid grid-cols-3 gap-6">
            {house.videos.map((video, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openVideoLightbox(video.url)}
              >
                <img
                  src="../../img/video-thumbnail.jpg"
                  alt={video.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <span className="text-gray-800">{video.title}</span>
              </div>
            ))}
          </div>
          {isVideoLightboxOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-96 h-96">
                <video controls className="w-full h-full rounded-lg">
                  <source src={currentVideo} />
                </video>
                <button
                  onClick={() => setIsVideoLightboxOpen(false)}
                  className="absolute top-4 right-4 text-white bg-gray-900 p-2 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}

 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/house/:id" element={<HouseTourPage />} />
      </Routes>
    </Router>
  );
}
return default App
