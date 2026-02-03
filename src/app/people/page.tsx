"use client";
import { useState } from 'react';
import DeansList from "@/components/people/lists/DeansList";
import CoordinatorsList from "@/components/people/lists/CoordinatorsList";
import PlaceholderList from "@/components/people/lists/PlaceholderList";

export default function PeopleHubPage() {
    const [activeTab, setActiveTab] = useState('deans');

    const tabs = [
        { id: 'deans', label: 'Deans' },
        { id: 'coordinators', label: 'Coordinators' },
        { id: 'instructors', label: 'UG Instructors' },
        { id: 'ta', label: 'Teaching Assistants' },
        { id: 'staff', label: 'Office Staff' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'deans':
                return <DeansList />;
            case 'coordinators':
                return <CoordinatorsList />;
            case 'instructors':
                return <PlaceholderList name="UG Instructors" />;
            case 'ta':
                return <PlaceholderList name="Teaching Assistants" />;
            case 'staff':
                return <PlaceholderList name="Office Staff" />;
            default:
                return <DeansList />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="bg-white pt-16 pb-8 text-center px-4 border-b border-slate-100 shadow-sm">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
                    People
                </h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                    Meet the leadership, faculty, and staff supporting the Bachelor of Science (Research) Programme.
                </p>

                {/* Tab Selection */}
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 max-w-4xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-6 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-200 border
                                ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50'}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <main className="max-w-7xl mx-auto py-12 px-4 md:px-6">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}
