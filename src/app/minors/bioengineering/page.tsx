"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, User, Beaker } from "lucide-react";

export default function BioengineeringMinorPage() {
    return (
        <div className="bg-slate-50 pb-16 font-sans text-gray-900 min-h-screen">
            {/* Nav / Back Button */}
            <div className="bg-white/95 sticky top-[68px] z-40 border-b border-slate-200 px-6 h-14 flex items-center justify-between shadow-sm backdrop-blur">
                <Link
                    href="/"
                    className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                    <MoveLeft className="w-5 h-5 mr-2" /> Back
                </Link>
                <span className="text-lg font-bold text-gray-800 hidden md:block">
                    Minor Disciplines
                </span>
            </div>

            {/* Hero Section */}
            <div
                className="relative w-full h-[300px] flex md:h-[400px] items-center justify-center bg-gray-900 border-b border-gray-200"
                style={{
                    backgroundImage: `url('/assets/biology-dept.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/60 to-[#001c41]/25"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur mb-4">
                        Minor in Bioengineering
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Bioengineering
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        The engineering of biology, for biology, and with biology. Designed for IISc undergraduates seeking an interdisciplinary minor.
                    </p>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="section-shell py-14 md:py-16 relative z-10">

                {/* 1. Overview */}
                <div className="mb-16">
                    <h2 className="section-title mb-6">
                        Overview
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="leading-relaxed">
                            Bioengineering is a thriving interdisciplinary field in academic research and industrial practice today. On the one hand, Bioengineering is the engineering counterpart to life sciences, just as aerospace, chemical, civil, electrical, material, and mechanical engineering disciplines are engineering extensions of physics and chemistry. On the other hand, bioengineering is much more expansive. At one end of its broad spectrum, it deals with quantitative aspects and design principles of biomolecules, cells, tissues, organs and systems. The development of novel diagnostic and therapeutic devices, orthotics, human-assistive devices, etc., lies at the other end of the spectrum of bioengineering. In a nutshell, bioengineering is the engineering of biology, for biology, and with biology.
                        </p>
                        <p className="leading-relaxed">
                            Using engineering principles and techniques to understand biology at the fundamental level is a hallmark of bioengineering. Biomaterials, cell and tissue engineering, immunoengineering, and regenerative medicine are pursued within bioengineering towards developing novel drug-delivery techniques, implants, prosthetics, and artificial organs. Neuroengineering interfaces neuroscience to not only understand how the brain works but also to study neurological diseases and their treatment. Emerging areas of systems and synthetic biology, which use computational methods and even the new trends in artificial intelligence, are also within the ambit of bioengineering.
                        </p>
                        <p className="leading-relaxed">
                            Biosensors and implantable prostheses that involve various micro and nano technologies, image processing, signal processing, bioelectronics, medical imaging, etc., also come within the purview of bioengineering. The spectrum of bioengineering ranges from developing novel biochemical assays and apparatus such as microscopes to designing new biomedical instruments that are crucial for medical diagnosis and treatment.
                        </p>
                        <p className="leading-relaxed">
                            Working with clinicians and clinical researchers is another important aspect of bioengineering, or its extension called biomedical engineering. Familiarity with physiology and anatomy empowers engineers to work on the unmet needs of clinical practice and explore careers in the biomedical industry. Bioengineering also has organic links to the thriving biopharma industry.
                        </p>

                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 my-8">
                            <p className="text-gray-900 leading-relaxed m-0 font-medium">
                                IISc undergraduates who opt for a minor in bioengineering will become familiar with the basics of bioengineering and touch upon its multiple facets. This minor program is administered by the Department of Bioengineering (BE).
                            </p>
                        </div>

                        <p className="leading-relaxed">
                            The Department of Bioengineering (earlier known as BioSystems Science and Engineering (BSSE)) is a full-fledged academic department in IISc. BSSE was founded in 2015 based on the rapidly growing activities in this domain that became evident due to the Interdisciplinary PhD program in Bioengineering, which started in 2012. BSSE changed its name to BE in 2023. It is an inclusive department that works with several other departments as well as its numerous clinical partners. BE is a place of confluence of biologists, clinicians, designers, and engineers. It has a primary faculty of its own, associate faculty, adjunct faculty, research staff, and Ph.D. and M.Tech. students. Its thematic common laboratories support research and teaching.
                        </p>
                        <p className="leading-relaxed">
                            BE has a well-thought-out and growing curriculum to train and nurture students with different backgrounds to become bioengineers with expertise and appreciation for biology and engineering. It also prepares them for pursuing careers in academia, research organizations, and the industry.
                        </p>
                    </div>
                </div>

                {/* 2. minor administration */}
                <div className="mb-16">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm inline-flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-gray-500">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Coordinator</h3>
                            <p className="text-xl font-bold text-gray-900">Mohit Kumar Jolly</p>
                        </div>
                    </div>
                </div>

                {/* 3. Curriculum Structure */}
                <div className="mb-12">
                    <h2 className="section-title mb-6">
                        Curriculum Structure
                    </h2>

                    <div className="elevated-card bg-blue-50 border-blue-100 p-6 mb-8">
                        <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 flex-shrink-0" />
                            Credit Requirement for Minor: 15 Credits Total
                        </h3>
                        <p className="text-blue-800 text-[15px] font-semibold tracking-wide">
                            4 CREDIT CORE COURSES AND 11 ELECTIVES FROM THE ELECTIVES LIST PROVIDED AT THE BOTTOM
                        </p>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        A few courses are selected from BE's curriculum to serve as core and elective courses, as shown below, to fulfil 15 credits required for the minor in the undergraduate program of IISc. The core courses provide basics of traditional and emerging areas of biomaterials, biosensors, biomechanics, and systems biology. The electives provide an opportunity to study these topics in depth.
                    </p>

                    {/* Core Courses */}
                    <div className="data-panel mb-12">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Beaker className="w-5 h-5 text-blue-600" /> Core Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">4 Credits</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">BE 213 (2:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Fundamentals of Bioengineering 1 (AUG)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">BE 214 (2:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Fundamentals of Bioengineering 2 (JAN)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Elective Courses */}
                    <div className="data-panel">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-gray-600" /> Elective Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">11 Credits Required</span>
                        </div>
                        <div className="bg-white px-6 py-4 border-b border-gray-100">
                            <p className="text-sm text-gray-600">To be selected from the following:</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-gray-50/50">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { code: "BE 210 (3:0)", name: "Drug Delivery: Principles and Applications (AUG)" },
                                        { code: "BE 211 (3:0)", name: "Cell Mechanics (JAN)" },
                                        { code: "BE 216 (3:0)", name: "Dynamical Systems Biology (JAN)" },
                                        { code: "BE 222 (3:0)", name: "Stem Cell Technology (JAN)" },
                                        { code: "BE 224 (3:0)", name: "Diagnostics and Devices (JAN)" },
                                        { code: "MT 271 (3:0)", name: "Introduction to Biomaterials (AUG)" },
                                        { code: "ME 251 (3:0)", name: "Biomechanics (JAN)" },
                                        { code: "NE 231 (3:0)", name: "Microfluidics (AUG)" },
                                        { code: "CH 248 (3:0)", name: "Molecular Systems Biology (JAN)" },
                                        { code: "EC 303 (2:1)", name: "Stochastic and spatial dynamics in Biology (AUG)" },
                                        { code: "NS 201 (2:0)", name: "Systems Neuroscience (AUG)" },
                                        { code: "DS 201 (2:0)", name: "Bioinformatics (AUG)" },
                                        { code: "BC 302 (3:0)", name: "Current Trends in Drug Discovery (JAN)" }
                                    ].map((course, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3 font-bold text-gray-600 whitespace-nowrap">{course.code}</td>
                                            <td className="px-6 py-3 text-gray-900">{course.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
