"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Heart, ShoppingCart, LogIn } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeLink, setActiveLink] = useState("Home");

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveLink(navItems.find(item => item.href === `#${section}`)?.name || "Home");
        }
      }

      // Special case for Home (top of page)
      if (window.scrollY < 50) {
        setActiveLink("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === "#home" || href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Technologies", href: "#technologies" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl p-2 md:px-6 bg-white/30 dark:bg-slate-900/30 rounded-md border-2 border-white dark:border-slate-700/50 backdrop-blur-xl z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Left Side: Logo + Navigation Links */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image src="/codonlogo.png" alt="logo" width={20} height={30} />
            <span className="lg:hidden xl:inline text-[20px] font-black text-[#2F2B3D]/90 dark:text-white tracking-[0.25px] [text-shadow:1px_0_0_currentColor]">
              Codon Systems Inc
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`px-2 xl:px-2.5 py-0 rounded-md flex items-center gap-2 text-[13px] xl:text-[15px] font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300
                  ${activeLink === item.name
                      ? "text-[#7367F0] dark:text-[#7367F0] scale-110"
                      : "text-[#2F2B3D]/90 dark:text-slate-200"
                    }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          {/* Theme Toggler */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {mounted ? (
              theme === "dark" ? (
                <MdWbSunny className="w-6 h-6 text-yellow-500 transition-all" />
              ) : (
                <MdNightsStay className="w-6 h-6 text-[#2F2B3D]/90 transition-all" />
              )
            ) : (
              <div className="w-5 h-5" /> // Placeholder to prevent layout shift
            )}
          </Button>

          <Button
            onClick={() => window.location.href = 'https://dev.codonsystems.com/login'}
            className="bg-[#7367F0] text-white px-4 xl:px-5 py-2 rounded-md flex items-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors"
          >
            <LogIn className="w-4 h-5" />
            <span className="text-[14px] xl:text-[15px] font-medium capitalize">Sign In</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-black/5 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden mt-4 pb-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-4 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="w-full flex justify-center">
              <a
                href={item.href}
                onClick={(e) => {
                  handleScrollTo(e, item.href);
                  setIsMenuOpen(false);
                }}
                className={`px-2.5 py-2 rounded-md flex items-center justify-center gap-2 text-[15px] font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 w-full max-w-[200px]
                  ${activeLink === item.name
                    ? "text-[#7367F0] dark:text-[#7367F0] scale-110"
                    : "text-[#2F2B3D]/90 dark:text-slate-200"
                  }`}
              >
                {item.name}
              </a>
            </div>
          ))}
          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 w-full items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {mounted ? (
                theme === "dark" ? (
                  <MdWbSunny className="w-6 h-6 text-yellow-500 transition-all" />
                ) : (
                  <MdNightsStay className="w-6 h-6 text-[#2F2B3D]/90 transition-all" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </Button>
            <button
              onClick={() => window.location.href = 'https://dev.codonsystems.com/login'}
              className="bg-[#7367F0] text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors w-full max-w-[200px]"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-[15px] font-medium capitalize">
                Sign In
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
