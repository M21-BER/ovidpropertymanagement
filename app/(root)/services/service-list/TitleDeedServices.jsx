import { CheckItemText } from "../../../components/CheckItem";

export default function TitleDeedServices() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-12 text-center">
        <h1
          className="text-[#6e49a3] font-extrabold mb-4 inline-block
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative"
        >
          Title Deed Services
          <span className="block h-1 w-20 sm:w-24 bgg mx-auto rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg italic">
          “Ensuring legal clarity and smooth ownership transfers for every
          property transaction”
        </p>
      </header>

      <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <details className="border-b border-gray-300 pb-4" open>
          <summary
            className="cursor-pointer font-semibold text-[#6e49a3]  text-lg sm:text-xl md:text-2xl
                       list-none marker:hidden select-none
                       flex items-center justify-between mb-5"
          >
            Title Deed Services Details
            <span className="transition-transform duration-200 ease-in-out details-open:rotate-90">
              ▶
            </span>
          </summary>
          <ul className="list-disc list-inside mt-3 space-y-2 custom-blue-list">
            <CheckItemText
              text="Investigate the property's ownership history to confirm legal
              ownership."
            />
            <CheckItemText
              text="Investigate the property's ownership history to confirm legal
              ownership."
            />
            <CheckItemText
              text="Identify any liens, unpaid taxes, or legal claims that could
              affect the title."
            />
            <CheckItemText text="Ensure the property boundaries align with legal descriptions." />
            <CheckItemText
              text="Ensure all necessary paperwork is complete with relevant
              authorities."
            />
            <CheckItemText text="Ensure payment has been successfully processed and finalized." />
            <CheckItemText text="Facilitate the final steps of property transactions." />
            <CheckItemText text="Facilitate the transfer of ownership." />
          </ul>
        </details>
      </div>
    </section>
  );
}
