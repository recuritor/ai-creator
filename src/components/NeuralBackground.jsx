export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient glow */}
      <div className="absolute -top-40 left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] animate-pulseSlow"></div>

      {/* Secondary glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[100px] animate-pulseSlower"></div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
