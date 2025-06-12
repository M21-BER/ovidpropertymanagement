import { CheckItemDetail } from "../../../components/CheckItem";
export default function RentalPropertyManagement() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#6e49a3]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Rental & Commercial Property Management
          <span className="block h-1 w-20 sm:w-24 bgg  mx-auto rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          A breakdown of responsibilities involved in managing individual rental
          units and commercial properties effectively.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <details className="border-b border-gray-300 pb-4" open>
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            Individual Rental Property Management Responsibilities
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemDetail
              text="Tenant Screening & Leasing"
              subtext="– Conduct background checks, verify applications, and draft lease agreements."
            />
            <CheckItemDetail
              text="Rent Collection & Financial Management"
              subtext="– Set rental rates, collect payments, and handle financial reporting."
            />
            <CheckItemDetail
              text="Maintenance & Repairs"
              subtext="– Coordinate regular upkeep and emergency repairs."
            />
            <CheckItemDetail
              text="Tenant Relations & Conflict Resolution"
              subtext="– Address complaints, resolve disputes, and ensure compliance with lease terms."
            />
            <CheckItemDetail
              text="Property Inspections"
              subtext="– Conduct periodic inspections to assess condition and compliance."
            />
            <CheckItemDetail
              text="Legal & Compliance Management"
              subtext="– Adhere to landlord-tenant laws and ensure regulatory compliance."
            />
          </ul>
        </details>
      </div>
    </section>
  );
}
