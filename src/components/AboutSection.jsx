export default function AboutSection() {
  return (
    <section className="py-28 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: IMAGE */}
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Industry Academia Collaboration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Welcome to
          </p>

          <h2 className="mt-2 text-4xl font-semibold text-[#8BC34A]">
            Corporate Relations – VIT
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Industry–Academia partnerships offer mutually beneficial
            opportunities to create effective solutions to address real-world
            challenges.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            The Corporate Relations Cell at VIT builds and nurtures strategic
            partnerships with industry leaders to foster innovation, research,
            and skill development while creating meaningful learning
            opportunities for students.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our objective is to establish long-term, impactful collaborations
            that translate ideas into outcomes and prepare future-ready talent.
          </p>

          {/* CTA */}
          {/* <button
            className="mt-8 inline-flex items-center gap-2
                       px-6 py-3 text-sm font-medium
                       bg-[#e5e5e5] text-gray-800
                       hover:bg-[#8BC34A] hover:text-black
                       transition"
          >
            Know More →
          </button> */}
        </div>
      </div>
    </section>
  );
}
