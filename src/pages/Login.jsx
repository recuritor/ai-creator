import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NeuralBackground from "../components/NeuralBackground";
import GlowButton from "../components/GlowButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Temporary auth logic (replace with backend later)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ email }));

    navigate("/builder");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* ✅ Centered content BELOW fixed navbar */}
      <div className="relative z-10 pt-24 min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-center drop-shadow-[0_0_20px_rgba(79,172,254,0.35)]">
            Welcome back
          </h1>
          <p className="text-gray-400 text-center mt-2 mb-6">
            Sign in to continue with Greywave
          </p>

          {/* Login Card */}
          <div className="bg-[#0F1623]/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-[0_0_40px_rgba(79,172,254,0.25)]">
            
            <form
              onSubmit={handleLogin}
              className="space-y-4"
              autoComplete="off"   // ✅ prevent browser autofill
            >
              <input
                type="email"
                placeholder="you@greywave.ai"
                required
                value={email}
                autoComplete="off" // ✅ prevent autofill
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
              />

              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                autoComplete="new-password" // ✅ prevent autofill
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
              />

              <GlowButton>Sign In</GlowButton>
            </form>

            <div className="text-center text-sm text-gray-400 mt-5">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:text-blue-300">
                Create one
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}