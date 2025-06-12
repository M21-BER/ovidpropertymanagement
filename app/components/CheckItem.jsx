export function CheckItemText({ text, addon }) {
  return (
    <li className="flex items-start gap-3 text-gray-900 mb-4">
      <div className="mt-1 min-w-[0.75rem] sm:min-w-[1rem] aspect-square rounded-full bgg shadow-md" />
      <p className={`text-sm sm:text-base leading-snug ${addon ? addon : ""}`}>
        {text}
      </p>
    </li>
  );
}

export function CheckItemDetail({ text, subtext }) {
  return (
    <li className="flex items-start gap-3 text-gray-900 mb-4">
      <div className="mt-1 min-w-[0.75rem] sm:min-w-[1rem] aspect-square rounded-full bgg shadow-md" />
      <div>
        <span className="text-sm sm:text-base leading-snug text-[#6e49a3] font-semibold">
          {text}
        </span>
        &nbsp;{subtext}
      </div>
    </li>
  );
}
