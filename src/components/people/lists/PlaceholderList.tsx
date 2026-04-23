"use client";
export default function PlaceholderList({ name }: { name: string }) {
    return (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm mx-4">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
            <p className="text-slate-500">Directory will be available soon.</p>
        </div>
    );
}
