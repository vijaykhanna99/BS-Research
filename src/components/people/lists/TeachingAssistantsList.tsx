"use client";
import Image from "next/image";

export const teachingAssistantsData = [
    {
        name: "Rashmi R K",
        discipline: "Physics",
        image: "/assets/TEACHING ASSISTANT/PHYSICS/Rashmi R K.JPG",
        imagePosition: "object-center",
    },
    {
        name: "Tyby Monachan",
        discipline: "Physics",
        image: "/assets/TEACHING ASSISTANT/PHYSICS/Tyby Monachan.jpg",
    },
    {
        name: "Haneena P K",
        discipline: "Physics",
        image: "/assets/TEACHING ASSISTANT/PHYSICS/Haneena P K.jpg",
    },
    {
        name: "Aria Kutty",
        discipline: "Physics",
        image: "/assets/TEACHING ASSISTANT/PHYSICS/Ariakutty C S.jpg",
        imagePosition: "object-center",
    },
    {
        name: "Asiya Rehman",
        discipline: "Biology",
        image: "/assets/TEACHING ASSISTANT/BIOLOGY/Asiya Rehman.jpg",
    },
    {
        name: "Guruprasad B B",
        discipline: "Chemistry",
        image: "/assets/TEACHING ASSISTANT/CHEMISTRY/Guruprasad.jpg",
        imagePosition: "object-center",
    },
    {
        name: "Veeresh S",
        discipline: "Earth & Environmental Science",
        image: "/assets/TEACHING ASSISTANT/E-and-Envs/veeresh-s.png",
    },
    {
        name: "V Madhuri",
        discipline: "Engineering",
        image: "/assets/TEACHING ASSISTANT/ENGINEERING LAB/Madhuri Vangapandu.jpeg",
    },
    {
        name: "Pavithra Rao",
        discipline: "Physics",
    },
    {
        name: "Padma S",
        discipline: "Biology",
    },
    {
        name: "Smitha B B",
        discipline: "Biology",
    },
    {
        name: "Monica S",
        discipline: "Biology",
    },
    {
        name: "Uma N",
        discipline: "Biology",
    },
    {
        name: "Mahitha M K",
        discipline: "Chemistry",
    },
    {
        name: "Veeresh Simpi",
        discipline: "Chemistry",
    },
    {
        name: "Akshata Hegde",
        discipline: "Chemistry",
    },
    {
        name: "Soorya P S",
        discipline: "Earth & Environmental Science",
    },
    {
        name: "Jeevan S",
        discipline: "Materials Science & Engineering",
        image: "/assets/TEACHING ASSISTANT/Materials Science & Engineering/Jeevan S.jpg",
    },
];

function NameOnlyCard({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("");

    return (
        <div className="h-80 w-full bg-slate-100 flex items-center justify-center px-6">
            <span className="text-2xl font-bold text-slate-300">{initials}</span>
        </div>
    );
}

export default function TeachingAssistantsList() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <span className="section-eyebrow">Directory</span>
                <h2 className="section-title mt-3">
                    Teaching Assistants
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teachingAssistantsData.map((person) => (
                    <article key={`${person.discipline}-${person.name}`} className="elevated-card overflow-hidden text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                        {person.image ? (
                            <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className={`object-cover ${person.imagePosition || "object-top"}`}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                            </div>
                        ) : (
                            <NameOnlyCard name={person.name} />
                        )}

                        <div className="mt-5 text-sm font-semibold text-blue-700">
                            {person.discipline}
                        </div>

                        <h3 className="px-5 pb-6 mt-2 text-xl font-bold text-slate-900 leading-tight">
                            {person.name}
                        </h3>
                    </article>
                ))}
            </div>
        </div>
    );
}
