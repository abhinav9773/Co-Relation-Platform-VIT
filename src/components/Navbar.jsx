import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Partner With Us", href: "#partner", id: "partner" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  /* NAVBAR BG ON SCROLL */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* BLUR OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden"
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled ? "bg-[#1f1f1f] shadow-lg" : "bg-black/50 backdrop-blur-sm"
          }
        `}
      >
        {/* NAVBAR */}
        <div className="max-w-7xl mx-auto h-20 sm:h-24 md:h-28 px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="VIT Logo"
            className="h-10 sm:h-12 md:h-16 w-auto"
          />

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`relative transition
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:transition-all after:duration-300
                    ${
                      active === item.id
                        ? "after:w-full after:bg-[#8BC34A] text-[#8BC34A]"
                        : "after:w-0 after:bg-[#8BC34A]"
                    }
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

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white relative z-50"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU — SLIDE FROM TOP */}
        <div
          className={`
            md:hidden
            absolute top-full left-0 w-full
            bg-[#1f1f1f] border-t border-gray-700
            transform transition-all duration-300 ease-out
            ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col px-6 py-6 gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`transition
                    ${
                      active === item.id
                        ? "text-[#8BC34A]"
                        : "text-gray-200 hover:text-[#8BC34A]"
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
    </>
  );
}
