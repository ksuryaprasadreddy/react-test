import React, { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface FooterLinksSection {
  title: string;
  links: Array<{
    text: string;
    href: string;
    isNew?: boolean;
  }>;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const sections: FooterLinksSection[] = [
    {
      title: "Pages",
      links: [
        { text: "Pricing", href: "/pricing" },
        { text: "Payment", href: "/payment", isNew: true },
        { text: "Maintenance", href: "/maintenance" },
        { text: "Coming Soon", href: "/coming-soon" },
      ],
    },
    {
      title: "Products",
      links: [
        { text: "Page Builder", href: "/page-builder" },
        { text: "Admin Dashboards", href: "/admin-dashboards" },
        { text: "UI Kits", href: "/ui-kits" },
        { text: "Illustrations", href: "/illustrations" },
      ],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe email:", email);
  };

  return (
    <footer className="flex flex-col w-full">
      {/* Main Footer Section */}
      <div className="bg-[#2F2B3D] dark:bg-slate-950 text-white px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-items-center">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Image src="/codonlogo.png" alt="logo" width={20} height={30} />
                <span className="text-xl font-semibold">Codon Systems Inc.</span>
              </div>

              <p className="text-gray-400 text-sm">
                Most developer friendly & highly customisable Admin Dashboard
                Template.
              </p>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">Subscribe to newsletter</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-[#363248] dark:bg-slate-800 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#7367F0]"
                  />
                  <Button
                    type="submit"
                    className="px-4 py-2 bg-[#7367F0] rounded text-sm font-medium hover:bg-[#7367F0]/90 transition-colors"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Links Sections */}
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-medium">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {link.text}
                        {link.isNew && (
                          <span className="px-2 py-0.5 text-xs bg-[#7367F0] rounded">
                            New
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Download our app</h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 bg-[#363248] dark:bg-slate-800 rounded hover:bg-[#363248]/80 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                  </svg>
                  <div className="text-sm">
                    <div className="opacity-70">Download on the</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 bg-[#363248] dark:bg-slate-800 rounded hover:bg-[#363248]/80 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                    />
                  </svg>
                  <div className="text-sm">
                    <div className="opacity-70">Download on the</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#1a1a1a] dark:bg-slate-900 w-full border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 flex items-center gap-1">
            © 2024 Pixinvent, Made with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            for a better web.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
