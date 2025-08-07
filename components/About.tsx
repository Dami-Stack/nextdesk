import React, { useState } from "react";

const About = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  return (
    <section
      id="about"
      className="w-full px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Who We Are Card */}
        <div
          className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => setShowText1(!showText1)}
        >
          <img
            src="/we are.png"
            alt="Who We Are"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6">
            <h3 className="text-3xl font-bold mb-4 z-10">Who We Are</h3>
            <p
              className={`text-lg leading-relaxed text-center max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-in-out z-10
              ${showText1 ? "max-h-[500px] opacity-100" : ""}`}
            >
              At NextDesk, we’re committed to keeping vulnerable children in
              school by removing the financial barriers that stand in their way.
              From tuition and textbooks to lunch and uniforms, we provide what
              families often can’t afford, giving every child the chance to
              learn, grow, and thrive. <br />
              We work in communities across Nigeria, supporting students one
              child, one desk, one future at a time.
            </p>
          </div>
        </div>

        {/* Our Mission Card */}
        <div
          className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={() => setShowText2(!showText2)}
        >
          <img
            src="/vision.jpg"
            alt="Our Mission"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6">
            <h3 className="text-3xl font-bold mb-4 z-10">Our Mission</h3>
            <p
              className={`text-lg leading-relaxed text-center max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-in-out z-10
              ${showText2 ? "max-h-[500px] opacity-100" : ""}`}
            >
              To support underprivileged students by removing the financial and
              social barriers that keep them out of school. We believe education
              is the most powerful tool to break the cycle of poverty and build
              a brighter, more equitable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
