
import React from 'react';
import Image from 'next/image';

const ScienceDisciplines = () => {
    const disciplines = [
        {
            name: "Physics",
            image: "/assets/physics-bg-v2.jpg",
            colSpan: "md:col-span-2",
            color: "from-blue-800/60 to-blue-900/40"
        },
        {
            name: "Chemistry",
            image: "/assets/chemistry-bg-v2.jpg",
            colSpan: "md:col-span-2",
            color: "from-purple-800/60 to-purple-900/40"
        },
        {
            name: "Biology",
            image: "/assets/biology-bg-v2.jpg",
            colSpan: "md:col-span-2",
            color: "from-green-800/60 to-green-900/40"
        },
        {
            name: "Mathematics",
            image: "/assets/mathematics-dept.jpg",
            colSpan: "md:col-span-3",
            color: "from-amber-600/80 to-amber-900/80"
        },
        {
            name: "Earth & Environmental Science",
            image: "/assets/earth-science-dept.jpg",
            colSpan: "md:col-span-3",
            color: "from-emerald-600/80 to-emerald-900/80"
        }
    ];

    return (
        <div className="w-full h-full bg-slate-900 p-0.5">
            <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 md:grid-rows-2 h-full gap-0.5">
                {disciplines.map((item, index) => (
                    <div key={index} className={`relative group overflow-hidden ${item.colSpan} border border-white/10`}>
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={true}
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40 group-hover:opacity-30 transition-opacity duration-300`} />

                        {/* Dark fade at bottom for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center uppercase tracking-wider drop-shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300 font-sans">
                                {item.name}
                            </h3>
                        </div>

                        {/* Border Glow Effect on Hover */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 transition-colors duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* Main Header Overlay (Optional, distinct from individual labels) */}
            <div className="absolute top-0 left-0 right-0 py-2 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
                <h2 className="text-center text-white/90 font-extrabold text-2xl md:text-3xl uppercase tracking-widest drop-shadow-md">
                    Bachelor of Science (Research)
                </h2>
            </div>
        </div>
    );
};

export default ScienceDisciplines;
