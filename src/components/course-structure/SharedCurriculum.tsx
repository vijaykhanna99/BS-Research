"use client";
import React, { useState } from "react";
import { MoveLeft, Info, AlignLeft, BookOpen, X, AlertCircle, Star } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { semesters } from "@/data/sharedCurriculumData";

const SharedCurriculum = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    const currentSemester = semesters[activeTab];

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
                    Shared Curriculum
                </span>
            </div>

            {/* 1. Background Image / Hero */}
            <div
                className="relative w-full h-[300px] flex items-center justify-center bg-gray-900"
                style={{
                    backgroundImage: `url('/assets/hero-course-structure.jpg')`, // Generic academic background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Bachelor of Science (Research)
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                        Shared Curriculum
                    </h1>
                    <p className="text-gray-200 text-lg mt-2 max-w-2xl mx-auto">
                        Foundation Phase (Semesters 1-3)
                    </p>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

                {/* 1. Course Overview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Overview
                    </h2>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg leading-relaxed">
                            The first three semesters are common to all students, designed to build a strong foundation in Physics, Chemistry, Mathematics, Biology, Engineering, and Earth & Environmental Science. This interdisciplinary approach ensures that students develop a holistic understanding of scientific principles before specializing in a major discipline.
                        </p>
                    </div>
                </div>

                {/* 2. Semester-wise Course Requirement */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Semester-wise Course Requirements</h2>

                    {/* Tabs - Showing only Semesters 1-3 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {semesters.slice(0, 3).map((sem: any, index: number) => (
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
                                            <th className="px-4 py-3 border-r border-gray-300 w-32 md:w-40 whitespace-nowrap hidden md:table-cell">Course Type</th>
                                            <th className="px-4 py-3 border-r border-gray-300 w-24 md:w-32 whitespace-nowrap">Course Code</th>
                                            <th className="px-4 py-3 border-r border-gray-300 min-w-[200px]">Course Name</th>
                                            <th className="px-4 py-3 border-r border-gray-300 w-1/4 min-w-[150px]">Instructor</th>
                                            <th className="px-4 py-3 text-center w-20">Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {currentSemester.courses?.map((course: any, index: number) => {
                                            // Handle "OR" row if it exists
                                            if (course.name === "OR") {
                                                return (
                                                    <tr key={index} className="bg-gray-50">
                                                        <td colSpan={5} className="px-4 py-2 text-center text-xs font-bold text-gray-500 border-b border-gray-200">OR</td>
                                                    </tr>
                                                );
                                            }

                                            // Calculate rowSpan for Course Type
                                            const isFirstOfType = index === 0 || course.type !== currentSemester.courses[index - 1].type;
                                            let rowSpan = 1;
                                            if (isFirstOfType && course.type) {
                                                for (let i = index + 1; i < currentSemester.courses.length; i++) {
                                                    if (currentSemester.courses[i].type === course.type) {
                                                        rowSpan++;
                                                    } else {
                                                        break;
                                                    }
                                                }
                                            }

                                            return (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    {/* Course Type Cell with RowSpan */}
                                                    {isFirstOfType && (
                                                        <td
                                                            rowSpan={rowSpan}
                                                            className="px-4 py-3 text-sm font-bold text-gray-800 border-r border-gray-200 bg-white align-top hidden md:table-cell"
                                                        >
                                                            <div className="sticky top-20">
                                                                {course.type}
                                                                {/* Special condition for Basic Courses in Sem 2 & 3 */}
                                                                {course.type === "Basic Courses" && (currentSemester.title === "Semester 2" || currentSemester.title === "Semester 3") && (
                                                                    <span className="block text-xs font-normal text-gray-500 mt-1 italic">
                                                                        Choose any Three out of Four courses
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>
                                                    )}

                                                    <td className="px-4 py-3 font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                                        <button
                                                            onClick={() => {
                                                                if (course.detailsLink) {
                                                                    window.open(course.detailsLink, '_blank', 'noopener,noreferrer');
                                                                } else if (!course.disableDetails) {
                                                                    setSelectedCourse(course);
                                                                }
                                                            }}
                                                            className={`text-left hover:text-blue-600 hover:underline transition-colors ${course.disableDetails && !course.detailsLink ? 'cursor-default hover:no-underline' : ''}`}
                                                        >
                                                            {course.code.includes("**") ? (
                                                                <>
                                                                    {course.code.replace("**", "")}
                                                                    <span className="font-bold ml-0.5 text-black">**</span>
                                                                </>
                                                            ) : (
                                                                course.code
                                                            )}
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">
                                                        <button
                                                            onClick={() => {
                                                                if (course.detailsLink) {
                                                                    window.open(course.detailsLink, '_blank', 'noopener,noreferrer');
                                                                } else if (!course.disableDetails) {
                                                                    setSelectedCourse(course);
                                                                }
                                                            }}
                                                            className={`text-left hover:text-blue-600 hover:underline transition-colors ${course.disableDetails && !course.detailsLink ? 'cursor-default hover:no-underline' : ''}`}
                                                        >
                                                            {course.name}
                                                        </button>
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
                                            <tr className="bg-gray-50 font-bold">
                                                <td colSpan={4} className="px-4 py-3 text-right border-r border-gray-200 text-gray-600">Reduced Load</td>
                                                <td className="px-4 py-3 text-center text-gray-900">{(currentSemester as any).ReducedLoad}</td>
                                            </tr>
                                        )}
                                        <tr className="bg-gray-50 font-bold border-t-2 border-gray-300">
                                            <td colSpan={4} className="px-4 py-3 text-right border-r border-gray-200 text-gray-900">Total Credits</td>
                                            <td className="px-4 py-3 text-center text-gray-900">{currentSemester.totalCredits}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Requirement Note */}
                    {(activeTab === 1 || activeTab === 2) && (
                        <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-8">
                            <div className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">Note:</span>{" "}
                                <div className="mt-2 space-y-4">
                                    {/* Section 2: Humanities */}
                                    <div className="flex gap-2">
                                        <span className="font-bold text-black text-lg leading-none mt-0.5">**</span>
                                        <div className="text-gray-800 space-y-1">
                                            <div className="font-semibold text-gray-900 mb-1">Humanities:</div>
                                            <div className="block"><strong className="font-semibold text-gray-900">A.</strong> Humanities courses cannot be dropped in both semesters II and III.</div>
                                            <div className="block"><strong className="font-semibold text-gray-900">B.</strong> Students must complete 9 credits in humanities pool by the end of six semester.</div>
                                        </div>
                                    </div>
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

export default SharedCurriculum;
