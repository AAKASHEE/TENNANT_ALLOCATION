import React from "react";
import { ImageGrid } from "./ImageGallery/ImageGrid";
import { Lightbox } from "./ImageGallery/Lightbox";
import { useLightboxControls } from "./hooks/useLightboxControls";

const sampleImages = [
  { id: "1", url: "../img/IMG_0147.jpg", title: "GANGSTA Scene" },
  { id: "2", url: "../img/IMG_0149.jpg", title: "DEATH NOTE" },
  { id: "3", url: "../img/IMG_0150.jpg", title: "MEN ARE BRAVE" },
  { id: "4", url: "../img/IMG_0151.jpg", title: "LOST" },
  { id: "5", url: "../img/IMG_0152.jpg", title: "ANGRY" },
  { id: "6", url: "../img/IMG_0153.jpg", title: "DECISIVE" },
];

function App() {
  const {
    currentImage: currentPhoto,
    openLightbox: openPhotoLightbox,
    closeLightbox: closePhotoLightbox,
    showNext: showNextPhoto,
    showPrevious: showPreviousPhoto,
  } = useLightboxControls(sampleImages);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        {/* Photos Section */}
        <h1 className="text-3xl font-bold text-center mb-8">Property Photos</h1>
        <ImageGrid images={sampleImages} onImageClick={openPhotoLightbox} />
        <Lightbox
          image={currentPhoto}
          onClose={closePhotoLightbox}
          onNext={showNextPhoto}
          onPrevious={showPreviousPhoto}
        />

     
    <div className="relative h-[40vh] sm:h-[60vh]">
    <a href="../img/IMG_0151.jpg" target="_blank" rel="noopener noreferrer">
      <img
        src="../img/IMG_0151.jpg"
        alt="Apartment Hero"
        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
        loading="lazy"
      />
          </a>
        </div>
      </div>
    </div>
    
  );
}


export default App;
