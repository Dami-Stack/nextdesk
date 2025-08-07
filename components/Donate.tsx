// components/Donate.tsx

import React from "react";
import Image from "next/image";

const Donate = () => {
  return (
    <section id="donate" className="w-full bg-white py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Choose how you want to make a difference:
      </h2>

      {/* Option Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 text-left">
        {/* Option 1: Adopt a Child */}
        <div className="flex flex-col space-y-4">
          {/* Icon bubble */}
          <div className="bg-[#ffeceb] rounded-full w-full h-14 flex items-center justify-start p-4">
            <Image
              src="/icon1.png"
              alt="Adopt a Child"
              width={24}
              height={24}
            />
          </div>

          {/* Heading */}
          <h3 className="text-lg font-semibold text-black">Adopt a Child</h3>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-700 mb-6">
            Take full responsibility for one (or more) child’s education. Cover
            all their school expenses and receive regular updates—progress
            reports, report cards, achievements, and milestones.
          </p>

          {/* Amount */}
          <p className="text-lg md:text-xl text-[var(--color1)] font-bold">
            NGN400,000 per child annually
          </p>

          {/* Button */}
          <a
            href="https://paystack.shop/pay/nextdesk_v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--color1)] text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-[var(--color1)] border border-[var(--color1)] transition duration-300 w-full">
              Sponsor Now
            </button>
          </a>
        </div>

        {/* Option 2: Donate to the Pool */}
        <div className="flex flex-col space-y-4">
          {/* Icon bubble */}
          <div className="bg-[#ffeceb] rounded-full w-full h-14 flex items-center justify-start p-4">
            <Image
              src="/icon2.png"
              alt="Donate to the Pool"
              width={24}
              height={24}
            />
          </div>

          {/* Heading */}
          <h3 className="text-lg font-semibold text-black">
            Donate to the Pool
          </h3>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-700 mb-13">
            Contribute to a shared fund that supports multiple children in
            staying in school. You can customize the amount to fit your budget.
          </p>

          {/* Amount */}
          <p className="text-lg md:text-xl text-[var(--color1)] font-bold">
            Any amount helps
          </p>

          {/* Button */}
          <a
            href="https://paystack.shop/pay/nextdesk_v1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color1)] text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-[var(--color1)] border border-[var(--color1)] transition duration-300 w-full text-center block"
          >
            Give Any Amount
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-base md:textlg text-gray-700 mt-14">
        Donate now and be the reason a child stays in school tomorrow.
      </p>
    </section>
  );
};

export default Donate;
