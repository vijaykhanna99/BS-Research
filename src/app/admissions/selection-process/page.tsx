"use client";
import React, { useState } from "react";
import { ChevronDown, CheckCircle2, GraduationCap, Users, Globe, Building2, ShieldCheck, FileCheck } from "lucide-react";
import { ADMISSION_YEAR } from "@/data/admissions";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

const AccordionItem = ({ title, icon: Icon, defaultOpen = false, children }: any) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 bg-white shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800 text-left text-lg">{title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function SelectionProcessPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow={`Admissions ${ADMISSION_YEAR || "2026"}`}
                title="Selection Process"
                subtitle="Eligibility, intake, entry modes, reservation policy, and selection criteria for the Four-Year Bachelor of Science (Research) Programme."
                image="/assets/champions1.png"
                backHref="/admissions"
                backLabel="Back to Admissions"
            />
            <ContentShell className="max-w-4xl">

                {/* ACCORDIONS */}
                <div className="space-y-4">
                    <AccordionItem title="1. Program Intake" icon={Users}>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-slate-800 mb-2">(a) Indian National / OCI(I)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Approved intake (Gender neutral): <span className="font-semibold">100</span></li>
                                    <li>Supernumerary seats for Females (20%): <span className="font-semibold">20</span></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-2">(b) Foreign National / OCI(F)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Intake: <span className="font-semibold">5</span></li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <span className="font-bold text-blue-900">Total Intake: 125</span>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="2. Eligibility" icon={GraduationCap}>
                        <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Mandatory Educational Qualifications</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(a)</span>
                                <p>Candidates who have completed their 10+2 (or equivalent) examination in 2024 and 2025, and those who are expecting to complete their 10+2 (or equivalent) examination in 2026. Candidates must meet the eligibility criteria for the respective national entrance exam conducted in the year of admission.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(b)</span>
                                <p>Candidates must have studied Physics, Chemistry and Mathematics as main subjects in their qualifying exam along with any other subjects.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(c)</span>
                                <p>Candidates must have secured a first-class or 60% or equivalent grade (relaxed to pass class for SC/ST candidates) in the qualifying examination (i.e., 10+2 or equivalent).</p>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="3. Performance Criteria in Qualifying Examination" icon={FileCheck}>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(a)</span>
                                <p>Candidates must have passed the Class XII (or equivalent) examination in 2024, 2025, or 2026 with Physics, Chemistry and Mathematics as main subjects from any board recognised by the Council of Boards of School Education(COBSE) in India. Foreign Nationals need to upload an equivalence certificate issued by the Association of Indian Universities, unless they have passed the Class XII or equivalent level examination in 2024, 2025 or 2026 from any board recognised by the Council of Boards of School Education (COBSE) in India. The equivalence certificate must be provided at the time of admission Counselling.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(b)</span>
                                <p>Candidates whose Class XII (or equivalent) examination results have not yet been declared can apply. However, their admission will be subject to fulfilling the eligibility criteria given above.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(c)</span>
                                <p>For candidates who had appeared in the Class XII (or equivalent) examination for the first time in 2025 and reappeared in any subject (for whatever reason) in 2026, the better of the two performances will be considered.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(d)</span>
                                <p>If a board gives aggregate marks considering both Class XI and Class XII, then only Class XII (or equivalent) examination marks will be considered. The applicant should provide only Class XII marks while filling out the online application form.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(e)</span>
                                <p>If a board gives aggregate marks considering the results of all three years of a 3-year diploma or courses of equivalent duration, then only the marks scored in the final year will be considered. Similarly, the marks scored in the final two semesters will be considered for boards that follow a semester system. The applicant should enter the 12th marks/diploma details accordingly in the admission portal.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(f)</span>
                                <p>In case any of the subjects Physics, Chemistry, Mathematics are not evaluated in the final year (e.g., in a 3-year diploma course), then the marks for the same subject from the previous year/s will be used for calculating percentage of aggregate marks.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(g)</span>
                                <p>If a Board does not give marks scored in individual subjects but gives only the aggregate marks, then the aggregate marks given by the Board will be considered as such.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(h)</span>
                                <p>If a board awards only letter grades without providing an equivalent percentage of marks on the grade sheet, the candidate should obtain a certificate from the board specifying the equivalent marks and submit it at the time of admission counselling.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(i)</span>
                                <p>The percentage will be calculated using aggregate marks, that is, considering ALL the subjects taken in Class XII (or equivalent) level.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-blue-700 shrink-0">(j)</span>
                                <p>The marksheet submitted by the candidates for their Class XII (or equivalent) examination must be issued by a single examination Board.</p>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="4. Foreign National (FN)" icon={Globe}>
                        <p>
                            Candidates who are <strong>NOT citizens of India</strong> (by birth or naturalized) shall be classified as Foreign Nationals. A total of five (5) supernumerary seats are earmarked for admission under the Foreign National (FN) category.
                        </p>
                    </AccordionItem>

                    <AccordionItem title="5. OCI/PIO Candidates" icon={Building2}>
                        <p className="mb-4 text-sm text-slate-500 italic">
                            In light of recent judicial pronouncement concerning OCI/PIO candidates, the following provisions are made for OCI/PIO candidates.
                        </p>
                        <p className="mb-4">
                            OCI/PIO candidates who have obtained their OCI/PIO cards before 04.03.2021 have the option of applying for the admission process EITHER as <strong>(a) foreign nationals</strong> OR <strong>(b) at par with Indian nationals</strong>.
                        </p>
                        <p className="mb-4 font-semibold text-slate-800">
                            Accordingly, OCI/PIO candidates are divided into three categories as follows:
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">(i) OCI/PIO (F) - Cards issued after 04.03.2021</h4>
                                <p>Those OCI/PIO candidates who have obtained their OCI/PIO cards subsequent to 04.03.2021 will be considered as foreign national candidates and will be governed by the eligibility conditions for foreign national candidates. The OCI/PIO (F) candidates will be eligible to compete only for the foreign national supernumerary seats.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">(ii) OCI/PIO (F) - Cards issued before 04.03.2021 (Opting Foreign National)</h4>
                                <p>Those OCI/PIO candidates who have obtained their OCI/PIO cards before 04.03.2021 AND choose to be considered as foreign nationals will be governed by the eligibility conditions for the foreign national candidates and are also referred to as OCI/PIO (F). The OCI/PIO (F) candidates will be eligible to compete only for the foreign national supernumerary seats. These candidates need to apply on the international student admission portal.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">(iii) OCI/PIO (I) - Cards issued before 04.03.2021 (Opting Indian National)</h4>
                                <p>Those OCI/PIO candidates who have obtained their OCI/PIO cards before 04.03.2021 AND choose to be treated at par with Indian nationals will be governed by the eligibility conditions for the Indian national candidates and are referred to as OCI/PIO (I). These candidates need to apply for admission on the regular admission portal (i.e., the admission portal for Indian students). At the time of seat allocation, the OCI/PIO (I) candidates shall be considered for the unreserved category (open category) seats. OCI/PIO candidates are NOT entitled to the reservation benefit under the EWS, OBC-NCL, SC or ST categories for the allocation of seats.</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                            <p className="text-red-900 text-sm font-medium">
                                OCI/PIO candidates who have obtained their OCI/PIO cards before 04.03.2021 have the option to apply either as (a) foreign nationals OR (b) at par with Indian nationals. Candidates need to exercise this option carefully. In the event it is discovered that an OCI/PIO candidate has also applied as OCI/PIO (F) and OCI/PIO(I), then such cases shall be treated as a use of unfair means, and the candidature shall be summarily cancelled.
                            </p>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="6. Selection Criteria" icon={CheckCircle2}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2 text-blue-800">A. Indian Nationals / OCI (I) Candidates</h3>
                                <p className="mb-4">Admission shall be based on merit in any one of the following national-level examinations, as applicable to the programme:</p>
                                <ul className="list-disc pl-5 space-y-2 font-semibold text-slate-800">
                                    <li>JEE Advanced 2026</li>
                                    <li>IISER Aptitude Test (IAT) 2026</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2 text-blue-800">B. Foreign National / OCI (F) Candidates</h3>
                                <p className="mb-4">Admission of Foreign National / OCI (F) candidates shall be through the following modes, subject to the conditions specified below:</p>

                                <div className="space-y-4">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-800 mb-2">Mode 1: SAT/ACT</h4>
                                        <ul className="list-disc pl-5 mb-2 font-medium">
                                            <li>SAT (2025 or 2026)</li>
                                            <li>ACT (2025 or 2026)</li>
                                        </ul>
                                        <p className="text-sm">Candidates shall be shortlisted based on SAT/ACT scores, and the final selection shall be made on the basis of performance in an interview.</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-800 mb-2">Mode 2: IAT / JEE (Advanced)</h4>
                                        <ul className="list-disc pl-5 mb-2 font-medium">
                                            <li>IISER Aptitude Test (IAT) 2026</li>
                                            <li>JEE (Advanced) 2026</li>
                                        </ul>
                                        <p className="text-sm">For admission through IAT or JEE (Advanced), selection shall be based on the respective ranks obtained by the candidates. The cutoff rank for Foreign National / OCI (F) candidates shall be the same as or better than the cutoff prescribed for General (GN) / Unreserved (UR) category candidates in the corresponding mode of entry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem title="7. Reservation" icon={ShieldCheck}>
                        <p className="mb-6 font-medium text-slate-800">Reservation as mandated by the Government of India will apply.</p>

                        <div className="space-y-6">
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h4 className="font-bold text-slate-800 mb-2 text-lg">Economically Weaker Section (EWS) - 10%</h4>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>General category candidates belonging to EWS.</li>
                                    <li>EWS certificate should be valid for the financial year 2026-27 and issued on or after April 01, 2026.</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h4 className="font-bold text-slate-800 mb-2 text-lg">Other Backward Classes (OBC-NCL) - 27%</h4>
                                <ul className="list-disc pl-5 text-sm space-y-2">
                                    <li>OBCs should be listed in the current updated central list of OBCs (<a href="http://www.ncbc.nic.in" target="_blank" className="text-blue-600 hover:underline">http://www.ncbc.nic.in</a>).</li>
                                    <li>OBCs present in the state list but not covered in the central list of OBCs are NOT eligible to claim the reservation.</li>
                                    <li>The criteria for Non-Creamy Layer (OBC-NCL) will be as per the notification of the Government of India.</li>
                                    <li>Candidates belonging to the creamy layer of OBC are NOT entitled for reservation. Such candidates are treated as belonging to the general (GEN) i.e., unreserved category, and they will be eligible only for the General seats.</li>
                                    <li>OBC-NCL certificate should be valid for the financial year 2026-27 and issued on or after April 01, 2026.</li>
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <h4 className="font-bold text-slate-800 text-lg">Scheduled Caste (SC) - 15%</h4>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <h4 className="font-bold text-slate-800 text-lg">Scheduled Tribe (ST) - 7.5%</h4>
                                </div>
                            </div>

                            <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-100 italic">
                                The benefit of reservation will be given only to those castes and tribes that are mentioned in the respective central list of corresponding states published by the Government of India (websites: <a href="https://socialjustice.gov.in" target="_blank" className="text-blue-600 hover:underline">https://socialjustice.gov.in</a> and <a href="https://ncst.nic.in" target="_blank" className="text-blue-600 hover:underline">https://ncst.nic.in</a>).
                            </p>

                            <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                                <h4 className="font-bold text-slate-800 mb-1">Person with Disability (PwD)</h4>
                                <p className="text-sm">With at least 40% impairment - <strong>5%</strong> (Horizontal reservation)</p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                                <h4 className="font-bold text-slate-800 mb-1">Kashmiri Migrants / Kashmiri Pandit / Kashmiri Hindu Families (Non-Migrants)</h4>
                                <p className="text-sm"><strong>1 seat</strong> (supernumerary)</p>
                            </div>
                        </div>
                    </AccordionItem>
                </div>
            </ContentShell>
        </PageBody>
    );
}
