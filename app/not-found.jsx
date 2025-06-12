"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 px-6 sm:px-12 text-center">
      <Link href="/">
        <div className="block w-40 sm:w-56 md:w-72 lg:w-80 mx-auto mb-8">
          <Image
            src="/images/logo_dark.png"
            alt="logo ovid property management"
            width={320} // max width for largest size
            height={160} // keep aspect ratio
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </Link>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg mx-auto mb-10 px-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-[#0F0F16] hover:opacity-80 text-white font-semibold px-8 py-3 rounded shadow transition focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Go Back Home
      </button>
    </div>
  );
}
