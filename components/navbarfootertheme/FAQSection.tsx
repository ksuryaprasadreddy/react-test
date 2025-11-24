import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you charge for each upgrade?",
    answer: "No, updates are free for the lifetime of the product. You will receive all future updates and new features at no extra cost.",
  },
  {
    question: "Do I need to purchase a license for each website?",
    answer: "Yes, you need a separate license for each website or domain where you want to use the theme.",
  },
  {
    question: "What is regular license?",
    answer: "Regular license can be used for end products that do not charge users for access or service. Single regular license can be used for single end product. If you want to sell end product to multiple clients, then you will need to purchase a separate license for each client.",
  },
  {
    question: "What is extended license?",
    answer: "Extended license is required if you want to sell the end product to end users. It allows you to charge for the product or service you build using the theme.",
  },
  {
    question: "Which license is applicable for SASS application?",
    answer: "For a SaaS application where you charge users for access, you typically need an Extended License.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-1 py-24 bg-[#f8f7fa] dark:bg-slate-900 rounded-tl-[60px] rounded-tr-[60px] flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-2.5 py-0.5 bg-[#7367f0]/20 rounded"
          >
            <p className="text-[#7367f0] text-sm font-medium font-['Public Sans'] text-center">
              FAQ
            </p>
          </motion.div>

          <div className="text-center">
            <h2 className="text-[#2f2b3d]/90 dark:text-white text-2xl font-medium font-['Public Sans']">
              Frequently asked <span className="relative inline-block font-extrabold overflow-visible">
                questions
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
            </h2>
            <motion.div
              className="w-[141.60px] h-3 mt-2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm font-normal mt-4">
              Browse through these FAQs to find answers to commonly asked
              questions.
            </p>
          </div>
        </div>

        {/* FAQ Cards Section */}
        <div className="flex flex-wrap justify-between items-center gap-6 w-full">
          {/* Left Image Section */}
          <div className="w-full sm:w-[48%] flex justify-center items-start">
            <div className="relative">
              <Image
                src="/faq-boy-with-logos.png"
                alt="FAQ Illustration"
                className="w-full rounded-lg bg-[#f8f7fa] dark:bg-slate-900 mix-blend-multiply dark:mix-blend-normal"
                width={700}
                height={400}
              />
              {/* Optional decorative icon */}
              {/* <Image
                src="https://via.placeholder.com/38x36"
                alt="Icon"
                className="absolute top-4 right-4 w-10"
                width={38}
                height={36}
              /> */}
            </div>
          </div>

          {/* Questions Section */}
          <div className="w-full sm:w-[48%] flex flex-col gap-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-md shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="text-[#2f2b3d]/90 dark:text-slate-200 text-sm font-semibold">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#2f2b3d]/70 dark:text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
