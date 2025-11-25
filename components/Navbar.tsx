"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Features", "Team", "FAQ", "Contact us", "Pages"];

  return (
    <nav className="w-full p-3 md:px-8  bg-white/40 rounded-md border-2 border-white/70">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/codonlogo.png" alt="logo" width={20} height={30} />
          <span className="text-[22px] font-bold text-[#2F2B3D]/90 tracking-[0.25px]">
            Codon Systems Inc.
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-start gap-2.5">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className={`px-2.5 py-0 rounded-md flex items-center gap-2 text-[15px] font-medium hover:bg-black/5 transition-colors
                  ${item === "Home" ? "text-[#7367F0]" : "text-[#2F2B3D]/90"}`}
              >
                {item}
                {item === "Pages" && (
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
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:bg-black/5"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(47, 43, 61, 0.90)"
                strokeWidth="2"
              >
                <path d="M3 3h18v18H3z" />
                <circle cx="17" cy="7" r="2" />
              </svg>
            </Button>
            <Button className="bg-[#7367F0] text-white px-5 py-2 rounded-md flex items-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors">
              <svg
                className="w-4 h-5"
                viewBox="0 0 16 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 2h12v12H2z" />
                <circle cx="8" cy="8" r="2" />
              </svg>
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
            <Link
              key={item}
              href="#"
              className={`px-2.5 py-2 rounded-md flex items-center gap-2 text-[15px] font-medium hover:bg-black/5 transition-colors
                ${item === "Home" ? "text-[#7367F0]" : "text-[#2F2B3D]/90"}`}
            >
              {item}
              {item === "Pages" && (
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
          ))}
          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <button className="bg-[#7367F0] text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors">
              <svg
                className="w-4 h-5"
                viewBox="0 0 16 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 2h12v12H2z" />
                <circle cx="8" cy="8" r="2" />
              </svg>
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
