"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Laptop, User, Diamond, BadgeCheck, Code2, RefreshCw, Zap, Plug, Headphones, BookOpen, ShoppingCart } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MotionButton = motion(Button);

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Testimonial {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const FeatureCard = ({ title, description, icon: Icon }: Feature) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 relative overflow-hidden bg-[#7367f0]/10 rounded-full flex items-center justify-center">
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-8 h-8 text-[#7367f0]" />
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="text-center text-lg font-medium leading-7"
          animate={{
            color: isHovered ? "#7367f0" : "var(--foreground)",
          }}
        >
          {title}
        </motion.div>
        <div className="text-center text-[#2f2b3d]/70 dark:text-slate-400 text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({
  content,
  author,
  role,
  rating,
  image,
}: Testimonial) => (
  <motion.div
    className="flex flex-col justify-center items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-md shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] dark:shadow-none"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-[#2f2b3d]/70 dark:text-slate-300 text-sm">{content}</p>
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#7367f0] text-[#7367f0]" />
      ))}
    </div>
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={author}
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-[#2f2b3d]/90 dark:text-white text-sm font-medium">
          {author}
        </span>
        <span className="text-[#2f2b3d]/40 dark:text-slate-400 text-xs">
          {role}
        </span>
      </div>
    </div>
  </motion.div>
);

