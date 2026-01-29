"use client";
import React from "react";
import { User, Mail, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdministrationPage() {

    // Deans Data
    const deans = [
        {
            name: "Prabal K. Maiti",
            title: "Dean UG Program",
            image: "/assets/Prabal-Kumar-Maiti-photo.png",
            profile: "https://physics.iisc.ac.in/~maiti/group-present.html",
        },
        {
            name: "Srikanth K. Iyer",
            title: "Associate Dean BTech Program",
            image: "/assets/srikanth-iyer.jpg",
            profile: "https://math.iisc.ac.in/~skiyer/",
        },
        {
            name: "Dipshikha Chakravortty",
            title: "Associate dean BS research",
            image: "/assets/Dipshikha-1-scaled.jpg",
            profile: "https://mcb.iisc.ac.in/dclab/",
        },
    ];

    const currentCommitteeMembers = [
        {
            name: "Deepak D'Souza",
            role: "Chair, CSA",
            image: "/assets/deepak-dsouza.jpg",
            profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
        },
        {
            name: "Anirban Chakrabarty",
            role: "PHY",
            image: "/assets/anirban-chakraborty.jpg",
            profile: "https://cds.iisc.ac.in/people/anirban-chakraborty/",
        },
        {
            name: "Siddhartha Gadgil",
            role: "MA",
            image: "/assets/siddhartha-gadgil.jpg",
            profile: "https://math.iisc.ac.in/~gadgil/",
        },
        {
            name: "Dipanjan Gope",
            role: "ECE",
            image: "/assets/dipanjan-gope.jpg",
            profile: "https://eecs.iisc.ac.in/people/dipanjan-gope/",
        },
        {
            name: "Prasad Hegde",
            role: "CHEP",
            image: "/assets/prasad-hegde.jpg",
            profile: "https://scholar.google.co.in/citations?user=hvj3D7IAAAAJ&hl=en",
        },
        {
            name: "Shashi Jain",
            role: "MGMT",
            image: "/assets/shashi-jain.jpg",
            profile: "https://mgmt.iisc.ac.in/shashi-jain/",
        },
        {
            name: "Vamsi Pritam Pingali",
            role: "MA",
            image: "/assets/vamsi-pritham.jpg",
            profile: "https://math.iisc.ac.in//~vamsipingali/",
        },
        {
            name: "Tarun Rambha",
            role: "CiSTUP",
            image: "/assets/tarun-rambha.jpg",
            profile: "https://scholar.google.com/citations?user=7lO3hwgAAAAJ&hl=en",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Deans & Co-ordinators
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Leadership and committee members guiding the Bachelor of Science (Research) Programme.
                    </p>
                </div>

                {/* Deans Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Deans</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                        {deans.map((person, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center p-8">
                                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                    {person.name}
                                </h3>
                                <div className="text-blue-600 font-medium mb-6 bg-blue-50 px-3 py-1 rounded-full text-sm">
                                    {person.title}
                                </div>
                                <a
                                    href={person.profile}
                                    target="_blank"
                                    className="mt-auto inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold text-sm transition-colors"
                                >
                                    View Profile <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Committee Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider text-center">Programme Curriculum Committee</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {currentCommitteeMembers.map((member, index) => (
                            <a
                                key={index}
                                href={member.profile}
                                target="_blank"
                                className="group bg-white p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-slate-100 group-hover:ring-4 ring-blue-50 transition-all">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                </div>
                                <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-1">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-slate-500 font-medium">{member.role}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
