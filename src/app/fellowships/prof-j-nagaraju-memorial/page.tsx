import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, User } from "lucide-react";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prof J Nagaraju Memorial Fellowship | BS Research',
    description: 'Details about the Prof J Nagaraju Memorial Fellowship for Women Undergraduate Students.',
};

export default function ProfJNagarajuFellowshipPage() {
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
                                Prof J Nagaraju Memorial Fellowship for Women UG Students
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <User className="w-4 h-4 mr-2" />
                                    IISc Alumni
                                </span>
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Award className="w-4 h-4 mr-2" />
                                    UG BS Research
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
                                        Prof J Nagaraju Memorial Fellowship for Women Undergraduate Students has been established to support the Bachelor of Science (Research) program at IISc. This fellowship will enable to add supernumerary seats for women students in the prestigious IISc UG program.
                                    </p>
                                    <p>
                                        The fellowship aims to encourage women in Science and Technology by awarding undergraduate students pursuing Bachelor of Science (Research) program at IISc and address the problem of gender imbalance in the higher education space.
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
                                        <span className="text-slate-700">Awarded to incoming women UG students</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Based on Highest rank in Entrance Exam/Highest TGPA in First-term or semester</span>
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
                                        <span className="text-slate-700"><strong>Monthly Stipend:</strong> ₹7,000</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700"><strong>Travel & Other Contingencies:</strong> ₹28,000/- per annum</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Winners Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fellowship Awardees</h2>
                            <div className="max-w-md mx-auto">
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2021-2025</h3>
                                    </div>
                                    <div className="p-5 text-center">
                                        <p className="text-slate-700 font-medium text-lg">Vivedha Poorna P</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Prof J Nagaraju */}

                        <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1">
                                    <div className="aspect-[3/4] relative rounded-lg overflow-hidden border-4 border-blue-500/30 shadow-2xl bg-white/5">
                                        <Image
                                            src="/assets/fellowhship/nagaraju.jpg"
                                            alt="Prof J Nagaraju"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <User className="w-6 h-6 mr-3 text-blue-400" />
                                        Prof J Nagaraju
                                    </h2>
                                    <div className="space-y-4 text-slate-300 leading-relaxed">
                                        <p>
                                            Late Prof J Nagaraju received the M.Sc. (Tech) degree from Andhra University, Vishakhapatnam, India, and the M.Phil. and Ph.D. degrees from Nagarjuna University, Nagarjuna Nagar, India. Thereafter, he joined IISc and became a Professor of the Department of Instrumentation and Applied Physics, Indian Institute of Science, Bangalore, India in 2013.
                                        </p>
                                        <p>
                                            He also served as the President of Instrument Society of India for two terms and was passionate about promoting instrumentation discipline across India. He passed away in 2015 at an age of 61.
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
