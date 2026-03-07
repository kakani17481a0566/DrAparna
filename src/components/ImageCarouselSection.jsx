import React, { useRef } from 'react';

const ImageCarouselSection = ({ title, subtitle, images, imageBasePath }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of container width
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 px-4 md:px-8 bg-slate-50 overflow-hidden">
            <div className="container mx-auto max-w-[1600px]">
                {/* Heading Section */}
                {(title || subtitle) && (
                    <div className="text-center mb-12 animate-fade-up">
                        {title && (
                            <h2 className="font-woodford text-3xl md:text-5xl  mb-4 text-dr-dark-purple">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="font-woodford text-lg md:text-xl italic text-dr-accent  max-w-4xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Navigation Button */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-5 w-12 h-12 bg-white/90 rounded-full shadow-xl flex items-center justify-center text-dr-dark-purple z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-dr-dark-purple hover:text-white border border-gray-200"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Scrollable Track */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide py-4 px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            .scrollbar-hide::-webkit-scrollbar { display: none; }
                        `}} />
                        
                        {images.map((imgName, index) => (
                            <div 
                                key={index} 
                                className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-gray-100 group/item relative bg-gray-200"
                            >
                                <img 
                                    src={`${imageBasePath}/${imgName}`}
                                    alt={`${title || 'Gallery'} image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                                    loading="lazy"
                                />
                                {/* Optional overlay gradient for future text */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-5 w-12 h-12 bg-white/90 rounded-full shadow-xl flex items-center justify-center text-dr-dark-purple z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-dr-dark-purple hover:text-white border border-gray-200"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ImageCarouselSection;
