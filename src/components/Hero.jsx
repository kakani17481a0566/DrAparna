import { useEffect, useRef } from "react";
import apernaImg from "../assets/Aperna.png";

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
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center justify-center bg-white pt-32 md:pt-40"
    >
      <div
        ref={heroRef}
        className="max-w-6xl w-full px-4 flex flex-col md:flex-row items-center gap-6 opacity-0"
      >
        {/* LEFT TEXT */}
        <div className="md:w-1/2 text-left">
          <h2 className="font-sans font-medium text-dr-accent tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Pioneering Neuroscience in Early Education
          </h2>

          <h1 className="font-serif text-6xl md:text-7xl text-dr-dark-purple mb-6 leading-tight">
            The Visionary
          </h1>

          <p className="font-serif text-xl md:text-2xl text-gray-600 mb-6 italic">
            "Bridging the gap between scientific discovery and human compassion."
          </p>

          <p className="font-sans text-gray-500 max-w-xl leading-relaxed">
            From leading data-driven research at the European Union's Joint
            Research Centre to revolutionizing early childhood curriculums,
            Dr. Aperna Volluru defines what it means to lead with both intellect
            and empathy.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={apernaImg}
            alt="Dr Aperna Volluru"
            title="Dr Aperna Volluru - Visionary Entrepreneur & Educationist"
            className="w-80 md:w-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;