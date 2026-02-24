"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, Globe2 } from "lucide-react";

export default function EarthEnvironmentalScienceMinorPage() {
    return (
        <div className="bg-white pb-16 font-sans text-gray-900 min-h-screen">
            {/* Nav / Back Button */}
            <div className="bg-white sticky top-0 z-40 border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
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
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-4">
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
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

                {/* 1. Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                        Overview
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="leading-relaxed">
                            The Minor in Earth and Environmental Science (EES) provides students with a fundamental understanding of earth systems, geophysical processes, and environmental engineering principles. The curriculum is flexible, blending core geology and environmental chemistry courses with a wide range of interdisciplinary electives from participating departments.
                        </p>
                    </div>
                </div>

                {/* 3. Curriculum Structure */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                        Curriculum Structure
                    </h2>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 shadow-sm">
                        <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 flex-shrink-0" />
                            Credit Requirement for Minor: 15 Credits Total
                        </h3>
                        <p className="text-blue-800 text-[15px] font-semibold tracking-wide">
                            STUDENTS MUST TAKE A MINIMUM OF 3 COURSES OUT OF THE CORE COURSES LISTED BELOW. REMAINING COURSES CAN BE SELECTED FROM PARTICIPATING EES DEPARTMENTS.
                        </p>
                    </div>

                    {/* Core Courses Pool */}
                    <div className="mb-12 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Globe2 className="w-5 h-5 text-blue-600" /> Core Courses Pool
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">Select Minimum 3 Courses</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[100px]">Semester</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UEES 206 (2:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Experimental Methods in Environmental Chemistry</td>
                                        <td className="px-6 py-4 text-gray-600">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UEES 207 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Geophysical Processes</td>
                                        <td className="px-6 py-4 text-gray-600">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UEES 208 (2:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction To Mineralogy and Petrology</td>
                                        <td className="px-6 py-4 text-gray-600">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UEES 301 (2:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction To Earth Systems</td>
                                        <td className="px-6 py-4 text-gray-600">V</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UES 314 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Design Principles in Environmental Engineering</td>
                                        <td className="px-6 py-4 text-gray-600">V</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UEES 313 (2:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Experimental Methods in Environmental Engineering</td>
                                        <td className="px-6 py-4 text-gray-600">V</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Electives Note */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-gray-600" /> Elective Courses
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            After completing the minimum core course requirements (at least 3 courses from the pool above), the remaining credits required to complete the 15-credit Minor can be obtained by taking elective courses.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These electives can be chosen from any courses offered by the departments participating in the Earth and Environmental Science programme:
                        </p>
                        <ul className="list-disc leading-relaxed text-gray-700 pl-6 space-y-2 font-medium">
                            <li>Centre for Earth Sciences (CEaS)</li>
                            <li>Centre for Sustainable Technologies (CST)</li>
                            <li>Civil Engineering (CiE)</li>
                            <li>Centre for Atmospheric and Oceanic Sciences (CAOS)</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}
