import { useEffect, useState } from "react";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import resume from "../assets/myresume025.pdf";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="flex items-center space-x-2 group"
                onClick={() => handleNavClick("#home")}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Majd
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href={resume}
                download="majd-alfarfour-resume.pdf"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </a>

              <a
                href="https://github.com/CoderM0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <IoLogoGithub size="1.5rem" />
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hidden bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <FaMoon size="1.1rem" />
                ) : (
                  <FaSun size="1.1rem" />
                )}
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <RxCross2 size="1.5rem" />
                ) : (
                  <HiMenuAlt3 size="1.5rem" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
              <a
                href={resume}
                download="majd-alfarfour-resume.pdf"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </a>

              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <IoLogoGithub size="1.5rem" />
                </a>

                <button
                  onClick={toggleTheme}
                  className="p-3 hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
                >
                  {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
}
