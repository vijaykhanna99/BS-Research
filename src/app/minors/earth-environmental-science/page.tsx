"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, Globe2 } from "lucide-react";

export default function EarthEnvironmentalScienceMinorPage() {
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
                    backgroundImage: `url('/assets/earth-science-dept.jpg')`, // Using standard EES background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/60 to-[#001c41]/25"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur mb-4">
                        Minor in Earth & Environmental Science
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Earth & Environmental Science
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Understand the complex workings of our planet, the processes that shape it, and the environmental challenges we face.
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
                            The Minor in Earth and Environmental Science (EES) provides students with a fundamental understanding of earth systems, geophysical processes, and environmental engineering principles. The curriculum is highly flexible, allowing students to choose from a variety of geology, environmental chemistry, and interdisciplinary elective courses offered by participating departments.
                        </p>
                    </div>
                </div>

                {/* 3. Curriculum Structure */}
                <div className="mb-12">
                    <h2 className="section-title mb-6">
                        Curriculum Structure
                    </h2>


                    {/* Elective Courses */}
                    <div className="mb-10 border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-50 px-6 py-5 border-b border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-1">
                                    <Globe2 className="w-5 h-5 text-blue-600" /> Elective Courses List
                                </h3>
                            </div>
                            <span className="px-4 py-1.5 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700 shadow-sm whitespace-nowrap">15 Credits Required</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-4 font-bold text-gray-900 w-[150px] uppercase tracking-wider text-xs">Course Code</th>
                                        <th className="px-6 py-4 font-bold text-gray-900 uppercase tracking-wider text-xs">Course Name</th>
                                        <th className="px-6 py-4 font-bold text-gray-900 w-[120px] uppercase tracking-wider text-xs">Semester</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    {[
                                        { code: "UEES 206 (2:1)", name: "Experimental Methods in Environmental Chemistry", sem: "IV" },
                                        { code: "UEES 207 (3:0)", name: "Geophysical Processes", sem: "IV" },
                                        { code: "UEES 208 (2:1)", name: "Introduction To Mineralogy and Petrology", sem: "IV" },
                                        { code: "UEES 301 (2:1)", name: "Introduction To Earth Systems", sem: "V" },
                                        { code: "UES 314 (3:0)", name: "Design Principles in Environmental Engineering", sem: "V" },
                                        { code: "UEES 313 (2:1)", name: "Experimental Methods in Environmental Engineering", sem: "V" }
                                    ].map((course, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">{course.code}</td>
                                            <td className="px-6 py-4 text-gray-800 font-medium">{course.name}</td>
                                            <td className="px-6 py-4 text-gray-500 font-medium whitespace-nowrap">
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">{course.sem} Semester</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-blue-50/50 px-6 py-5 border-t border-gray-200 mt-0">
                        <div className="text-gray-800 text-[14px] font-medium leading-relaxed m-0">
                            <p className="mb-2">
                                <strong>* Note:</strong> Students taking a minor in EES must take a minimum 3 out of the 6 courses which are listed above.
                            </p>
                            <p>
                                Remaining 2 courses can be taken for courses offered in departments participating in the EES programme i.e; Centre for Earth Sciences (CEaS), Centre for Sustainable Technologies (CST), Civil Engineering (CiE), Centre for Atmospheric and Oceanic Sciences (CAOS).
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
