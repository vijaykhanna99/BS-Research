"use client";
import Image from "next/image";

export const instructorsData = [
    {
        name: "Dr. Eswara Rao Tatta",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/Eswara Rao Tatta.jpg",
    },
    {
        name: "Dr. Safeena Majeed",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/Safeena Majeed.jpeg",
    },
    {
        name: "Dr. Sadhana Mutalik",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/Sadhana Mutalik.jpg",
    },
    {
        name: "Dr. Shruthi Shree D P",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/Shruthi Shree D P.jpg",
    },
    {
        name: "Dr. Anusha H",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/Anusha Hindupur.jpg",
    },
    {
        name: "Dr. Mamatha Mahato",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Mamata Mahato.jpeg",
    },
    {
        name: "Dr. Sachind Prabha",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Sachind  Prabha P.jpg",
    },
    {
        name: "Dr. Siddhartha De",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Siddhartha De.jpg",
    },
    {
        name: "Dr. Ramkishore Matsa",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Ramkishore Matsa.jpg",
    },
    {
        name: "Dr. Sesha Kumar Nalluri",
        discipline: "Computer Science",
        image: "/assets/INSTRUCTOR/COMPUTER SCIENCE/Sesha Kumar Nalluri (1).jpg",
    },
    {
        name: "Dr. Sharath Raj",
        discipline: "Earth & Environmental Science",
        image: "/assets/INSTRUCTOR/E & Envs/Sharath Raj Bayal (1).jpeg",
    },
    {
        name: "Dr. Saranya K",
        discipline: "Earth & Environmental Science",
        image: "/assets/INSTRUCTOR/E & Envs/Saranya Kumarasamy.jpeg",
    },
    {
        name: "Dr. Manpreet Singh",
        discipline: "Mathematics",
        image: "/assets/INSTRUCTOR/MATHEMATICS/Manpreet Singh.jpg",
    },
    {
        name: "Dr. Sathish Kumar",
        discipline: "Mathematics",
        image: "/assets/INSTRUCTOR/MATHEMATICS/Sathish Kumar.jpeg",
    },
    {
        name: "Dr. Nandha Gopal P",
        discipline: "Physics",
        image: "/assets/INSTRUCTOR/PHYSICS/Nandhagopal P.JPG",
    },
    {
        name: "Dr. Jesla P K",
        discipline: "Physics",
        image: "/assets/INSTRUCTOR/PHYSICS/Jesla P K.jpg",
    },
    {
        name: "Dr. Ritu Kumari Pilania",
        discipline: "Physics",
        image: "/assets/INSTRUCTOR/PHYSICS/Ritu Kumari Pilania.jpg",
    },
    {
        name: "KM Shivani",
        discipline: "Electronics",
    },
];

export default function InstructorsList() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    UG Instructors
                </h2>
                <div className="h-px w-20 bg-slate-200 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10">
                {instructorsData.map((person) => (
                    <article key={`${person.discipline}-${person.name}`} className="text-center group">
                        {person.image ? (
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-50 shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-contain p-1"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                            </div>
                        ) : (
                            <div className="aspect-[4/3] w-full rounded-lg bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl flex items-center justify-center px-6">
                                <span className="text-2xl font-bold text-slate-300">
                                    {person.name
                                        .split(" ")
                                        .filter((part) => !["Dr.", "KM"].includes(part))
                                        .slice(0, 2)
                                        .map((part) => part[0])
                                        .join("")}
                                </span>
                            </div>
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
