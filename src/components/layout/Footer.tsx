"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 w-full mt-auto">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Indian Institute of Science. All rights reserved.
                </div>

                <a
                    href="https://ug.iisc.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-full transition-all text-sm font-medium border border-slate-700 hover:border-blue-500/50"
                >
                    Main UG Website
                    <i className="fas fa-arrow-right text-xs"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
