"use client";
import React, { useState } from "react";
import { MoveLeft, ArrowRight, BookOpen, X, Info, AlignLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { semesters } from "@/data/sharedCurriculumData";
import HandbookReferenceNote from "@/components/course-structure/HandbookReferenceNote";

export interface DepartmentTemplateProps {
    name: string;
    image: string;
    description: string; // Brief description
    overview: string; // Longer overview text
    tag: string;
    colorClass: string;
    bgClass: string;
    staff?: {
        coordinators?: string[];
        instructorsUg?: string[];
        teachingAssistants?: string[];
    };
    majorSemesters: any[]; // The specific semester requirements for this major
    electives: any[]; // Nested array structure matching existing logic
    electivesIntro?: React.ReactNode; // Optional intro text for electives
    customMastersContent?: React.ReactNode; // Optional custom content for Master's degree section
}

const DepartmentTemplate = ({
    name,
    image,
    overview,
    staff,
    majorSemesters,
    electives,
    electivesIntro,
    customMastersContent
}: DepartmentTemplateProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [showBack, setShowBack] = useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('from') === 'home') {
                setShowBack(true);
            }
        }
    }, []);

    // Use major semesters directly
    const currentSemester = majorSemesters[activeTab];
    const electiveCourses = Array.isArray(electives?.[0]) ? electives.flat() : electives;

    return (
        <div className="bg-white pb-8 font-sans text-gray-900">
            {/* Nav / Back Button */}
            <div className={`bg-white sticky top-0 z-40 px-6 h-16 shadow-sm relative ${showBack ? "border-b border-gray-100 flex items-center" : "hidden"}`}>
                {showBack && (
                    <Link
                        href="/"
                        className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors absolute left-6"
                    >
                        <MoveLeft className="w-5 h-5 mr-2" /> Back
                    </Link>
                )}
            </div>

            {/* 1. Background Image / Hero */}
            <div
                className="relative w-full h-[300px] flex items-center justify-center bg-gray-900"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Bachelor of Science (Research) <span className="text-blue-200 mx-1">•</span> Major
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                        {name}
                    </h1>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

                {/* 1. Basic Structure */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Basic Structure
                    </h2>

                    <div className="prose max-w-none text-gray-700 mb-8">
                        <p className="text-lg leading-relaxed">
                            {overview}
                        </p>
                    </div>

                    {/* Degree Award Requirement Table */}
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm mb-6">
                        <table className="w-full text-center border-collapse min-w-[800px]">
                            <thead>

                                <tr className="bg-white">
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Basic Course<br />(Sem 1-3)</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Engineering<br />(Sem 2-3)</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Humanities<br />(Sem 1-6)</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Major and Project</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Minor<br />(Optional)</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-1/6 align-middle">Electives<br />(Assortment Courses)</th>
                                    <th className="px-4 py-3 font-bold text-gray-900 border border-gray-300 w-[100px] align-middle">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">40</td>
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">6</td>
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">9</td>
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">51</td>
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">15</td>
                                    <td className="px-4 py-3 text-gray-900 border border-gray-300 font-medium">10 - 25</td>
                                    <td rowSpan={2} className="px-4 py-3 text-gray-900 border border-gray-300 font-bold text-lg">131</td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td colSpan={4} className="border border-gray-300 bg-gray-50/50"></td>
                                    <td colSpan={2} className="px-4 py-3 text-gray-900 border border-gray-300 font-bold">25*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="space-y-2 mt-4 text-sm text-gray-700 bg-gray-50 p-4 rounded border border-gray-200">
                        <p className="font-bold text-gray-900">NOTE:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li><strong>*Students not opting for a minor</strong> should fulfil 25 credits of assortment courses.</li>
                            <li>To be eligible for a minor, a student should fulfil 15 credits from the minor pool.</li>
                            <li>Excess credit(s) from any pool will be counted towards assortment credits.</li>
                        </ol>
                    </div>

                    {/* Original Overview Text - moved below table if needed, or keeping it as intro above? 
                        User asked to replace "Course Overview" with "Basic Structure" and add table.
                        I will preserve the `overview` prop content below the table as it might contain important text intro.
                    */}


                    {/* Staff Section Removed as requested */}

                </div>

                {/* 2. Semester-wise Course Requirement */}
                {/* 2. Semester-wise Course Requirement */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Semester-wise Course Requirements</h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        To view the common shared curriculum (Semesters 1-3), please <Link href="/course-structure/shared-curriculum" className="text-blue-600 font-bold hover:underline">click here</Link>.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {majorSemesters.map((sem: any, index: number) => (
                            <button
                                key={`tab-${index}`}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 text-sm font-bold rounded transition-colors ${activeTab === index
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {sem.title}
                            </button>
                        ))}
                    </div>

                    {/* Course Table */}
                    {currentSemester && (
                        <div className="border border-gray-300 rounded overflow-hidden mb-6 shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                                    <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-300">
                                        <tr>
                                            <th className="px-4 py-3 border-r border-gray-300 w-24 md:w-32 whitespace-nowrap">Course Code</th>
                                            <th className="px-4 py-3 border-r border-gray-300 min-w-[200px]">Course Name</th>
                                            <th className="px-4 py-3 border-r border-gray-300 w-1/4 min-w-[150px]">Instructor</th>
                                            <th className="px-4 py-3 border-r border-gray-300 text-center w-20">Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentSemester.courses?.map((course: any, index: number) => {
                                            if (course.name === "OR") {
                                                return (
                                                    <tr key={index} className="bg-gray-50">
                                                        <td colSpan={4} className="px-4 py-2 text-center text-xs font-bold text-gray-500 border-b border-gray-200">OR</td>
                                                    </tr>
                                                );
                                            }

                                            // Sub-courses logic (e.g., OR conditions)
                                            if (course.subCourses && course.subCourses.length > 0) {
                                                return (
                                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                        {/* Code Column */}
                                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap align-top">
                                                            <div className="flex flex-col items-start gap-0.5">
                                                                {course.subCourses.map((sub: any, subIndex: number) => (
                                                                    <React.Fragment key={subIndex}>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (!sub.disableDetails) setSelectedCourse(sub);
                                                                            }}
                                                                            className={`text-left hover:text-blue-600 hover:underline transition-colors ${sub.disableDetails ? 'cursor-default hover:no-underline' : ''}`}
                                                                        >
                                                                            {sub.code}
                                                                        </button>
                                                                        {subIndex < course.subCourses.length - 1 && (
                                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">OR</span>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </td>

                                                        {/* Name Column */}
                                                        <td className="px-4 py-3 text-gray-900 border-r border-gray-200 align-top">
                                                            <div className="flex flex-col items-start gap-0.5">
                                                                {course.subCourses.map((sub: any, subIndex: number) => (
                                                                    <React.Fragment key={subIndex}>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (!sub.disableDetails) setSelectedCourse(sub);
                                                                            }}
                                                                            className={`text-left hover:text-blue-600 hover:underline transition-colors ${sub.disableDetails ? 'cursor-default hover:no-underline' : ''}`}
                                                                        >
                                                                            {sub.name}
                                                                        </button>
                                                                        {subIndex < course.subCourses.length - 1 && (
                                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">OR</span>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </td>

                                                        {/* Instructor Column */}
                                                        <td className="px-4 py-3 text-blue-600 border-r border-gray-200 align-top">
                                                            <div className="flex flex-col items-start gap-0.5">
                                                                {course.subCourses.map((sub: any, subIndex: number) => (
                                                                    <React.Fragment key={subIndex}>
                                                                        <div>
                                                                            {sub.instructorProfile ? (
                                                                                <a href={sub.instructorProfile} target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={(e) => e.stopPropagation()}>
                                                                                    {sub.instructor}
                                                                                </a>
                                                                            ) : (
                                                                                sub.instructor
                                                                            )}
                                                                        </div>
                                                                        {subIndex < course.subCourses.length - 1 && (
                                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">OR</span>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </td>

                                                        {/* Credits Column */}
                                                        <td className="px-4 py-3 text-center text-gray-900 font-medium border-r border-gray-200 align-top">
                                                            <div className="flex flex-col items-center gap-0.5">
                                                                {course.subCourses.map((sub: any, subIndex: number) => (
                                                                    <React.Fragment key={subIndex}>
                                                                        <span>{sub.credits}</span>
                                                                        {subIndex < course.subCourses.length - 1 && (
                                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">OR</span>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            }

                                            return (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                                        <button
                                                            onClick={() => {
                                                                if (course.name.includes("Elective")) {
                                                                    document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' });
                                                                } else if (course.detailsLink) {
                                                                    window.open(course.detailsLink, '_blank', 'noopener,noreferrer');
                                                                } else if (!course.disableDetails) {
                                                                    setSelectedCourse(course);
                                                                }
                                                            }}
                                                            className={`text-left hover:text-blue-600 hover:underline transition-colors ${course.disableDetails && !course.detailsLink && !course.name.includes("Elective") ? 'cursor-default hover:no-underline' : ''}`}
                                                        >
                                                            {course.code}
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">
                                                        {course.customNameRender && !course.useDefaultNameClick ? (
                                                            course.customNameRender
                                                        ) : (
                                                            <button
                                                                onClick={() => {
                                                                    if (course.name.includes("Elective")) {
                                                                        document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' });
                                                                    } else if (course.detailsLink) {
                                                                        window.open(course.detailsLink, '_blank', 'noopener,noreferrer');
                                                                    } else if (!course.disableDetails) {
                                                                        setSelectedCourse(course);
                                                                    }
                                                                }}
                                                                className={`text-left hover:text-blue-600 hover:underline transition-colors ${course.disableDetails && !course.detailsLink && !course.name.includes("Elective") ? 'cursor-default hover:no-underline' : ''}`}
                                                            >
                                                                {course.customNameRender || course.name}
                                                            </button>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-blue-600 border-r border-gray-200">
                                                        {(course.name.toLowerCase().includes("project") || course.name.includes("Elective")) ? (
                                                            "-"
                                                        ) : (
                                                            course.instructors ? (
                                                                <>
                                                                    {course.instructors.map((inst: any, i: number) => (
                                                                        <React.Fragment key={i}>
                                                                            {i > 0 && ", "}
                                                                            {inst.profile ? (
                                                                                <a href={inst.profile} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                                                    {inst.name}
                                                                                </a>
                                                                            ) : (
                                                                                inst.name
                                                                            )}
                                                                        </React.Fragment>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                course.instructorProfile ? (
                                                                    <a href={course.instructorProfile} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                                        {course.instructor}
                                                                    </a>
                                                                ) : course.instructor
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-gray-900 font-medium border-r border-gray-200">{course.credits}</td>
                                                </tr>
                                            );
                                        })}

                                        {/* Footer Rows */}
                                        {(currentSemester as any).ReducedLoad && (
                                            <tr className="bg-gray-50 font-bold border-t border-gray-200">
                                                <td colSpan={3} className="px-4 py-3 text-right border-r border-gray-200 text-gray-600">Reduced Load</td>
                                                <td className="px-4 py-3 text-center text-gray-900">{(currentSemester as any).ReducedLoad}</td>
                                            </tr>
                                        )}
                                        {(currentSemester as any).EnhancedLoad && (
                                            <tr className="bg-gray-50 font-bold">
                                                <td colSpan={3} className="px-4 py-3 text-right border-r border-gray-200 text-gray-600">Enhanced Load</td>
                                                <td className="px-4 py-3 text-center text-gray-900">{(currentSemester as any).EnhancedLoad}</td>
                                            </tr>
                                        )}
                                        {(currentSemester as any).ElectiveCount && (
                                            <tr className="bg-gray-50 font-bold">
                                                <td colSpan={3} className="px-4 py-3 text-right border-r border-gray-200 text-gray-600">Elective/Humanities Count</td>
                                                <td className="px-4 py-3 text-center text-gray-900">{(currentSemester as any).ElectiveCount}</td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    <HandbookReferenceNote />

                    {/* Requirement Note */}
                    {activeTab <= 2 && (
                        <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-8">
                            <div className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">Note:</span>{" "}
                                <div className="mt-2 space-y-4">
                                    <div className="flex gap-2">
                                        <span className="font-bold text-black text-lg leading-none mt-0.5">**</span>
                                        <div className="text-gray-800 space-y-1">
                                            <div className="font-semibold text-gray-900 mb-1">Humanities:</div>
                                            <div className="block"><strong className="font-semibold text-gray-900">A.</strong> Humanities courses cannot be dropped in both semesters IV and V.</div>
                                            <div className="block"><strong className="font-semibold text-gray-900">B.</strong> Students must complete 9 credits in humanities pool by the end of six semester.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                    {/* Recommended Course Load */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Course Load</h3>
                    <div className="border border-gray-300 rounded overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                                <thead className="bg-gray-50 font-bold text-gray-900 border-b border-gray-300">
                                    <tr>
                                        <th className="px-4 py-3 w-1/4 border-r border-gray-300 whitespace-nowrap">Semester</th>
                                        <th className="px-4 py-3 w-1/2 border-r border-gray-300 min-w-[200px]">Criteria</th>
                                        <th className="px-4 py-3 w-1/4 whitespace-nowrap">Credits</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200">I</td>
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">Student needs to register for a fixed number of credits</td>
                                        <td className="px-4 py-3 text-gray-900">18</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200">II</td>
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">No CGPA and TGPA requirements</td>
                                        <td className="px-4 py-3 text-gray-900">Min.: 17 and Max.: 21</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200">III</td>
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">No CGPA and TGPA requirements</td>
                                        <td className="px-4 py-3 text-gray-900">Min.: 17 and Max.: 21</td>
                                    </tr>
                                    {/* Semester IV */}
                                    <tr className="hover:bg-gray-50 border-t border-gray-200">
                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 row-span-2 align-top" rowSpan={2}>IV</td>
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200 border-b border-gray-100">CGPA &lt; 8.0</td>
                                        <td className="px-4 py-3 text-gray-900 border-b border-gray-100">Min.: 15 and Max.: 17</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-bold text-gray-900 border-r border-gray-200">CGPA ≥ 8.0</td>
                                        <td className="px-4 py-3 font-bold text-gray-900">Min.: 15 and Max.: 21</td>
                                    </tr>
                                    {/* Semester V to VIII */}
                                    <tr className="hover:bg-gray-50 border-t border-gray-200">
                                        <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 row-span-2 align-top" rowSpan={2}>V to VIII</td>
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200 border-b border-gray-100">CGPA &lt; 8.0 or Preceding term TGPA &lt; 8.0</td>
                                        <td className="px-4 py-3 text-gray-900 border-b border-gray-100">Min.: 16 and Max.: 18</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-bold text-gray-900 border-r border-gray-200">CGPA ≥ 8.0 or Preceding term TGPA ≥ 8.0</td>
                                        <td className="px-4 py-3 font-bold text-gray-900">Min.: 16 and Max.: 21</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 3. Core Electives */}
                <div className="mb-12" id="core-electives">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-2 inline-block">
                        Suggested Core Electives:
                    </h2>
                    {electivesIntro ? (
                        <div className="text-gray-700 text-sm mt-4 mb-4 leading-relaxed">
                            {electivesIntro}
                        </div>
                    ) : (
                        <p className="text-gray-700 text-sm mt-4 mb-4 leading-relaxed">
                            Below is the list of core electives available for students majoring in {name}.
                            These electives are offered by various departments under the relevant Sciences Department.
                        </p>
                    )}

                    <div className="mb-6 text-sm text-gray-700 space-y-2">
                        <p><strong className="text-gray-900">Note:</strong></p>
                        <p><strong className="text-gray-900">January–April Semester:</strong> Select courses offered in the January intake. These courses are designed for students beginning their studies at the start of the year.</p>
                        <p><strong className="text-gray-900">August–December Semester:</strong> Select courses offered in the August intake, suitable for students starting in the second half of the year.</p>
                    </div>

                    {electiveCourses?.length > 0 && (
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="overflow-x-auto max-h-[800px] overflow-y-auto custom-scrollbar">
                                <table className="w-full text-sm text-left relative">
                                    <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                                        <tr>
                                            <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap w-32 bg-gray-50">Course Code</th>
                                            <th className="px-6 py-3 border-r border-gray-200 min-w-[250px] bg-gray-50">Title</th>
                                            <th className="px-6 py-3 whitespace-nowrap w-24 text-center bg-gray-50">Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {electiveCourses.map((sub: any, i: number) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-3 font-bold text-blue-600 border-r border-gray-200">{sub.code}</td>
                                                <td className="px-6 py-3 text-gray-900 font-medium border-r border-gray-200">{sub.name}</td>
                                                <td className="px-6 py-3 text-center text-gray-700">{sub.credits || "-"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* 4. Continuing Master's Degree */}
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                        Continuing Master's Degree
                    </h2>

                    {customMastersContent ? (
                        customMastersContent
                    ) : (
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Students have the option to continue for their 5th year to obtain a <strong>Master of Science degree</strong>.
                            </p>

                            <div className="space-y-8">
                                {/* Eligibility */}
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                        Eligibility Criteria
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        <li>Have completed all the requirements of the Bachelor of Science degree at the end of their 8th semester</li>
                                        <li>Have a <strong>CGPA of 7.0 or more</strong> at the end of their 8th semester.</li>
                                    </ul>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
                                        Degree Requirements (32 Credits)
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-4 text-gray-700">
                                        <li>
                                            <strong>13 Credits of Coursework</strong> in the 9th and 10th semesters.
                                            <p className="text-sm text-gray-500 mt-1 italic">
                                                (Note: Students are required to have completed a minimum of 10 credits of courses, across the 10 semesters of the Bachelor of Science/Master of Science programme.)
                                            </p>
                                        </li>
                                        <li>
                                            <strong>A Project of 20 Credits</strong> in the 9th and 10th semesters.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>



                {/* Course Details Modal */}
                {selectedCourse && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-md animate-in fade-in duration-200" onClick={() => setSelectedCourse(null)}>
                        <div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative animate-in zoom-in-50 duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Sticky Header */}
                            <div className="flex-none p-6 border-b border-gray-100 flex justify-between items-start bg-white rounded-t-2xl z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase border border-blue-100">
                                            {selectedCourse.code}
                                        </span>
                                        {selectedCourse.isElective ? (
                                            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold tracking-wider uppercase border border-purple-100">
                                                Elective
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-wider uppercase border border-green-100">
                                                Core Course
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                        {selectedCourse.name}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Scrollable Content Body */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar overscroll-contain text-left">
                                <div className="space-y-8">
                                    {/* Full Width Content */}
                                    <div className="w-full space-y-10">

                                        {/* Syllabus / Topics Covered */}
                                        <div className="prose prose-blue max-w-none">
                                            <h4 className="text-xl font-extrabold text-blue-900 uppercase tracking-widest mb-6 flex items-center gap-3 border-b-2 border-blue-100 pb-3">
                                                <AlignLeft className="w-6 h-6 text-blue-700" />
                                                Syllabus & Topics
                                            </h4>

                                            {selectedCourse.description ? (
                                                selectedCourse.description.includes('SECTION_THEORY') ? (
                                                    <div className="space-y-6">
                                                        {(() => {
                                                            const parts = selectedCourse.description.split('SECTION_LAB');
                                                            const theoryPart = parts[0].replace('SECTION_THEORY', '').trim();
                                                            const labPart = parts[1] ? parts[1].trim() : '';
                                                            return (
                                                                <>
                                                                    <div>
                                                                        <h5 className="font-bold text-gray-900 mb-2">THEORY</h5>
                                                                        <p className="text-gray-700 leading-relaxed text-base">
                                                                            {theoryPart}
                                                                        </p>
                                                                    </div>
                                                                    {labPart && (
                                                                        <div>
                                                                            <h5 className="font-bold text-gray-900 mb-2">LAB</h5>
                                                                            <p className="text-gray-700 leading-relaxed text-base">
                                                                                {labPart}
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            );
                                                        })()}
                                                    </div>
                                                ) : (
                                                    <ul className="space-y-3 list-none pl-0">
                                                        {selectedCourse.description.split(/[\.;]\s+/).filter((sent: string) => sent.trim().length > 0).map((sentence: string, idx: number) => {
                                                            const trimmedSentence = sentence.trim();
                                                            const isNote = trimmedSentence.toLowerCase().startsWith("note:");
                                                            const content = trimmedSentence + (trimmedSentence.endsWith('.') ? '' : '.');

                                                            if (isNote) {
                                                                return (
                                                                    <li key={idx} className="block mt-4 mb-2">
                                                                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-gray-800 text-base shadow-sm">
                                                                            <span className="font-bold text-orange-600 uppercase tracking-wider text-xs block mb-1">Note</span>
                                                                            {content.substring(5).trim()}
                                                                        </div>
                                                                    </li>
                                                                );
                                                            }
                                                            return (
                                                                <li key={idx} className="flex gap-3 text-gray-700 leading-relaxed text-base md:text-lg">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                                                                    <span>{content}</span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )
                                            ) : (
                                                <p className="text-gray-500 italic">
                                                    No detailed syllabus available. Please refer to the handbook.
                                                </p>
                                            )}
                                        </div>

                                        {/* Books Section */}
                                        {selectedCourse.books && selectedCourse.books.length > 0 && (
                                            <div>
                                                <h4 className="text-xl font-extrabold text-blue-900 uppercase tracking-widest mb-6 flex items-center gap-3 border-b-2 border-blue-100 pb-3">
                                                    <BookOpen className="w-6 h-6 text-blue-700" />
                                                    Suggested Books & References
                                                </h4>
                                                <div className="grid gap-3">
                                                    {selectedCourse.books.map((book: string, index: number) => (
                                                        <div key={index} className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                                                            <div className="flex-shrink-0 mt-1 hidden sm:block">
                                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                                    {index + 1}
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="text-gray-800 text-base leading-relaxed font-medium block">
                                                                    {book}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </div >
    );
};

export default DepartmentTemplate;
