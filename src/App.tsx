import { SetStateAction, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Building2,
  Camera,
  Video,
  X,
  Instagram,
  Linkedin
} from "lucide-react";

// Data for house locations and links
const houseData = [
  {
    id: "1",
    location: "113, Ground Floor, 5th Cross, Teacher's Colony",
    description: "Kumarswamy Layout, Near Dayananda Sagar College",
    image: "../../img/IMG_4845.jpg",
    price: "₹13,800/month",
    amenities: ["2 BHK", "Semi-Furnished", "24/7 Water Supply", "Geyser","College Distance: 150m","Main market-vicinity"],
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
  },
  // {
  //   id: "2",
  //   location: "45, Maple Street, Greenview Apartments",
  //   description: "Downtown Area, Near City Center",
  //   image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  //   price: "₹35,000/month",
  //   amenities: ["3 BHK", "Semi-Furnished", "Parking", "Security"],
  //   photos: [],
  //   videos: []
  // },
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
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PropertyFinder</span>
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

// House Tour Page
function HouseTourPage() {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const house = houseData[0]; // For demo purposes, showing first house

  const openPhotoLightbox = (url: SetStateAction<string>) => {
    setCurrentImage(url);
    setIsPhotoLightboxOpen(true);
  };

  const openVideoLightbox = (url: SetStateAction<string>) => {
    setCurrentVideo(url);
    setIsVideoLightboxOpen(true);
  };

  const closePhotoLightbox = () => {
    setIsPhotoLightboxOpen(false);
  };

  const closeVideoLightbox = () => {
    setIsVideoLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center text-gray-900 hover:text-blue-600">
              <Home className="h-6 w-6" />
              <span className="ml-2">Back to Listings</span>
            </a>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Contact Tenant
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[60vh]">
        <div
          onClick={() => openPhotoLightbox("../../img/IMG_0151.jpg")}
          className="cursor-pointer w-full h-full"
        >
          <img
            src="../../img/IMG_0151.jpg"
            alt="Apartment Hero"
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              {house.location}
            </h1>
            <ul className="text-base sm:text-xl space-y-2">
              <li>2 SEPARATE ROOMS</li>
              <li>BED AND ALMIRAH EQUIPPED</li>
              <li>GEYSER + ATTACHED BATHROOM</li>
              <li>24 HR WATER AND ELECTRICITY SUPPLY</li>
              <li>VICINITY OF COLLEGE AND MAIN MARKET AREA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <section id="photos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold mt-4">Property Photos</h2>
            <p className="text-lg mt-2 text-gray-600">Tap on the photos to view</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {house.photos.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openPhotoLightbox(item.url)}
                />
                <p className="mt-2 text-center text-gray-600">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Video className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold mt-4">Property Videos</h2>
            <p className="text-lg mt-2 text-gray-600">Tap on the videos to view</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {house.videos.map((video, index) => (
              <div
                key={index}
                onClick={() => openVideoLightbox(video.url)}
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative cursor-pointer"
              >
                <video
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Further Details Section */}
      <section id="details" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Further Details About the Flat</h2>
            <p className="mt-4 text-gray-600">Learn more about the property and amenities</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                This flat is located in a <span className="font-bold">prime area</span> within the 200 m radius of <span className="font-bold">DAYANANDA SAGAR COLLEGE</span>, convenient access to transportation, and shopping centers. The flat comes with all necessary amenities, ensuring a comfortable living experience. Additionally, the surrounding neighborhood is quiet and safe, making it an ideal choice for <span className="font-bold">STUDENTS</span>.
              </p>
                <p className="text-lg text-gray-600">
                The flat offers two spacious bedrooms, a modern kitchen with sufficient storage, and a comfortable living space. The attached bathroom is equipped with a geyser for hot water and well-maintained fittings. For those who enjoy natural light, the large windows in the living areas provide a warm and inviting atmosphere throughout the day.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">PRICING:</span> Rent: <span className="font-bold">13,800/month</span> + Water/Electricity Bill (approx <span className="font-bold">1000/month</span>)
                <br />
                <span className="font-bold">SECURITY DEPOSIT:</span> <span className="font-bold">35,000</span>
                <br />
                One month rent will be deducted for <span className="font-bold">Paint Charges</span>. You will be provided with <span className="font-bold">Rental Agreement Authorized Signature</span>
                <br />
                <span className="font-bold">ALLOWED:</span> For 2 Students belonging to <span className="font-bold">1st/2nd Year(Male Only)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Me Here<br /> CLICK ON IT</h2>
          <a
            href="https://maps.app.goo.gl/1aaYxdLooTJ5DsMa6?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="../../img/IMG_D835C67C3AEF-1.jpeg"
              alt="Map Location"
              className="w-full h-auto cursor-pointer"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/aakaas.he/" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/aakashee/" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400">© 2024 AKASH PATRA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lightboxes */}
      {isPhotoLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closePhotoLightbox}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={currentImage}
              alt="Selected view"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {isVideoLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closeVideoLightbox}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              className="max-w-full max-h-[80vh] object-contain mx-auto"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}

// App Component
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

export default App;