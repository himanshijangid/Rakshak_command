
import React, { useState } from "react";

// 🔹 Import images directly from assets folder
import img01 from "../assets/gallery/img01.jpg";
import img02 from "../assets/gallery/img02.jpg";
import img03 from "../assets/gallery/img03.jpg";
import img04 from "../assets/gallery/img04.jpg";
import img05 from "../assets/gallery/img05.jpg";
import img06 from "../assets/gallery/img06.jpg";
import img07 from "../assets/gallery/img07.jpg";
import img08 from "../assets/gallery/img08.jpg";
import img09 from "../assets/gallery/img09.jpg";
import img10 from "../assets/gallery/img10.jpg";
import img11 from "../assets/gallery/img11.jpg";



const GalleryPage = () => {
  // 🔹 All gallery images in one array
  const galleryImages = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Open image in fullscreen
  const openImage = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  // 🔹 Close fullscreen view
  const closeImage = () => {
    setSelectedImage(null);
  };

  // 🔹 Show next image
  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // 🔹 Show previous image
  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* 🖼️ Masonry-style responsive gallery */}
     <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => openImage(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto mb-4 rounded-lg object-contain"
            />
          </div>
        ))}
      </div>

      {/* 🔍 Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-yellow-400"
            onClick={closeImage}
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            className="absolute left-6 text-white text-4xl font-bold hover:text-yellow-400 select-none"
            onClick={showPrev}
          >
            ‹
          </button>

          {/* Selected Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[85vh] rounded-lg shadow-lg object-contain"
          />

          {/* Next button */}
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
};

export default GalleryPage;
