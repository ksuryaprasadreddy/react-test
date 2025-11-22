"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "./types";
import { itemVariants } from "./animations";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <motion.div className="flex flex-col" variants={itemVariants}>
      <div
        className="rounded-tl-[90px] rounded-tr-[20px] rounded-b-md border overflow-hidden"
        style={{ borderColor: `${member.color}20` }}
      >
        <div
          className="pt-4 px-4"
          style={{ backgroundColor: `${member.color}20` }}
        >
          <motion.div
            className="relative w-full aspect-[4/5]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-tl-[80px] rounded-tr-[16px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium text-[#2f2b3d]/90">
            {member.name}
          </h3>
          <p className="text-[#2f2b3d]/40 text-sm">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
