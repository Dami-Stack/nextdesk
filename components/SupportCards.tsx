import React from "react";
import Image from "next/image";

const supportData = [
  {
    icon: "/book.png",
    title: "Exam and school fees",
    description: "so they never have to drop out due to unpaid bills",
  },
  {
    icon: "/lunch.png",
    title: "Daily lunch",
    description: "because no child should have to learn on an empty stomach",
  },
  {
    icon: "/uniform.png",
    title: "School uniforms",
    description:
      "giving students dignity, confidence, and a sense of belonging",
  },
  {
    icon: "/pencil.png",
    title: "Textbooks and supplies ",
    description: "the tools they need to learn, grow, and succeed",
  },
];

const SupportCards = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 px-6">
      {/* Section Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-black">
        Every donation directly supports a child’s education by providing:
      </h2>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {supportData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md text-center w-[226px] h-[308px] p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-105"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Icon */}
              <div className="bg-pink-200 rounded-full w-14 h-14 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-base text-gray-600 mx-auto">
        Your support helps each child show up to school prepared, proud, and
        ready to thrive.
      </p>
    </section>
  );
};

export default SupportCards;
