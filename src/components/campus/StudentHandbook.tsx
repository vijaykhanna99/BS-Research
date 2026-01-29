import React from "react";
import { Eye, Calendar } from "lucide-react";

const StudentHandbook = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">

            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10 border-b border-slate-200 pb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Student Handbooks
                </h1>
                <p className="text-slate-600">
                    Official academic documents, schemes of instruction, and rulebooks.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">

                {/* 2025-26 Item (Latest) */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-all duration-300 group">
                    {/* Left Panel: Academic Year */}
                    <div className="bg-[#0e5475] p-8 md:w-64 shrink-0 flex flex-col justify-center items-center text-center text-white relative">
                        <Calendar className="absolute opacity-10 w-32 h-32 -left-4 -bottom-4 transform rotate-12" />
                        <div className="relative z-10 flex flex-col items-center">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 block mb-1">
                                Academic Year
                            </span>
                            <span className="text-4xl font-bold tracking-tight block mb-3">
                                2025-26
                            </span>
                            <span className="inline-block bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                Latest Edition
                            </span>
                        </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#0e5475] transition-colors">
                                    UG Information Handbook
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md">
                                    Complete scheme of instruction, course details, and academic policies.
                                </p>
                            </div>

                            <a
                                href="/assets/UG-Handbook-25-26.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 bg-slate-50 hover:bg-[#0e5475] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0e5475] px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300"
                            >
                                <Eye className="w-4 h-4" />
                                View & Download
                            </a>
                        </div>
                        {/* Mobile Button */}
                        <a
                            href="/assets/UG-Handbook-25-26.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:hidden mt-6 flex items-center justify-center gap-2 bg-[#0e5475] text-white px-6 py-3 rounded-lg font-bold text-sm"
                        >
                            <Eye className="w-4 h-4" />
                            View & Download
                        </a>
                    </div>
                </div>

                {/* 2024-25 Item */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-all duration-300 group">
                    {/* Left Panel: Academic Year */}
                    <div className="bg-slate-700 p-8 md:w-64 shrink-0 flex flex-col justify-center items-center text-center text-white relative">
                        <Calendar className="absolute opacity-10 w-32 h-32 -left-4 -bottom-4 transform rotate-12" />
                        <div className="relative z-10">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 block mb-1">
                                Academic Year
                            </span>
                            <span className="text-4xl font-bold tracking-tight block mb-3">
                                2024-25
                            </span>
                        </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-700 mb-2 group-hover:text-slate-900 transition-colors">
                                    UG Information Handbook
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-md">
                                    Scheme of instruction and policies for the 2024-25 academic session.
                                </p>
                            </div>

                            <a
                                href="https://iisc.ac.in/wp-content/uploads/2024/10/UG-Handbook-2024-25-Version-II.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 bg-slate-50 hover:bg-slate-700 text-slate-700 hover:text-white border border-slate-200 hover:border-slate-700 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300"
                            >
                                <Eye className="w-4 h-4" />
                                View & Download
                            </a>
                        </div>
                        {/* Mobile Button */}
                        <a
                            href="https://iisc.ac.in/wp-content/uploads/2024/10/UG-Handbook-2024-25-Version-II.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:hidden mt-6 flex items-center justify-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-bold text-sm"
                        >
                            <Eye className="w-4 h-4" />
                            View & Download
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StudentHandbook;
