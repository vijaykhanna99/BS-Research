"use client";
import React from "react";
import { ArrowLeft, CheckCircle2, GraduationCap, FileText } from "lucide-react";
import Link from "next/link";
import {
    ADMISSION_YEAR,
    ELIGIBILITY,
    ADMISSION_DATES,
    INTAKE,
    APPLICATION_FEE,
    EXTERNAL_LINKS
} from "@/data/admissions";

export default function SelectionProcessPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">

                {/* Back Link */}
                <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Admissions
                </Link>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                    {/* Header */}
                    <div className="bg-[#002147] p-8 md:p-10 text-white">
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider mb-4 border border-white/20">
                            ADMISSIONS {ADMISSION_YEAR}
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                            Four-Year Bachelor of Science (Research) Programme
                        </h1>
                    </div>

                    <div className="p-8 md:p-10 space-y-12">

                        {/* Section 1: Eligibility */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">1. Eligibility</h2>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 space-y-4 text-slate-700 leading-relaxed">
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-700 shrink-0">a.</span>
                                    <p>Candidates who have completed their 10+2 (or equivalent) examination in <strong>{ELIGIBILITY.qualifyingYears.join(", ")}</strong> OR those who are expecting to complete their 10+2 (or equivalent) examination in <strong>{ELIGIBILITY.currentYear}</strong>.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-700 shrink-0">b.</span>
                                    <p>The candidates must have studied <strong>{ELIGIBILITY.subjects}</strong> as main subjects in their qualifying exam along with any other subjects.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-700 shrink-0">c.</span>
                                    <p>The candidates must have secured a <strong>{ELIGIBILITY.minGrade}</strong> (relaxed to pass class for SC/ST candidates) in the qualifying examination (i.e., 10+2 or equivalent).</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Selection Procedure */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-700">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">2. Selection Procedure</h2>
                            </div>

                            <div className="pl-2 md:pl-4">
                                <p className="text-lg text-slate-700 mb-6">
                                    Selection will be based on the merit list of one of the following national examinations:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                                        <span className="font-bold text-slate-800">JEE (Advanced) - {ADMISSION_YEAR}</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                                        <span className="font-bold text-slate-800">IISER Aptitude Test (IAT) {ADMISSION_YEAR}</span>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                                    <p className="text-slate-800 mb-3 leading-relaxed">
                                        Candidates who wish to apply through the <strong>IISER Aptitude Test (IAT)</strong> mode of entry to the four-year Bachelor of Science program <strong className="text-red-600">MUST</strong> apply to both the IAT-{ADMISSION_YEAR} and IISc admission portal.
                                    </p>
                                    <div className="space-y-2 text-sm text-slate-700">
                                        <p>
                                            To apply to IISc Bangalore, please click the following:{" "}
                                            <a href={EXTERNAL_LINKS.admissionsPortal} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline break-all">
                                                {EXTERNAL_LINKS.admissionsPortal}
                                            </a>
                                        </p>
                                        <p>
                                            For IAT-{ADMISSION_YEAR}, please click the following:{" "}
                                            <a href={EXTERNAL_LINKS.iiserAdmission} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline break-all">
                                                {EXTERNAL_LINKS.iiserAdmission}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg space-y-3 mb-8">
                                    <div className="flex gap-3">
                                        <FileText className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                        <p className="text-slate-700 text-sm">
                                            <strong>Note:</strong> Candidate must be qualified in any one of the exams mentioned above, and the exam result must be valid as on <strong>{ADMISSION_DATES.cutoffDate}</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-3">Total Intake: {INTAKE.total}</h3>
                                        <p className="text-slate-700">
                                            Breakup: [{INTAKE.breakup}].
                                        </p>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                                        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                            <FileText className="w-5 h-5 text-blue-600" />
                                            Important Notes
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-3 text-slate-700 text-sm leading-relaxed">
                                            <li>The candidates must have passed the Class XII (or equivalent) examination from any board recognized by the Council of Boards of School Education <a href={EXTERNAL_LINKS.cobseList} target="_blank" className="text-blue-600 hover:underline">(COBSE)</a> in India. Foreign Nationals need to upload an equivalence certificate issued by the <a href={EXTERNAL_LINKS.aiu} target="_blank" className="text-blue-600 hover:underline">Association of Indian Universities</a> unless they have passed the Class XII or equivalent level examination from any board recognized by the Council of Boards of School Education <a href={EXTERNAL_LINKS.cobseList} target="_blank" className="text-blue-600 hover:underline">(COBSE)</a> in India. The equivalence certificate must be provided at the time of admission Counselling.</li>
                                            <li>Applicants who have applied before the declaration of results must log in and update rank details within <strong>03 days</strong> after the result announcement.</li>
                                            <li>Reservation/concession/relaxations for SC/ST/OBC/EWS/Person with disability (PwD) and Kashmiri-Migrant (KM), Kashmiri Pandits/Kashmiri Hindu Families (Non-Migrants) living in the Kashmirvalley: as per Government of India regulations.</li>
                                            <li><strong>{INTAKE.supernumeraryQuota} Supernumerary Quota</strong> over and above the approved intake for the program will be provided to women candidates.</li>
                                            <li>A minimum of “Pass Class” in the qualifying examination (i.e., 10+2 or equivalent) is required for SC/ST students.</li>
                                            <li>Applicants applying under the EWS and OBC (as per the central list of OBC available at <a href={EXTERNAL_LINKS.ncbc} target="_blank" className="text-blue-600 hover:underline">www.ncbc.nic.in</a>) category must ensure that they have the valid EWS/OBC-NCL Certificates issued on or after <strong>{ADMISSION_DATES.certValidFrom}</strong> (i.e., valid in FY:{ADMISSION_DATES.certFinancialYear}) by <strong>{ADMISSION_DATES.certValidTo}</strong>.</li>
                                            <li>The applicants are advised to visit the Four-year Bachelor of Science (Research) programme website at <a href={EXTERNAL_LINKS.programNews} target="_blank" className="text-blue-600 hover:underline">{EXTERNAL_LINKS.programNews}</a> and the admissions portal frequently for all admission-related updates.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-800 text-xl mb-4 border-b border-slate-200 pb-2">Procedure for Applying</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-slate-800 mb-2">Application Forms (available only online):</h4>
                                                <p className="text-slate-700 leading-relaxed">
                                                    The online application may be prepared and submitted by accessing the IISc <a href={EXTERNAL_LINKS.admissionsPortal} target="_blank" className="text-blue-600 hover:underline">Admission website</a> during <strong>{ADMISSION_DATES.applicationStart} to {ADMISSION_DATES.applicationEnd}</strong>. The application fee is <strong>Rs. {APPLICATION_FEE.general}/-</strong> for GN/OBC/KM candidates and <strong>Rs. {APPLICATION_FEE.reserved}/-</strong> for SC/ST/PWD categories.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-slate-800 mb-2">Payment of the Application Fee:</h4>
                                                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                                                    <p className="text-blue-800 font-medium">
                                                        Payment option: On-line Payment - Net-banking, Visa Card/ Master Card, Debit/Credit Cards/UPI.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>



                </div>
            </div>
        </div>
    );
}