export default function HomePage() {

  const features: Feature[] = [
    {
      title: "Quality Code",
      description:
        "Code structure that all developers will easily understand and fall in love with.",
      icon: Code2,
    },
    {
      title: "Continuous Updates",
      description:
        "Free updates for the next 12 months, including new demos and features.",
      icon: RefreshCw,
    },
    {
      title: "Starter Kit",
      description:
        "Start your project quickly without having to remove unnecessary features.",
      icon: Zap,
    },
    {
      title: "API Ready",
      description:
        "Just change the endpoint and see your own data loaded within seconds.",
      icon: Plug,
    },
    {
      title: "Excellent Support",
      description:
        "An easy-to-follow doc with lots of references and code examples.",
      icon: Headphones,
    },
    {
      title: "Well Documented",
      description:
        "An easy-to-follow doc with lots of references and code examples.",
      icon: BookOpen,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      content:
        "Vuexy is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.",
      author: "Cecilia Payne",
      role: "CEO of Airbnb",
      rating: 5,
      image: "/api/placeholder/32/32",
    },
    {
      content:
        "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
      author: "Eugenia Moore",
      role: "Founder of Hubspot",
      rating: 5,
      image: "/api/placeholder/32/32",
    },
    {
      content:
        "This template is really clean & well documented. The docs are really easy to understand and it's always easy to find a screenshot from their website.",
      author: "Curtis Fletcher",
      role: "Design Lead at Dribbble",
      rating: 5,
      image: "/api/placeholder/32/32",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative w-full py-8 md:py-4 bg-[radial-gradient(ellipse_at_center,_#E0D8FF_0%,_#FCE5E6_100%)] dark:bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#2a1a2a_100%)] rounded-b-[5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="w-full md:w-[90%] mx-auto bg-gray-100 dark:bg-slate-800/50 rounded-md mb-8">
            <Navbar />
          </div>

          <motion.div
            className="space-y-6 text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-[42px] font-extrabold leading-tight bg-gradient-to-r from-[#FF66B2] to-[#3B82F6] text-transparent bg-clip-text">
              One dashboard to manage
              <br />
              all your businesses
            </h1>
            <div className="text-[rgba(47,43,61,0.90)] dark:text-slate-300 text-sm md:text-base">
              Production-ready & easy to use Admin Template
              <br />
              for Reliability and Customizability.
            </div>
          </motion.div>

          <motion.div className="flex justify-center mb-8">
            <MotionButton className="bg-[#7367F0] text-white rounded-md flex items-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-4 h-5" />
              <span className="text-sm font-medium capitalize">
                Purchase Now
              </span>
            </MotionButton>
          </motion.div>

          <motion.div
            className="flex justify-center relative z-10 -mb-20 md:-mb-80"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src="/dashboardSS.png"
              alt="dashboard"
              width={900}
              height={700}
              className="rounded-[0.5rem] w-full max-w-4xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 md:py-24 mt-20 md:mt-80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
              <span className="text-[#7367f0] text-sm font-medium">
                Useful Features
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white mb-2">
              <span className="relative inline-block overflow-visible">
                Everything you need
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium"> to start your next project</span>
            </h2>

            <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Not just a set of tools, the package includes ready-to-deploy
              conceptual application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f7fa] dark:bg-slate-900 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col text-center gap-8 lg:gap-14">
            {/* Left Column - Heading */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="inline-flex">
                  <div className="px-2.5 py-0.5 bg-[#7367f0]/20 rounded">
                    <span className="text-[#7367f0] text-sm font-medium">
                      Real Customers Reviews
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white">
                    <span className="relative inline-block overflow-visible">
                      What people say
                      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
                    </span>
                  </h2>
                  <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm">
                    See what our customers have to
                    <br />
                    say about their experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button className="p-2 bg-[#7367f0]/20 rounded-md hover:bg-[#7367f0]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7367f0]" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M15 18l-6-6 6-6"
                    />
                  </svg>
                </Button>
                <Button className="p-2 bg-[#7367f0]/20 rounded-md hover:bg-[#7367f0]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7367f0]" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M9 18l6-6-6-6"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#2f2b3d]/10 dark:border-slate-700">
            <div className="flex justify-center gap-8">
              {/* Add your brand logos here */}
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
            </div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-background"
      >
        <TeamSection />
      </motion.section>
      <section className="min-h-screen min-w-screen">
        <PricingSection />
      </section>
      <section>
        <div className="w-full p-6 flex flex-col items-center">
          <div className="w-full max-w-[1140px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              className="p-6 rounded-md border border-[#7367f0]/40 flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#7367f0]/10 rounded-full flex items-center justify-center overflow-hidden">
                <Laptop className="w-8 h-8 text-[#7367f0]" />
              </div>
              <div className="text-center">
                <div className="text-[#2f2b3d]/90 dark:text-white text-[28px] font-medium leading-[42px]">
                  7.1k+
                </div>
                <div className="text-[#2f2b3d]/70 dark:text-slate-400 text-[15px] font-medium leading-snug">
                  Support Tickets
                  <br />
                  Resolved
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-6 rounded-md border border-[#28c76f]/40 flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#28c76f]/10 rounded-full flex items-center justify-center overflow-hidden">
                <User className="w-8 h-8 text-[#28c76f]" />
              </div>
              <div className="text-center">
                <div className="text-[#2f2b3d]/90 dark:text-white text-[28px] font-medium leading-[42px]">
                  50k+
                </div>
                <div className="text-[#2f2b3d]/70 dark:text-slate-400 text-[15px] font-medium leading-snug">
                  Join creatives
                  <br />
                  community
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-6 rounded-md border border-[#00bad1]/40 flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#00bad1]/10 rounded-full flex items-center justify-center overflow-hidden">
                <Diamond className="w-8 h-8 text-[#00bad1]" />
              </div>
              <div className="text-center">
                <div className="text-[#2f2b3d]/90 dark:text-white text-[28px] font-medium leading-[42px]">
                  4.8/5
                </div>
                <div className="text-[#2f2b3d]/70 dark:text-slate-400 text-[15px] font-medium leading-snug">
                  Highly Rated
                  <br />
                  Products
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="p-6 rounded-md border border-[#ff9f43]/40 flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-[#ff9f43]/10 rounded-full flex items-center justify-center overflow-hidden">
                <BadgeCheck className="w-8 h-8 text-[#ff9f43]" />
              </div>
              <div className="text-center">
                <div className="text-[#2f2b3d]/90 dark:text-white text-[28px] font-medium leading-[42px]">
                  100%
                </div>
                <div className="text-[#2f2b3d]/70 dark:text-slate-400 text-[15px] font-medium leading-snug">
                  Money Back
                  <br />
                  Guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <FAQSection />
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full h-[40vh] bg-gradient-to-r from-pink-300 via-purple-300  to-[#7367f0] py-10">
        <div className="flex justify-center lg:w-1/2 px-4 text-center lg:text-left">
          <div>
            <h2 className="text-[#7367f0] text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#2f2b3d]/70 dark:text-white/80 text-lg sm:text-xl font-medium leading-relaxed mb-6">
              Start your project with a 14-day free trial
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#7367f0] text-white hover:bg-[#6357d0]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="https://via.placeholder.com/456x576"
            alt="dashboard image"
            width={200}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      </section>
      <section>
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
