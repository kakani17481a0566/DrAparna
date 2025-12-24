import React from 'react';

const DigitalCard = () => {
    return (
        <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-12 flex flex-col items-center bg-slate-50">
            <h1 className="text-3xl font-serif font-bold text-dr-dark-purple mb-8">Digital Card</h1>
            <div className="w-full max-w-2xl h-auto shadow-2xl rounded-xl overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-[1.01]">
                <img
                    src="/digital-card_page-0001.jpg"
                    alt="Dr Aperna Volluru Digital Card"
                    className="w-full h-auto object-contain block"
                />
            </div>
            <a
                href="/digital-card_page-0001.jpg"
                download
                className="mt-8 px-8 py-3 bg-dr-dark-purple text-white rounded-full font-medium shadow-md hover:bg-dr-accent transition-colors duration-300 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Card
            </a>
        </div>
    );
};

export default DigitalCard;
