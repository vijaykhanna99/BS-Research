"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, User, Cpu } from "lucide-react";

export default function QuantumTechnologyMinorPage() {
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
                    backgroundImage: `url('/assets/quantum-tech-bg.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Minor in Quantum Technology
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Quantum Technology
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Inclusion of Quantum Technology as a Minor in the UG Program.
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
                            Quantum Technology is an emerging field that promises to revolutionize computation, communication, and sensing. This minor program is designed to provide undergraduate students with a solid foundation in the principles of quantum mechanics and their applications in cutting-edge technologies. Students will learn about quantum computation, quantum cryptography, quantum sensing, and the materials that make these technologies possible.
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
                            <p className="text-xl font-bold text-gray-900">Arindam Ghosh and Baladitya Suri</p>
                        </div>
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
                            12 CREDIT CORE COURSES AND 3 ELECTIVES FROM THE ELECTIVES LIST PROVIDED AT THE BOTTOM
                        </p>
                    </div>

                    {/* Core Courses */}
                    <div className="mb-12 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-blue-600" /> Core Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">12 Credits</span>
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
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">QT 207 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Quantum Computation (AUG)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">QT 209 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Quantum Communications and Cryptography (AUG)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">QT 202 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Quantum Measurement and Sensing (JAN)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">QT 204 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Materials for Quantum Technologies (JAN)</td>
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
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">3 Credits Required</span>
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
                                        { code: "QT 306 (3:0)", name: "Advanced Quantum Computation and Information (JAN)" },
                                        { code: "E0 213 (3:0)", name: "Quantum-safe Cryptography (JAN)" },
                                        { code: "E2 210 (3:0)", name: "Quantum Error-correcting Codes (JAN)" },
                                        { code: "E2 270 (3:0)", name: "Quantum Information Theory (AUG)" },
                                        { code: "E7 211 (2:1)", name: "Photonics Integrated Circuits (AUG)" },
                                        { code: "NE 203 (3:0)", name: "Advanced Micro and Nanofabrication Technology and Process (AUG)" },
                                        { code: "NE 222 (3:0)", name: "MEMS Modelling, Design and Implementation (AUG)" },
                                        { code: "NE 310 (3:0)", name: "Photonics Technology: Materials and Devices (AUG)" },
                                        { code: "NE 320 (3:0)", name: "Quantum Optics (JAN)" },
                                        { code: "PH 359 (3:0)", name: "Physics at the Nanoscale (JAN)" },
                                        { code: "NE 312 (3:0)", name: "Nonlinear and Ultrafast Photonics" }
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
