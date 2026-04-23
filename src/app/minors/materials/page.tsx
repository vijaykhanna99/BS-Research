"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, Layers } from "lucide-react";

export default function MaterialsMinorPage() {
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
                    backgroundImage: `url('/assets/MaterialsSmall.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/60 to-[#001c41]/25"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur mb-4">
                        Minor in Materials
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Materials
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Explore the structure, properties, and processing of materials, forming the foundation of modern engineering and technology.
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
                            The Materials Minor provides an understanding of the structure, thermodynamics, kinetics, and various functional and mechanical properties of materials. This minor is designed for students seeking to complement their major with knowledge of materials science, which is critical for areas like energy systems, nanotechnology, biomaterials, and solid-state devices.
                        </p>
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
                            3 CREDIT CORE COURSES AND 12 ELECTIVES FROM THE ELECTIVES LIST PROVIDED AT THE BOTTOM
                        </p>
                    </div>

                    {/* Core Courses */}
                    <div className="data-panel mb-12">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-blue-600" /> Core Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">3 Credits</span>
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
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UMT 202T (2:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Structure of Materials</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UMT 202L (0:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Structure of Materials (Lab)</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">IV</td>
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
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">12 Credits Required</span>
                        </div>
                        <div className="bg-white px-6 py-4 border-b border-gray-100 space-y-3">
                            <p className="text-sm text-gray-600">To be selected from the following UG and PG courses:</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-gray-50/50">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[120px]">Semester</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { code: "UMT 203 (3:0)", name: "Thermodynamic of Materials", semester: "IV" },
                                        { code: "UMT 205 (3:0)", name: "Mechanical Behavior of Materials", semester: "IV" },
                                        { code: "UMT 301 (3:0)", name: "Materials Kinetics", semester: "V" },
                                        { code: "UMT 302T (2:0)", name: "Introduction To Materials Processing", semester: "V" },
                                        { code: "UMT 302L (0:1)", name: "Materials Processing (Lab)", semester: "V" },
                                        { code: "UMT 309* (3:0)", name: "Functional Properties of Materials I", semester: "V" },
                                        { code: "UMT 312T (2:0)", name: "Mechanical Testing and Failure of Materials", semester: "V" },
                                        { code: "UMT 312L (0:1)", name: "Mechanical Testing (Lab)", semester: "V" },
                                        { code: "UMT 310T (2:0)", name: "Introduction To Materials Manufacturing", semester: "VI" },
                                        { code: "UMT 310L (0:1)", name: "Materials Manufacturing (Lab)", semester: "VI" },
                                        { code: "UMT 311 (0:1)", name: "Functional Property Characterization (Lab)", semester: "VI" },
                                        { code: "UMT 401** (3:0)", name: "Functional Properties of Materials II", semester: "VI" },
                                        { code: "MT 209 (3:0)", name: "Defects in Materials", semester: "VI or VIII" },
                                        { code: "MT 260 (3:0)", name: "Polymer Science and Technology", semester: "V or VII" },
                                        { code: "MR 303 (3:0)", name: "Nanomaterial Synthesis and Devices", semester: "V or VII" },
                                        { code: "MR 306 (3:0)", name: "Electron Microscopy in Materials Characterization", semester: "V or VII" },
                                        { code: "MT 271 / MR 203 (3:0)", name: "Introduction to Biomaterials Science and Engineering OR Introduction to Biomaterials", semester: "V or VII" },
                                        { code: "MT 201 (3:0)", name: "Phase Transformations", semester: "VII" },
                                        { code: "MT 307 (3:0)", name: "Materials in Extreme Environments", semester: "VII" },
                                        { code: "MT 255 (3:0)", name: "Solidification Processing", semester: "VII" },
                                        { code: "MT 248 (3:0)", name: "Modeling and Simulations in Materials Engineering", semester: "VI or VII" },
                                        { code: "MR 308 (2:1)", name: "Computational Modeling of Materials", semester: "V or VII" }
                                    ].map((course, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3 font-bold text-gray-600 whitespace-nowrap">{course.code}</td>
                                            <td className="px-6 py-3 text-gray-900">{course.name}</td>
                                            <td className="px-6 py-3 text-gray-600 font-medium">{course.semester}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-blue-50/50 px-6 py-5 border-t border-gray-200 mt-0">
                            <ul className="text-gray-800 text-[13px] font-medium leading-relaxed m-0 text-left space-y-2 list-disc pl-4">
                                <li>* UMT 309: Course was offered during VI semester until Batch- 2021</li>
                                <li>** UMT 401: Course was offered during VII semester until Batch- 2021</li>
                                <li>Note for MT 271 / MR 203: Only one of two (or four) courses will count towards materials elective credits. If you credit both MT 271 and MR 203, only one will count towards materials elective, the other will count as a non-materials elective.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
