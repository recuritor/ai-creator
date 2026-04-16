import { useState } from "react";
import Navbar from "../components/Navbar";
import NeuralBackground from "../components/NeuralBackground";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <div className="relative h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* ✅ EXACT viewport control below navbar */}
      <div className="relative z-10 pt-20 h-[calc(100vh-5rem)] px-6 md:px-12 flex flex-col">
        
        {/* HEADER (compact) */}
        <div className="text-center mb-8 mt-4">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-[0_0_30px_rgba(79,172,254,0.3)]">
            Intelligent pricing for intelligent creation
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Only pay more when Greywave generates more
          </p>
        </div>

        {/* ✅ PRICING GRID (fills remaining space) */}
        <div className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            title="Starter"
            price="Free"
            description="Explore Greywave"
            features={[
              "1 Website",
              "Basic AI layouts",
              "Limited generations",
            ]}
            compact
            highlighted={selectedPlan === "Starter"}
            onSelect={() => setSelectedPlan("Starter")}
          />

          <PricingCard
            title="Pro"
            price="$29"
            description="Build real products"
            features={[
              "10 Websites",
              "Advanced AI layouts",
              "Custom themes",
              "Priority support",
            ]}
            compact
            highlighted={selectedPlan === "Pro"}
            onSelect={() => setSelectedPlan("Pro")}
          />

          <PricingCard
            title="Studio"
            price="$99"
            description="For teams & agencies"
            features={[
              "Unlimited websites",
              "Full AI control",
              "White‑label export",
            ]}
            compact
            highlighted={selectedPlan === "Studio"}
            onSelect={() => setSelectedPlan("Studio")}
          />
        </div>
      </div>
    </div>
  );
}