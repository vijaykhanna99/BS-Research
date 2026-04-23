"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, Heart, Maximize2, X } from "lucide-react";
import Image from "next/image";

export default function HallimysoreFellowshipPage() {
    const [isImageOpen, setIsImageOpen] = useState(false);

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
                                Late Hallimysore Hirannaiah & Late Subbalakshamma Fellowships
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Satya H & Pankaja Narayana
                                </span>
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Award className="w-4 h-4 mr-2" />
                                    UG Programme
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
                                        The Late Hallimysore Hirannaiah & Late Subbalakshamma Fellowships have been established by Satya H Narayana and Pankaja Narayana through an endowment to IISc, to contribute to the growth of students studying in various programs at IISc.
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
                                        <span className="text-slate-700">Two undergraduate students (One student from Science and One student from Engineering) beginning from AY 2025-2026</span>
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
                                        <span className="text-slate-700"><strong>Monthly Fellowship:</strong> ₹7,000 per month</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Winners Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fellowship Awardees</h2>
                            <div className="max-w-2xl mx-auto">
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2025-2026</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            <div className="text-center md:text-left md:w-1/3 shrink-0">
                                                <h4 className="text-xl font-bold text-slate-900 mb-1">Banaj Mahajan</h4>
                                                <p className="text-slate-600 font-medium">(BTech)</p>
                                            </div>

                                            <div className="md:w-2/3 w-full">
                                                <div
                                                    className="relative aspect-video rounded-lg overflow-hidden border border-slate-100 shadow-sm cursor-pointer group"
                                                    onClick={() => setIsImageOpen(true)}
                                                >
                                                    <Image
                                                        src="/assets/fellowhship/hallimysore-scaled.jpeg"
                                                        alt="Late Hallimysore Hirannaiah & Late Subbalakshamma Family"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all w-8 h-8 drop-shadow-lg" />
                                                    </div>
                                                </div>
                                                <p className="text-xs text-center text-slate-400 mt-2 italic md:hidden">Tap image to expand</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Satya H & Pankaja Narayana */}
                        <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1">
                                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-4 border-pink-500/30 shadow-2xl bg-white/5">
                                        <Image
                                            src="/assets/fellowhship/sathya-and-pankaja.jpg"
                                            alt="Satya H & Pankaja Narayana"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <Heart className="w-6 h-6 mr-3 text-pink-500" />
                                        Satya H & Pankaja Narayana
                                    </h2>
                                    <div className="space-y-4 text-slate-300 leading-relaxed">
                                        <p>
                                            Satya H. Narayana was born on October 27, 1942, in Hallimysore, Hassan District, to Hallimysore Hirannaiah and Subbalakshamma. They moved to Mysore in 1946. He earned his B.Sc. from Mysore University in 1963 with the help of his mother doing house hold work and an M.Sc. in Nuclear Physics from Central College, Bangalore University, in 1966 with the help of his brother H.K. Murthy.
                                        </p>
                                        <p>
                                            After teaching at Mysore University as reader in Physics until 1979, he pursued a Ph.D. in Nuclear Physics at Ohio University, Athens, in 1986, followed by postdoctoral research in Radiology at UC Irvine, California, in 1987. He later trained in Radiation Oncology at Northwestern University Hospital. A certified Medical Physicist by the American Board of Radiology, he worked in the U.S. for 15 years in Radiation Therapy Departments before returning to Bangalore in 2004.
                                        </p>
                                        <p>
                                            Pankaja Narayana was born on February 1, 1949, to Venkataramaiah K.S. and Anandamma.
                                        </p>
                                    </div>
                                </div>
                            </div>                        </div>

                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setIsImageOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
                        onClick={() => setIsImageOpen(false)}
                    >
                        <X className="w-6 h-6" />
                        <span className="sr-only">Close</span>
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] aspect-[16/9] rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/assets/fellowhship/hallimysore-scaled.jpeg"
                            alt="Late Hallimysore Hirannaiah & Late Subbalakshamma Family"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
