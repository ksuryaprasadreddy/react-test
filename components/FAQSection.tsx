import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FAQSection: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#f8f7fa] rounded-tl-[60px] rounded-tr-[60px] flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-16">
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
            <h2 className="text-[#2f2b3d]/90 text-2xl font-medium font-['Public Sans']">
              Frequently asked <span className="font-extrabold">questions</span>
            </h2>
            <motion.div
              className="w-[141.60px] h-3 mt-2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <p className="text-[#2f2b3d]/70 text-sm font-normal mt-4">
              Browse through these FAQs to find answers to commonly asked
              questions.
            </p>
          </div>
        </div>

        {/* FAQ Cards Section */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* Left Image Section */}
          <div className="w-full sm:w-[48%] flex justify-center">
            <div className="relative">
              <Image
                src="https://via.placeholder.com/327x255"
                alt="FAQ Illustration"
                className="w-full max-w-sm"
                width={327}
                height={255}
              />
              <Image
                src="https://via.placeholder.com/38x36"
                alt="Icon"
                className="absolute top-4 right-4 w-10"
                width={38}
                height={36}
              />
            </div>
          </div>

          {/* Questions Section */}
          <div className="w-full sm:w-[48%] flex flex-col gap-4">
            {[
              "Do you charge for each upgrade?",
              "Do I need to purchase a license for each website?",
              {
                question: "What is regular license?",
                answer:
                  "Regular license can be used for end products that do not charge users for access or service. Single regular license can be used for single end product. If you want to sell end product to multiple clients, then you will need to purchase a separate license for each client.",
              },
              "What is extended license?",
              "Which license is applicable for SASS application?",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-4 rounded-md shadow-md ${
                  typeof item === "object" && "flex flex-col"
                }`}
              >
                {typeof item === "string" ? (
                  <p className="text-[#2f2b3d]/90 text-sm font-medium">
                    {item}
                  </p>
                ) : (
                  <>
                    <p className="text-[#2f2b3d]/90 text-sm font-medium">
                      {item.question}
                    </p>
                    <p className="text-[#2f2b3d]/70 text-sm mt-2">
                      {item.answer}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
