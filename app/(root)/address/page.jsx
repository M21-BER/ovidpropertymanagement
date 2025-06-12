import Header from "@/app/components/Header";
import ContactDetails from "./components/ContactDetails";
import img5 from "@/public/images/slider/slider6.jpg";
export default function ContactPage() {
  return (
    <div className="text-gray-900 bg-gray-50 min-h-screen">
      <Header page="CONTACT INFO" img={img5} />

      <section className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 font-cormorant_garamond text-gray-900">
              Get in <span className="tg">Touch</span>
            </h2>

            <ContactDetails />

            {/* Responsive Map iframe with fixed max height */}
            <div
              className="mt-12 w-full rounded-lg overflow-hidden shadow-md border border-gray-200"
              style={{ maxHeight: 350 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3073.5852590610793!2d38.8167272!3d8.9944882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85003f43b213%3A0x5333cdb2fc4489a7!2sOvid%20Business%20Park!5e1!3m2!1sen!2set!4v1749728428894!5m2!1sen!2set"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OVID Business Park Location"
                className="border-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#0F0F16] border text-gray-100 border-[rgba(255,255,255,0.1)] rounded-lg shadow-md p-8 min-h-[350px]">
            <h3 className="text-2xl  font-semibold mb-8 tg">LET'S TALK</h3>

            <form className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6e49a3] focus:border-[#6e49a3] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2  focus:ring-[#6e49a3] focus:border-[#6e49a3] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2  focus:ring-[#6e49a3] focus:border-[#6e49a3] transition"
                />
              </div>

              <button
                type="submit"
                className="bgg hover:opacity-80 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
