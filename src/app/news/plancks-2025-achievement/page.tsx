"use client";
import React from "react";
import { ArrowLeft, Calendar, Share2, MapPin, User, Award } from "lucide-react";
import Link from "next/link";

export default function PlancksAchievementPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Hero Image */}
                    <div className="relative h-[300px] md:h-[400px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Physics equations on a chalkboard"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-4 w-fit">
                                <Award className="w-3 h-3" />
                                Achievement
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                IISc Team Achieves Historic 6th Rank at PLANCKS 2025 International Physics Competition
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                    Bangalore
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-amber-400" />
                                    May 2025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 md:p-12 text-slate-700 leading-relaxed text-lg space-y-8">
                        {/* Introduction */}
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:mr-3 float-left">
                            A team of undergraduate students from the Indian Institute of Science (IISc), Bengaluru, has achieved a historic milestone by securing 6th place internationally at PLANCKS 2025 (Physics League Across Numerous Countries for Kick-ass Students)—the highest ranking ever achieved by an Indian team at the prestigious international theoretical physics competition.
                        </p>
                        <p>
                            The team, named <strong>Denormalization Group</strong>, earned the opportunity to represent India on the global stage after securing 1st place in the national preliminaries, the Indian Young Physicists’ League (IYPL).
                        </p>

                        <div className="my-8 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg italic text-slate-600">
                            "PLANCKS is a highly regarded international competition organized under the aegis of the International Association of Physics Students (IAPS). It brings together top undergraduate and master’s students from around the world to collaboratively solve advanced, research-level problems in theoretical physics."
                        </div>

                        <p>
                            The 2025 edition of the competition was held in <strong>Barcelona, Spain</strong>, from 1–5 May 2025, and was organized by the student group of the Royal Spanish Society of Physics.
                        </p>

                        {/* Team Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The IISc Team</h3>
                            <p>
                                The IISc team comprised:
                            </p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-blue-600">
                                <li><strong>Simar Narula</strong> (Second-year undergraduate)</li>
                                <li><strong>Ritabrata Ghosh</strong> (Second-year undergraduate)</li>
                                <li><strong>Susmit Roy</strong> (Second-year undergraduate)</li>
                                <li><strong>Avik Das</strong> (First-year undergraduate)</li>
                            </ul>
                            <p className="mt-4">
                                Their exceptional performance marks a significant achievement for Indian participation in international physics competitions.
                            </p>
                        </div>

                        {/* Event Highlights */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Event Highlights</h3>
                            <p>
                                The programme at PLANCKS 2025 featured a keynote lecture by Nobel Laureate <strong>Prof. Anne L’Huillier</strong> (Lund University), along with scientific talks on gravitational wave detection and quantum technologies. The event also included a panel discussion with leading experts from academia and industry, including representatives from Microsoft Quantum, the Barcelona Supercomputing Center, and Qilimanjaro Quantum Tech.
                            </p>
                            <p className="mt-4">
                                Participants visited prominent research facilities such as the ALBA Synchrotron and the Institute of Photonic Sciences (ICFO), gaining exposure to cutting-edge research in accelerator physics and photonics.
                            </p>
                        </div>

                        {/* Support & Conclusion */}
                        <div className="border-t border-slate-200 pt-8 mt-8">
                            <p className="mb-4">
                                The IISc team’s participation in PLANCKS 2025 was generously supported by the <strong>Office of Development and Alumni Affairs (ODAA)</strong>.
                            </p>
                            <p className="font-medium text-slate-900">
                                This achievement underscores the growing global presence of IISc students in advanced scientific research and highlights the institute’s continued excellence in theoretical physics education.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
