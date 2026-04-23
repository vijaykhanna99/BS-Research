"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, BookOpen, X, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Iisc1975BeEecsFellowshipPage() {
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
                                IISc 1975 BE EECS Batch Fellowships
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Users className="w-4 h-4 mr-2" />
                                    IISc Class of 1975 BE EECS
                                </span>
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    BTech & UG Program
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

                        <div className="mb-10 clearfix">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Fellowship</h2>

                            <div className="relative w-full md:w-5/12 md:float-right md:ml-8 mb-6 md:mb-2 rounded-xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer group bg-slate-100"
                                onClick={() => setIsImageOpen(true)}
                            >
                                <div className="w-full aspect-[4/3] relative">
                                    <Image
                                        src="/assets/fellowhship/1975-batch-endowment.jpeg"
                                        alt="IISc 1975 BE EECS Batch"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all w-8 h-8 drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                                        <p className="text-white font-medium text-sm text-center">The Class of 1975 BE EECS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                                <p>
                                    The 1972–75 BE batch from Electrical Engineering and Electrical Communication Engineering at IISc established an interest-bearing endowment to provide financial assistance to undergraduate students. The initiative was driven by a spirit of gratitude and a deep commitment to supporting the continued growth and excellence of their alma mater.
                                </p>
                                <p>
                                    A majority of the interest earned from the endowment will be directed towards supporting fellowships for BS Research and BTech Mathematics & Computing students. A substantial portion will be allocated to funding undergraduate student travel for presenting research at reputed international conferences. A small share will be reinvested into the corpus to ensure long-term sustainability. The remaining funds may be used to support international travel for UG students representing IISc at prestigious global science and technology competitions.
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
                                        <span className="text-slate-700">Open to all women UG students and students from Economically and/or Socially Weaker Sections based on merit. Fellowship will be awarded to students from BSc Research and BTech programs in alternate academic years</span>
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
                                        <span className="text-slate-700"><strong>Monthly Stipend:</strong> ₹7,000, for the entire course period of 4 years.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

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
                            src="/assets/fellowhship/1975-batch-endowment.jpeg"
                            alt="IISc 1975 BE EECS Batch"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xl font-medium text-center">The Class of 1975 BE EECS</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
