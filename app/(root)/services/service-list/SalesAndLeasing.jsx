export default function SalesAndLeasing() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#133289]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Sales & Leasing
          <span className="block h-1 w-20 sm:w-24 bg-[#133289]  mx-auto rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          Clear responsibilities involved in selling and leasing properties.
        </p>
      </header>

      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <details className="border-b border-gray-300 pb-4" open>
          <summary
            className="cursor-pointer font-semibold text-[#133289] text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            Property Sales Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>
              <strong>Market Analysis & Pricing</strong> – Conduct research to
              determine competitive pricing.
            </li>
            <li>
              <strong>Property Listing & Advertising</strong> – Promote
              properties through brokers, online platforms, signage, and
              networking.
            </li>
            <li>
              <strong>Buyer Screening & Negotiation</strong> – Vet potential
              buyers and negotiate favorable terms.
            </li>
            <li>
              <strong>Legal Documentation & Compliance</strong> – Ensure
              contracts, title deeds, and ownership transfers are legally sound.
            </li>
          </ul>
        </details>

        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#133289] text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            Property Leasing Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>
              <strong>Tenant Selection & Screening</strong> – Advertise
              vacancies, conduct background checks, and select qualified
              tenants.
            </li>
            <li>
              <strong>Lease Agreement Preparation</strong> – Draft and manage
              legally compliant lease contracts.
            </li>
            <li>
              <strong>Rent Collection & Financial Oversight</strong> – Set
              rental rates, collect payments, and manage financial reporting.
            </li>
            <li>
              <strong>Property Maintenance & Tenant Relations</strong> – Ensure
              upkeep, handle tenant concerns, and enforce lease terms.
            </li>
            <li>
              <strong>Lease Renewals & Exit Management</strong> – Manage lease
              extensions, terminations, and security deposit returns.
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
