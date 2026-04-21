"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PeopleSubNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Deans", path: "/people/deans" },
        // { name: "Coordinators", path: "/people/coordinators" },
        // { name: "UG Instructors", path: "/people/instructors" },
        // { name: "Teaching Assistants", path: "/people/teaching-assistants" },
    ];

    return (
        <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 md:gap-4 p-1">
                {navItems.map((item) => {
                    // Check if active (exact match or sub-path if needed, but simple match works here)
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                                px-6 py-2.5 rounded-full text-smmd:text-base font-bold transition-all duration-200 border
                                ${isActive
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50'}
                            `}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
