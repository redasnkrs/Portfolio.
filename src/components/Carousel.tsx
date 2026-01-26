import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-[400px] sm:h-[500px] w-full m-auto group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl border border-white/10"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-colors">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-colors">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === slideIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
