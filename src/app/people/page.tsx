"use client";
import { useState } from 'react';
import DeansList from "@/components/people/lists/DeansList";
import CoordinatorsList from "@/components/people/lists/CoordinatorsList";
import InstructorsList from "@/components/people/lists/InstructorsList";
import TeachingAssistantsList from "@/components/people/lists/TeachingAssistantsList";
import { ContentShell, PageBody, PageHero } from "@/components/ui/PageChrome";

export default function PeopleHubPage() {
    const [activeTab, setActiveTab] = useState('deans');

    const tabs = [
        { id: 'deans', label: 'Deans' },
        { id: 'coordinators', label: 'Coordinators' },
        { id: 'instructors', label: 'UG Instructors' },
        { id: 'ta', label: 'Teaching Assistants' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'deans':
                return <DeansList />;
            case 'coordinators':
                return <CoordinatorsList />;
            case 'instructors':
                return <InstructorsList />;
            case 'ta':
                return <TeachingAssistantsList />;
            default:
                return <DeansList />;
        }
    };

    return (
        <PageBody>
            <PageHero
                eyebrow="BS Research"
                title="People"
                subtitle="Meet the leadership, faculty, and staff supporting the Bachelor of Science (Research) Programme."
                image="/assets/IMG_9485.JPG"
            />
            <ContentShell>
                {/* Tab Selection */}
                <div className="mb-12 flex justify-center flex-wrap gap-2 md:gap-4 max-w-4xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-6 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-200 border
                                ${activeTab === tab.id
                                    ? 'bg-[#0f2c67] text-white border-[#0f2c67] shadow-md transform scale-105'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50'}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderContent()}
                </div>
            </ContentShell>
        </PageBody>
    );
}
