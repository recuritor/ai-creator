import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isActive = (path) =>
    location.pathname === path
      ? "text-white"
      : "text-gray-400 hover:text-white";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0D14]/70">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide drop-shadow-[0_0_20px_rgba(79,172,254,0.4)]"
        >
          Greywave
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8 text-sm">

          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>

          {isLoggedIn ? (
            /* ✅ USER PROFILE */
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F1623] border border-gray-700">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center font-semibold">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-gray-300 text-sm">
                  {user.name || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-400 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            /* ✅ LOGIN BUTTON */
            <Link to="/login" className={isActive("/login")}>
              Login
            </Link>
          )}

          {/* CTA */}
          <Link
            to="/builder"
            className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 glow font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
}