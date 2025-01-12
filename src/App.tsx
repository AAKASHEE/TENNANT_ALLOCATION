import React from 'react';
import { Phone, Mail, Home, Instagram, Twitter, Linkedin, Camera, Video } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">2BHK Flat TAP ON IMAGES TO SEE FULL VIEW</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#photos" className="text-gray-600 hover:text-blue-600">Photos</a>
              <a href="#videos" className="text-gray-600 hover:text-blue-600">Videos</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <a href='../IMG/IMG_0151.jpg' target="_blank" rel="noopener noreferrer">
          <img 
            src='../IMG/IMG_0151.jpg'
            alt="Apartment Hero"
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </a>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">113,GROUND FLOOR,5TH CROSS, TEACHER'S COLONY, KUMARSWAMY LAYOUT,NEAR DAYANANDA COLLEGE</h1>
            <ol className="text-xl">
              <li>2 SEPARATE ROOMS</li>
              <li>BED AND ALMIRAH EQUIPPED</li>
              <li>GEYSER + ATTACHED BATHROOM</li>
              <li>SEPARATE KITCHEN SPACE PROVIDED</li>
              <li>24 HR WATER and ELECTRICITY SUPPLY</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <section id="photos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold mt-4">Property Photos</h2>
          </div>
          <div className="photo-grid  ">
            {[
              '../IMG/IMG_0149.jpg',
              '../IMG/IMG_0150.jpg',
              '../IMG/IMG_0147.jpg',
              '../IMG/IMG_0152.jpg',
              '../IMG/IMG_0153.jpg',
              
            ].map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img 
                  src={url}
                  alt={`Apartment view ${index + 1}`}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer portrait-photo "
                />
              </a>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://example.com/video1"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <p className="text-gray-600">Video Tour 1</p>
            </a>
            <a 
              href="https://example.com/video2"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <p className="text-gray-600">Video Tour 2</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <p className="mt-4 text-gray-600">Get in touch to schedule a viewing</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="font-semibold">+91 8170833961</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-semibold">aakashpatra253@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Owner</p>
                    <p className="font-semibold">AKASH PATRA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
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
    </div>
  );
}

export default App;
