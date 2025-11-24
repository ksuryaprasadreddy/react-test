"use client";

import { motion } from "framer-motion";
import { TeamSectionProps } from "./types";
import { teamMembers } from "./data";
import { containerVariants, itemVariants } from "./animations";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = ({ className = "" }: TeamSectionProps) => {
  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center gap-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center space-y-4">
          <motion.div className="inline-block" variants={itemVariants}>
            <span className="px-2.5 py-0.5 bg-[#7367f0]/20 rounded text-[#7367f0] text-sm font-medium">
              Our Great Team
            </span>
          </motion.div>

          <motion.div className="space-y-1" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white">
              <span className="relative inline-block overflow-visible">
                Supported
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium"> by Real People</span>
            </h2>
            {/* <div className="flex justify-center">
              <div className="w-36 h-3 bg-gradient-to-r from-[#7367f0]/20 to-transparent" />
            </div> */}
            <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-base">
              Who is behind these great-looking interfaces?
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
