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
        <div className="grid md:grid-cols-2 gap-6 justify-center max-w-5xl mx-auto">
            {deansData.map((person, index) => (
                <div key={index} className="elevated-card group overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                    <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                        <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
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
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-semibold text-sm transition-colors group-hover:underline underline-offset-4"
                        >
                            View Profile <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
