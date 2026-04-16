import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NeuralBackground from "../components/NeuralBackground";
import GlowButton from "../components/GlowButton";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/builder");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* ✅ CENTERED BELOW FIXED NAVBAR */}
      <div className="relative z-10 pt-24 min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center drop-shadow-[0_0_20px_rgba(79,172,254,0.35)]">
            Create your account
          </h1>
          <p className="text-gray-400 text-center mt-2 mb-6">
            Start building websites with Greywave AI
          </p>

          {/* Signup Card */}
          <div className="bg-[#0F1623]/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-[0_0_40px_rgba(79,172,254,0.25)]">
            <form onSubmit={handleSignup} className="space-y-4">

              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
              />

              <input
                type="email"
                placeholder="you@greywave.ai"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
              />

              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
              />

              <GlowButton>Create Account</GlowButton>
            </form>

            <div className="text-center text-sm text-gray-400 mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}