"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Calendar, Users, HelpCircle, Menu, X } from "lucide-react";

interface NavbarProps {
    // Props are no longer needed for page navigation but kept for compatibility if needed
}

const Navbar: React.FC<NavbarProps> = () => {
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
            name: "Apply Online",
            link: "https://admissions-august.iisc.ac.in/index.html",
            external: true,
            icon: <ExternalLink className="w-4 h-4 text-blue-500" />
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
                            <Link
                                href="/course-structure"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Course Structure <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* Course Structure Dropdown */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                            >
                                <div className="py-2">
                                    <Link
                                        href="/course-structure/biology"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Biology
                                    </Link>
                                    <Link
                                        href="/course-structure/chemistry"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Chemistry
                                    </Link>
                                    <Link
                                        href="/course-structure/physics"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Physics
                                    </Link>
                                    <Link
                                        href="/course-structure/mathematics"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Mathematics
                                    </Link>
                                    <Link
                                        href="/course-structure/earth-environmental-science"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Earth & Env. Science
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                href="/student-handbook"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Student Handbook
                            </Link>
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
                                        item.external ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
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
                            <a
                                href="https://odaa.iisc.ac.in/fellowships/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Fellowship
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://occap.iisc.ac.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-5 px-5 hover:bg-white/10 hover:text-white transition-all duration-200 block text-sm font-semibold tracking-wide rounded-md my-1"
                            >
                                Placements
                            </a>
                        </li>
                        <li className="relative group perspective">
                            <Link
                                href="/people/administration"
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
                                        href="/people/administration"
                                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    >
                                        Dean & Co-ordinators
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
                    </ul>

                    {/* Mobile Menu Dropdown */}
                    <div className={`${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'} md:hidden absolute top-full left-0 w-full bg-blue-900 shadow-xl overflow-y-auto transition-all duration-300 ease-in-out`}>
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
                                    <Link href="/course-structure" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Overview</Link>
                                    <Link href="/course-structure/biology" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Biology</Link>
                                    <Link href="/course-structure/chemistry" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Chemistry</Link>
                                    <Link href="/course-structure/physics" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Physics</Link>
                                    <Link href="/course-structure/mathematics" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Mathematics</Link>
                                    <Link href="/course-structure/earth-environmental-science" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Earth & Env. Science</Link>
                                </div>
                            </li>

                            <li>
                                <Link href="/student-handbook" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Student Handbook
                                </Link>
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
                                        item.external ? (
                                            <a key={index} href={item.link} target="_blank" className="block py-2 text-sm text-blue-200 hover:text-white">{item.name}</a>
                                        ) : (
                                            <Link key={index} href={item.link} className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>{item.name}</Link>
                                        )
                                    ))}
                                </div>
                            </li>

                            <li>
                                <a href="https://odaa.iisc.ac.in/fellowships/" target="_blank" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Fellowship
                                </a>
                            </li>
                            <li>
                                <a href="https://occap.iisc.ac.in/" target="_blank" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Placements
                                </a>
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
                                    <Link href="/people/administration" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Dean & Co-ordinators</Link>
                                    <Link href="/people/instructors" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>UG Instructors</Link>
                                    <Link href="/people/teaching-assistants" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Teaching Assistants</Link>
                                    <Link href="/people/office-staff" className="block py-2 text-sm text-blue-200 hover:text-white" onClick={toggleMenu}>Office Staff</Link>
                                </div>
                            </li>

                            <li>
                                <Link href="/contact" className="block py-3 px-4 hover:bg-white/10 rounded-md text-sm font-bold" onClick={toggleMenu}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
