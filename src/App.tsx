import React from 'react';
import { Phone, Mail, Home, Instagram, Twitter, Linkedin, Camera, Video } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Home className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">2BHK</span>
                <br />
                <span className="ml-2 text-xl font-semibold">Click on pictures to View</span>
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
              loading="lazy"
            />
          </a>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">113,GROUND FLOOR,5TH CROSS, TEACHER'S COLONY, KUMARSWAMY LAYOUT,NEAR DAYANANDA COLLEGE(200 ),NEAR GSI</h1>
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
            <div className="photo-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: '../IMG/IMG_0149.jpg', caption: 'Entrance' },
                { url: '../IMG/IMG_0150.jpg', caption: 'Front View' },
                { url: '../IMG/IMG_0147.jpg', caption: 'Bedroom 1' },
                { url: '../IMG/IMG_0160.jpg', caption: 'Bedroom 2' },
                { url: '../IMG/IMG_0152.jpg', caption: 'Street View:Towards Main Road' },
                { url: '../IMG/IMG_0153.jpg', caption: 'Street View' },
                { url: '../IMG/IMG_0161.jpg', caption: 'Hall' },
                { url: '../IMG/IMG_0162.jpg', caption: 'Bathroom' },
                { url: '../IMG/IMG_0163.jpg', caption: 'Hallway' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                  aria-label={`Click to view image: ${item.caption}`}
                >
                  <img
                    src={item.url}
                    alt={`Apartment view ${index + 1}`}
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    loading="lazy"
                  />
                  <p className="mt-2 text-center text-gray-600">{item.caption}</p>
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
              <p className="text-lg mt-2 text-gray-600">Tap on the videos to view</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <a 
                href="../VID/IMG_0158.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative"
              >
                <video 
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src="../VID/IMG_0158.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">BEDROOM 01</p>
                </div>
              </a>

              {/* Video 2 */}
              <a 
                href="../VID/IMG_0157.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative"
              >
                <video 
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src="../VID/IMG_0157.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">BEDROOM 02</p>
                </div>
              </a>

              {/* Video 3 */}
              <a 
                href="../VID/IMG_0167.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative"
              >
                <video 
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src="../VID/IMG_0167.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">HALL</p>
                </div>
              </a>

              {/* Video 4 */}
              <a 
                href="../VID/IMG_0168.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative"
              >
                <video 
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src="../VID/IMG_0168.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">KITCHEN</p>
                </div>
              </a>

              {/* Video 5 */}
              <a 
                href="../VID/IMG_0159.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative"
              >
                <video 
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src="../VID/IMG_0159.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">BATHROOM</p>
                </div>
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
                      <p>Don't call, only WhatsApp. I will get in touch with you shortly.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <a href="mailto:aakashpatra253@gmail.com" className="font-semibold text-blue-600">aakashpatra253@gmail.com</a>
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
          This flat is located in a <span className="font-bold">prime area</span> within the 200 m radius of <span className="font-bold">DAYANANDA SAGAR COLLEGE</span>, 50m to <span className="font-bold"></span> convenient access to transportation, and shopping centers. The flat comes with all necessary amenities, ensuring a comfortable living experience. Additionally, the surrounding neighborhood is quiet and safe, making it an ideal choice for <span className="font-bold">STUDENTS</span>.
        </p>
        <p className="text-lg text-gray-600">
          The flat offers two spacious bedrooms, a modern kitchen with sufficient storage, and a comfortable living space. The attached bathroom is equipped with a geyser for hot water and well-maintained fittings. For those who enjoy natural light, the large windows in the living areas provide a warm and inviting atmosphere throughout the day.
        </p>
        <p className="text-lg text-gray-600">
          Other features include 24/7 electricity and water supply, making daily living more convenient. Don't miss out on this wonderful opportunity to live in a well-equipped, affordable flat in a <span className="font-bold">prime location</span>.
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold">PRICING:</span> Rent: <span className="font-bold">13,800/month</span> + Water/Electricity Bill (approx <span className="font-bold">1000/month</span>)
          <br />
          <span className="font-bold">SECURITY DEPOSIT:</span> <span className="font-bold">35,000</span><p>One month rent will be deducted for  <span className="font-bold">Paint Charges</span>.You will be provided with <span className="font-bold">Rental Agreement Authorized Signature</span></p>
          <br />
          <span className="font-bold">ALLOWED:</span> For 2 Students belonging to <span className="font-bold">1st/2nd Year:</span>
          <br />
          <br />
          <span className="font-bold">LOCATION:</span>113,GROUND FLOOR,5TH CROSS, TEACHER'S COLONY, KUMARSWAMY LAYOUT,NEAR DAYANANDA COLLEGE(200 ),NEAR GSI</p>
      </div>
    </div>
  </div>
      </section>
       

      {/* Map Section */}
<section id="map" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Find Me Here</h2>

            <a 
            
      href="https://maps.app.goo.gl/1aaYxdLooTJ5DsMa6?g_st=com.google.maps.preview.copy"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img 
        src="../IMG/IMG_D835C67C3AEF-1.jpeg" 
        alt="Map Location"
        className="w-full h-auto cursor-pointer"
      />
    </a>
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
    </ErrorBoundary>
  );
}

export default App;

