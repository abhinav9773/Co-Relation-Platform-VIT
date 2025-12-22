import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Partner With Us", href: "#partner" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <footer className="bg-[#1f1f1f] text-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* ABOUT + SOCIAL */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Corporate Relations Cell
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                The Corporate Relations Cell, VIT facilitates meaningful
                collaborations between industry, academia, and students to
                promote innovation, research, and real-world impact.
              </p>

              {/* SOCIAL LINKS */}
              <div className="mt-6 flex flex-col gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/school/vellore-institute-of-technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400
                             hover:text-[#0A66C2] transition"
                >
                  {/* Official LinkedIn SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.085V9h3.104v1.561h.044c.432-.817 1.49-1.678 3.066-1.678 3.279 0 3.883 2.157 3.883 4.963v6.606zM5.337 7.433c-1.002 0-1.815-.813-1.815-1.815 0-1.003.813-1.816 1.815-1.816 1.003 0 1.816.813 1.816 1.816 0 1.002-.813 1.815-1.816 1.815zM6.956 20.452H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Email */}
                <a
                  href="mailto:crc@vit.ac.in"
                  className="inline-flex items-center gap-2 text-sm text-gray-400
                             hover:text-[#8BC34A] transition"
                >
                  {/* Envelope SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6 12 13 2 6" />
                  </svg>
                  crc@vit.ac.in
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>

              <ul className="mt-4 space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#8BC34A] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>Vellore Institute of Technology</li>
                <li>Vellore, Tamil Nadu – 632014</li>
                <li>Email: crc@vit.ac.in</li>
                <li>Phone: +91-XXXXXXXXXX</li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-16 border-t border-gray-700" />

          {/* BOTTOM */}
          <div className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Vellore Institute of Technology. All
            rights reserved.
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50
                     w-10 h-10 rounded-full
                     bg-[#1f1f1f] text-gray-300
                     flex items-center justify-center
                     border border-gray-700
                     hover:bg-[#8BC34A] hover:text-black
                     transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
