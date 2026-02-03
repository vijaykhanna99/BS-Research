"use client";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { BookOpen, ArrowRight, LayoutDashboard, Info } from "lucide-react";

const CourseStructureGrid = ({ showIntroOnly = false }: { showIntroOnly?: boolean }) => {
    // List of departments with updated metadata for the new card design
    const departments = [
        {
            name: "Biology",
            id: "biology",
            image: "/assets/biology-dept.jpg",
            description: "Explore the science of life, from molecular biology to ecology.",
            tag: "Life Sciences",
            colorClass: "text-green-600",
            bgClass: "bg-green-50"
        },
        {
            name: "Chemistry",
            id: "chemistry",
            image: "/assets/chemistry-dept.jpg",
            description: "Study matter, its properties, composition, and reactivity.",
            tag: "Chemical Sciences",
            colorClass: "text-purple-600",
            bgClass: "bg-purple-50",
        },
        {
            name: "Physics",
            id: "physics",
            image: "/assets/physics-dept.jpg",
            description: "Understand the fundamental forces and laws of the universe.",
            tag: "Physical Sciences",
            colorClass: "text-blue-600",
            bgClass: "bg-blue-50"
        },
        {
            name: "Mathematics",
            id: "mathematics",
            image: "/assets/mathematics-dept.jpg",
            description: "Dive into the language of the universe through numbers and logic.",
            tag: "Formal Sciences",
            colorClass: "text-red-600",
            bgClass: "bg-red-50"
        },
        {
            name: "Earth & Environmental Science",
            id: "earth-environmental-science",
            image: "/assets/earth-science-dept.jpg",
            description: "Investigate the Earth's systems and environmental challenges.",
            tag: "Planetary Sciences",
            colorClass: "text-teal-600",
            bgClass: "bg-teal-50"
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-700 pb-20">
            {/* Modern Hero Section */}
            <div
                className="relative py-24 overflow-hidden flex items-center justify-center bg-gray-900"
                style={{
                    backgroundImage: `url('/assets/hero-course-structure.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Animated Glow Effects (Optional, kept subtle) */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
                        Bachelor of Science (Research)
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        A four-year interdisciplinary programme designed to foster the next generation of scientific leaders through rigorous training and active research.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

                {/* Course Overview & Introduction - Expanded Content */}
                <div className="mb-16 text-left w-full">
                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            Programme Overview
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-gray-700 text-justify">
                            <p>
                                The programme begins with a <span className="font-semibold text-blue-700">Foundation Phase (Semesters 1–3)</span>, where all students build a strong base in Physics, Chemistry, Mathematics, Biology, Engineering, Earth and Environmental Science.
                            </p>
                            <p>
                                From Semester 4 onwards, students enter the <span className="font-semibold text-purple-700">Specialization Phase (Semesters 4–8)</span>, where they choose a Major in one discipline and have the option to pursue a Minor in another, alongside interdisciplinary electives and a final-year research project.
                            </p>
                            <div className="bg-blue-50/80 p-6 rounded-xl border border-blue-100 flex items-start gap-4 mt-8">
                                <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <p className="text-base text-gray-800 m-0">
                                    For more detailed guidelines and requirements, please refer to the <Link href="/student-handbook" className="text-blue-700 font-bold hover:underline">Student Handbook</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shared Curriculum Section */}
                {!showIntroOnly && (
                    <>
                        <div className="mb-16">
                            <div className="flex items-center justify-between mb-6 px-2">
                                <h2 className="text-2xl font-bold text-gray-900">Shared Curriculum:</h2>
                                <span className="text-sm text-gray-500">Semesters 1-3</span>
                            </div>

                            <Link
                                href="/course-structure/shared-curriculum"
                                className="group relative flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <Image
                                        src="/assets/indian-students.jpg"
                                        alt="Shared Curriculum"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            Foundation Phase
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-center flex-grow md:w-2/3 relative overflow-hidden">
                                    {/* Decorative background element */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                                            Common Shared Curriculum
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                                            The first three semesters (1.5 years) serve as a common foundation for all students, covering core concepts in Physics, Chemistry, Mathematics, Biology, Engineering, and Humanities. This interdisciplinary approach ensures a strong scientific base before specialization.
                                        </p>

                                        <div className="flex items-center text-blue-600 font-bold group-hover:underline decoration-2 underline-offset-4">
                                            View Semester 1-3 Requirements
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-8 px-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900">Major Disciplines:</h2>
                                <span className="text-sm text-gray-500">5 Specializations Available</span>
                            </div>
                            <p className="text-gray-600 mt-2">
                                Please Choose a major discipline to view detailed course information and semester-wise course requirements
                            </p>
                        </div>

                        {/* NEW CARD DESIG: Grid of Large Image Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {departments.map((dept) => (
                                <Link
                                    key={dept.name}
                                    href={`/course-structure/${dept.id}`}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 text-left h-full transform hover:-translate-y-1"
                                >
                                    {/* Card Image Header */}
                                    <div className="relative h-48 overflow-hidden w-full">
                                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <Image
                                            src={dept.image}
                                            alt={dept.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                {dept.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                            {dept.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                            {dept.description}
                                        </p>

                                        <div className="mt-auto border-t border-gray-50 pt-4 flex items-center justify-between">
                                            <span className={`text-sm font-semibold ${dept.colorClass} group-hover:underline decoration-2 underline-offset-4`}>
                                                View Curriculum
                                            </span>
                                            <div className={`w-8 h-8 rounded-full ${dept.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <ArrowRight className={`w-4 h-4 ${dept.colorClass}`} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
                {/* End Conditional Rendering */}

            </div >
        </div >
    );
}

export default CourseStructureGrid;
