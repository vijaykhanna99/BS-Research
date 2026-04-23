import React from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';

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

                {/* Right Section: Search and Utils */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative group w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors w-4 h-4" />
                    </div>

                    <div className="hidden md:block">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">
                            English <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
