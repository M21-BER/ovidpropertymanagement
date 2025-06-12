export default function CallToAction() {
  return (
    <section className="bg-[#0F0F16] text-white py-10 text-center px-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Are you looking for a Construction & Industrial Experts?
      </h2>
      {/* <button className="bgg cursor-pointer text-[#fff] font-bold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded shadow transition-opacity duration-300 hover:opacity-80">
        Request a Quote
      </button> */}

      <button
        className="bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3]
    hover:from-[#6e49a3] hover:via-[#9c6db0] hover:to-[#cd99cd]
    text-white text-[clamp(0.875rem,2.5vw,1rem)]
    px-[clamp(1rem,4vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)]
    rounded font-semibold opacity-100 hover:opacity-80
    transition-all duration-300"
      >
        Request a Quote
      </button>
    </section>
  );
}
