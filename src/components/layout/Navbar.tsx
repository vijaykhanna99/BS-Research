"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Calendar, Users, HelpCircle, Menu, X, ChevronRight, Info, BookOpen, GraduationCap, Briefcase, Heart, Shield, FlaskConical, Map, Leaf } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubmenu = (name: string) => {
        if (activeSubmenu === name) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(name);
        }
    };

    // Admissions Menu Items - Compact
    const admissionItems = [
        {
            name: "News and Updates",
            link: "/admissions/news-and-updates",
            external: false,
            icon: <Info className="w-4 h-4 text-red-500" />
        },
        {
            name: "Apply Online",
            link: "https://admissions-august.iisc.ac.in/index.html",
            external: true,
            disabled: true,
            icon: <ExternalLink className="w-4 h-4 text-slate-300" />
        },
        {
            name: "Important Dates",
            link: "/admissions/important-dates",
            icon: <Calendar className="w-4 h-4 text-orange-500" />
        },
        {
            name: "Selection Process",
            link: "/admissions/selection-process",
            icon: <Users className="w-4 h-4 text-green-500" />
        },
        {
            name: "Fee Structure",
            link: "/admissions/fee-structure",
            icon: <Calendar className="w-4 h-4 text-pink-500" />
        },
        {
            name: "FAQ",
            link: "/admissions/faq",
            icon: <HelpCircle className="w-4 h-4 text-purple-500" />
        },
    ];

    // Student Corner Menu Items
    const studentCornerItems = [
        {
            name: "Student Handbook",
            link: "/student-handbook",
            icon: <BookOpen className="w-4 h-4 text-blue-500" />
        },
        {
            name: "Placements",
            link: "https://occap.iisc.ac.in/", // Keeping the external link from the original Placements button
            external: true,
            icon: <Briefcase className="w-4 h-4 text-orange-500" />
        },
        {
            name: "Academic Calendar",
            link: "/assets/UG Academic Calendar Jan-Apr 2026 (2).pdf", // Local asset link
            external: true,
            icon: <Calendar className="w-4 h-4 text-pink-500" />
        },
        {
            name: "Student Council",
            link: "https://scouncil.iisc.ac.in/",
            external: true,
            icon: <Users className="w-4 h-4 text-green-500" />
        },
        {
            name: "Health Center",
            link: "https://www.iisc.ac.in/health-centre/",
            external: true,
            icon: <Heart className="w-4 h-4 text-red-500" />
        },
        {
            name: "Internal Complaint Committee",
            link: "https://iisc.ac.in/complaints/",
            external: true,
            icon: <Shield className="w-4 h-4 text-purple-500" />
        },
        {
            name: "Campus Life",
            link: "/campus-life",
            icon: <Users className="w-4 h-4 text-amber-500" />
        },
    ];

    // Open Day Menu Items
    const openDayItems = [
        {
            name: "UG Experiments",
            link: "/open-day/ug-experiments",
            icon: <FlaskConical className="w-4 h-4 text-purple-500" />
        },
        {
            name: "Open Day Map",
            link: "/open-day/map",
            icon: <Map className="w-4 h-4 text-blue-500" />
        },
        {
            name: "Green Open Day",
            link: "/open-day/green",
            icon: <Leaf className="w-4 h-4 text-green-500" />
        }
    ];

    return (
        <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm bg-blue-900/95 border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center md:justify-center min-h-[60px]">

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white hover:bg-blue-800 rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex justify-center space-x-1">
                        <li>
                            <Link
                                href="/"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative group perspective">
                            <button
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Course Structure <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Course Structure Dropdown - Nested Menu Style */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 bg-white text-gray-800 shadow-2xl rounded-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-visible ring-1 ring-black/5"
                            >
                                <div className="p-2 space-y-1">
                                    {/* Option 1: Shared Curriculum */}
                                    <Link
                                        href="/course-structure/shared-curriculum"
                                        className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors relative"
                                    >
                                        <div className="p-2 bg-purple-50 text-purple-600 rounded-md group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors shrink-0">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-gray-900">Shared Curriculum</div>
                                            <div className="text-[10px] font-semibold text-purple-600 uppercase tracking-wide">Semesters 1-3</div>
                                        </div>
                                    </Link>

                                    {/* Option 2: Majors (Nested Dropdown) */}
                                    <div className="group/majors relative">
                                        <button className="w-full flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left cursor-default">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-50 text-blue-600 rounded-md group-hover/majors:bg-blue-600 group-hover/majors:text-white transition-colors shrink-0">
                                                    <GraduationCap className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm text-gray-900">Majors</div>
                                                    <div className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Semesters 4-8</div>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover/majors:text-blue-600 transition-colors" />
                                        </button>

                                        {/* Nested Flyout Menu */}
                                        <div className="absolute left-full top-0 ml-2 w-60 bg-white shadow-xl rounded-xl border border-slate-100 p-2 opacity-0 invisible group-hover/majors:opacity-100 group-hover/majors:visible transition-all duration-200 transform -translate-x-2 group-hover/majors:translate-x-0 ring-1 ring-black/5">
                                            <div className="space-y-0.5">
                                                <Link href="/course-structure/biology" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50/50 hover:text-green-700 transition-colors group/link">
                                                    <span className="w-2 h-2 rounded-full bg-green-500 group-hover/link:scale-125 transition-transform"></span>
                                                    <span className="text-sm font-bold text-slate-700">Biology</span>
                                                </Link>
                                                <Link href="/course-structure/chemistry" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-purple-50/50 hover:text-purple-700 transition-colors group/link">
                                                    <span className="w-2 h-2 rounded-full bg-purple-500 group-hover/link:scale-125 transition-transform"></span>
                                                    <span className="text-sm font-bold text-slate-700">Chemistry</span>
                                                </Link>
                                                <Link href="/course-structure/physics" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/50 hover:text-blue-700 transition-colors group/link">
                                                    <span className="w-2 h-2 rounded-full bg-blue-500 group-hover/link:scale-125 transition-transform"></span>
                                                    <span className="text-sm font-bold text-slate-700">Physics</span>
                                                </Link>
                                                <Link href="/course-structure/mathematics" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-red-50/50 hover:text-red-700 transition-colors group/link">
                                                    <span className="w-2 h-2 rounded-full bg-red-500 group-hover/link:scale-125 transition-transform"></span>
                                                    <span className="text-sm font-bold text-slate-700">Mathematics</span>
                                                </Link>
                                                <Link href="/course-structure/earth-environmental-science" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-teal-50/50 hover:text-teal-700 transition-colors group/link">
                                                    <span className="w-2 h-2 rounded-full bg-teal-500 group-hover/link:scale-125 transition-transform"></span>
                                                    <span className="text-sm font-bold text-slate-700">Earth & Env. Science</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className="relative group perspective">
                            <Link
                                href="/admissions"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Admissions <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* Compact Dropdown Menu */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                            >
                                <div className="p-1.5">
                                    {admissionItems.map((item, index) =>
                                        item.disabled ? (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 p-2.5 rounded-md cursor-not-allowed opacity-50"
                                                title="Opening Soon"
                                            >
                                                <div className="p-1.5 bg-slate-50 rounded-md border border-slate-100 shadow-sm shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-slate-400 text-sm">{item.name}</span>
                                                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">Soon</span>
                                                </div>
                                            </div>
                                        ) : item.external ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={index}
                                                className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md transition-colors group/item"
                                            >
                                                <div className="p-1.5 bg-slate-50 group-hover/item:bg-white rounded-md border border-slate-100 shadow-sm transition-colors shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="font-bold text-slate-700 text-sm group-hover/item:text-blue-600 transition-colors">
                                                    {item.name}
                                                </div>
                                            </a>
                                        ) : (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md transition-colors group/item"
                                            >
                                                <div className="p-1.5 bg-slate-50 group-hover/item:bg-white rounded-md border border-slate-100 shadow-sm transition-colors shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="font-bold text-slate-700 text-sm group-hover/item:text-blue-600 transition-colors">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        </li>

                        {/* Student Corner Dropdown (Desktop) */}
                        <li className="relative group perspective">
                            <button
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Student Corner <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </button>

                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 bg-white text-gray-800 shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                            >
                                <div className="p-1.5">
                                    {studentCornerItems.map((item, index) =>
                                        item.external ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={index}
                                                className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md transition-colors group/item"
                                            >
                                                <div className="p-1.5 bg-slate-50 group-hover/item:bg-white rounded-md border border-slate-100 shadow-sm transition-colors shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="font-bold text-slate-700 text-sm group-hover/item:text-blue-600 transition-colors">
                                                    {item.name}
                                                </div>
                                            </a>
                                        ) : (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md transition-colors group/item"
                                            >
                                                <div className="p-1.5 bg-slate-50 group-hover/item:bg-white rounded-md border border-slate-100 shadow-sm transition-colors shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="font-bold text-slate-700 text-sm group-hover/item:text-blue-600 transition-colors">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/fellowships"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Fellowships
                            </Link>
                        </li>

                        {/* Open Day Dropdown (Desktop) */}
                        <li className="relative group perspective">
                            <button
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1 text-green-400 group-hover:bg-white/10"
                            >
                                🌿 Open Day (2026) <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </button>

                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                            >
                                <div className="p-1.5">
                                    {openDayItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md transition-colors group/item"
                                        >
                                            <div className="p-1.5 bg-slate-50 group-hover/item:bg-white rounded-md border border-slate-100 shadow-sm transition-colors shrink-0">
                                                {item.icon}
                                            </div>
                                            <div className="font-bold text-slate-700 text-sm group-hover/item:text-blue-600 transition-colors">
                                                {item.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className="relative group perspective">
                            <Link
                                href="/people"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                People <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* People Dropdown Menu - Simple Text */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                            >
                                <div className="py-2">
                                    <Link
                                        href="/people/deans"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Deans
                                    </Link>
                                    <Link
                                        href="/people/coordinators"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Coordinators
                                    </Link>
                                    <Link
                                        href="/people/instructors"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        UG Instructors
                                    </Link>
                                    <Link
                                        href="/people/teaching-assistants"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Teaching Assistants
                                    </Link>
                                    <Link
                                        href="/people/office-staff"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Office Staff
                                    </Link>
                                    <Link
                                        href="/alumni"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Alumni
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul >

                    {/* Mobile Menu Dropdown */}
                    < div className={`${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'} md:hidden absolute top-full left-0 w-full bg-blue-900 shadow-xl overflow-y-auto transition-all duration-300 ease-in-out`}>
                        <ul className="flex flex-col p-4 space-y-2">
                            <li>
                                <Link href="/" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>

                            {/* Mobile Course Structure */}
                            <li>
                                <button
                                    onClick={() => toggleSubmenu('course-structure')}
                                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold"
                                >
                                    Course Structure <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === 'course-structure' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`${activeSubmenu === 'course-structure' ? 'block' : 'hidden'} pl-8 pr-4 py-2 space-y-2 bg-blue-950/50 rounded-md mt-1`}>

                                    <Link href="/course-structure/shared-curriculum" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" />
                                            <span>Shared Curriculum (Sem 1-3)</span>
                                        </div>
                                    </Link>

                                    <div className="pt-3 pb-1 text-xs font-bold text-blue-400 uppercase tracking-widest pl-1">Majors (Sem 4-8)</div>

                                    <Link href="/course-structure/biology" className="block py-2 pl-4 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Biology</Link>
                                    <Link href="/course-structure/physics" className="block py-2 pl-4 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Physics</Link>
                                    <Link href="/course-structure/chemistry" className="block py-2 pl-4 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Chemistry</Link>
                                    <Link href="/course-structure/mathematics" className="block py-2 pl-4 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Mathematics</Link>
                                    <Link href="/course-structure/earth-environmental-science" className="block py-2 pl-4 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Earth & Env. Science</Link>
                                </div>
                            </li>



                            {/* Mobile Admissions */}
                            <li>
                                <button
                                    onClick={() => toggleSubmenu('admissions')}
                                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold"
                                >
                                    Admissions <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === 'admissions' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`${activeSubmenu === 'admissions' ? 'block' : 'hidden'} pl-8 pr-4 py-2 space-y-2 bg-blue-950/50 rounded-md mt-1`}>
                                    <Link href="/admissions" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Overview</Link>
                                    {admissionItems.map((item, index) => (
                                        item.disabled ? (
                                            <span key={index} className="block py-2 text-sm text-blue-400/50 cursor-not-allowed">{item.name} <span className="text-[10px] text-amber-400">(Opening Soon)</span></span>
                                        ) : item.external ? (
                                            <a key={index} href={item.link} target="_blank" className="block py-2 text-sm text-blue-200 hover:text-white">{item.name}</a>
                                        ) : (
                                            <Link key={index} href={item.link} className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>{item.name}</Link>
                                        )
                                    ))}
                                </div>
                            </li>

                            {/* Mobile Student Corner */}
                            <li>
                                <button
                                    onClick={() => toggleSubmenu('student-corner')}
                                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold"
                                >
                                    Student Corner <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === 'student-corner' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`${activeSubmenu === 'student-corner' ? 'block' : 'hidden'} pl-8 pr-4 py-2 space-y-2 bg-blue-950/50 rounded-md mt-1`}>
                                    {studentCornerItems.map((item, index) => (
                                        item.external ? (
                                            <a key={index} href={item.link} target="_blank" className="block py-2 text-sm text-blue-200 hover:text-white">{item.name}</a>
                                        ) : (
                                            <Link key={index} href={item.link} className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>{item.name}</Link>
                                        )
                                    ))}
                                </div>
                            </li>

                            <li>
                                <Link href="/fellowships" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Fellowships
                                </Link>
                            </li>

                            {/* Mobile Open Day */}
                            <li>
                                <button
                                    onClick={() => toggleSubmenu('open-day')}
                                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold text-green-400"
                                >
                                    🌿 Open Day (2026) <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === 'open-day' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`${activeSubmenu === 'open-day' ? 'block' : 'hidden'} pl-8 pr-4 py-2 space-y-2 bg-blue-950/50 rounded-md mt-1`}>
                                    {openDayItems.map((item, index) => (
                                        <Link key={index} href={item.link} className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>{item.name}</Link>
                                    ))}
                                </div>
                            </li>


                            {/* Mobile People */}
                            <li>
                                <button
                                    onClick={() => toggleSubmenu('people')}
                                    className="w-full flex justify-between items-center py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold"
                                >
                                    People <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === 'people' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`${activeSubmenu === 'people' ? 'block' : 'hidden'} pl-8 pr-4 py-2 space-y-2 bg-blue-950/50 rounded-md mt-1`}>
                                    <Link href="/people/deans" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Deans</Link>
                                    <Link href="/people/coordinators" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Coordinators</Link>
                                    <Link href="/people/instructors" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>UG Instructors</Link>
                                    <Link href="/people/teaching-assistants" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Teaching Assistants</Link>
                                    <Link href="/people/office-staff" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Office Staff</Link>
                                    <Link href="/alumni" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Alumni</Link>
                                </div>
                            </li>

                            <li>
                                <Link href="/contact" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div >

                </div >
            </div >
        </nav >
    );
};

export default Navbar;
