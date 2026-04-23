import DeansList from "@/components/people/lists/DeansList";

export default function StandaloneDeansPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
                        Deans
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Meet the leadership supporting the Bachelor of Science (Research) Programme.
                    </p>
                </div>
                <DeansList />
            </div>
        </div>
    );
}
