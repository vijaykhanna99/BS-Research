"use client";
import React from "react";
import Image from 'next/image';
import { ArrowLeft, Calendar, MapPin, Award, User, Leaf } from "lucide-react";
import Link from "next/link";

export default function IgemAchievementPage() {
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
                            src="/assets/chemistry-dept.jpg"
                            alt="Biological research in a laboratory"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-4 w-fit">
                                <Award className="w-3 h-3" />
                                Gold Medal
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                IISc Team Wins Gold Medal and Receives Best SDG Impact Nomination at iGEM 2025
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-green-400" />
                                    Bengaluru
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-green-400" />
                                    October 2025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 md:p-12 text-slate-700 leading-relaxed text-lg space-y-8">
                        {/* Introduction */}
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:mr-3 float-left">
                            A student team from the Indian Institute of Science (IISc), Bengaluru, has earned international recognition at the iGEM 2025 (International Genetically Engineered Machine) Grand Jamboree, securing a Gold Medal and receiving a nomination for the Best Sustainable Development Goals (SDG) Impact Award.
                        </p>
                        <p>
                            The team was awarded the Gold Medal for successfully meeting all iGEM medal criteria, demonstrating excellence in scientific design, innovation, and societal relevance. The achievement was recognized at the iGEM Grand Jamboree held at the <strong>Paris Convention Centre</strong> from 28–31 October 2025, which brought together over 400 teams from around the world.
                        </p>

                        <div className="my-8 p-6 bg-slate-50 border-l-4 border-green-600 rounded-r-lg italic text-slate-600">
                            "The International Genetically Engineered Machine (iGEM) competition is a globally renowned platform that challenges student teams to develop solutions to real-world problems using synthetic biology and genetic engineering. It emphasizes interdisciplinary research, responsible innovation, and engagement with societal stakeholders."
                        </div>

                        {/* Project Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Leaf className="w-6 h-6 text-green-600" />
                                Project ARGUS-2440
                            </h3>
                            <p>
                                The team addressed the pressing environmental challenge of <strong>nitrate leaching</strong>, a phenomenon in which excess rainfall and irrigation cause nitrogen loss from soil in the form of nitrate ions. This leads to contamination of water bodies and poses significant risks to aquatic ecosystems, as well as to human and livestock health.
                            </p>
                            <p className="mt-4">
                                Their project, titled <strong>ARGUS-2440</strong> (Ammonium Rhizospheric Generation Using Soil Bacteria), proposed a sustainable biological approach to mitigate nitrate leaching using the common soil bacterium <em>Pseudomonas putida</em> KT2440. The solution aims to improve nitrogen retention in agricultural soils while reducing environmental and health risks.
                            </p>
                        </div>

                        {/* Team and Mentorship */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Team and Mentorship</h3>
                            <p>
                                The IISc team comprised <strong>15 undergraduate students</strong> and was mentored by:
                            </p>
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-green-600">
                                <li><strong>Prof. Samay Pande</strong> (Department of Molecular and Cell Biology) - Primary Principal Investigator</li>
                            </ul>
                        </div>

                        {/* Impact and Engagement */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sustainability and Impact</h3>
                            <p>
                                In addition to the Gold Medal, the team received a nomination for the <strong>Best SDG Impact Award</strong>, which recognizes projects that align with the United Nations Sustainable Development Goals.
                            </p>
                            <p className="mt-4">
                                As part of this effort, the team actively engaged with farmers, academic experts, and policymakers to evaluate the broader societal implications of their work. They assessed both the benefits and limitations of their approach and proposed innovative scientific and logistical strategies to maximize sustainable impact.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="border-t border-slate-200 pt-8 mt-8">
                            <p className="font-medium text-slate-900">
                                This recognition underscores the IISc students’ strong capabilities in synthetic biology, environmental sustainability, and responsible innovation, and reflects the institute’s continued commitment to addressing global challenges through cutting-edge research and education.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
