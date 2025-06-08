"use client";
import { useEffect, useState } from "react";

export default function Showcase() {
  const [videoSrc, setVideoSrc] = useState("/videos/main.mp4");

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.webkitConnection ||
      navigator.mozConnection;

    if (connection) {
      const speed = connection.effectiveType;
      if (["slow-2g", "2g", "3g"].includes(speed)) {
        setVideoSrc("/videos/main.mp4"); // Replace with a lightweight video if needed
      } else {
        setVideoSrc("/videos/main.mp4");
      }
    }
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full bg-[#0F0F16]">
      {/* Video Section */}
      <div className="relative w-full md:w-3/5 aspect-video md:aspect-auto md:h-auto clip-diagonal overflow-hidden">
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/5 bg-[#0F0F16] flex items-center justify-center py-10 px-6 md:px-8">
        <div className="text-[#fff] max-w-xl text-center md:text-left">
          <h1 className="text-3xl  md:text-4xl font-bold mb-4 text-[#cd99cd]">
            OVID GROUP
          </h1>
          <p className="text-base md:text-lg text-black-300 mb-6">
            Innovating Excellence Across Diverse Industries.
          </p>
          <button
            className="bg-[#133289]  text-white px-6 py-3 rounded hover:opacity-70 transition"
            onClick={() => {
              window.location.href = "https://ovid-group.com";
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
