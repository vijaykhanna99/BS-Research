"use client";
import React from "react";
import { Hammer } from "lucide-react";

export default function InstructorsPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Hammer className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">UG Instructors</h1>
            <p className="text-slate-500 max-w-lg">
                Department-wise list of instructors is coming soon.
            </p>
        </div>
    );
}
