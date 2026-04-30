import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white py-4 border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                {/* Logo and Title Section */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                    <Image
                        src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal.jpg"
                        alt="IISc Logo"
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain shrink-0"
                        priority
                    />
                    <div className="flex flex-col">
                        <h1 className="text-xl md:text-3xl font-bold text-blue-900 tracking-tight leading-tight">
                            Bachelor of Science (Research)
                        </h1>
                        <span className="text-sm md:text-xl text-gray-600 font-medium">
                            Indian Institute of Science Bangalore
                        </span>
                    </div>
                </div>

                {/* Admissions Banner */}
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 shadow-sm w-full md:w-auto">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                    </span>
                    <div className="flex flex-col leading-tight">
                        <span className="text-[11px] font-bold text-orange-500 uppercase tracking-wide">Admissions Open</span>
                        <span className="text-sm font-semibold text-gray-800">BS (Research) 2026–27</span>
                    </div>
                    <Link
                        href="https://admissions-august.iisc.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all whitespace-nowrap shadow-sm"
                    >
                        Apply Here
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
