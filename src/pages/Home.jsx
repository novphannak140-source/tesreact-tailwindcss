import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import img1 from "../assets/img/Demon Slayer - Animegoodys_com.jpg";
import img2 from "../assets/img/DEMON SLAYER OFFICIAL ART.jpg";
import img3 from "../assets/img/download.jpg";
import img4 from "../assets/img/Inosuke.jpg";

const Home = () => {
  // Put all images into an array
  const images = [img1, img2, img3, img4];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="relative group">
        {/* Display current image */}
        <img
          src={images[current]}
          className="w-full h-80 object-cover rounded-lg"
          alt="carousel"
        />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 
                     bg-black/50 text-white p-2 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 
                     bg-black/50 text-white p-2 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
