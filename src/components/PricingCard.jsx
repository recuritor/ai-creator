export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
  onSelect,
  compact = false,
}) {
  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer rounded-xl border ring-1 ring-white/5 transition
        ${highlighted
          ? "border-blue-500 bg-[#0F1623] shadow-[0_0_40px_rgba(79,172,254,0.35)] scale-[1.015]"
          : "border-gray-700 bg-[#0F1623]/70 hover:border-gray-500"}
        ${compact ? "p-5 h-full" : "p-7"}
        flex flex-col justify-between
      `}
    >
      {/* TOP */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{description}</p>

        {/* PRICE */}
        <div className="mt-4 mb-3">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-gray-400 text-xs"> / month</span>
        </div>

        {/* FEATURES */}
        <ul className="space-y-1.5 text-sm text-gray-300">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-blue-400 text-xs">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        className={`
          mt-4 w-full py-2 rounded-lg text-sm font-semibold transition
          ${highlighted
            ? "bg-gradient-to-r from-blue-500 to-indigo-600 glow"
            : "border border-gray-600 hover:border-gray-400"}
        `}
      >
        Choose {title}
      </button>
    </div>
  );
}
