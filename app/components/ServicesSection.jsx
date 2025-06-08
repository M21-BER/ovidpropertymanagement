import Link from "next/link";
import {
  FaHome,
  FaUserTie,
  FaBuilding,
  FaHandshake,
  FaFileContract,
} from "react-icons/fa";

const services = [
  {
    title: "Homeowners Association (HOA) Management",
    description:
      "Comprehensive management solutions tailored for residential communities and HOAs.",
    icon: <FaHome className="text-[#cd99cd] text-2xl sm:text-3xl" />,
    href: "/services/hoa-management",
  },
  {
    title: "Individual Rental Property Management",
    description:
      "Personalized care and oversight for single rental units or portfolios.",
    icon: <FaUserTie className="text-[#cd99cd] text-2xl sm:text-3xl" />,
    href: "/services/rental-property-management",
  },
  {
    title: "Commercial Property Management",
    description:
      "Professional services to manage and maintain your commercial assets efficiently.",
    icon: <FaBuilding className="text-[#cd99cd] text-2xl sm:text-3xl" />,
    href: "/services/commercial-property-management",
  },
  {
    title: "Property Sales & Leasing",
    description:
      "End-to-end support for selling, buying, or leasing residential and commercial properties.",
    icon: <FaHandshake className="text-[#cd99cd] text-2xl sm:text-3xl" />,
    href: "/services/property-sales-leasing",
  },
  {
    title: "Title Deed Services",
    description:
      "Reliable and accurate assistance in title deed registration and transfer processes.",
    icon: <FaFileContract className="text-[#cd99cd] text-2xl sm:text-3xl" />,
    href: "/services/title-deed-services",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 font-cormorant_garamond text-[#111]">
          Our <span className="text-[#133289]">Services</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="block group">
              <div className="bg-white border border-[rgba(0,0,0,0.1)] shadow-xl  rounded-2xl p-6 flex items-start justify-between h-full transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <div className="max-w-[80%]">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-800 font-bebas_Neue">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">{service.icon}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
