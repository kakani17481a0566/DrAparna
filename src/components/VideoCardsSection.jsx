import React, { useState } from 'react';

const VideoCardsSection = ({ title, bgClass = "bg-white", textClass = "text-dr-dark-purple", count = 2, videos = [] }) => {
    // Generate an array of placeholder cards based on count
    const cards = Array.from({ length: count });
    
    // State to track which video is playing
    const [playingIndex, setPlayingIndex] = useState(null);

    return (
        <section className={`py-16 px-6 ${bgClass}`}>
            <div className="container mx-auto max-w-[1400px]">
                {/* Heading Section */}
                {title && (
                    <div className="text-center mb-12 animate-fade-up">
                        <h2 className={`font-woodford text-4xl md:text-5xl  mb-4 ${textClass}`}>
                            {title}
                        </h2>
                        <div className="w-16 h-1 bg-dr-accent mx-auto rounded-full"></div>
                    </div>
                )}

                {/* Cards Grid */}
                <div className={`grid grid-cols-1 ${Math.max(count, videos?.length || 0) === 4 ? 'lg:grid-cols-4 md:grid-cols-2' : 'md:grid-cols-2'} gap-8`}>
                    {(videos && videos.length > 0 ? videos : cards.map((_, i) => ({
                        title: `Video Title ${i + 1}`,
                        description: "Description for the video will go here. You can add the appropriate title and details."
                    }))).map((video, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col hover:-translate-y-2 transition-transform duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Video Player or Thumbnail */}
                            <div className="relative w-full aspect-video bg-gray-800 flex items-center justify-center cursor-pointer group">
                                {playingIndex === index ? (
                                    video.youtubeLink && video.youtubeLink.includes('watch?v=') ? (
                                        <iframe 
                                            className="absolute inset-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${new URL(video.youtubeLink).searchParams.get('v')}?autoplay=1`} 
                                            title={video.title} 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        ></iframe>
                                    ) : video.youtubeLink && video.youtubeLink.endsWith('.mp4') ? (
                                        <video 
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={video.youtubeLink}
                                            autoPlay
                                            controls
                                        />
                                    ) : null
                                ) : (
                                    <div 
                                        className="absolute inset-0 w-full h-full flex items-center justify-center group"
                                        onClick={() => {
                                            if (video.youtubeLink && (video.youtubeLink.includes('watch?v=') || video.youtubeLink.endsWith('.mp4'))) {
                                                setPlayingIndex(index);
                                            } else {
                                                window.open(video.youtubeLink || "#", "_blank");
                                            }
                                        }}
                                    >
                                        {/* Try to load YouTube thumbnail if we have a standard youtube.com/watch?v= ID */}
                                        {video.youtubeLink && video.youtubeLink.includes('watch?v=') ? (
                                            <>
                                                <img 
                                                    src={`https://img.youtube.com/vi/${new URL(video.youtubeLink).searchParams.get('v')}/hqdefault.jpg`} 
                                                    alt={video.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                        )}
                                        
                                        {/* Youtube Play Button Icon SVG */}
                                        <svg className="w-16 h-16 text-red-600 transition-transform group-hover:scale-110 z-10 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            
                            {/* Card Content placeholder */}
                            {(video.title || video.description) && (
                                <div className="p-6 bg-white flex-1">
                                    {video.title && <h3 className="font-woodford font-bold text-xl text-dr-text-dark mb-2">{video.title}</h3>}
                                    {video.description && (
                                        <p className="text-dr-text-dark font-woodford text-sm line-clamp-2">
                                            {video.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoCardsSection;
