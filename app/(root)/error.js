"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExclamation } from "react-icons/fa";

export default function Error() {
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

      <FaExclamation className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        An unexpected error occurred. Please try again or go back to the
        homepage.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Retry
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
