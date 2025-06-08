export default function RentalPropertyManagement() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#133289]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Rental & Commercial Property Management
          <span className="block h-1 w-20 sm:w-24 bg-[#133289]  mx-auto rounded-full mt-2"></span>
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
            className="cursor-pointer font-semibold text-[#133289]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            Individual Rental Property Management Responsibilities
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>
              <strong>Tenant Screening & Leasing</strong> – Conduct background
              checks, verify applications, and draft lease agreements.
            </li>
            <li>
              <strong>Rent Collection & Financial Management</strong> – Set
              rental rates, collect payments, and handle financial reporting.
            </li>
            <li>
              <strong>Maintenance & Repairs</strong> – Coordinate regular upkeep
              and emergency repairs.
            </li>
            <li>
              <strong>Tenant Relations & Conflict Resolution</strong> – Address
              complaints, resolve disputes, and ensure compliance with lease
              terms.
            </li>
            <li>
              <strong>Property Inspections</strong> – Conduct periodic
              inspections to assess condition and compliance.
            </li>
            <li>
              <strong>Legal & Compliance Management</strong> – Adhere to
              landlord-tenant laws and ensure regulatory compliance.
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
