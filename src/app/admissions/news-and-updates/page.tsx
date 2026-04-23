"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";

export default function NewsAndUpdatesPage() {
    return (
        <div className="min-h-[70vh] bg-slate-50 py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Admissions
                </Link>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#002147] p-8 md:p-10 text-white">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                            News and Updates
                        </h1>
                    </div>

                    <div className="p-8 md:p-10 space-y-6">
                        <div className="space-y-8">
                            {/* Notice Link */}
                            <a
                                href="https://iisc.ac.in/wp-content/uploads/2026/02/Admission-Notice_2026-27.pdf#page=9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-blue-50 border border-blue-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-blue-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                                            Official Admission Notice (2026-27)
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4">
                                            Click to view the detailed admission notice document (refer from page 9 for Undergraduate Programmes).
                                        </p>
                                        <div className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-wider">
                                            View Detailed Notice <ExternalLink className="w-4 h-4 ml-1.5" />
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
