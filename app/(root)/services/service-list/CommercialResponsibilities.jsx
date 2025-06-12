import { CheckItemDetail } from "../../../components/CheckItem";
export default function CommercialResponsibilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#6e49a3]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Commercial Property Management Responsibilities
          <span className="block h-1 w-20 sm:w-24 bgg mx-auto rounded-full mt-2"></span>
        </h1>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <details className="border-b border-gray-300 pb-4" open>
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            Commercial Property Management Responsibilities
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemDetail
              text="Lease Negotiations & Tenant Management"
              subtext="– Handle lease agreements, renewals, and tenant relations."
            />
            <CheckItemDetail
              text="Building Maintenance & Upgrades"
              subtext="– Oversee routine maintenance, renovations, and regulatory compliance."
            />
            <CheckItemDetail
              text="Financial Oversight & Budgeting"
              subtext="– Manage operating expenses, income reports, and vendor contracts."
            />
            <CheckItemDetail
              text="Security & Safety Compliance"
              subtext="– Ensure security systems, fire codes, and laws are met."
            />
            <CheckItemDetail
              text="Marketing & Vacancy Management"
              subtext="– Promote available spaces and attract tenants."
            />
            <CheckItemDetail
              text="Legal & Risk Management"
              subtext="– Manage contracts, insurance policies, and legal disputes."
            />
          </ul>
        </details>
      </div>
    </section>
  );
}
