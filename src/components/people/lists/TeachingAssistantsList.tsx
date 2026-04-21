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
];

function NameOnlyCard({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("");

    return (
        <div className="h-80 w-full rounded-lg bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl flex items-center justify-center px-6">
            <span className="text-2xl font-bold text-slate-300">{initials}</span>
        </div>
    );
}

export default function TeachingAssistantsList() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Teaching Assistants
                </h2>
                <div className="h-px w-20 bg-slate-200 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10">
                {teachingAssistantsData.map((person) => (
                    <article key={`${person.discipline}-${person.name}`} className="text-center group">
                        {person.image ? (
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
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

                        <h3 className="mt-2 text-xl font-bold text-slate-900 leading-tight">
                            {person.name}
                        </h3>
                    </article>
                ))}
            </div>
        </div>
    );
}
