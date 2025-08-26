// components/FutureImpact.tsx

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const futureGoals = [
  {
    icon: "/bus.png",
    title: "Safe Transportation",
    description: "Ensuring every child can get to class safely and on time.",
  },
  {
    icon: "/mentor.png",
    title: "Mentorship & Career Guidance",
    description:
      "Helping students navigate their educational journey and plan for a brighter future.",
  },
];

// Static variants (no dynamic delay here)
const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60, transition: { duration: 0.5 } },
};

const FutureImpact = () => {
  return (
    <section className="bg-[#f3f3f3] py-24 px-6 text-center overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <h2 className="text-4xl font-bold text-black mb-4">Future Impact</h2>
        <p className="text-md text-gray-700 max-w-xl mx-auto">
          As NextDesk grows, we aim to expand our support to include:
        </p>
      </motion.div>

      {/* Animated Content Blocks */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 mt-10 mb-16">
        {futureGoals.map((goal, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true }}
            variants={itemVariants}
            transition={{
              delay: index * 0.3,
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffffffaa] backdrop-blur-md rounded-xl p-6 flex flex-col items-center max-w-sm w-full mx-auto transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shadow-md relative">
              <Image
                src={goal.icon}
                alt={goal.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">{goal.title}</h3>
            <p className="text-gray-600 text-base">{goal.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-md text-black max-w-2xl mx-auto"
      >
        Your donation doesn't just support one child, it builds hope and
        opportunity for entire communities.
      </motion.p>
    </section>
  );
};

export default FutureImpact;
