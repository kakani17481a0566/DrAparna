import React from 'react';

const JourneyTextSection = ({ title, bgImage, children }) => {
    return (
        <section className={`relative py-24 px-6 overflow-hidden ${bgImage ? 'text-white' : 'bg-white text-dr-text-dark'}`}>
            
            {/* Background Handing */}
            {bgImage && (
                <>
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={bgImage} 
                            alt={`${title} Background`} 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-dr-dark-purple/80 z-0 mix-blend-multiply"></div>
                </>
            )}

            <div className="container mx-auto max-w-5xl relative z-10 animate-fade-up">
                
                {/* Title and Decorative Line */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className={`font-woodford text-4xl md:text-5xl  mb-6 ${bgImage ? 'text-white' : 'text-dr-dark-purple'}`}>
                        {title}
                    </h2>
                    <div className={`w-24 h-1 rounded-full mx-auto md:mx-0 ${bgImage ? 'bg-dr-accent' : 'bg-dr-accent'}`}></div>
                </div>

                {/* Content Body */}
                <div className={`font-woodford text-lg md:text-xl leading-relaxed space-y-6 text-justify ${bgImage ? 'text-white' : 'text-dr-text-dark'}`}>
                    {children}
                </div>

            </div>
        </section>
    );
};

export default JourneyTextSection;
