import React from 'react';

const VideoCardsSection = ({ title, bgClass = "bg-white", textClass = "text-dr-dark-purple", count = 2 }) => {
    // Generate an array of placeholder cards based on count
    const cards = Array.from({ length: count });

    return (
        <section className={`py-16 px-6 ${bgClass}`}>
            <div className="container mx-auto max-w-[1400px]">
                {/* Heading Section */}
                {title && (
                    <div className="text-center mb-12 animate-fade-up">
                        <h2 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${textClass}`}>
                            {title}
                        </h2>
                        <div className="w-16 h-1 bg-dr-accent mx-auto rounded-full"></div>
                    </div>
                )}

                {/* Cards Grid */}
                <div className={`grid grid-cols-1 ${count === 4 ? 'lg:grid-cols-4 md:grid-cols-2' : 'md:grid-cols-2'} gap-8`}>
                    {cards.map((_, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col hover:-translate-y-2 transition-transform duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Video Placeholder */}
                            <div className="relative w-full aspect-video bg-gray-800 flex items-center justify-center group cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                {/* Youtube Play Button Icon SVG */}
                                <svg className="w-16 h-16 text-red-600 transition-transform group-hover:scale-110 z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </div>
                            
                            {/* Card Content placeholder */}
                            <div className="p-6 bg-white flex-1">
                                <h3 className="font-sans font-bold text-xl text-gray-800 mb-2">Video Title {index + 1}</h3>
                                <p className="text-gray-600 font-sans text-sm line-clamp-2">
                                    Description for the video will go here. You can add the appropriate title and details.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoCardsSection;
