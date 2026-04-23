"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, FlaskConical } from "lucide-react";

export default function ChemistryMinorPage() {
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
                    backgroundImage: `url('/assets/chemistry-dept.jpg')`, // Using standard chemistry background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/60 to-[#001c41]/25"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur mb-4">
                        Minor in Chemistry
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Chemistry
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Explore the fundamental properties of matter, molecular structures, and the reactions that drive our chemical world.
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
                            The Chemistry Minor is designed for students seeking a robust foundation in chemical principles alongside their primary major. The curriculum bridges critical theoretical knowledge in physical, inorganic, and organic chemistry with hands-on laboratory experiences, culminating in a well-rounded understanding of the chemical sciences.
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
                            3 CREDIT CORE COURSE AND 12 ELECTIVES FROM THE ELECTIVES LIST PROVIDED AT THE BOTTOM
                        </p>
                    </div>

                    {/* Core Courses */}
                    <div className="data-panel mb-12">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5 text-blue-600" /> Core Courses
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
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UC 207 (2:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Instrumental Methods of Chemical Analysis</td>
                                        <td className="px-6 py-4 text-gray-600">IV</td>
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
                            <p className="text-sm text-gray-600">To be selected from the following:</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="bg-gray-50/50">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[100px]">Semester</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { code: "UCY 204 (2:0)", name: "Thermodynamics And Electrochemistry", semester: "IV" },
                                        { code: "UCY 205 (2:0)", name: "Inorganic Chemistry: Chemistry Of Elements", semester: "IV" },
                                        { code: "UCY 206 (2:0)", name: "Basic Organic Reactions", semester: "IV" },
                                        { code: "UCY 301 (0:1)", name: "Organic And Inorganic Chemistry (Lab)", semester: "V" },
                                        { code: "CD 211 (3:0)", name: "Physical Chemistry I - Quantum Chemistry and Group Theory", semester: "V" },
                                        { code: "CD 212 (3:0)", name: "Inorganic Chemistry-Main Group and Coordination Chemistry", semester: "V" },
                                        { code: "CD 213 (3:0)", name: "Organic Chemistry – Structure & Reactivity", semester: "V" },
                                        { code: "UCY 302 (0:1)", name: "Physical And Analytical Chemistry (Lab)", semester: "VI" },
                                        { code: "CY 303 (3:0)", name: "Basic Organometallic Chemistry", semester: "VI" },
                                        { code: "CD 221 (3:0)", name: "Physical Chemistry II- Statistical Mechanics", semester: "VI" },
                                        { code: "CD 222 (3:0)", name: "Materials Chemistry", semester: "VI" },
                                        { code: "CD 223 (3:0)", name: "Organic Synthesis", semester: "VI" },
                                        { code: "UC 402 (3:0)", name: "Molecular Spectroscopy, Dynamics and Photochemistry", semester: "VII" }
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

                        {/* Additional Electives Information */}
                        <div className="bg-blue-50/50 px-6 py-5 border-t border-gray-200 mt-0">
                            <p className="text-gray-800 text-[14px] font-medium leading-relaxed m-0 text-center">
                                * In addition to the above courses, courses offered by the Chemical Sciences Division (i.e; Inorganic and Physical Chemistry (IPC), Organic Chemistry (OC), Solid State and Structural Chemistry Unit (SSCU), Materials Research Centre (MRC)) and Chemical Division Courses offered for Integrated PhD students / MSc Chemical Sciences Program will also be considered towards Chemistry Minor electives.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
