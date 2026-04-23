"use client";
import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function ContactPage() {
    return (
        <PageBody>
            <PageHero
                eyebrow="UG Office"
                title="Contact Us"
                subtitle="Get in touch with the admissions office and programme administration."
                image="/assets/IMG_9424.JPG"
            />
            <ContentShell>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column: Contact Information */}
                    <div className="space-y-6">

                        {/* Admission Queries Card */}
                        <div className="elevated-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Admission Queries</h2>
                            </div>

                            <div className="mb-6 flex items-start gap-3 text-slate-600 bg-slate-50 p-4 rounded-lg">
                                <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-slate-800 block mb-1">Timings</span>
                                    Monday to Friday – 09:00 AM to 05:30 PM
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Programme Related */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                                        1. Programme related Queries
                                    </h3>
                                    <div className="space-y-3 pl-2">
                                        <div>
                                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Telephone Number</div>
                                            <div className="text-slate-700">
                                                <div className="flex justify-between max-w-xs">
                                                    <span>Primary No:</span>
                                                    <span className="font-medium">080 2293 4060</span>
                                                </div>
                                                <div className="flex justify-between max-w-xs">
                                                    <span>Alternative No:</span>
                                                    <span className="font-medium">080 2293 3379/3388</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email ID</div>
                                            <a href="mailto:admission.ug@iisc.ac.in" className="text-blue-600 hover:underline">
                                                admission.ug@iisc.ac.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Fees Related */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                                        2. Fees related Queries <span className="text-sm font-normal text-slate-500">(admission fee/application fee)</span>
                                    </h3>
                                    <div className="space-y-3 pl-2">
                                        <div>
                                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Telephone Number</div>
                                            <div className="text-slate-700 font-medium">080 2293 2977</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email ID</div>
                                            <a href="mailto:admission.acad@iisc.ac.in" className="text-blue-600 hover:underline">
                                                admission.acad@iisc.ac.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Contact Details Card */}
                        <div className="elevated-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Other Contact Details</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Dean */}
                                <div className="space-y-2">
                                    <h3 className="font-bold text-slate-800 text-lg">Dean, Undergraduate Studies</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Indian Institute of Science<br />
                                        Bangalore – 560 012
                                    </p>
                                    <div className="pt-2">
                                        <div className="text-xs font-semibold text-slate-500 uppercase">Email</div>
                                        <a href="mailto:office.ugdean@iisc.ac.in" className="text-blue-600 hover:underline">
                                            office.ugdean@iisc.ac.in
                                        </a>
                                    </div>
                                </div>

                                {/* Assistant Registrar */}
                                <div className="space-y-2">
                                    <h3 className="font-bold text-slate-800 text-lg">The Assistant Registrar (Academic)</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Indian Institute of Science<br />
                                        Bangalore – 560 012
                                    </p>
                                    <div className="pt-2">
                                        <div className="text-xs font-semibold text-slate-500 uppercase">Email</div>
                                        <a href="mailto:ar.acad@iisc.ac.in" className="text-blue-600 hover:underline">
                                            ar.acad@iisc.ac.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Map */}
                    <div className="space-y-6">
                        <div className="elevated-card overflow-hidden h-full min-h-[400px] sticky top-24">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7246323453655!2d77.56543631482233!3d12.991813990839756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d757000001%3A0x349e8b69c2a5a78c!2sIndian%20Institute%20of%20Science!5e0!3m2!1sen!2sin!4v1647935908386!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '600px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </ContentShell>
        </PageBody>
    );
};
