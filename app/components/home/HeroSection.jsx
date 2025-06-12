"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import slider2 from "@/public/images/slider/slider2.jpg";
import slider3 from "@/public/images/slider/slider3.jpg";
import slider4 from "@/public/images/slider/slider4.jpg";
import slider5 from "@/public/images/slider/slider5.jpg";
import slider6 from "@/public/images/slider/slider6.jpg";
import slider7 from "@/public/images/slider/slider7.jpg";
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
        {[slider7, slider6, slider5, slider4, slider3, slider2].map(
          (img, index) => (
            <div key={index + 1} className="keen-slider__slide relative">
              <Image
                src={img}
                alt={`Slider ${index + 1}`}
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          )
        )}
      </div>

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          PROPERTY MANAGEMENT <br className="hidden md:block" /> & TITLE DEED
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
          From HOA oversight to rental and commercial property services, OVID
          ensures expert management, smooth transactions, and legally compliant
          title deeds—so your investments thrive with peace of mind.
        </p>
        {/* <button className="bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3] cursor-pointer px-6 py-2 sm:px-8 sm:py-3 rounded text-white font-semibold hover:bg-[#6e49a3] transition-all">
          Partner with OVID Today
        </button> */}

        <button
          className="bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3]
    hover:from-[#6e49a3] hover:via-[#9c6db0] hover:to-[#cd99cd]
    text-white text-[clamp(0.875rem,2.5vw,1rem)]
    px-[clamp(1rem,4vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)]
    rounded font-semibold opacity-100 hover:opacity-80
    transition-all duration-300"
        >
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
