"use client";
import React from "react";
import Image from 'next/image';
import { ArrowLeft, Calendar, MapPin, Award, Users, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function IYPLAchievementPage() {
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
                        <Image
                            src="/assets/physics-dept.jpg"
                            alt="Theoretical Physics Concepts"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-4 w-fit">
                                <Award className="w-3 h-3" />
                                1st Place National
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                IISc Team Secures First Place at Indian Young Physicists’ League (IYPL) 2025
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                    Bengaluru
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
                            A team of undergraduate students from the Indian Institute of Science (IISc), Bengaluru, has secured first place nationally at the Indian Young Physicists’ League (IYPL) 2025, India’s premier undergraduate theoretical physics competition.
                        </p>
                        <p>
                            The achievement placed the IISc team at the top rank among all participating teams across the country, earning them the distinction of representing India at PLANCKS 2025, the international theoretical physics competition conducted under the aegis of the International Association of Physics Students (IAPS).
                        </p>

                        <div className="my-8 p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-lg italic text-slate-600">
                            "The Indian Young Physicists’ League (IYPL) serves as the official national selection platform for PLANCKS in India. The competition rigorously evaluates teams on their ability to collaboratively solve advanced, research-level problems in theoretical physics, emphasizing analytical reasoning, conceptual clarity, and teamwork."
                        </div>

                        {/* Team Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Users className="w-6 h-6 text-amber-600" />
                                The Team: Denormalization Group
                            </h3>
                            <p className="mb-4">
                                The IISc team, competing under the name <strong>Denormalization Group</strong>, comprised:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Simar Narula</span>
                                        <span className="text-sm text-slate-500">Second-year Undergraduate</span>
                                    </div>
                                </li>
                                <li className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Ritabrata Ghosh</span>
                                        <span className="text-sm text-slate-500">Second-year Undergraduate</span>
                                    </div>
                                </li>
                                <li className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Susmit Roy</span>
                                        <span className="text-sm text-slate-500">Second-year Undergraduate</span>
                                    </div>
                                </li>
                                <li className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Avik Das</span>
                                        <span className="text-sm text-slate-500">First-year Undergraduate</span>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-4">
                                Their first-place finish reflects a high level of academic excellence and problem-solving capability.
                            </p>
                        </div>

                        {/* Impact */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Historic Qualification</h3>
                            <p>
                                By winning IYPL 2025, the team qualified to represent India at <strong>PLANCKS 2025</strong>, where they went on to achieve a historic international ranking, further underscoring the strength of undergraduate theoretical physics training at IISc.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="border-t border-slate-200 pt-8 mt-8">
                            <p className="font-medium text-slate-900">
                                This national-level recognition highlights IISc’s continued leadership in physics education and its students’ ability to compete at the highest levels of academic excellence.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
