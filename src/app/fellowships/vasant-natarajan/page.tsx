"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, Heart, GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function VasantNatarajanFellowshipPage() {
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
                                Vasant Natarajan UG Fellowships
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium">
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Family of Dr Vasant Natarajan
                                </span>
                                <span className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    UG BS
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
                                    The Vasant Natarajan UG Fellowships have been instituted by the family of Dr Vasant Natarajan for the benefit of Undergraduate/Physics Department students at IISc.
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
                                        <span className="text-slate-700">Award will be given to Physical disabilities quota students in the incoming UG Program (BSc or BTech).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">If there are no students among the UG program, then PwD in Masters and PhD program may be considered.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2.5 shrink-0"></div>
                                        <span className="text-slate-700">If there any balance available after these, then female 3rd year UG student with highest CGPA in Physics may be considered for an award.</span>
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
                                        <span className="text-slate-700">One time financial assistance split among the eligible students.</span>
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
                                        <h3 className="font-bold text-blue-900 text-center">2024-2025</h3>
                                    </div>
                                    <div className="p-6">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">Akarsh Naidu</li>
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">Niranjana Surya</li>
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">Subhasmita Sahoo</li>
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">Yaduraj Singh</li>
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">Jami Vignesh Pushkar</li>
                                            <li className="text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">P Nihal Srivatsav</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Prof Vasant Natarajan */}
                        <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Star className="w-6 h-6 mr-3 text-yellow-400" />
                                    Prof Vasant Natarajan
                                </h2>

                                <div className="clearfix">
                                    <div className="md:float-left md:w-1/3 w-full md:mr-8 mb-6 md:mb-2 text-center md:text-left">
                                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500/20 inline-block w-full">
                                            <Image
                                                src="/assets/fellowhship/VasantNatarajan.png"
                                                alt="Prof Vasant Natarajan"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                                        <p>
                                            Prof Vasant Natarajan was born in Chennai on December 11, 1965. After his schooling, he attended IIT Madras between 1982 to 1986, earning a BTech in Electrical Engineering. Following this, he received an MS from Rensselaer Polytechnic Institute, Troy, New York in 1988 and then completely changed tracks to do a PhD in Atomic Physics from MIT, Cambridge, Massachusetts. After getting his PhD in 1993, he worked for 2 years at AT&T Bell Labs, Murray Hill, New Jersey. He joined the Physics Department at IISc in 1996, and remained there till his demise in December 2021. His research interests were in laser cooling and trapping of atoms, quantum optics, optical tweezers, quantum computation in ion traps and tests of time-reversal symmetry violation in the fundamental laws of physics.
                                        </p>
                                        <p>
                                            He was a pioneer in the field of laser cooling and trapping of neutral atoms in India, with his ‘Laser lab’ at IISc having – for the first time in this country – produced a cloud of trapped laser-cooled Rubidium atoms in 2001. His laboratory also set the path for high precision frequency metrology and quantum optics experiments employing precision atomic spectroscopy – another field hitherto not very well explored in India. He developed an entirely in-house infrastructure and expertise for almost every component required in the complex set of atomic physics experiments his lab performed. Thus, his laboratory possessed genuine expertise in developing their own semiconductor laser-based frequency tuneable light sources, precision electronics, and ultra-high vacuum systems with hardware sourced from pan-Indian suppliers. In addition, his laboratory also developed an optical tweezers system; his collaborative work with biologists on malaria parasite-affected red blood cells was internationally acclaimed.
                                        </p>
                                        <p>
                                            He was also extremely interested in translating the technology his lab developed towards commercially viable devices, and launched a technology start-up on an indigenously designed solar power generator almost ten years back.
                                        </p>
                                        <p>
                                            He published more than a hundred papers on both experimental and theoretical atomic physics in his scientific career – with more than 85% of them from IISc. He also wrote three books; one each on atomic and general physics, while the third was for non-physics science and arts students. The latter reflected his increasing interest in science communication, and rationalism in general. In fact, during the later stages of his life, he proceeded to write several engrossing articles dispelling non-science and advocating scientific temper in Indian popular science journals such as Resonance, Research Matters, and so on.
                                        </p>
                                        <p>
                                            He was also part of the policy-making for DST’s flagship programme aimed at identifying and nurturing India’s young scientific talent right from the school level – the Kishore Vigyan Protsayan Yojna (KVPY) – when it was launched in 1999.
                                        </p>
                                        <p>
                                            Prof Natarajan’s work was recognised by several awards and honours which included the Swarnajayanti Fellowship, Homi Bhabha Fellowship, and the Philips Foundation Fellowship. Many of his students are excellent experimental physicists and have set up successful laboratories in India and abroad.
                                        </p>
                                        <p>
                                            Despite his physical disability, he had an indomitable spirit and focused only on the positive happenings in his life. He supported many charities including those that worked on educating the girl child. He had a very strong belief in science and was very rational in his approach to life. He was well read and had a huge collection of books. He used to write in The Hindu quite regularly on many social issues and always was supportive of the weak and marginalised sections of the society.
                                        </p>
                                        <p>
                                            He passed away on December 29, 2021, leaving behind important contributions in the field of Atomic Physics and many books and articles which will inspire many generations to come.
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
