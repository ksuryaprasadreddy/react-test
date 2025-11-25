"use client";

import { useState } from "react";
import Navbar from "@/components/navbarfootertheme/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Laptop, User, Diamond, BadgeCheck, ShoppingCart } from "lucide-react";
import { MdOutlineCloud, MdOutlineSecurity, MdOutlineLayers, MdOutlineSmartToy, MdOutlineHeadsetMic } from "react-icons/md";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/navbarfootertheme/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/navbarfootertheme/Footer";
import PopulatArticles from "@/components/PopularArticles";
import FlowChart from "@/components/FlowChart";


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

const FeatureCard = ({ title, description, icon: Icon, className }: Feature & { className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`flex flex-col items-center gap-4 ${className}`}
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
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8 text-[#7367f0]" />
        </motion.div>
      </div>
      <h3 className="text-xl font-semibold text-[#2f2b3d]/90 dark:text-white text-center">
        {title}
      </h3>
      <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-center leading-relaxed max-w-sm">
        {description}
      </p>
    </motion.div>
  );
};

const TestimonialCard = ({ content, author, role, rating, image }: Testimonial) => (
  <motion.div
    className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
        />
      ))}
    </div>
    <p className="text-[#2f2b3d]/70 dark:text-slate-300 mb-6 leading-relaxed">
      "{content}"
    </p>
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={author}
        width={40}
        height={40}
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
      title: "Cloud Platform",
      description:
        "Cloud based platform to all your business data and tools",
      icon: MdOutlineCloud,
    },
    {
      title: "Security",
      description:
        "Secure authentication with ability to integrate with any industry standard authentication models",
      icon: MdOutlineSecurity,
    },
    {
      title: "API-Driven Architecture",
      description:
        "The system is built on independent microservices to ensure maximum scalibility, resilience, and technology diversity. This architectural choice facilitates out-of-process execution and enabels faster, seamless integration with any proprietary platform.",
      icon: MdOutlineLayers,
    },
    {
      title: "AI Agents for Claims and compliance management",
      description:
        "In built AI agents for automated data processing, Claim intake and triage, applying contract, claim and cancel rules to ensure compliance.",
      icon: MdOutlineSmartToy,
    },
    {
      title: "Excellent Support",
      description:
        "Integrated with unified communications service offering features like video conferencing, chat, and business calling.",
      icon: MdOutlineHeadsetMic,
    },
    // {
    //   title: "Well Documented",
    //   description:
    //     "An easy-to-follow doc with lots of references and code examples.",
    //   icon: BookOpen,
    // },
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
        id="home"
        className="relative w-full py-8 md:py-4 bg-[radial-gradient(ellipse_at_center,_#C6B8FF_0%,_#FCE5E6_100%)] dark:bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#2a1a2a_100%)] rounded-b-[5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 pt-32">
          <Navbar />

          <motion.div
            className="space-y-6 text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-[42px] font-black leading-tight bg-[linear-gradient(90deg,#2563EB_0%,#2563EB_15%,#7C4DFF_30%,#6A3FF0_80%,#DB2777_100%)] text-transparent bg-clip-text max-w-4xl mx-auto drop-shadow-xl">
              A comprehensive platform for managing Service contracts and Extended warranties
            </h1>

            <div className="text-[rgba(47,43,61,0.90)] dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              A digital solution designed to Streamline and automate the process of managing extended warranties, service contracts, and other post-purchase protection plans.
            </div>
          </motion.div>

          <motion.div className="flex justify-center mb-8">
            <MotionButton className="bg-[#7367F0] text-white rounded-md flex items-center gap-2 shadow-[0_2px_6px_rgba(115,103,240,0.30)] hover:bg-[#7367F0]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <ShoppingCart className="w-4 h-5" /> */}
              <span className="text-sm font-medium capitalize">
                Join us now
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
              src="/Dashboard.png"
              alt="dashboard"
              width={900}
              height={700}
              className="rounded-[0.5rem] w-full max-w-4xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="pt-16 md:pt-24 mt-20 md:mt-80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
              <span className="text-[#7367f0] text-sm font-medium">
                Features
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white mb-2">
              <span className="relative inline-block overflow-visible">
                Everything you need
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium"> to manage your business</span>
            </h2>

            {/* <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Not just a set of tools, the package includes ready-to-deploy
              conceptual application.
            </p> */}
          </motion.div>

          <div className="flex flex-wrap gap-6 max-w-6xl mx-auto px-4 md:px-6 mt-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section Placeholder */}
      <section id="solutions" className="w-full px-1 pt-16 bg-[#f8f7fa] dark:bg-slate-900 rounded-tl-[60px] rounded-tr-[60px] flex flex-col items-center">
        <FlowChart />
      </section>

      {/* <section id="industries" className="pt-24 md:pt-24 bg-[#f8f7fa] dark:bg-slate-900 rounded-t-[3rem]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col text-center gap-8 lg:gap-14">
            
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
            <span className="text-[#7367f0] text-sm font-medium">
              Industries
            </span>
          </div>

          <div className="mt-4 border-[#2f2b3d]/10 dark:border-slate-700">
            <div className="flex justify-center gap-8">
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
              <div className="w-24 h-10 bg-gray-200/50 rounded"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-background"
      >
        <TeamSection />
      </motion.section> */}
      <section className="min-h-screen">
        <PricingSection />
      </section>
      {/* <section>
        <div className="w-full p-6 flex flex-col items-center">
          <div className="w-full max-w-[1140px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
      </section> */}
      <section>
        <PopulatArticles />
      </section>

      {/* Technologies Section Placeholder */}
      <section id="technologies" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
            <span className="text-[#7367f0] text-sm font-medium">
              Technologies
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white mb-2">
            Cutting-edge Technologies
          </h2>
          <p className="text-[#2f2b3d]/70 dark:text-slate-400">Coming soon...</p>
        </div>
      </section>

      <section id="faq">
        <FAQSection />
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[40vh] h-auto bg-gradient-to-r from-pink-300 via-purple-300 to-[#7367f0] py-10 lg:py-0">
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 flex justify-center text-center mb-8 lg:mb-0">
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
        <div className="lg:w-1/2 flex justify-center items-end self-center lg:self-end">
          <Image
            src="/Dashboard.png"
            alt="dashboard image"
            width={250}
            height={300}
            className="rounded-md lg:rounded-t-md lg:rounded-b-none shadow-lg max-w-[90%] md:max-w-md lg:max-w-full h-auto"
          />
        </div>
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
