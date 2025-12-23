import { useEffect, useRef } from 'react';
import apernaImg from '../assets/Aperna.png';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
            {/* Soft Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dr-light-purple/30 rounded-full blur-[100px] -z-10 opacity-70"></div>

            <div ref={heroRef} className="container mx-auto px-4 text-center max-w-6xl opacity-0">

                <h2 className="font-sans font-medium text-dr-accent tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                    Pioneering Neuroscience in Early Education
                </h2>

                <h1 className="font-serif text-6xl md:text-8xl text-dr-dark-purple mb-8 leading-tight">
                    The Visionary
                </h1>

                <p className="font-serif text-2xl md:text-3xl text-gray-600 mb-12 italic">
                    "Bridging the gap between scientific discovery and human compassion."
                </p>

                <p className="font-sans text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
                    From leading data-driven research at the European Union's Joint Research Centre to revolutionizing early childhood curriculums, Dr. Aperna Volluru defines what it means to lead with both intellect and empathy.
                </p>

                <div className="flex justify-center">
                    <img
                        src={apernaImg}
                        alt="Dr Aperna Volluru"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
