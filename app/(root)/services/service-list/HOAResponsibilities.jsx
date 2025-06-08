export default function HOAResponsibilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1
          className="text-[#133289]  font-extrabold mb-4 inline-block 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Homeowners Association (HOA) Responsibilities
          <span className="block h-1 w-20 sm:w-24 bg-[#133289]  mx-auto rounded-full mt-2"></span>
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
          <h2 className="text-[#133289]  font-semibold text-xl sm:text-2xl mb-2">
            General HOA Duties
          </h2>
          <ul className="list-disc list-inside space-y-1 custom-blue-list">
            <li>Enforcing HOA rules and regulations</li>
            <li>Coordinating maintenance and repairs for common areas</li>
            <li>Organizing and facilitating board meetings</li>
            <li>Managing homeowner communications and resolving concerns</li>
            <li>Handling HOA elections and governance procedures</li>
          </ul>
        </div>

        {/* 1. Financial Management */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#133289]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            📄 Financial Management
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>Budget preparation and financial planning</li>
            <li>Collecting dues, fees, and assessments</li>
            <li>Managing reserve funds and financial reporting</li>
            <li>Overseeing vendor payments and service contracts</li>
          </ul>
        </details>

        {/* 2. Property Maintenance & Repairs */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#133289]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            📄 Property Maintenance & Repairs
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>
              Coordinating upkeep of common areas (parks, pools, roads, etc.)
            </li>
            <li>
              Hiring and managing vendors for landscaping, cleaning, and repairs
            </li>
            <li>Ensuring compliance with safety and building codes</li>
            <li>Planning long-term property improvements and renovations</li>
          </ul>
        </details>

        {/* 3. Legal & Compliance Oversight */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#133289]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            📄 Legal & Compliance Oversight
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>Ensuring HOA policies align with local laws and regulations</li>
            <li>Managing disputes between homeowners and the board</li>
            <li>Handling legal documentation and contracts</li>
            <li>Overseeing insurance policies for common property</li>
          </ul>
        </details>

        {/* 4. Community Engagement & Development */}
        <details className="border-b border-gray-300 pb-4">
          <summary
            className="cursor-pointer font-semibold text-[#133289]  text-lg sm:text-xl md:text-2xl 
                       list-none marker:hidden select-none
                       flex items-center justify-between"
          >
            📄 Community Engagement & Development
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <li>Organizing events and activities for residents</li>
            <li>Responding to homeowner concerns and feedback</li>
            <li>Promoting community involvement and goodwill</li>
            <li>Ensuring harmonious living standards among residents</li>
          </ul>
        </details>
      </div>
    </section>
  );
}
