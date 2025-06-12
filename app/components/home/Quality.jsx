export default function Quality() {
  const qualities = [
    {
      num: "01",
      title: "END-TO-END PROPERTY MANAGEMENT",
      desc: "From HOAs to rentals and commercial properties, we manage every aspect — financials, tenant relations, repairs, and compliance — so you don't have to.",
    },
    {
      num: "02",
      title: "TITLE DEED & LEGAL SERVICES",
      desc: "We ensure your property transactions are smooth, legally compliant, and hassle-free — from verifying ownership to processing title transfers.",
    },
    {
      num: "03",
      title: "TRANSPARENCY & PROFESSIONALISM",
      desc: "Our approach is rooted in trust and clarity — you get timely reports, responsive support, and a reliable team aligned with your goals.",
    },
    {
      num: "04",
      title: "COMMUNITY-FOCUSED APPROACH",
      desc: "We promote community harmony through events, clear communication, and resolving disputes — ensuring positive living for all stakeholders.",
    },
  ];
  return (
    <section className="text-white py-10 px-4 sm:px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 font-cormorant_garamond text-[#111]">
        WHY <span className="tg ">CHOOSE US</span>
      </h2>

      <p className="text-center max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-black mb-8 sm:mb-10">
        At OVID Property Management & Title Deed, we simplify property ownership
        by delivering expert services across HOA, rentals, sales, and legal
        title transactions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {qualities.map((item, index) => (
          <div
            key={index}
            className="group p-4 rounded shadow-sm bg-[#0F0F16] transition-all duration-300 hover:bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3] hover:text-white hover:shadow-none"
          >
            <p className="font-bold bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3] bg-clip-text text-transparent font-bebas_Neue text-3xl sm:text-4xl lg:text-5xl mb-2 transition-all duration-300 group-hover:text-white">
              {item.num}
            </p>
            <h3 className="text-[#fff] font-semibold mb-1  font-bebas_Neue text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 transition-all duration-300 group-hover:text-white">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
