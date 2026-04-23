"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, Heart, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function ChamarahalliRamachandraKamalaIyerFellowshipPage() {
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
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                                Chamarahalli Nagappa Ramachandra & Kamala Iyer Fellowship
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Sheila Somanath
                                </span>
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    UG Integrated Program
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
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Fellowship</h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                                <p>
                                    Sheila Somanath, spouse of IISc alumnus Late Shri Margasahayam Somanath (1956 EE, DJ.I.Sc) and a Fellowship recipient for Advanced Engineering Studies at Imperial College London, is a dedicated well-wisher of IISc. In 2020, she and her family instituted the ‘Chamarahalli Nagappa Ramachandra and Kamala Iyer Fellowship for Advancement of Science and Engineering,’ named in honor of her parents. This scholarship supports deserving IISc students, furthering the advancement of science and engineering education.
                                </p>
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
                                        <span className="text-slate-700">Scholarships are awarded to deserving students who are in the 5th year of their integrated B.Sc-M.Sc programme, based on merit and economic background, and are not receiving other scholarships.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Two additional scholarships are granted annually, one in engineering and one in science, with preference given to women, to promote diversity and support opportunities for women in these fields.</span>
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
                                        <span className="text-slate-700"><strong>Monthly Fellowship:</strong> ₹7,000 per month</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Winners Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fellowship Awardees</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* 2025-2026 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2025-2026</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {["Gokul P", "Jayasish Ghosh", "Tanniru Mokshagna"].map((name, index) => (
                                                <li key={index} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 2024-2025 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2024-2025</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {["Adinath", "Dodiya Dev Niteshkumar", "Neelima Bobby"].map((name, index) => (
                                                <li key={index} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">
                                                    {name}
                                                </li>
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
                                            {["Karthik V", "Pranav Ticku", "Prakhar Jaiswal"].map((name, index) => (
                                                <li key={index} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Sheila Somanath */}
                        <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Heart className="w-6 h-6 mr-3 text-pink-500" />
                                    Sheila Somanath
                                </h2>

                                <div className="clearfix">
                                    <div className="md:float-left md:w-1/3 w-full md:mr-8 mb-6 md:mb-2 text-center md:text-left">
                                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-pink-500/20 inline-block w-full">
                                            <Image
                                                src="/assets/fellowhship/Sheila-Somnath.jpeg"
                                                alt="Mrs Sheila Somanath"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                                        <p>
                                            Mrs Sheila Somanath is an elderly enterprising homemaker, who grew up in Hassan, Karnataka, daughter of a lawyer, Shri Ramachandra and Shrimati Kamala Iyer.
                                        </p>
                                        <p>
                                            She came to settle in Kolkatta, and Mumbai, and successfully, engaged as a homemaker in support of her family. Over the Mumbai years, while taking care and raising her two children -Dr Somanath Nagendra and Ms Somanath Annapurna, she continued to nurture her passion for music, bhavegeete and craft.She continues her music lessons to date on Zoom, working with many in the US and in India and is the zesty partner of the “AmmaMagalu” craft duo. Money from the craft sales goes to aid the under privileged in India and is an inspiration to many!
                                        </p>
                                        <p>
                                            She enjoys a daily routine and is strict disciplinarian, loves to cook, is an avid YouTube buff, loves astrology, exercise, travel, mythology and temples. Her spiritual inclinations, have made “education for the future” a primary endeavor and hence she motivated the need to have deserving students mentored and matured with a creative mind in investing towards a future for India in particular and the world at large.
                                        </p>
                                    </div>
                                </div>
                            </div>                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
