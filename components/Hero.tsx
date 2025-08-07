import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/logo 2.jpg"
        alt="Hero background"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center md:justify-start h-full px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl space-y-6 text-center md:text-left mt-24 sm:mt-32 md:mt-0">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Give a Child the Chance to Stay in School
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl">
            Your financial gift does more than pay school fees; it helps a child
            stay in school with joy, confidence, and dignity. At NextDesk, we
            support students in Nigeria through every step of their educational
            journey, from one class to the next, one year at a time.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://paystack.shop/pay/nextdesk_v1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[var(--color1)] text-white font-semibold py-3 px-6 rounded border border-[var(--color1)] hover:bg-white hover:text-[var(--color1)] transition duration-300 ease-in-out">
                Donate Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
