// components/WhyItMatters.tsx

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyItMatters = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image with scroll-in */}
        <motion.div
          className="w-full md:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/secbg.jpg"
            alt="Why it matters"
            width={480}
            height={300}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right Content with scroll-in */}
        <motion.div
          className="w-full md:w-[55%] text-gray-800 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <div className="bg-[var(--color1)] text-white font-semibold text-sm px-4 py-3 rounded mb-2 w-3/4">
            <h2 className="text-2xl font-bold">Why it matters</h2>
          </div>

          {/* Paragraphs */}
          <p className="text-base leading-relaxed">
            According to UNICEF, one in every five out-of-school children
            worldwide is in Nigeria.
          </p>
          <p className="text-base leading-relaxed">
            These children are bright, eager, and full of potential, held back
            by poverty and other barriers. When you give to NextDesk, you're not
            just paying school fees, you're giving a child a future.
          </p>
          <p className="text-base leading-relaxed">
            Education opens doors to opportunities that can transform lives and
            entire communities, for generations to come.
          </p>

          {/* CTA Button */}
          <a
            href="https://paystack.shop/pay/nextdesk_v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--color1)] text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-[var(--color1)] border border-[var(--color1)] transition duration-300">
              Make a Difference Today
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;
