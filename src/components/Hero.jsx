import { useEffect, useRef } from "react";
import bgImage from "../assets/Aperna.png";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden
      bg-gradient-to-b from-white via-[#faf8ff] to-white pt-32 md:pt-40"
    >
      {/* soft background glow */}
      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[140px] opacity-40"></div>

      <div
        ref={heroRef}
        className="max-w-7xl w-full px-6 grid md:grid-cols-2 items-center gap-12 opacity-0"
      >
        {/* LEFT CONTENT */}
        <div className="z-10">
          <h2 className="font-woodford text-dr-accent tracking-[0.25em] uppercase mb-6 text-sm">
            Pioneering Neuroscience in Early Education
          </h2>

          <h1 className="font-woodford  text-[60px] md:text-[80px] leading-[1.05] text-dr-dark-purple mb-6">
            The Visionary
          </h1>
      
          <p className="font-woodford italic text-2xl text-dr-accent mb-8 max-w-xl">
            Bridging the gap between scientific discovery and human compassion.
          </p>

          <p className="font-woodford text-gray-500 leading-relaxed max-w-xl text-lg">
            From leading data-driven research at the European Union’s Joint
            Research Centre to revolutionizing early childhood curriculums,
            <br />Dr. Aperna Volluru defines what it means to lead with both intellect
            and empathy.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* soft shadow plate */}
          <div className="absolute bottom-10 w-[320px] h-[60px] bg-black/20 blur-3xl rounded-full"></div>

          <img
            src={bgImage}
            alt="Dr. Aperna Volluru"
            title="Dr. Aperna Volluru - Visionary Entrepreneur & Educationist"
            className="relative w-[360px] md:w-[520px] object-contain
            drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]
            md:-mb-32 transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
