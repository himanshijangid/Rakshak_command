import React, { useState } from "react";

/* ===== GALLERY IMAGES (PUBLIC FOLDER) ===== */
const galleryImages = [
  "/assets/gallery/img01.jpg",
  "/assets/gallery/img02.jpg",
  "/assets/gallery/img03.jpg",
  "/assets/gallery/img04.jpg",
  "/assets/gallery/img05.jpg",
  "/assets/gallery/img06.jpg",
  "/assets/gallery/img07.jpg",
  "/assets/gallery/img08.jpg",
  "/assets/gallery/img09.jpg",
  "/assets/gallery/img10.jpg",
  "/assets/gallery/img11.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ===== OPEN IMAGE ===== */
  const openImage = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  /* ===== CLOSE IMAGE ===== */
  const closeImage = () => setSelectedImage(null);

  /* ===== NEXT IMAGE ===== */
  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  /* ===== PREV IMAGE ===== */
  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
        data-aos="fade-down"
      >
        Our Gallery
      </h2>

      {/* 🖼️ Masonry Gallery */}
      <div
        className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
            onClick={() => openImage(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* 🔍 FULLSCREEN MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-yellow-400"
            onClick={closeImage}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 text-white text-4xl font-bold hover:text-yellow-400 select-none"
            onClick={showPrev}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[85vh] rounded-lg shadow-lg object-contain"
          />

          {/* Next */}
          <button
            className="absolute right-6 text-white text-4xl font-bold hover:text-yellow-400 select-none"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
