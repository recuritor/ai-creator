export default function GlowButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        px-10 py-4
        rounded-xl
        bg-gradient-to-r from-blue-500 to-indigo-600
        text-white
        font-semibold
        shadow-[0_0_40px_rgba(79,172,254,0.45)]
        hover:scale-105
        transition
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}