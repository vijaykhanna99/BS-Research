"use client";
import React from "react";
import { Briefcase } from "lucide-react";

export default function OfficeStaffPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Briefcase className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Office Staff</h1>
            <p className="text-slate-500 max-w-lg">
                Office staff directory is coming soon.
            </p>
        </div>
    );
}
