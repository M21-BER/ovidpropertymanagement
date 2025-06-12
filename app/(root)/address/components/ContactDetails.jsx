import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronCircleDown,
} from "react-icons/fa";

export default function ContactDetails() {
  return (
    <details
      className="w-full  bg-[#0F0F16] rounded-sm border border-[rgba(255,255,255,0.1)] shadow-sm p-4"
      open={false}
    >
      <summary
        className="cursor-pointer font-semibold  tg text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
      >
        CONTACT INFORMATION
        <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
          <FaChevronCircleDown color="#fff" />
        </span>
      </summary>
      <ul className="space-y-6 text-base sm:text-lg mt-2">
        <li className="flex items-start gap-4">
          <FaMapMarkerAlt
            className="text-[#fff] mt-1 flex-shrink-0"
            size={20}
          />
          <div>
            <strong className="tg">LOCATION</strong>
            <p className="text-gray-100 max-w-xs sm:max-w-md">
              OVID Business Park Sky Villa Block 3, 1st Floor Gerji, Addis
              Ababa, Ethiopia
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <FaPhoneAlt className="text-[#fff] mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="tg">PHONE</strong>
            <p className="text-gray-600">(+251) 910 967 434</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <FaEnvelope className="text-[#fff] mt-1 flex-shrink-0" size={20} />
          <div>
            <strong className="tg">EMAIL</strong>
            <p className="text-gray-100">info@ovidproperty.com</p>
          </div>
        </li>
      </ul>
    </details>
  );
}
