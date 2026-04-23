import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Award, MapPin } from "lucide-react";
import { Metadata } from 'next';
import FellowshipGallery from './FellowshipGallery';

export const metadata: Metadata = {
    title: 'IISc-AANA Midwest Chapter Fellowship | BS Research',
    description: 'Details about the IISc-AANA Midwest Chapter Fellowship for Women in Science, an undergraduate program supporting women in research.',
};

export default function IiscAanaMidwestFellowshipPage() {
    const winners2024 = [
        "Avani Lakshmi Udupa",
        "Vidhi Chauhan",
        "Khanolkar Mukta Kaustubh"
    ];

    const winners2023 = [
        "Yashaswini K",
        "Divya Tulapurkar",
        "Akshita Sansugu"
    ];

    const winners2022 = [
        "Manjaree",
        "B Thamaraiselvi",
        "Debanjali Ghosh"
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
                                IISc-AANA Midwest Chapter Fellowship for Women in Science
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Award className="w-4 h-4 mr-2" />
                                    Undergraduate Program
                                </span>
                                <span className="flex items-center bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-green-400/30 text-green-100">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Ongoing
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="p-8 sm:p-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Fellowship</h2>
                                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                                    <p>
                                        A few years ago, IISc found that the flagship 4-year undergraduate B.S (Research) had less than 20% women students. The ratio was too low, and funding resources were limited. Hence, IISc reached out to their alums to sponsor UG scholarships for women to augment the gender ratio.
                                    </p>
                                    <p>
                                        The program was initiated by the IISc AANA Midwest Chapter in 2022 with an award of three fellowships. Each student was awarded a fellowship for their four years of undergraduate study. Subsequently, in 2023, three more fellowships were awarded. The program has been successful and has received positive feedback from the scholarship recipients and the IISc administration.
                                    </p>
                                </div>
                            </div>


                        </div>

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Eligibility */}
                            <div className="elevated-card bg-slate-50 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                                    Eligibility
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Open to Undergraduate women students</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">Based on Highest rank in Entrance Exam / Highest TGPA in First-term or semester</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Entitlements */}
                            <div className="elevated-card bg-slate-50 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                    <Award className="w-5 h-5 text-amber-600 mr-2" />
                                    Entitlements
                                </h3>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700"><strong>Monthly Scholarship:</strong> ₹7,000/- for four years</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700"><strong>Travel & Other Contingencies:</strong> ₹28,000/- per year</span>
                                    </li>
                                </ul>
                                <div className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-100 italic">
                                    Note: Carry forward of contingency amount is permitted. However, you will only be able to use the cumulative amount available at anytime.
                                </div>
                            </div>
                        </div>

                        {/* Winners Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fellowship Awardees</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* 2024 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2024 Awardees</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {winners2024.map((name, i) => (
                                                <li key={i} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 2023 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2023 Awardees</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-3 text-center">
                                            {winners2023.map((name, i) => (
                                                <li key={i} className="text-slate-700 font-medium pb-2 border-b border-slate-50 last:border-0 last:pb-0 block">{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 2022 */}
                                <div className="elevated-card overflow-hidden">
                                    <div className="bg-blue-50 py-3 px-4 border-b border-blue-100">
                                        <h3 className="font-bold text-blue-900 text-center">2022 Awardees</h3>
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

                        {/* Event Photos */}
                        <FellowshipGallery />

                        {/* About Chapter Section */}
                        <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                                    About IISc-AANA Midwest Chapter
                                </h2>
                                <div className="space-y-4 text-slate-300 leading-relaxed">
                                    <p>
                                        Indian Institute of Science Alumni Association of North America (IISc-AANA) started its operation in Silicon Valley and has a network of IISc alumni throughout North America. It is a volunteer organization, whose mission and vision is “Giving Back” to the alma mater and to society. Founded in 2006, IIScAANA owes its success to numerous dedicated volunteers who have given freely of their time, intellect and resources to enrich this alumni/ae network.
                                    </p>
                                    <p>
                                        The Midwest Chapter is one of nine chapters in North America and encompasses the states of Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, and Wisconsin.
                                    </p>
                                </div>
                            </div>                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
