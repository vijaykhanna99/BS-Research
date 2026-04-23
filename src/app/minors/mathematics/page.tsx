"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, BookOpen, Calculator } from "lucide-react";

export default function MathematicsMinorPage() {
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
                    backgroundImage: `url('/assets/mathematics-dept.jpg')`, // Using standard math background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c41]/90 via-[#001c41]/60 to-[#001c41]/25"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur mb-4">
                        Minor in Mathematics
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Mathematics
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Develop a strong foundation in pure and applied mathematics, diving deep into analysis, algebra, and advanced mathematical structures.
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
                            The Mathematics Minor is structured for students who want to build rigorous analytical skills. The curriculum includes advanced fundamentals in mathematical analysis, algebraic structures, and multivariable calculus, supplemented by a diverse set of pure and applied math electives.
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
                            CORE COURSES AND ELECTIVES SELECTED FROM THE LISTS PROVIDED BELOW
                        </p>
                    </div>

                    {/* Core Courses */}
                    <div className="data-panel mb-12">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-blue-600" /> Core Courses
                            </h3>
                            <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-700">Required</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead className="bg-white">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Semester</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UM 204 (3:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Basic Analysis</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">UM 205 (3:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Introduction to Algebraic Structures</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">IV</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">MA 200 (3:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Multivariable Calculus</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">V</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">MA 212 (3:0)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Algebra I</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">V</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-blue-600 whitespace-nowrap">MA 219 (3:1)</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">Linear Algebra</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">V</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-amber-50 px-6 py-4 border-t border-gray-300">
                            <p className="text-amber-800 text-[14px] font-bold leading-relaxed m-0 text-center">
                                * Note: Either MA 200 or MA 219 can be taken.
                            </p>
                        </div>
                    </div>

                    {/* Elective Courses - August Semester */}
                    <div className="data-panel mb-12">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-gray-600" /> Electives Offered in August–December
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-gray-50/50">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[200px]">Instructor(s)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { code: "MA 261 (3:0)", name: "Probability Models", instructor: "Manjunath Krishnapur" },
                                        { code: "MA 223 (3:0)", name: "Functional Analysis", instructor: "Swarnendu Sil" },
                                        { code: "MA 232 (3:0)", name: "Introduction to Algebraic Topology", instructor: "Harish Seshadri" },
                                        { code: "MA 242 (3:0)", name: "Partial Differential Equations", instructor: "Arka Mallick" },
                                        { code: "MA 312 (3:0)", name: "Commutative Algebra", instructor: "Bharathwaj Palvannan" },
                                        { code: "MA 313 (3:0)", name: "Algebraic Number Theory", instructor: "Radhika Ganapathy" },
                                        { code: "MA 315 (3:0)", name: "Lie Algebras and their Representations", instructor: "R. Venkatesh / Shushma Rani" },
                                        { code: "MA 319A (3:0)", name: "Schubert Calculus", instructor: "Arvind Ayyer" },
                                        { code: "MA 333 (3:0)", name: "Riemannian geometry", instructor: "Ved Datar" },
                                        { code: "MA 339 (3:0)", name: "Geometric Analysis", instructor: "Vamsi Pritham Pingali" },
                                        { code: "MA 341 (3:0)", name: "Matrix Analysis and Positivity", instructor: "Apoorva Khare" },
                                        { code: "MA 361 (3:0)", name: "Probability Theory", instructor: "Srikanth K. Iyer" },
                                        { code: "MA 380 (3:0)", name: "Introduction to Complex Dynamics", instructor: "Gautam Bharali" }
                                    ].map((course, idx) => (
                                        <tr key={`aug-${idx}`} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3 font-bold text-gray-600 whitespace-nowrap">{course.code}</td>
                                            <td className="px-6 py-3 text-gray-900">{course.name}</td>
                                            <td className="px-6 py-3 text-gray-600">{course.instructor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Elective Courses - January Semester */}
                    <div className="data-panel">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-300 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-gray-600" /> Electives Offered in January–April
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-gray-50/50">
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[150px]">Course Code</th>
                                        <th className="px-6 py-3 font-bold text-gray-900">Course Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-900 w-[200px]">Instructor(s)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { code: "MA 235 (3:0)", name: "Introduction to differentiable manifolds", instructor: "Subhojoy Gupta" },
                                        { code: "MA 218 (3:0)", name: "Number theory", instructor: "Shaunak Deo" },
                                        { code: "MA 220 (3:0)", name: "Representation theory of finite groups", instructor: "R Venkatesh" },
                                        { code: "MA 222A (3:0)", name: "Topics in Measure Theory", instructor: "Arka Mallick" },
                                        { code: "MA 237 (3:0)", name: "Introduction to Tilings", instructor: "Subhojoy Gupta" },
                                        { code: "MA 262 (3:0)", name: "Introduction to Stochastic Processes", instructor: "Arvind Ayyer" },
                                        { code: "MA 305 (3:0)", name: "Lie Groups and Lie Algebras", instructor: "Muna Naik" },
                                        { code: "MA 319 (3:0)", name: "Algebraic Combinatorics", instructor: "Digjoy Paul / Arvind Ayyer" },
                                        { code: "MA 321 (3:0)", name: "Analysis III", instructor: "A K Nandakumaran" },
                                        { code: "MA 326 (3:0)", name: "Fourier Analysis", instructor: "Kalachand Shuin / E. K. Narayanan" },
                                        { code: "MA 336A (3:0)", name: "Introduction to Stochastic Finance", instructor: "Srikanth K. Iyer" },
                                        { code: "MA 340 (3:0)", name: "Advanced Functional Analysis", instructor: "E. K. Narayanan" },
                                        { code: "MA 376 (3:0)", name: "Extremal Combinatorics", instructor: "Hiranya Kishore Dey / Arvind Ayyer" },
                                        { code: "MA 379 (3:0)", name: "Linear Algebraic Groups", instructor: "Radhika Ganapathy" },
                                        { code: "MA 347A (3:1)", name: "Topics in Finite Element Methods", instructor: "Thirupathi Gudi" }
                                    ].map((course, idx) => (
                                        <tr key={`jan-${idx}`} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3 font-bold text-gray-600 whitespace-nowrap">{course.code}</td>
                                            <td className="px-6 py-3 text-gray-900">{course.name}</td>
                                            <td className="px-6 py-3 text-gray-600">{course.instructor}</td>
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
