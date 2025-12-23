import { useEffect, useRef } from 'react';
import { milestones } from '../data/milestones';

const MilestoneItem = ({ year, title, subtitle, content }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className="relative flex flex-col items-center w-full mb-16 opacity-0 z-10"
        >
            {/* Center Node (Spine Connector) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dr-accent border-4 border-white shadow-sm z-20"></div>

            {/* Content Card - Centered & ~Half Width */}
            <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-dr-light-purple/20 text-center relative hover:-translate-y-1 transition-transform duration-300">

                {/* Year Badge */}
                <div className="inline-block bg-dr-dark-purple text-white px-6 py-2 font-serif text-xl shadow-md mb-6 rounded-full">
                    {year}
                </div>

                <div className="space-y-4">
                    {subtitle && <span className="block text-dr-accent text-sm font-bold uppercase tracking-wider">{subtitle}</span>}
                    <h3 className="text-3xl font-serif text-dr-text-dark">{title}</h3>
                    <div className="w-12 h-0.5 bg-dr-light-purple mx-auto"></div>
                    <div
                        className="text-gray-600 font-sans leading-relaxed text-base md:text-lg"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>

        </div>
    );
};

const Milestones = () => {
    return (
        <section id="milestones" className="relative py-24 px-4 bg-dr-light-purple/10 text-dr-text-dark overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1A4255 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative max-w-[1600px]">
                <div className="text-center mb-20">
                    <span className="text-dr-accent font-sans uppercase tracking-[0.2em] text-sm font-semibold">The Journey</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-dr-dark-purple mt-4">Legacy of Impact</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line (Spine) - Now strictly centered */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dr-dark-purple/20 -ml-[2px] rounded-full z-0"></div>

                    {/* Timeline Items */}
                    <div className="flex flex-col items-center w-full">
                        {milestones.map((milestone, index) => (
                            <MilestoneItem
                                key={index}
                                year={milestone.year}
                                title={milestone.title}
                                subtitle={milestone.subtitle}
                                content={milestone.content}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-20 relative z-10">
                        <div className="inline-block p-4 rounded-full border border-dr-dark-purple/20 bg-white shadow-sm">
                            <span className="font-serif text-2xl text-dr-dark-purple">To Be Continued...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestones;
