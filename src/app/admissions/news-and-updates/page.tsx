"use client";
import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ExternalLink, FileText, Bell } from "lucide-react";

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
                            {/* Admissions Open Notice */}
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-green-600 rounded-lg shrink-0 shadow-sm">
                                        <Bell className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-green-700">Admissions Open</span>
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                            </div>
                                            <span className="text-xs text-slate-400 font-medium">30 April 2026</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-3">
                                            Admissions Now Open for BS (Research) 2026–27
                                        </h3>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            The online admission portal will open on <span className="font-semibold text-slate-800">Friday, 01 May 2026</span>, and will remain open until <span className="font-semibold text-slate-800">Thursday, 04 June 2026</span>.
                                        </p>
                                        <Link
                                            href="https://admissions-august.iisc.ac.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-4 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Apply Now <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Materials Major Discontinuation Notice */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-amber-700 rounded-lg shrink-0 shadow-sm">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                                            Important Update
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-3">
                                            Discontinuation of Materials Major (from AY 2026-27)
                                        </h3>
                                        <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                            <p>
                                                The Materials major under the BS (Research) programme will be discontinued with effect from the Academic Year 2026-27.
                                            </p>
                                            <p>
                                                Students applying from the 2026-27 admission cycle onwards will not have the option to choose this major.
                                            </p>
                                            <p>
                                                This change does not affect students currently enrolled in the programme.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
