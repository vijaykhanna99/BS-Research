import React from "react";
import Link from "next/link";
import { Atom, FlaskConical, Calculator, Dna, Globe2, Cpu, Stethoscope } from "lucide-react";

import Image from "next/image";

const AboutProgramme = () => {
    return (
        <div className="relative overflow-hidden py-12">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Title Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                        About the Programme
                    </h2>
                </div>

                {/* Content Section */}
                <div className="text-base text-slate-700 leading-relaxed space-y-6">
                    <p>
                        The Bachelor of Science (Research) programme at the Indian Institute of Science (IISc) is a unique four-year undergraduate programme designed for students with a strong curiosity for science and discovery. It combines rigorous training in fundamental sciences with early and sustained exposure to research in a world-class academic environment.
                    </p>
                    <p>
                        Students receive a broad foundation in Physics, Mathematics, Chemistry, Biology, Engineering, and Humanities during the first three semesters, followed by specialization in one of five <span className="font-bold text-slate-900">Major disciplines—Physics, Chemistry, Mathematics, Biology and Earth & Environmental Science</span>. Interdisciplinary learning is a core strength of the programme, with students encouraged to take courses across disciplines.
                    </p>
                    <p>
                        The programme culminates in a year-long, faculty-supervised research project, preparing students for advanced studies and impactful careers in science and technology.
                    </p>
                </div>

                {/* Majors and Minors Section */}
                <div className="mt-8 space-y-8">
                    {/* Majors */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                            Major Disciplines:
                        </h3>
                        <p className="text-slate-700 mb-6 leading-relaxed">
                            After completing a broad foundation in fundamental sciences and engineering during the first three semesters, students must specialize in one of the following five Major disciplines:
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-4 mt-2">
                            {[
                                { name: "Physics", path: "/course-structure/physics?from=home", img: "/assets/PhysicsSmall.jpg" },
                                { name: "Chemistry", path: "/course-structure/chemistry?from=home", img: "/assets/ChemistrySmall.jpg" },
                                { name: "Mathematics", path: "/course-structure/mathematics?from=home", img: "/assets/MathSmall.jpg" },
                                { name: "Biology", path: "/course-structure/biology?from=home", img: "/assets/biology-dept.jpg" },
                                { name: "Earth & Environmental Science", path: "/course-structure/earth-environmental-science?from=home", img: "/assets/EVSSmall.jpg" },
                            ].map((major, idx) => (
                                <Link
                                    href={major.path}
                                    key={idx}
                                    className="flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm transition-all"
                                >
                                    <div className="relative w-6 h-6 rounded overflow-hidden flex-shrink-0">
                                        <Image
                                            src={major.img}
                                            alt={major.name}
                                            fill
                                            sizes="24px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-[15px]">
                                        {major.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Minors */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                            Minor Disciplines(Optional):
                        </h3>
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            Along with their Major, students have the option to choose a Minor based on their individual interests. This allows for diverse interdisciplinary learning. The available minor disciplines are:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: "Physics", path: "/minors/physics" },
                                { name: "Chemistry", path: "/minors/chemistry" },
                                { name: "Mathematics", path: "/minors/mathematics" },
                                { name: "Biology", path: "/minors/biology" },
                                { name: "Earth & Environmental Science", path: "/minors/earth-environmental-science" },
                                { name: "Materials", path: "/minors/materials" },
                                { name: "Quantum Technology", path: "/minors/quantum-technology" },
                                { name: "Bioengineering", path: "/minors/bioengineering" }
                            ].map((minor, idx) => (
                                minor.path ? (
                                    <Link
                                        href={minor.path}
                                        key={idx}
                                        className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-medium rounded-md text-sm cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                                    >
                                        {minor.name}
                                    </Link>
                                ) : (
                                    <span
                                        key={idx}
                                        className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 font-medium rounded-md text-sm cursor-default hover:bg-slate-100 transition-colors"
                                    >
                                        {minor.name}
                                    </span>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProgramme;
