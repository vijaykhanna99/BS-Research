import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mallika Women in Science Fellowships | BS Research',
    description: 'Details about the Mallika Fellowships for Women in Science and Engineering, established by Ms Nirmala Jay Pullur.',
};

export default function MallikaFellowshipPage() {
    const winners2024 = [
        "Fathima Rasha M K",
        "Valaboju Chandana"
    ];

    const winners2023 = [
        "Sanchari Mandal",
        "Patricia Kshetrimayum"
    ];

    const winners2022 = [
        "Akte Isha Santosh Kumar",
        "Shreya Hirenbhai Pithva"
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="section-shell py-12 md:py-16 max-w-4xl">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/fellowships"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Fellowships
                    </Link>
                </div>

                {/* Header Section */}
                <div className="elevated-card overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 sm:p-10 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                                Mallika Women in Science Fellowships
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Award className="w-4 h-4 mr-2" />
                                    BS Research
                                </span>
                                <span className="flex items-center bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-green-400/30 text-green-100">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Ongoing
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 sm:p-10">
                        {/* About Section */}
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Fellowship</h2>
                                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                                    <p>
                                        The Mallika Fellowships for Women in Science and Engineering have been established by Ms Nirmala Jay Pullur (IISc Alumna, ME (Electrical Communication Engineering) – 1996) to encourage highly talented women students to pursue careers in science and engineering.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Eligibility */}
                            <div className="elevated-card bg-slate-50 p-6 h-full">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                                    Eligibility
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Two of the incoming Under-Graduate (BS (Research)) women students</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Based on Highest rank in Entrance Exam / Highest TGPA in First-term or semester</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Entitlements */}
                            <div className="elevated-card bg-slate-50 p-6 h-full">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                    <Award className="w-5 h-5 text-amber-600 mr-2" />
                                    Entitlements
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700"><strong>Fellowship:</strong> ₹7,000 per month</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700"><strong>Travel & Other Contingencies:</strong> ₹28,000/- per annum</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Winners Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fellowship Awardees</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* 2024-2025 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2024-2025</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {winners2024.map((name, i) => (
                                                <li key={i} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 2023-2024 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2023-2024</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {winners2023.map((name, i) => (
                                                <li key={i} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 2022-2023 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2022-2023</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {winners2022.map((name, i) => (
                                                <li key={i} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
