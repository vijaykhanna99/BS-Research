"use client";
import Image from 'next/image';
import { ExternalLink } from "lucide-react";

export const deansData = [
    {
        name: "Prabal K. Maiti",
        title: "Dean, Undergraduate Program",
        department: "Physics",
        image: "/assets/Prabal-Kumar-Maiti-photo.png",
        profile: "https://physics.iisc.ac.in/~maiti/group-present.html",
    },
    {
        name: "Dipshikha Chakravortty",
        title: "Associate Dean, BS Research",
        department: "Microbiology & Cell Biology",
        image: "/assets/Dipshikha-1-scaled.jpg",
        profile: "https://mcb.iisc.ac.in/dclab/",
    },
];

export default function DeansList() {
    return (
        <div className="grid lg:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
            {deansData.map((person, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 gap-6 group hover:-translate-y-1">
                    <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="text-center md:text-left pt-2 flex-grow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                            Prof. {person.name}
                        </h3>
                        <div className="text-blue-600 font-bold mb-1 text-lg leading-snug">
                            {person.title}
                        </div>
                        <div className="text-slate-500 mb-5 font-medium">
                            {person.department}
                        </div>

                        <a
                            href={person.profile}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-semibold text-sm transition-colors mt-auto group-hover:underline underline-offset-4"
                        >
                            View Profile <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
