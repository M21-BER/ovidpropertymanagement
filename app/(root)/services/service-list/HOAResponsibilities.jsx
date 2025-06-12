import { CheckItemText } from "../../../components/CheckItem";

export default function HOAResponsibilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1
          className="text-[#6e49a3]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Homeowners Association (HOA) Responsibilities
          <span className="block h-1 w-20 sm:w-24 bgg  mx-auto rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          A detailed overview of the core duties and responsibilities handled by
          HOAs to maintain a thriving community.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        {/* General HOA Duties */}
        <div>
          <h2 className="text-[#6e49a3]  font-semibold text-xl sm:text-2xl mb-5">
            General HOA Duties
          </h2>
          <ul className="list-disc list-inside space-y-1 custom-blue-list">
            <CheckItemText text="Enforcing HOA rules and regulations" />
            <CheckItemText text="Coordinating maintenance and repairs for common areas" />
            <CheckItemText text="Organizing and facilitating board meetings" />
            <CheckItemText text="Managing homeowner communications and resolving concerns" />
            <CheckItemText text="Handling HOA elections and governance procedures" />
          </ul>
        </div>

        {/* 1. Financial Management */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            📄 Financial Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemText text="Budget preparation and financial planning" />
            <CheckItemText text="Collecting dues, fees, and assessments" />
            <CheckItemText text="Managing reserve funds and financial reporting" />
            <CheckItemText text="Overseeing vendor payments and service contracts" />
          </ul>
        </details>

        {/* 2. Property Maintenance & Repairs */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            📄 Property Maintenance & Repairs
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemText text="Coordinating upkeep of common areas (parks, pools, roads, etc.)" />
            <CheckItemText text="Hiring and managing vendors for landscaping, cleaning, and repairs" />
            <CheckItemText text="Ensuring compliance with safety and building codes" />
            <CheckItemText text="Planning long-term property improvements and renovations" />
          </ul>
        </details>

        {/* 3. Legal & Compliance Oversight */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            📄 Legal & Compliance Oversight
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemText text="Ensuring HOA policies align with local laws and regulations" />
            <CheckItemText text="Managing disputes between homeowners and the board" />
            <CheckItemText text="Handling legal documentation and contracts" />
            <CheckItemText text="Overseeing insurance policies for common property" />
          </ul>
        </details>

        {/* 4. Community Engagement & Development */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            📄 Community Engagement & Development
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemText text="Organizing events and activities for residents" />
            <CheckItemText text="Responding to homeowner concerns and feedback" />
            <CheckItemText text="Promoting community involvement and goodwill" />
            <CheckItemText text="Ensuring harmonious living standards among residents" />
          </ul>
        </details>
      </div>
    </section>
  );
}
