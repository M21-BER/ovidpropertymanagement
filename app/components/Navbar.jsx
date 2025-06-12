"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check in case page is loaded scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0F0F16] bg-opacity-90" : "bg-transparent"
      } text-[#fff]`}
    >
      {/* Remove <Header /> if you don't want it */}
      <div className="max-w-7xl mx-auto px-10 py-2 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo_light.png"
            width={120}
            height={80}
            alt="logo ovid property management"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="font-jost font-light hidden md:flex space-x-6 text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {["HOME", "ABOUT", "SERVICES", "ADDRESS"].map((text) => (
            <Link
              key={text}
              href={
                text === "HOME"
                  ? "/"
                  : text === "SERVICES"
                  ? "/#services"
                  : `/${text.toLowerCase()}`
              }
              className="border-b-2 border-b-transparent hover:border-b-[#cd99cd] hover:font-semibold  transition-all duration-400"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0F0F16] text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="font-bold text-lg sm:text-xl">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            <HiOutlineX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-[14px] sm:text-base md:text-lg lg:text-xl">
          {["HOME", "ABOUT", "SERVICES", "ADDRESS"].map((text) => (
            <Link
              key={text}
              href={
                text === "HOME"
                  ? "/"
                  : text === "SERVICES"
                  ? "/#services"
                  : `/${text.toLowerCase()}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
