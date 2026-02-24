"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, User, Atom } from "lucide-react";

export default function PhysicsMinorPage() {
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
                    backgroundImage: `url('/assets/physics-bg-v2.jpg')`, // Using standard physics background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Minor in Physics
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Physics
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Explore the fundamental laws of nature and understand the mechanics of the universe from the sub-atomic to the cosmic scale.
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
                            The Physics Minor is designed for students who wish to obtain a solid grounding in the core areas of modern and classical physics to complement their major discipline. The curriculum offers a structured approach to learning intermediate mechanics, electromagnetism, thermal physics, and quantum mechanics, along with corresponding laboratory experience.
                        </p>
                    </div>
                </div>

                {/* 2. administration */}
                {/* 
                <div className="mb-16">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm inline-flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-gray-500">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Coordinator</h3>
                            <p className="text-xl font-bold text-gray-900">Physics Department Coordinator</p>
                        </div>
                    </div>
                </div> 
                */}

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
                            3 CREDIT CORE COURSES AND 12 ELECTIVES FROM THE ELECTIVES LIST PROVIDED AT THE BOTTOM
                        </p>
                    </div>

                    {/* Core Courses */}
                    <div className="mb-12 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Atom className="w-5 h-5 text-blue-600" /> Core Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">3 Credits</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UP 204T (2:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Intermediate Thermal Physics and the Physics of Materials (Semester IV)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UP 204L (0:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Intermediate Thermal Physics and the Physics of Materials (Lab) (Semester IV)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Elective Courses */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
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
                                        { code: "UP 202T (2:0)", name: "Intermediate Mechanics, Oscillations and Waves", semester: "IV" },
                                        { code: "UP 202L (0:1)", name: "Intermediate Mechanics, Oscillations and Waves (Lab)", semester: "IV" },
                                        { code: "UP 203T (2:0)", name: "Intermediate Electromagnetism and the Quantum Physics of Radiation", semester: "IV" },
                                        { code: "UP 203L (0:1)", name: "Intermediate Electromagnetism and the Quantum Physics of Radiation (Lab)", semester: "IV" },
                                        { code: "PH 201 (3:0)", name: "Classical Mechanics", semester: "V" },
                                        { code: "PH 203 (3:0)", name: "Quantum Mechanics I", semester: "V" },
                                        { code: "PH 205 (3:0)", name: "Mathematical methods of Physics", semester: "V" },
                                        { code: "PH 211 (0:3)", name: "General Physics Laboratory", semester: "V" },
                                        { code: "PH 202 (3:0)", name: "Statistical Mechanics", semester: "VI" },
                                        { code: "PH 204 (3:0)", name: "Quantum Mechanics II", semester: "VI" }
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
                            <p className="text-gray-800 text-[15px] font-medium leading-relaxed m-0 text-center">
                                * Any courses offered by Centre for High Energy Physics (CHEP) / Instrumentation and Applied Physics (IAP) / Physics departments will be considered towards Major and Minor electives with the consent of the course instructor.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
