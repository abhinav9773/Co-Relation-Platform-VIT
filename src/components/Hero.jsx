import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    tag: "Partner With VIT",
    title: "Collaborate to Innovate.",
    subtitle: "Partner to Transform.",
    desc: "Work with VIT to co-create impactful solutions, nurture future-ready talent, and drive innovation through strong industry–academia collaboration.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    tag: "Industry Engagement",
    title: "From Research",
    subtitle: "to Real-World Impact.",
    desc: "Enable applied research, sponsored projects, and joint development programs that solve real industrial and societal challenges.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    tag: "Corporate Relations",
    title: "Build Long-Term",
    subtitle: "Strategic Partnerships.",
    desc: "Engage with faculty and students through consultancy, innovation programs, and talent development initiatives.",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-[90vh] w-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                  url(${slide.image})
                `,
              }}
            >
              <div className="max-w-7xl mx-auto px-10 text-left text-white">
                {/* GREEN TAG */}
                <p className="uppercase tracking-[0.35em] text-sm text-[#8BC34A] mb-6">
                  {slide.tag}
                </p>

                {/* MAIN TEXT */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
                  <span className="block !text-white">{slide.title}</span>
                  <span className="block !text-white">{slide.subtitle}</span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 text-lg text-gray-200 max-w-2xl leading-relaxed">
                  <span className="block text-white">{slide.desc}</span>
                </p>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="#partner"
                    className="
    inline-block
    bg-[#8BC34A]
    text-black
    px-14 py-3
    text-sm font-semibold
    tracking-widest
    rounded-md
    shadow-lg
    hover:bg-[#7bb03e]
    hover:shadow-xl
    transition-all duration-200
  "
                  >
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
