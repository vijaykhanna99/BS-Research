"use client";
import React from 'react';

const AskIISc = () => {
    return (
        <div className="bg-white relative overflow-hidden py-12">
            {/* Decorative Background Elements - matching AboutProgramme vibe */}
            <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 rounded-full bg-blue-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 rounded-full bg-purple-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left Container */}
                    <div className="md:w-1/2 flex flex-col justify-center items-start space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            For IISc Aspirants
                        </h2>
                        <div className="text-lg text-slate-700 leading-relaxed text-justify space-y-4">
                            <p>
                                Studying at IISc has been an incredible journey of growth and
                                discovery. The institute’s rigorous academic environment, world-class
                                research facilities, and vibrant peer community have shaped my
                                learning in ways beyond textbooks.
                            </p>
                            <p>
                                From engaging in cutting-edge research to collaborating with brilliant minds, every moment at IISc
                                has been intellectually enriching. The freedom to explore
                                interdisciplinary fields, interact with esteemed professors, and work
                                on real-world problems has broadened my perspective and
                                problem-solving skills. IISc is not just an institution—it’s an
                                experience that fosters innovation, curiosity, and excellence.
                            </p>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="md:w-1/2 w-full">
                        <div className="w-full h-64 md:h-80 bg-black rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
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
            </div>
        </div>
    );
}

export default AskIISc;
