import Image from "next/image";

export default function Header({ page, desc }) {
  return (
    <header className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
      {/* Background Image */}
      <Image
        src="/images/slider3.jpg"
        alt="Header Background"
        fill
        className="object-cover bg-center object-center z-0"
        priority
      />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
          {page ?? ""}
        </h1>
        {desc && (
          <p className="max-w-xl text-xs sm:text-sm md:text-base text-gray-200">
            {desc}
          </p>
        )}
      </div>
    </header>
  );
}
