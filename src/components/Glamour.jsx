import React from 'react';

const Glamour = () => {
    // The base path to the directory containing the images
    const basePath = "/image/Controlling our emotional intelligence gets us ahead in our journey as Womenpreneurs";
    
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-[1400px]">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h2 className="font-lato text-5xl md:text-6xl text-dr-dark-purple font-bold mb-6">
                        Glamour with Grit
                    </h2>
                    <p className="font-lato text-lg md:text-xl text-dr-accent font-semibold max-w-3xl mx-auto">
                        Controlling our emotional intelligence gets us ahead in our journey as Womenpreneurs.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="flex flex-col lg:flex-row gap-6">
                    
                    {/* Left Tall Image */}
                    <div className="lg:w-1/2 flex">
                        <div className="relative w-full overflow-hidden shadow-lg group flex-grow">
                            <img 
                                src={`${basePath}/NationalWinnerofITALY.jpg`} 
                                alt="National Winner of ITALY"
                                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105 bg-gray-100"
                                style={{ minHeight: '600px' }}
                            />
                            <div className="absolute bottom-4 left-4 bg-dr-accent text-white font-lato font-bold px-4 py-2 text-sm md:text-base uppercase tracking-wider z-10">
                                National Winner of ITALY
                            </div>
                        </div>
                    </div>

                    {/* Right Side Column */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        
                        {/* Top row - two images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                            {/* With Tribals */}
                            <div className="relative w-full h-full overflow-hidden shadow-lg group">
                                <img 
                                    src={`${basePath}/WITH TRIBALS.jpg`} 
                                    alt="With Tribals"
                                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105 bg-gray-100"
                                    style={{ minHeight: '280px' }}
                                />
                                <div className="absolute bottom-4 left-4 bg-dr-accent text-white font-lato font-bold px-3 py-1.5 text-xs md:text-sm uppercase tracking-wider z-10">
                                    With Tribals
                                </div>
                            </div>
                            
                            {/* Women Empowerment Project */}
                            <div className="relative w-full h-full overflow-hidden shadow-lg group">
                                <img 
                                    src={`${basePath}/WOMEN EMPOWERMENT PROJECT.jpg`} 
                                    alt="Women Empowerment Project"
                                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105 bg-gray-100"
                                    style={{ minHeight: '280px' }}
                                />
                                <div className="absolute bottom-4 left-4 bg-dr-accent text-white font-lato font-bold px-3 py-1.5 text-xs md:text-sm uppercase tracking-wider z-10">
                                    Women Empowerment Project
                                </div>
                            </div>
                        </div>

                        {/* Bottom row - one image */}
                        <div className="relative w-full flex-1 overflow-hidden shadow-lg group">
                            <img 
                                src={`${basePath}/PRINT MEDIA NEWS COVERAGE.jpg`} 
                                alt="Print Media News Coverage"
                                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105 bg-gray-100"
                                style={{ minHeight: '280px' }}
                            />
                            <div className="absolute bottom-4 left-4 bg-dr-accent text-white font-lato font-bold px-4 py-2 text-sm md:text-base uppercase tracking-wider z-10">
                                Media Coverage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Glamour;
