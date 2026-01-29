"use client";
import React from "react";
import { ArrowLeft, Wallet, AlertCircle, PieChart } from "lucide-react";
import Link from "next/link";
import { ACADEMIC_SESSION } from "@/data/admissions";

export default function FeeStructurePage() {
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
                            ACADEMIC YEAR {ACADEMIC_SESSION}
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight flex items-center gap-3">
                            <Wallet className="w-8 h-8 text-blue-200" />
                            Fee Structure
                        </h1>
                    </div>

                    <div className="p-8 md:p-10 space-y-12">

                        {/* Section 1: Fee Details */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                                Annual Fees
                            </h2>

                            <div className="border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                                <table className="w-full text-left bg-white min-w-[600px]">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            <th className="p-4 md:p-5 font-bold text-slate-700 text-sm uppercase tracking-wide">Particulars</th>
                                            <th className="p-4 md:p-5 font-bold text-slate-700 text-sm uppercase tracking-wide border-l border-slate-200">General / OBC / EWS <br /><span className="text-xs text-slate-500 normal-case">(in ₹/INR)</span></th>
                                            <th className="p-4 md:p-5 font-bold text-slate-700 text-sm uppercase tracking-wide border-l border-slate-200">SC / ST / PwD <br /><span className="text-xs text-slate-500 normal-case">(in ₹/INR)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">Tuition Fee (Annual)</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">80,000</td>
                                            <td className="p-4 text-green-600 font-bold border-l border-slate-100 bg-green-50/30">Fully Waived</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">Gymkhana Fee (Annual)</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">1,800</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">1,800</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">Other Academic Fees (Annual)</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">3,700</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">3,700</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">
                                                Statutory Deposit (Refundable)
                                                <span className="text-red-500">*</span>
                                            </td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">7,500</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">7,500</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">
                                                Library Deposit (Refundable)
                                                <span className="text-red-500">*</span>
                                            </td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">7,500</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">7,500</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-800">Students Emergency Fund (Annual)</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">300</td>
                                            <td className="p-4 text-slate-600 font-mono border-l border-slate-100">300</td>
                                        </tr>
                                        {/* Total */}
                                        <tr className="bg-slate-50 border-t border-slate-200">
                                            <td className="p-5 font-bold text-slate-900 uppercase">TOTAL (1st year)</td>
                                            <td className="p-5 font-bold text-blue-700 text-lg font-mono border-l border-slate-200">100,800</td>
                                            <td className="p-5 font-bold text-blue-700 text-lg font-mono border-l border-slate-200">20,800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-3 flex items-start gap-2 text-sm text-slate-500 italic">
                                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                <p>* to be paid in the first year only</p>
                            </div>
                        </section>

                        {/* Section 2: Installments */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                                Installment Payment Options
                            </h2>

                            <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <PieChart className="w-6 h-6" />
                                        </div>
                                        <div className="text-3xl font-bold text-slate-800 mb-1">35%</div>
                                        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Installment I</div>
                                        <div className="text-xs text-slate-400 mt-2 font-medium">(Due date: 16 August)</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <PieChart className="w-6 h-6" />
                                        </div>
                                        <div className="text-3xl font-bold text-slate-800 mb-1">35%</div>
                                        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Installment II</div>
                                        <div className="text-xs text-slate-400 mt-2 font-medium">(Due date: 15 November)</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <PieChart className="w-6 h-6" />
                                        </div>
                                        <div className="text-3xl font-bold text-slate-800 mb-1">30%</div>
                                        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Installment III</div>
                                        <div className="text-xs text-slate-400 mt-2 font-medium">(Due date: 16 January)</div>
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
