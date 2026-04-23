"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="mt-auto w-full border-t border-slate-800 bg-slate-950 text-white">
            <div className="section-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="text-sm font-semibold text-white">Bachelor of Science (Research)</div>
                    <div className="mt-1 text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} Indian Institute of Science. All rights reserved.
                    </div>
                </div>

                <a
                    href="https://ug.iisc.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-500/60 hover:bg-slate-800"
                >
                    UG Website
                    <i className="fas fa-arrow-right text-xs"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
