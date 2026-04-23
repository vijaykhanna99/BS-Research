"use client";
import Image from 'next/image';

export const coordinatorsData = [
    {
        name: "Sumanta Bagchi",
        major: "Biology",
        image: "/assets/coordinators/sumanta-bagchi.jpg",
        profile: "https://ces.iisc.ac.in/?q=faculty",
    },
    {
        name: "Jayanta Chatterjee",
        major: "Biology",
        image: "/assets/coordinators/jayanta-chatterjee.jpg",
        profile: "https://iiscprofiles.irins.org/profile/66110",
    },
    {
        name: "Anoop Thomas",
        major: "Chemistry",
        image: "/assets/coordinators/anoop-thomas.jpg",
        profile: "https://ipc.iisc.ac.in/~at/PEOPLE.html",
    },
    {
        name: "Garima Jindal",
        major: "Chemistry",
        image: "/assets/coordinators/garima-jindal.jpg",
        profile: "https://orgchem.iisc.ac.in/garima-jindal/",
    },
    {
        name: "Sreenivasan Ramaswami",
        major: "Environmental Science",
        image: "/assets/coordinators/sreenivasan-ramaswami.jpg",
        profile: "https://iiscprofiles.irins.org/profile/148479",
    },
    {
        name: "Ramananda Chakrabarti",
        major: "Environmental Science",
        image: "/assets/coordinators/ramananda-chakrabarti.jpg",
        profile: "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/",
    },
    {
        name: "Deepak D'Souza",
        major: "Engineering",
        image: "/assets/coordinators/deepak-dsouza.png",
        profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
    },
    {
        name: "Kaushik Basu",
        major: "Engineering",
        image: "/assets/coordinators/kaushik-basu.jpg",
        profile: "https://eecs.iisc.ac.in/people/kaushik-basu/",
    },
    {
        name: "Vamsi Pritham Pingali",
        major: "Mathematics",
        image: "/assets/coordinators/vamsi-pritham-pingali.jpg",
        profile: "https://math.iisc.ac.in/~vamsipingali/",
    },
    {
        name: "Purvi Gupta",
        major: "Mathematics",
        image: "/assets/coordinators/purvi-gupta.jpg",
        profile: "https://math.iisc.ac.in/~purvigupta/",
    },
    {
        name: "Victor Suvisesha Muthu",
        major: "Physics",
        image: "/assets/coordinators/victor-suvisesha-muthu.jpg",
        profile: "https://physics.iisc.ac.in/people/d-victor-suvisesha-muthu/",
    },
    {
        name: "Prasad Hegde",
        major: "Physics",
        image: "/assets/coordinators/prasad-hegde.png",
        profile: "https://chep.iisc.ac.in/faculty/",
    },
];

export default function CoordinatorsList() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <span className="section-eyebrow">Directory</span>
                <h2 className="section-title mt-3">
                    Programme Coordinators
                </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {coordinatorsData.map((person) => (
                    <a
                        key={`${person.major}-${person.name}`}
                        href={person.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="elevated-card group overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                    >
                        <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                            <Image
                                src={person.image}
                                alt={person.name}
                                fill
                                className="object-contain object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                        </div>

                        <div className="mt-5 text-sm font-semibold text-blue-700">
                            {person.major}
                        </div>

                        <h3 className="px-5 pb-6 mt-2 text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                            Prof. {person.name}
                        </h3>
                    </a>
                ))}
            </div>
        </div>
    );
}
