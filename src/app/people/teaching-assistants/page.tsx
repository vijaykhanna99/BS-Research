"use client";
import React from "react";
import { Users } from "lucide-react";

export default function TeachingAssistantsPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Users className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Teaching Assistants</h1>
            <p className="text-slate-500 max-w-lg">
                Department-wise list of teaching assistants is coming soon.
            </p>
        </div>
    );
}
