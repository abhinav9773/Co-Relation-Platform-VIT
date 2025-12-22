import { Monitor } from "lucide-react";
import { useState } from "react";

export default function PartnerWithUs() {
  const [showToast, setShowToast] = useState(false);

  const openTechnicalForm = () => {
    setShowToast(true);

    // open form after short delay (better UX)
    setTimeout(() => {
      window.open("https://forms.gle/4SehXUS5SuciWpv46", "_blank");
    }, 700);

    // hide toast automatically
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADINGS */}
        <div className="text-center">
          <p className="text-[16px] font-extrabold uppercase tracking-[0.35em] text-gray-500">
            Together We Can
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#8BC34A]">
            Partner With Us
          </h2>

          {/* NOTE */}
          <p className="mt-4 text-sm text-gray-500 italic">
            (Only Technical Collaboration is open currently)
          </p>
        </div>

        {/* CARD */}
        <div className="mt-24 flex justify-center">
          <div
            onClick={openTechnicalForm}
            className="w-[220px] flex flex-col items-center text-center
                       cursor-pointer group"
          >
            {/* ICON */}
            <div
              className="w-20 h-20 rounded-full bg-[#8BC34A]
                         flex items-center justify-center
                         transition-all duration-300
                         group-hover:bg-[#1f1f1f]
                         group-hover:scale-95"
            >
              <Monitor className="w-8 h-8 text-white" />
            </div>

            {/* TEXT */}
            <p
              className="mt-8 text-lg font-medium text-gray-800 leading-snug
                         transition-colors duration-300"
            >
              Technical Collaborations
            </p>
          </div>
        </div>
      </div>

      {/* TOAST */}
      {showToast && (
        <div
          className="fixed bottom-8 right-8 z-50
                     bg-[#1f1f1f] text-white
                     px-6 py-3 rounded-md shadow-lg
                     text-sm"
        >
          Redirecting to Technical Collaboration form…
        </div>
      )}
    </section>
  );
}
