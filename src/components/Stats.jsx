import { useEffect, useRef, useState } from "react";
import useCountUp from "../hooks/useCountUp";

export default function Stats() {
  const stats = [
    { value: 250, label: "Industry Partners" },
    { value: 120, label: "Sponsored Projects" },
    { value: 60, label: "Faculty Collaborations" },
    { value: 10000, label: "Students Impacted" },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <p
            className="
              text-[10px]
              font-extrabold uppercase
              tracking-[0.25em] sm:tracking-[0.3em]
              text-gray-500
            "
          >
            By the Numbers
          </p>

          <h2
            className="
              mt-3 sm:mt-4
              text-2xl sm:text-3xl md:text-4xl
              font-bold text-gray-800
            "
          >
            Our Impact So Far
          </h2>
        </div>

        {/* STATS */}
        <div
          className="
            grid grid-cols-2
            md:flex md:justify-center
            gap-12 sm:gap-16 md:gap-24
          "
        >
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, startCount);

            return (
              <div
                key={index}
                className="
                  group flex flex-col
                  items-center text-center
                  cursor-default
                "
              >
                {/* ACCENT LINE */}
                <div
                  className="
                    h-12 sm:h-14 md:h-16
                    w-[2px]
                    bg-[#8BC34A]
                    mb-4 sm:mb-6
                  "
                />

                {/* NUMBER */}
                <p
                  className="
                    text-3xl sm:text-4xl md:text-5xl
                    font-bold text-gray-900
                    tracking-tight
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {stat.value >= 1000
                    ? `${count.toLocaleString()}+`
                    : `${count}+`}
                </p>

                {/* LABEL */}
                <p
                  className="
                    mt-2 sm:mt-4
                    text-xs sm:text-sm
                    font-medium text-gray-600
                    max-w-[140px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
