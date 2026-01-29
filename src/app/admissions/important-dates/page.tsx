"use client";
import React from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ADMISSION_DATES, ACADEMIC_SESSION, ADMISSION_YEAR } from "@/data/admissions";

export default function ImportantDatesPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Admissions
                </Link>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Header */}
                    <div className="bg-orange-500 p-8 md:p-10 text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-4">
                            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-orange-100" />
                            Important Dates
                        </h1>
                        <p className="text-orange-100 text-lg opacity-90">Schedule for the {ACADEMIC_SESSION} Academic Session</p>
                    </div>

                    <div className="p-8 md:p-10">
                        {/* Main Schedule Table */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-orange-500 pl-4 flex items-center">
                                General Schedule
                            </h3>
                            <div className="border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                                <table className="w-full text-left min-w-[500px]">
                                    <thead className="bg-slate-50/80 border-b">
                                        <tr>
                                            <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-widest">Events</th>
                                            <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-widest w-1/3 border-l border-slate-100">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-semibold leading-relaxed">Commencement of submission of online applications</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100 font-mono text-sm">{ADMISSION_DATES.applicationStart}</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-semibold leading-relaxed">
                                                Last date for online submission of applications <br />
                                                <span className="text-slate-500 text-sm font-normal mt-1 block">Four-Year Bachelor of Science (Res) program (website closes at 23:59 hours)</span>
                                            </td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100 align-top font-mono text-sm">{ADMISSION_DATES.applicationEnd}</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-semibold leading-relaxed">Date of reporting to the institute (Tentative)</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100 font-mono text-sm">{ADMISSION_DATES.reportingTentative}</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-semibold leading-relaxed">Commencement of classes</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100 font-mono text-sm">{ADMISSION_DATES.classesStart}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Counselling Table */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-blue-500 pl-4">
                                Admission Counselling (Tentative)
                            </h3>
                            <div className="border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                                <table className="w-full text-left min-w-[500px]">
                                    <thead className="bg-slate-50/80 border-b">
                                        <tr>
                                            <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-widest">Round</th>
                                            <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-widest border-l border-slate-100">Mode of Entry</th>
                                            <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-widest border-l border-slate-100">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-bold">Round 1</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100">JEE (Advanced)</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100 font-mono text-sm">{ADMISSION_DATES.jeeRound1}</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-800 font-bold">Round 2</td>
                                            <td className="p-5 text-slate-600 border-l border-slate-100">IISER Aptitude Test (IAT)</td>
                                            <td className="p-5 text-slate-500 italic border-l border-slate-100">{ADMISSION_DATES.iatRound2}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
