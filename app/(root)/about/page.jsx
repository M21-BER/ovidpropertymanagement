"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/images/slider/slider1.jpg";
import img2 from "@/public/images/slider/slider2.jpg";
import img4 from "@/public/images/slider/slider3.jpg";
import Header from "../../components/Header";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

export default function AboutPage() {
  return (
    <duv className="text-gray-800">
      <Header
        page="ABOUT US"
        desc="  OVID Property Management & Title Deed delivers seamless property
          management, sales, and title services with professionalism,
          transparency, and a commitment to maximizing your investment—so you
          can own with confidence, not complexity."
        img={img4}
      />
      <section className="py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Firm Leadership
            </h2>
            <p className="mb-5 text-base sm:text-lg leading-relaxed">
              At OVID Property Management & Title Deed, we offer comprehensive
              property management solutions that ensure smooth operations for
              homeowner associations (HOAs), individual rental properties, and
              commercial real estate. Beyond management, we also facilitate
              property sales and leasing, guiding owners and investors
              confidently through the real estate market. Our expertise extends
              to title deed services, providing seamless, legally compliant
              transactions that protect your investments and save you valuable
              time—without the usual hassle.
            </p>
            <p className="mb-5 text-base sm:text-lg leading-relaxed">
              Committed to professionalism, transparency, and efficiency, we
              manage everything from tenant relations and financial oversight to
              maintenance, compliance, and strategic asset management. Whether
              you are a homeowner, landlord, or investor, our goal is to
              maximize your property's value while delivering personalized,
              exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <Image
              src={img1}
              placeholder="blur"
              alt="Leadership team"
              className="rounded-lg shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              width={600}
              height={400}
            />
          </motion.div>
        </div>

        {/* Second Section: Image Left, Text Right */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-last md:order-first"
          >
            <Image
              src={img2}
              placeholder="blur"
              alt="Company culture"
              className="rounded-lg shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              width={600}
              height={400}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p className="mb-5 text-base sm:text-lg leading-relaxed">
              At OVID Property Management & Title Deed, we prioritize building
              strong, lasting relationships with property owners, tenants, and
              community stakeholders. Our hands-on approach, industry expertise,
              and dedication to quality set us apart, making us your trusted
              real estate partner.
            </p>
            <p className="mb-5 text-base sm:text-lg leading-relaxed">
              Let us take the hassle out of property ownership and ensure your
              investments thrive. Partner with OVID Property Management & Title
              Deed today—where excellence meets peace of mind.
            </p>
          </motion.div>
        </div>
      </section>
    </duv>
  );
}
