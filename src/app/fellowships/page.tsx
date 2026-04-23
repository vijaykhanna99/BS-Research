"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, GraduationCap, Users, Heart, BookOpen, Star, Award, Zap, ChevronRight } from "lucide-react";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

// Data
const fellowships = [
    {
        title: "IISc-AANA Midwest Chapter Fellowship",
        slug: "iisc-aana-midwest-chapter",
        category: "Women in Science",
        description: "Supporting undergraduate women to augment the gender ratio in science and research.",
        icon: Users,
        theme: "blue"
    },
    {
        title: "Mallika Women in Science Fellowships",
        slug: "mallika-women-in-science",
        category: "Women in Science",
        description: "Encouraging and supporting women pursuing careers in science and engineering.",
        icon: Sparkles,
        theme: "pink"
    },
    {
        title: "Prof J Nagaraju Memorial Fellowship",
        slug: "prof-j-nagaraju-memorial",
        category: "Memorial",
        description: "Instituted in memory of Prof J Nagaraju to support deserving women undergraduate students.",
        icon: Star,
        theme: "amber"
    },
    {
        title: "IISc 1975 BE EECS Batch Fellowships",
        slug: "iisc-1975-be-eecs-batch",
        category: "Alumni Support",
        description: "Established by the 1975 BE EECS batch alumni to support current undergraduate students.",
        icon: Zap,
        theme: "indigo"
    },
    {
        title: "Hallimysore Hirannaiah & Subbalakshamma Fellowships",
        slug: "hallimysore-hirannaiah-subbalakshamma",
        category: "Philanthropy",
        description: "Established by Satya H Narayana and Pankaja Narayana for students in the UG program.",
        icon: Heart,
        theme: "rose"
    },
    {
        title: "Jayalakshmi & Venkataramanachar Fellowship",
        slug: "jayalakshmi-venkataramanachar-women",
        category: "Women in Science",
        description: "Supporting women students in the Bachelor of Science (Research) program.",
        icon: GraduationCap,
        theme: "emerald"
    },
    {
        title: "Vasant Natarajan UG Fellowships",
        slug: "vasant-natarajan",
        category: "Memorial",
        description: "Instituted by the family of Dr Vasant Natarajan for Undergraduate and Physics students.",
        icon: BookOpen,
        theme: "violet"
    },
    {
        title: "Chamarahalli Ramachandra & Kamala Iyer Fellowship",
        slug: "chamarahalli-ramachandra-kamala-iyer",
        category: "Integrated Program",
        description: "For deserving students in the 5th year of their integrated B.Sc-M.Sc programme.",
        icon: Award,
        theme: "cyan"
    },
];

const themeMap: any = {
    blue: { header: "bg-blue-50 border-blue-100 text-blue-800", icon: "text-blue-600" },
    pink: { header: "bg-pink-50 border-pink-100 text-pink-800", icon: "text-pink-600" },
    amber: { header: "bg-amber-50 border-amber-100 text-amber-800", icon: "text-amber-600" },
    indigo: { header: "bg-indigo-50 border-indigo-100 text-indigo-800", icon: "text-indigo-600" },
    rose: { header: "bg-rose-50 border-rose-100 text-rose-800", icon: "text-rose-600" },
    emerald: { header: "bg-emerald-50 border-emerald-100 text-emerald-800", icon: "text-emerald-600" },
    violet: { header: "bg-violet-50 border-violet-100 text-violet-800", icon: "text-violet-600" },
    cyan: { header: "bg-cyan-50 border-cyan-100 text-cyan-800", icon: "text-cyan-600" },
};

export default function FellowshipsPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="BS Research"
                title="Fellowships"
                subtitle="Explore opportunities designed to support academic excellence and diversity in research."
                image="/assets/IMG_9389.JPG"
            />
            <ContentShell>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fellowships.map((fellowship, index) => {
                        const Icon = fellowship.icon;
                        const theme = themeMap[fellowship.theme] || themeMap.blue;

                        return (
                            <Link
                                key={index}
                                href={`/fellowships/${fellowship.slug}`}
                                className="elevated-card flex flex-col hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                            >
                                {/* Category Header */}
                                <div className={`py-3 px-5 border-b flex justify-between items-center ${theme.header}`}>
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        {fellowship.category}
                                    </span>
                                    <Icon className={`w-4 h-4 ${theme.icon}`} />
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                                        {fellowship.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {fellowship.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-sm font-medium">
                                        <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Know more</span>
                                        <div className="h-8 w-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>


            </ContentShell>
        </PageBody>
    );
}
