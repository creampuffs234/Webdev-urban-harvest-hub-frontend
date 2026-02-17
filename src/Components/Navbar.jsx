import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/categories", label: "Categories" },
  { path: "/admin", label: "Admin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-end w-full bg-transparent">
      <nav className="fixed top-0 w-full text-Atlantis shadow-xl z-[100] h-[9vh] flex items-center justify-between md:justify-center bg-black/5 border-b-2 backdrop-blur-sm helvetica px-6 md:px-0">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-chelsea-cucumber text-4xl focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-24">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="bg-black hover:bg-chelsea-cucumber hover:text-white px-5 rounded-full font-bold text-3xl transition-all p-2 shadow-[4px_4px_0px_0px_#4a793b]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors mx-4 text-2xl"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[9vh] left-0 w-full bg-white/95 backdrop-blur-md flex flex-col items-center space-y-8 py-10 md:hidden border-b-2 border-atlantis shadow-2xl">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-chelsea-cucumber font-bold text-3xl transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;