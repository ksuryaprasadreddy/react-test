"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact us", href: "#" },
    {
      name: "Pages",
      href: "#",
      subItems: [
        { name: "Pricing", href: "/pricing" },
        { name: "Payment", href: "/payment" },
        { name: "Maintenance", href: "/maintenance" },
        { name: "Coming Soon", href: "/coming-soon" },
      ],
    },
  ];

  return (
    <nav className="w-full p-2 md:px-6 bg-white/40 dark:bg-slate-900/40 rounded-md border-2 border-white/70 dark:border-slate-700/50 backdrop-blur-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/codonlogo.png" alt="logo" width={20} height={30} />
          <span className="text-[22px] font-bold text-[#2F2B3D]/90 dark:text-white tracking-[0.25px]">
            Codon Systems Inc.
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-start gap-2.5">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-2.5 py-0 rounded-md flex items-center gap-2 text-[15px] font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors
                  ${item.name === "Home"
                      ? "text-[#7367F0] dark:text-[#7367F0]"
                      : "text-[#2F2B3D]/90 dark:text-slate-200"
                    }`}
                >
                  {item.name}
                  {item.subItems && (
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="flex items-center gap-6">
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

            <Button className="bg-[#7367F0] text-white px-5 py-2 rounded-md flex items-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors">
              <ShoppingCart className="w-4 h-5" />
              <span className="text-[15px] font-medium capitalize">
                Purchase Now
              </span>
            </Button>
          </div>
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
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`px-2.5 py-2 rounded-md flex items-center gap-2 text-[15px] font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors
                  ${item.name === "Home"
                    ? "text-[#7367F0] dark:text-[#7367F0]"
                    : "text-[#2F2B3D]/90 dark:text-slate-200"
                  }`}
              >
                {item.name}
                {item.subItems && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
              {/* Mobile Dropdown Items */}
              {item.subItems && (
                <div className="pl-6 mt-2 flex flex-col gap-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#7367F0] dark:hover:text-[#7367F0] transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <button className="bg-[#7367F0] text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors">
              <ShoppingCart className="w-4 h-5" />
              <span className="text-[15px] font-medium capitalize">
                Purchase Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
