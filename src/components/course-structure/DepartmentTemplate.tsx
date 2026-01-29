"use client";
import React, { useState } from "react";
import { MoveLeft, ArrowRight, BookOpen, X, Info, AlignLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { electiveMonth, semesters } from "./sharedCurriculumData";

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
    electiveMonthData?: { title: string }[]; // Optional override, default to global
    electivesIntro?: React.ReactNode; // Optional intro text for electives
    hideElectiveMonthTabs?: boolean;
    customMastersContent?: React.ReactNode; // Optional custom content for Master's degree section
}

const DepartmentTemplate = ({
    name,
    image,
    overview,
    staff,
    majorSemesters,
    electives,
    electiveMonthData = electiveMonth,
    electivesIntro,
    hideElectiveMonthTabs = false,
    customMastersContent
}: DepartmentTemplateProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [electiveTab, setElectiveTab] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    // Merge foundation semesters with major semesters
    const mergedSemesters = [...semesters, ...majorSemesters];
    const currentSemester = mergedSemesters[activeTab];

    return (
        <div className="bg-white pb-8 font-sans text-gray-900">
            {/* Nav / Back Button */}
            <div className="bg-white sticky top-0 z-40 border-b border-gray-100 px-6 h-16 flex items-center justify-between shadow-sm">
                <Link
                    href="/course-structure"
                    className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                    <MoveLeft className="w-5 h-5 mr-2" /> Back
                </Link>
                <span className="text-lg font-bold text-gray-800 hidden md:block">
                    {name} Major
                </span>
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
                        Undergraduate Program
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                        {name}
                    </h1>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

                {/* 1. Course Overview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Course Overview
                    </h2>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg leading-relaxed">
                            {overview}
                        </p>
                    </div>

                    {/* Department Staff Section */}
                    {staff && (
                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            {/* Coordinators */}
                            {staff.coordinators && staff.coordinators.length > 0 && (
                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                    <h3 className="text-sm font-bold text-purple-900 uppercase tracking-widest mb-4 border-b border-purple-200 pb-2">
                                        Coordinators
                                    </h3>
                                    <ul className="space-y-2">
                                        {staff.coordinators.map((person, idx) => (
                                            <li key={idx} className="text-purple-800 font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                {person}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* UG Instructors */}
                            {staff.instructorsUg && staff.instructorsUg.length > 0 && (
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-4 border-b border-blue-200 pb-2">
                                        UG Instructors
                                    </h3>
                                    <ul className="space-y-2">
                                        {staff.instructorsUg.map((person, idx) => (
                                            <li key={idx} className="text-blue-800 font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                {person}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Teaching Assistants */}
                            {staff.teachingAssistants && staff.teachingAssistants.length > 0 && (
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        Teaching Assistants
                                    </h3>
                                    <ul className="space-y-2">
                                        {staff.teachingAssistants.map((person, idx) => (
                                            <li key={idx} className="text-gray-600 font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                {person}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* 2. Semester-wise Course Requirement */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Semester-wise Course Requirements</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {mergedSemesters.map((sem: any, index: number) => (
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
                                            <th className="px-4 py-3 text-center w-20">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentSemester.courses?.map((course: any, index: number) => {
                                            if (course.name === "OR") {
                                                return (
                                                    <tr key={index} className="bg-gray-50">
                                                        <td colSpan={5} className="px-4 py-2 text-center text-xs font-bold text-gray-500 border-b border-gray-200">OR</td>
                                                    </tr>
                                                );
                                            }
                                            return (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">{course.code}</td>
                                                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">
                                                        {course.name}
                                                        {course.isStarred && <span className="text-gray-400 ml-1">*</span>}
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
                                                                                <a href={inst.profile} target="_blank" className="hover:underline">
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
                                                                    <a href={course.instructorProfile} target="_blank" className="hover:underline">
                                                                        {course.instructor}
                                                                    </a>
                                                                ) : course.instructor
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-gray-900 font-medium border-r border-gray-200">{course.credits}</td>
                                                    <td className="px-4 py-3 text-center">
                                                        {course.name.includes("Elective") ? (
                                                            <button
                                                                onClick={() => document.getElementById('core-electives')?.scrollIntoView({ behavior: 'smooth' })}
                                                                className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors whitespace-nowrap border border-blue-200"
                                                                title="View Electives List"
                                                            >
                                                                Elective List
                                                            </button>
                                                        ) : course.detailsLink ? (
                                                            <a
                                                                href={course.detailsLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors whitespace-nowrap border border-blue-200 inline-block"
                                                                title="View Course Details"
                                                            >
                                                                Course Details
                                                            </a>
                                                        ) : (
                                                            <button
                                                                onClick={() => !course.disableDetails && setSelectedCourse(course)}
                                                                disabled={course.disableDetails}
                                                                className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${course.disableDetails ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
                                                                title={course.disableDetails ? "No details available" : "View Details"}
                                                            >
                                                                <Info className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                        {/* Footer Rows */}
                                        {(currentSemester as any).ReducedLoad && (
                                            <tr className="bg-gray-50 font-bold">
                                                <td colSpan={3} className="px-4 py-3 text-right border-r border-gray-200 text-gray-600">Reduced Load</td>
                                                <td className="px-4 py-3 text-center text-gray-900">{(currentSemester as any).ReducedLoad}</td>
                                                <td className="px-4 py-3 text-center"></td>
                                            </tr>
                                        )}
                                        <tr className="bg-gray-50 font-bold border-t-2 border-gray-300">
                                            <td colSpan={3} className="px-4 py-3 text-right border-r border-gray-200 text-gray-900">Total Credits</td>
                                            <td className="px-4 py-3 text-center text-gray-900">{currentSemester.totalCredits}</td>
                                            <td className="px-4 py-3 text-center"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Requirement Note */}
                    {activeTab !== 0 && (
                        <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-8">
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">Note:</span>{" "}
                                {(activeTab === 1 || activeTab === 2) ? (
                                    <span className="block mt-1 space-y-1">
                                        <span className="block">
                                            <span className="text-gray-400 font-bold mr-1">*</span>
                                            Basic Courses: Choose any Three out of Four courses.
                                        </span>
                                        <span className="block"><strong className="font-semibold text-gray-900">A.</strong> Humanities courses cannot be dropped in both semesters II and III.</span>
                                        <span className="block"><strong className="font-semibold text-gray-900">B.</strong> Humanities courses cannot be dropped in both semesters IV and V.</span>
                                        <span className="block"><strong className="font-semibold text-gray-900">C.</strong> Students must complete 9 credits in humanities pool by the end of six semester.</span>
                                    </span>
                                ) : (activeTab >= 3 && activeTab <= 5) ? (
                                    <span className="block mt-1 space-y-1">
                                        <span className="block"><strong className="font-semibold text-gray-900">A.</strong> Humanities courses cannot be dropped in both semesters II and III.</span>
                                        <span className="block"><strong className="font-semibold text-gray-900">B.</strong> Humanities courses cannot be dropped in both semesters IV and V.</span>
                                        <span className="block"><strong className="font-semibold text-gray-900">C.</strong> Students must complete 9 credits in humanities pool by the end of six semester.</span>
                                    </span>
                                ) : (
                                    "Choose electives with respective credits in this semester."
                                )}
                            </p>
                        </div>
                    )}

                    <p className="text-gray-700 text-sm leading-relaxed mb-8">
                        All students must complete a total of at least 131 credits comprising courses and other components like projects, as specified in the course requirements above. The course load for the first three semesters is fixed. Each subsequent semester has a "Normal" and "Reduced" course load. Based on their CGPA and previous-term TGPA, students must register for an appropriate course load as specified below. Any deviation from the recommended load will be allowed only with the permission of the Dean.
                    </p>

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

                    {!hideElectiveMonthTabs && (
                        <>
                            <div className="mb-6 text-sm text-gray-700 space-y-2">
                                <p><strong className="text-gray-900">Note:</strong></p>
                                <p><strong className="text-gray-900">January–April Semester:</strong> Select courses offered in the January intake. These courses are designed for students beginning their studies at the start of the year.</p>
                                <p><strong className="text-gray-900">August–December Semester:</strong> Select courses offered in the August intake, suitable for students starting in the second half of the year.</p>
                            </div>

                            <div className="flex gap-4 mb-8 border-b border-gray-200">
                                {electiveMonthData.map((month, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setElectiveTab(idx)}
                                        className={`px-6 py-2 text-sm font-bold transition-colors relative top-[1px] ${electiveTab === idx
                                            ? "bg-blue-700 text-white rounded-t"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-t"
                                            }`}
                                    >
                                        {month.title}
                                    </button>
                                ))}
                            </div>

                        </>
                    )}

                    {electives?.[electiveTab]?.length > 0 && (electives[electiveTab][0].credits || electives[electiveTab][0].instructor) ? (
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="overflow-x-auto max-h-[800px] overflow-y-auto custom-scrollbar">
                                <table className="w-full text-sm text-left relative">
                                    <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                                        <tr>
                                            <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap w-32 bg-gray-50">Course Code</th>
                                            <th className="px-6 py-3 border-r border-gray-200 min-w-[250px] bg-gray-50">Title</th>
                                            <th className="px-6 py-3 border-r border-gray-200 whitespace-nowrap w-24 text-center bg-gray-50">Credits</th>
                                            <th className="px-6 py-3 whitespace-nowrap min-w-[200px] bg-gray-50">Instructors</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {electives[electiveTab].map((sub: any, i: number) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-3 font-bold text-blue-600 border-r border-gray-200">{sub.code}</td>
                                                <td className="px-6 py-3 text-gray-900 font-medium border-r border-gray-200">{sub.name}</td>
                                                <td className="px-6 py-3 text-center text-gray-700 border-r border-gray-200">{sub.credits || "-"}</td>
                                                <td className="px-6 py-3 text-gray-700">{sub.instructor || "-"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                            {electives?.[electiveTab]?.map((sub: any, i: number) => (
                                <div key={i} className="flex flex-col gap-1 group">
                                    <div className="flex items-start gap-2">
                                        <span className="text-sm font-bold text-blue-600 whitespace-nowrap">{sub.code}</span>
                                        <span className="text-sm text-gray-900 font-medium leading-tight group-hover:text-blue-700 transition-colors">
                                            {sub.name}
                                        </span>
                                    </div>
                                    {sub.description && (
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                            {sub.description}
                                        </p>
                                    )}
                                </div>
                            ))}
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
        </div>
    );
};

export default DepartmentTemplate;
