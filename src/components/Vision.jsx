import { useEffect, useRef } from 'react';

const Vision = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 200}ms`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="vision" className="py-24 px-6 bg-white text-dr-text-dark">
            <div className="container mx-auto max-w-[1600px]">

                {/* Block 1: Vision */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24 reveal-on-scroll opacity-0">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="font-serif text-4xl md:text-5xl text-dr-dark-purple mb-6">A Vision for Tomorrow</h2>
                        <div className="w-16 h-1 bg-dr-accent mx-auto md:mx-0 mb-8"></div>
                        <p className="font-serif text-xl leading-relaxed text-gray-600 italic mb-6">
                            "Empowering the next generation starts with understanding the mind."
                        </p>
                        <p className="font-sans text-gray-500 leading-relaxed text-lg">
                            My vision is to revolutionize Early Childhood Education and Care (ECEC) in India. By integrating world-class pedagogical frameworks with Indian values, I aim to empower teachers and children alike. It is not just about teaching; it is about awakening the potential within every child through verified scientific methodologies.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md aspect-[4/3] bg-dr-light-purple/20 rounded-lg flex items-center justify-center border border-dr-light-purple/30">
                            <span className="font-serif text-dr-dark-purple/40 text-6xl">Vision</span>
                        </div>
                    </div>
                </div>

                {/* Block 2: Mission (Reversed) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 reveal-on-scroll opacity-0">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="font-serif text-4xl md:text-5xl text-dr-dark-purple mb-6">Mission in Action</h2>
                        <div className="w-16 h-1 bg-dr-accent mx-auto md:mx-0 mb-8"></div>
                        <p className="font-serif text-xl leading-relaxed text-gray-600 italic mb-6">
                            "Bringing excellence to the grassroots."
                        </p>
                        <p className="font-sans text-gray-500 leading-relaxed text-lg">
                            Through <span className="text-dr-dark-purple font-semibold">Neuropi</span> and <span className="text-dr-dark-purple font-semibold">My School ITALY</span>, my mission is to bridge the gap between rigorous research and practical application. We ensure every child, regardless of background, has access to education that nurtures their cognitive and emotional range.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md aspect-[4/3] bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100">
                            <span className="font-serif text-dr-accent/40 text-6xl">Mission</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Vision;
