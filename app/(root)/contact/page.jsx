import Header from "@/app/components/Header";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="text-gray-800">
      <Header page="Contact Us" />
      <section className="py-12 px-4 sm:px-6 md:px-8 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Section */}
          <div>
            {/* <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2> */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 font-cormorant_garamond text-[#111]">
              Get in <span className="text-[#133289]">Touch</span>
            </h2>

            <ul className="space-y-6 text-base sm:text-lg">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 mt-1" size={20} />
                <div>
                  <strong>Location:</strong>
                  <p className="text-gray-600">
                    OVID Business Park Sky Villa Block 3, 1st Floor Gerji, Addis
                    Ababa, Ethiopia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-blue-600 mt-1" size={20} />
                <div>
                  <strong>Phone:</strong>
                  <p className="text-gray-600">(+251)910967434</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-blue-600 mt-1" size={20} />
                <div>
                  <strong>Email:</strong>
                  <p className="text-gray-600">info@ovidproperty.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#0F0F16] text-[#cd99cd] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#cd99cd] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-[#cd99cd] px-4 py-2 rounded-md focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#cd99cd]mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-[#cd99cd] px-4 py-2 rounded-md focus:outline-none focus:ring "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#cd99cd] mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full border border-[#cd99cd] px-4 py-2 rounded-md focus:outline-none focus:ring"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#cd99cd] hover:opacity-60 text-black px-6 py-2 rounded-md font-medium transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
