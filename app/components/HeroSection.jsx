"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    duration: 1000,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Background */}
      <div
        ref={sliderRef}
        className="keen-slider absolute inset-0 z-0 w-full h-full"
      >
        <div className="keen-slider__slide">
          <img
            src="/images/slider1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="keen-slider__slide">
          <img
            src="/images/slider2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="keen-slider__slide">
          <img
            src="/images/slider3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Property Management <br className="hidden md:block" /> & Title Deed
          Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
          From HOA oversight to rental and commercial property services, OVID
          ensures expert management, smooth transactions, and legally compliant
          title deeds—so your investments thrive with peace of mind.
        </p>
        <button className="bg-[#133289] px-6 py-2 sm:px-8 sm:py-3 rounded text-white font-semibold hover:opacity-80 transition-all">
          Partner with OVID Today
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        <div className="flex space-x-2">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
