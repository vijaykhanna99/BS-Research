"use client";
import React from "react";
import Image from 'next/image';
import { ExternalLink, Calendar, Users, HelpCircle, ArrowRight } from "lucide-react";
import { MdDescription } from "react-icons/md";

const Admissions = () => {

    // Links Data
    const links = [
        {
            title: "News and Updates",
            description: "Admission Notice for the Academic Year 2026-27.",
            icon: <MdDescription className="w-6 h-6" />,
            url: "/admissions/news-and-updates",
            external: false,
            theme: "orange"
        },
        {
            title: "Apply Online",
            description: "Apply online for the upcoming admissions cycle.",
            icon: <ExternalLink className="w-6 h-6" />,
            url: "https://admissions-august.iisc.ac.in/index.html",
            external: true,
            theme: "blue"
        },
        {
            title: "Important dates",
            description: "Schedule for applications & Counselling .",
            icon: <Calendar className="w-6 h-6" />,
            url: "/admissions/important-dates",
            external: false,
            theme: "orange"
        },
        {
            title: "Selection process",
            description: "Criteria and cutoffs .",
            icon: <Users className="w-6 h-6" />,
            url: "/admissions/selection-process",
            external: false,
            theme: "green"
        },
        {
            title: "Fee Structure",
            description: "Tuition, fees & installments.",
            icon: <Calendar className="w-6 h-6" />,
            url: "/admissions/fee-structure",
            external: false,
            theme: "pink"
        },
        {
            title: "FAQ",
            description: "Common questions answered.",
            icon: <HelpCircle className="w-6 h-6" />,
            url: "/admissions/faq",
            external: false,
            theme: "purple"
        }
    ];

    const getThemeClasses = (theme: string) => {
        switch (theme) {
            case 'blue': return { text: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:bg-blue-50 hover:border-blue-200' };
            case 'orange': return { text: 'text-orange-600', bg: 'bg-orange-50', hover: 'hover:bg-orange-50 hover:border-orange-200' };
            case 'green': return { text: 'text-green-600', bg: 'bg-green-50', hover: 'hover:bg-green-50 hover:border-green-200' };
            case 'purple': return { text: 'text-purple-600', bg: 'bg-purple-50', hover: 'hover:bg-purple-50 hover:border-purple-200' };
            default: return { text: 'text-slate-600', bg: 'bg-slate-50', hover: 'hover:bg-slate-50' };
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header Content with Image - Full Width */}
            <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                    src="/assets/champions.png"
                    alt="Admission Header"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
                        Admissions
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl">
                        Gateway to India's premier research institute
                    </p>
                </div>
            </div>

            {/* Content Area - Card Grid UI (Restored Old UI) */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {links.map((link, index) => {
                        const theme = getThemeClasses(link.theme);
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target={link.external ? "_blank" : "_self"}
                                rel={link.external ? "noopener noreferrer" : ""}
                                className={`group flex items-start gap-6 p-8 bg-white border border-slate-200 rounded-xl transition-all duration-300 ${theme.hover} shadow-sm hover:shadow-md`}
                            >
                                {/* Icon Box */}
                                <div className={`w-14 h-14 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                                    {link.icon}
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 truncate">
                                            {link.title}
                                        </h3>
                                        {link.external && <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />}
                                    </div>
                                    <p className="text-slate-500 text-base leading-relaxed">
                                        {link.description}
                                    </p>

                                    <div className="mt-4 flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                                        <span>{link.external ? 'Go to Portal' : 'Read More'}</span>
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Admissions;
