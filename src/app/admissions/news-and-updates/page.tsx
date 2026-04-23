"use client";
import React from "react";
import { AlertTriangle, ExternalLink, FileText } from "lucide-react";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function NewsAndUpdatesPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="Admissions"
                title="News and Updates"
                subtitle="Official notices and documents for the current admissions cycle."
                image="/assets/champions.png"
                backHref="/admissions"
                backLabel="Back to Admissions"
            />
            <ContentShell className="max-w-4xl">
                <div className="elevated-card overflow-hidden">
                    <div className="p-8 md:p-10 space-y-6">
                        <div className="space-y-8">
                            {/* Materials Major Discontinuation Notice */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-amber-700 rounded-lg shrink-0 shadow-sm">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                                            Important Update
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-3">
                                            Discontinuation of Materials Major (from AY 2026-27)
                                        </h3>
                                        <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                            <p>
                                                The Materials major under the BS (Research) programme will be discontinued with effect from the Academic Year 2026-27.
                                            </p>
                                            <p>
                                                Students applying from the 2026-27 admission cycle onwards will not have the option to choose this major.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notice Link */}
                            <a
                                href="https://iisc.ac.in/wp-content/uploads/2026/02/Admission-Notice_2026-27.pdf#page=9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-blue-50 border border-blue-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white text-blue-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                                            Official Admission Notice (2026-27)
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4">
                                            Click to view the detailed admission notice document (refer from page 9 for Undergraduate Programmes).
                                        </p>
                                        <div className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-wider">
                                            View Detailed Notice <ExternalLink className="w-4 h-4 ml-1.5" />
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </ContentShell>
        </PageBody>
    );
}
