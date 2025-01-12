import React, { useEffect, useCallback } from "react";
import { ImageData } from "../types/gallery";

interface LightboxProps {
  image: ImageData | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrevious,
}) => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    },
    [onClose, onNext, onPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  if (!image) return null;

  // Determine if the content is a video
  const isVideo = /\.(mp4|webm|ogg)$/i.test(image.url);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl p-2"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 text-white text-2xl p-4"
        aria-label="Previous media"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-2xl p-4"
        aria-label="Next media"
      >
        ›
      </button>

      {/* Media Content */}
      <div className="max-w-4xl max-h-[90vh] p-4">
        {isVideo ? (
          <video
            className="max-w-full max-h-[80vh] object-contain"
            controls
            autoPlay
          >
            <source src={image.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={image.url}
            alt={image.title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        )}
        <p className="text-white text-center mt-4">{image.title}</p>
      </div>
    </div>
  );
};
