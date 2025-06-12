import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[rgba(255,255,255,0.1)] bg-[#0F0F16]  text-[#cd99cd] py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Signup */}
        <div>
          <h3 className="font-bold mb-2">Don't Miss Out</h3>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2 text-[#cd99cd] bg-transparent border border-[#cd99cd]"
            />
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="w-full p-2 text-[#cd99cd] bg-transparent border border-[#cd99cd]"
            />
            <button
              type="submit"
              className="bgg rounded cursor-pointer text-[#fff] px-4 py-2 font-bold"
            >
              Sign Up
            </button>

            {/* <button
              className="bg-gradient-to-r from-[#cd99cd] via-[#9c6db0] to-[#6e49a3]
    hover:from-[#6e49a3] hover:via-[#9c6db0] hover:to-[#cd99cd]
    text-white text-[clamp(0.875rem,2.5vw,1rem)]
    px-[clamp(1rem,4vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)]
    rounded font-semibold opacity-80 hover:opacity-100
    transition-all duration-300"
            >
              Sign Up
            </button> */}
          </form>
          <p className="text-gray-400 text-xs mt-2">
            This site is intended for users in Ethiopia. By signing up, you
            agree that your personal data will be collected and used in
            accordance with OVID’s Privacy Policy and Terms of Use.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <Link href="/about">
                About OVID Property Management & Title Deed{" "}
              </Link>
            </li>
            <li>
              <Link href="/address">Contact Information</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        {/* <div>
          <h3 className="font-bold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Contact Us</li>
            <li>Services</li>
            <li></li>
          </ul>
        </div> */}

        {/* Contact Info & Socials */}
        <div>
          <h3 className="font-bold mb-2">Connect With Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#cd99cd]" />
              (+251)910967434
            </li>
            <li className="flex items-center gap-2">
              <IoMail className="text-[#cd99cd]" />
              info@ovidpropertymanagement.com
            </li>

            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#cd99cd] mt-1" />
              <span>
                OVID Business Park Sky Villa Block 3, 1st Floor Gerji, Addis
                Ababa, Ethiopia
              </span>
            </li>
            <li className="flex gap-4 pt-2 text-lg">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cd99cd]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cd99cd]"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cd99cd]"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        <p>SITE MAP | PRIVACY POLICY | TERMS OF SERVICE</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} OVID Property Management & Title
          Deed
        </p>
      </div>
    </footer>
  );
}
