import { CheckItemDetail } from "../../../components/CheckItem";
export default function SalesAndLeasing() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#6e49a3]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Sales & Leasing
          <span className="block h-1 w-20 sm:w-24 bgg mx-auto rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          Clear responsibilities involved in selling and leasing properties.
        </p>
      </header>

      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <details className="border-b border-gray-300 pb-4" open>
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3] text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            Property Sales Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemDetail
              text="Market Analysis & Pricing"
              subtext="– Conduct research to
              determine competitive pricing."
            />
            <CheckItemDetail
              text="Property Listing & Advertising"
              subtext=" – Promote
              properties through brokers, online platforms, signage, and
              networking."
            />
            <CheckItemDetail
              text="Buyer Screening & Negotiation"
              subtext=" – Vet potential
              buyers and negotiate favorable terms."
            />
            <CheckItemDetail
              text="Legal Documentation & Compliance"
              subtext=" – Ensure
              contracts, title deeds, and ownership transfers are legally sound."
            />
          </ul>
        </details>

        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3] text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            Property Leasing Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemDetail
              text="Tenant Selection & Screening"
              subtext="– Advertise vacancies, conduct background checks, and select qualified tenants."
            />
            <CheckItemDetail
              text="Lease Agreement Preparation"
              subtext="– Draft and manage legally compliant lease contracts."
            />
            <CheckItemDetail
              text="Rent Collection & Financial Oversight"
              subtext="– Set rental rates, collect payments, and manage financial reporting."
            />
            <CheckItemDetail
              text="Property Maintenance & Tenant Relations"
              subtext="– Ensure upkeep, handle tenant concerns, and enforce lease terms."
            />
            <CheckItemDetail
              text="Lease Renewals & Exit Management"
              subtext="– Manage lease extensions, terminations, and security deposit returns."
            />
          </ul>
        </details>
      </div>
    </section>
  );
}
