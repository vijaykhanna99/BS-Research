"use client";
import React from 'react';

const AskIISc = () => {
    return (
        <div className="flex flex-col md:flex-row p-8 bg-white min-h-[400px]">
            {/* Left Container */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center items-start space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                    <span className='text-red-600'>|</span> For IISC Aspirants
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed text-justify">
                    Studying at IISc has been an incredible journey of growth and
                    discovery. The institute’s rigorous academic environment, world-class
                    research facilities, and vibrant peer community have shaped my
                    learning in ways beyond textbooks. From engaging in cutting-edge
                    research to collaborating with brilliant minds, every moment at IISc
                    has been intellectually enriching. The freedom to explore
                    interdisciplinary fields, interact with esteemed professors, and work
                    on real-world problems has broadened my perspective and
                    problem-solving skills. IISc is not just an institution—it’s an
                    experience that fosters innovation, curiosity, and excellence.
                </p>
            </div>

            {/* Right Container */}
            <div className="md:w-1/2 p-6 flex justify-center items-center">
                <div className="w-full h-64 md:h-80 bg-black rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/n54s3FrxOT4"
                        title="IISc Research"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default AskIISc;
