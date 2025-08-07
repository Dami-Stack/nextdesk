// components/Footer.tsx

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer)] text-[var(--texts)] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: About + CTA */}
        <div>
          <h2 className="text-xl text-white font-semibold mb-3">NextDesk</h2>
          <p className="text-sm leading-relaxed mb-4">
            Supporting underprivileged students in Nigeria by removing the
            financial barriers that keep them out of school.
          </p>
          <a
            href="https://paystack.shop/pay/nextdesk_v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[var(--color1)] text-white py-2.5 px-5 rounded hover:bg-white hover:text-[var(--color1)] hover:opacity-90 transition">
              Donate Now
            </button>
          </a>
        </div>

        {/* Center: Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Image src="/mail.png" alt="Email" width={20} height={20} />
              info@nextdesk.org
            </li>
            <li className="flex items-center gap-2">
              <Image src="/phone.png" alt="Phone" width={20} height={20} />
              +234 800 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Image src="/locate.png" alt="Location" width={20} height={20} />
              Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Right: Social Links + Legal */}
        <div className="space-y-30">
          <h3 className="text-base font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/ig.png" alt="Instagram" width={24} height={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/fb.png" alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/x.png" alt="Twitter" width={24} height={24} />
            </a>
          </div>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-10">
        © 2025 <span className="font-medium">NextDesk</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
