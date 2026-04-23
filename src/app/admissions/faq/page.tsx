"use client";
import React, { useState } from "react";
import { ArrowLeft, Plus, Minus, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { INTAKE } from "@/data/admissions";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [expandAll, setExpandAll] = useState(false);

    const toggleAccordion = (index: number) => {
        if (expandAll) {
            setExpandAll(false);
            setOpenIndex(openIndex === index ? null : index);
        } else {
            setOpenIndex(openIndex === index ? null : index);
        }
    };

    const handleExpandAll = (expand: boolean) => {
        setExpandAll(expand);
        setOpenIndex(null); // Reset single index
    };

    const faqs = [
        {
            question: "What is the name of the Degree that will be offered under the Bachelor of Science (Research) Programme?",
            answer: "The degree offered is \"Bachelor of Science (Research)\"."
        },
        {
            question: "Which are the major disciplines being offered?",
            answer: "Five major disciplines are being offered: (1) Biology (2) Chemistry (3) Earth & Environmental Science (4) Mathematics (5) Physics. The major discipline chosen will appear in the degree certificate of each graduate."
        },
        {
            question: "What is the duration of the Bachelor of Science (Research) Programme?",
            answer: "The duration of the programme is four years, organized as eight semesters."
        },
        {
            question: "What is the structure of the Bachelor of Science (Research) Programme?",
            answer: (
                <span>
                    The programme is organized into eight semesters involving core courses in sciences and engineering, followed by specializations. Please{' '}
                    <Link href="/course-structure" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                        click here
                    </Link>{' '}
                    to view detailed information.
                </span>
            )
        },
        {
            question: "What are the unique features of this Bachelor of Science (Research) Programme?",
            answer: "The uniqueness of this programme lies in its interdisciplinary approach, strong flavour of engineering, exposure to disciplines in the social sciences, and a one-year research project. The graduates of this programme will obtain a Bachelor of Science (Research) degree in a specialization. Though this programme is designed to offer specialization in a science stream, the knowledge imparted carries a strong flavour of engineering and an exposure to social sciences. The students specializing in a particular discipline are encouraged to take courses from other disciplines, thus maintaining strong interdisciplinary links. One full year of participation in a research project identifies the programme as unique and innovative. This research based interdisciplinary Bachelor of Science (Research) Programme is well suited to meet the present vocational and post graduate demands of a highly technological world.\n\nThe Bachelor of Science (Research) Programme is embedded in a mature and highly sophisticated research culture which has a strong base in both science and engineering. This research culture has evolved over the last hundred years, engendered primarily by a highly distinguished faculty and brilliant graduate students and post doctoral fellows. The academic environment is open, free, pedagogic and non-hierarchical."
        },
        {
            question: "How many students are expected to be admitted in a batch?",
            answer: `The intake for the program is ${INTAKE.total}. Break up:[${INTAKE.breakup}]. ${INTAKE.supernumeraryQuota} Supernumerary Quota over and above the approved intake for the program will be provided to women candidates`
        },
        {
            question: "Does institute provide any supernumerary Quota for female Candidates for admission to Four Year of Bachelors of Science Programme?",
            answer: `Yes, ${INTAKE.supernumeraryQuota} Supernumerary Quota over and above the approved intake for the program will be provided to women candidates.`
        },
        {
            question: "Which are the entry channels to get admitted to the Bachelor of Science (Research) Programme?",
            answer: "To save additional burden of an entrance exam on the overtaxed 12th standard students, the Institute will make use of the merit lists of existing highly competitive national level entrance exams such as IIT-JEE Advanced and IISER Aptitude test. Students desirous of applying to the Bachelor of Science (Research) Programme must take at least one of the above examinations."
        },
        {
            question: "How are the students selected for the Bachelor of Science (Research) Programme?",
            answer: "The selection will be based on the performance of the applied candidates in any one of the national examinations listed above. A separate merit list of candidates who have applied will be prepared for each of these national examinations and the seats will be offered based on the performance in the examination and the number of seats available. A candidate who has qualified in multiple examinations listed above will be included in all the appropriate merit lists. Separate merit lists will be prepared for candidates belonging to different reserved categories, as per standard Government of India regulations."
        },
        {
            question: "Will a candidate with outstanding performance in the above national examinations be automatically considered for admission even if he/she does not apply to the Bachelor of Science (Research) Programme?",
            answer: "No. Only candidates who apply to the Bachelor of Science (Research) Programme will be considered for possible selection."
        },
        {
            question: "Which subject groups are mandatory at the II PUC/12th STD level for admission to the Bachelor of Science (Research) Programme?",
            answer: "The Bachelor of Science (Research) Programme will be open to students of PUC/12th standard whose main subjects include Physics, Chemistry and Mathematics (all three). Students who have studied Biology, Economics, Electronics, Computer Science, Statistics, etc., should also have taken Physics, Chemistry, and Mathematics."
        },
        {
            question: "What are the time-lines for applying to the Bachelor of Science (Research) Programme?",
            answer: (
                <span>
                    Please keep an eye on{' '}
                    <Link href="/admissions/important-dates" className="text-blue-600 font-medium hover:underline">
                        Important Dates
                    </Link>{' '}
                    under Admission.
                </span>
            )
        },
        {
            question: "What are the different ways of applying to the programme?",
            answer: (
                <span>
                    There are 2 types:
                    <ol className="list-decimal pl-5 mt-2 mb-2">
                        <li>JEE Advanced</li>
                        <li>IISER Aptitude Test (IAT)</li>
                    </ol>
                    To know the procedure for applying, please visit the{' '}
                    <Link href="/admissions/selection-process" className="text-blue-600 font-medium hover:underline">
                        Selection Process
                    </Link>{' '}
                    page.
                </span>
            )
        },

        {
            question: "While applying on admission portal , what information needs to provided in National Entrance Tab if the result for National entrance exam ( i.e IAT, IIT JEE Advanced) is not declared.",
            answer: "When the result for the examination through which candidate is applying is not declared. Follow the steps given below:\n\n1. Select national entrance exam from drop down through which you want to apply.\n2. Choose option as “ No” for the question” Examination result declared ?\n3. click on save Button.\n4. Repeat same steps for other national entrance exams also.\n\nNote: Applicant are required to provide information related to national entrance exam like Applicantion no/Roll no(as per the instruction given at admission portal), Rank, uploading of result card within three days after declaration of result, by using the option of Update National Entrance Exam Result tab provided at applicant interface."
        },
        {
            question: "What are the hostel and mess facilities in IISc? Where will UG students be housed?",
            answer: "Nearly 3000 students, including about 500 girls, are housed in various hostels on campus. Two hostels, each of capacity 600, have been built recently. Girl students are housed in one of these hostels. UG boys in their first two years will be housed together in a single hostel. We currently have two messes that cater to the tastes of a variety of cuisines from different parts of India."
        },
        {
            question: "How do I apply for admission to the Bachelor of Science (Research) Programme?",
            answer: (
                <span>
                    Please visit the{' '}
                    <Link href="/admissions/selection-process" className="text-blue-600 font-medium hover:underline">
                        Selection Process
                    </Link>{' '}
                    page for details and apply via the{' '}
                    <a href="https://admissions-august.iisc.ac.in/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                        Admissions Portal
                        <ExternalLink className="w-3 h-3" />
                    </a>.
                </span>
            )
        },
        {
            question: "What are the different opportunities available to the graduates of the Bachelor of Science (Research) Programme?",
            answer: "Academic Opportunities: The Bachelor of Science (Research) Programme graduates with their solid foundation and multidisciplinary training can either embark on a career of their choice or pursue advanced degrees such as PhD in their chosen discipline and allied interdisciplinary areas anywhere in the world. The extensive course curriculum, in conjunction with a strong laboratory module and exposure to modern instrumentation and research, will prove to be of immense value to students in either pursuit. The opportunity to engage in an intense two-semester research project in an inspiring environment will enable students to make intelligent career choices, especially pertaining to research.\n\nIndustry Opportunities: To meet the growing demand for a broad-based human resource pool with strong analytical skills, personnel who are competent enough to specialize quickly in specific fields of expertise are envisaged. Given this emerging industrial scenario, graduates of the Bachelor of Science (Research) Programme with their multidisciplinary training will be ideally suited for recruitment by modern industry."
        },
        {
            question: "What is the medium of instruction of the Bachelor of Science (Research) Programme?",
            answer: "The medium of instruction is English."
        },
        {
            question: "How are OCI/PIO candidates categorized?",
            answer: "OCI/PIO candidates are divided into three categories:\n1. OCI/PIO (F): Candidates who obtained their OCI/PIO card after 04.03.2021 will be considered as foreign nationals and can only apply for foreign national supernumerary seats.\n2. OCI/PIO (F): Candidates who obtained their OCI/PIO card before 04.03.2021 but choose to apply as foreign nationals will also be considered under the foreign national category.\n3. OCI/PIO (I): Candidates who obtained their OCI/PIO card before 04.03.2021 and choose to be treated at par with Indian nationals will be considered under the unreserved (open) category."
        },
        {
            question: "What are the admission criteria for OCI/PIO (F) candidates?",
            answer: "OCI/PIO (F) candidates are treated as foreign nationals and must meet the eligibility criteria for foreign applicants. They can apply only for foreign national supernumerary seats through the international student admission portal."
        },
        {
            question: "What are the admission criteria for OCI/PIO (I) candidates?",
            answer: "OCI/PIO (I) candidates are treated at par with Indian nationals. They must meet the eligibility criteria for Indian students and apply through the regular admission portal (for Indian applicants). However, they will be considered only under unreserved (open) category seats and are not eligible for reservations under EWS, OBC-NCL, SC, or ST categories."
        },
        {
            question: "Can an OCI/PIO candidate who have obtained their OCI/PIO cards before 04.03.2021,apply in both categories OCI/PIO (F) and OCI/PIO (I))?",
            answer: "No. OCI/PIO candidates who have obtained their OCI/PIO cards before 04.03.2021 have the option to apply EITHER as (a) foreign nationals OR (b) at par with Indian nationals. Candidates need to exercise this option carefully. In the event it is discovered that an OCI/PIO candidate has also applied as OCI/PIO (F) and OCI/PIO(I), then such cases shall be treated as a use of unfair means, and the candidature shall be summarily cancelled."
        },
        {
            question: "How should OCI/PIO candidates apply?",
            answer: "OCI/PIO (F) candidates (foreign nationals) must apply through the international student admission portal.\nOCI/PIO (I) candidates (treated as Indian nationals) must apply through the regular admission portal for Indian students."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Admissions
                </Link>

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Find answers to common questions about the Bachelor of Science (Research) Programme.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex justify-end gap-4 mb-6">
                    <button
                        onClick={() => handleExpandAll(false)}
                        className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                        Collapse all
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                        onClick={() => handleExpandAll(true)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Expand all
                    </button>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = expandAll || openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'}`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-start gap-4 p-6 text-left cursor-pointer transition-colors hover:bg-slate-50/50"
                                >
                                    <div className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                    </div>
                                    <span className={`text-lg font-semibold pr-4 leading-relaxed ${isOpen ? 'text-blue-900' : 'text-slate-700'}`}>
                                        {faq.question}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pt-2 pl-[4.5rem]">
                                        <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Help */}
                <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Still have questions?</h3>
                    <p className="text-blue-700 mb-6">Our admissions team is here to help.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                    >
                        Contact Admissions
                    </Link>
                </div>
            </div>
        </div>
    );
}
