import React, { useState } from "react";
import { motion } from "framer-motion";

interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      title: "Basic",
      price: 19,
      features: [
        "Timeline",
        "Basic search",
        "Live chat widget",
        "Email marketing",
        "Custom Forms",
        "Traffic analytics",
        "Basic Support",
      ],
    },
    {
      title: "Team",
      price: 29,
      isPopular: true,
      features: [
        "Everything in basic",
        "Timeline with database",
        "Advanced search",
        "Marketing automation",
        "Advanced chatbot",
        "Campaign management",
        "Collaboration tools",
      ],
    },
    {
      title: "Enterprise",
      price: 49,
      features: [
        "Everything in premium",
        "Timeline with database",
        "Fuzzy search",
        "A/B testing sandbox",
        "Custom permissions",
        "Social media automation",
        "Sales automation tools",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full px-4 py-16 bg-[#f8f7fa] dark:bg-slate-900 rounded-3xl">
      <motion.div
        className="flex flex-col items-center gap-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded">
            <span className="text-[#7367f0] text-sm font-medium">
              Pricing Plans
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f2b3d]/90 dark:text-white">
              <span className="relative inline-block font-extrabold overflow-visible">
                Tailored pricing plans 
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium"> designed for you</span>
            </h2>
            <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm md:text-base">
              All plans include 40+ advanced tools and features to boost your
              product.
              <br />
              Choose the best plan to fit your needs.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm ${!isAnnual ? "text-[#2f2b3d] dark:text-white" : "text-[#2f2b3d]/70 dark:text-slate-400"}`}
            >
              Pay Monthly
            </span>
            <motion.button
              className="w-12 h-6 bg-[#7367f0] rounded-full p-1 cursor-pointer"
              onClick={() => setIsAnnual(!isAnnual)}
              animate={{ backgroundColor: isAnnual ? "#7367f0" : "#7367f0" }}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span
              className={`text-sm ${isAnnual ? "text-[#2f2b3d] dark:text-white" : "text-[#2f2b3d]/70 dark:text-slate-400"}`}
            >
              Pay Annual
            </span>
            <div className="text-sm font-medium text-[#2f2b3d]/70 dark:text-slate-400 ml-2">
              Save 25%
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`flex flex-col p-8 bg-white dark:bg-slate-800 rounded-lg ${plan.isPopular
                ? "border border-[#7367f0] shadow-lg dark:shadow-none"
                : "shadow-md dark:shadow-none"
                }`}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-[#2f2b3d]/90 dark:text-white mb-4">
                  {plan.title}
                </h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-[#7367f0]">
                    ${isAnnual ? (plan.price * 0.75).toFixed(0) : plan.price}
                  </span>
                  <span className="text-[#2f2b3d]/40 dark:text-slate-500 mb-1">/mo</span>
                </div>
              </div>

              <div className="flex-grow space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className={`p-0.5 rounded-full ${plan.isPopular ? "bg-[#7367f0]" : "bg-[#7367f0]/20"}`}
                    >
                      <div className="w-3 h-3" />
                    </div>
                    <span className="text-[#2f2b3d]/90 dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 w-full py-2 px-5 rounded-md text-sm font-medium ${plan.isPopular
                  ? "bg-[#7367f0] text-white shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)]"
                  : "bg-[#7367f0]/20 text-[#7367f0]"
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PricingSection;
