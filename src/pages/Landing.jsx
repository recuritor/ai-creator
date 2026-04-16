import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NeuralBackground from "../components/NeuralBackground";
import FeatureCard from "../components/FeatureCard";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight drop-shadow-[0_0_50px_rgba(79,172,254,0.35)]">
            Create Websites
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 animate-pulseSlow">
              With Artificial Intelligence
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
            Greywave is an AI‑powered platform that converts prompts into
            production‑ready websites — instantly.
          </p>

          <div className="mt-14 flex justify-center gap-6">
            <Link
              to="/builder"
              className="px-12 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 glow font-semibold tracking-wide hover:scale-105 transition"
            >
              Start Creating
            </Link>

            <button className="px-12 py-4 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            title="Neural Design Intelligence"
            description="AI understands layout, hierarchy, spacing, and visual balance automatically."
          />

          <FeatureCard
            title="Instant Site Generation"
            description="Describe your idea and get a live website preview within seconds."
          />

          <FeatureCard
            title="Production‑Grade Output"
            description="Clean, scalable UI structures ready for real deployment."
          />
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
                Pricing that scales with intelligence
            </h2>
            <p className="mt-4 text-gray-400">
                Start free. Upgrade when Greywave does more of the work.
            </p>
        </div>
        <div className="text-center">
            <a
            href="/pricing"
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 glow font-semibold hover:scale-105 transition"
            >
            View Pricing
            </a>
        </div>
      </section>

    
      {/* FOOTER */}
      <footer className="relative py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Greywave — AI Website Creator
      </footer>
    </div>
  );
}
