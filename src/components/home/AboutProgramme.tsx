import React from "react";
import { Quote } from "lucide-react";

const AboutProgramme = () => {
    return (
        <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative z-10">
                {/* Title Section */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                        <Quote className="w-8 h-8 rotate-180" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            About the Programme
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mt-2"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-justify">
                    <p>
                        The Bachelor of Science (Research) programme at the Indian Institute of Science (IISc) is a unique four-year undergraduate programme designed for students with a strong curiosity for science and discovery. It combines rigorous training in fundamental sciences with early and sustained exposure to research in a world-class academic environment.
                    </p>
                    <p>
                        Students receive a broad foundation in Physics, Mathematics, Chemistry, Biology, Engineering, and Humanities during the first three semesters, followed by specialization in one of five <span className="font-bold text-slate-900">Major disciplines—Physics, Chemistry, Mathematics, Biology, or Earth & Environmental Science</span>. Interdisciplinary learning is a core strength of the programme, with students encouraged to take courses across disciplines.
                    </p>
                    <p>
                        The programme culminates in a year-long, faculty-supervised research project, preparing students for advanced studies and impactful careers in science and technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProgramme;
