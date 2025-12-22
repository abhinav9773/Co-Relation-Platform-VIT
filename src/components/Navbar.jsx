import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Partner With Us", href: "#partner" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#1f1f1f] shadow-lg" : "bg-black/50 backdrop-blur-sm"}
      `}
    >
      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto h-28 px-12 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="VIT Logo" className="h-16 w-auto" />
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative cursor-pointer transition
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:w-0 after:bg-[#8BC34A] after:transition-all
                  hover:after:w-full
                  ${
                    scrolled
                      ? "text-gray-200 hover:text-[#8BC34A]"
                      : "text-white hover:text-[#8BC34A]"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
