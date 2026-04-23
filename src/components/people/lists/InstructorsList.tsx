"use client";
import Image from "next/image";

export const instructorsData = [
    {
        name: "Dr. Eswara Rao Tatta",
        discipline: "Biology",
        image: "/assets/INSTRUCTOR/BIOLOGY/eswara rao.png",
        imagePosition: "object-center",
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
        imagePosition: "object-center",
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
        imagePosition: "object-center",
    },
    {
        name: "Dr. Siddhartha De",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Siddhartha De.jpg",
        imagePosition: "object-center",
    },
    {
        name: "Dr. Ramkishore Matsa",
        discipline: "Chemistry",
        image: "/assets/INSTRUCTOR/CHEMISTRY/Ramkishore Matsa.jpg",
    },
    {
        name: "Sesha Kumar Nalluri",
        discipline: "Computer Science",
        image: "/assets/INSTRUCTOR/COMPUTER SCIENCE/Sesha Kumar Nalluri (1).jpg",
    },
    {
        name: "Dr. Sharath Raj",
        discipline: "Earth & Environmental Science",
        image: "/assets/INSTRUCTOR/E-and-Envs/sharath-raj.jpeg",
    },
    {
        name: "Dr. Saranya K",
        discipline: "Earth & Environmental Science",
        image: "/assets/INSTRUCTOR/E-and-Envs/saranya-k.jpeg",
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
        name: "Dr. Arathi Ramachandran",
        discipline: "Materials Science & Engineering",
        image: "/assets/INSTRUCTOR/Materials Science & Engineering/Arathi Ramachandran.jpg",
    },
    {
        name: "Dr. Elumalai P C",
        discipline: "Materials Science & Engineering",
        image: "/assets/INSTRUCTOR/Materials Science & Engineering/Elumalai PC.jpg",
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
                <span className="section-eyebrow">Directory</span>
                <h2 className="section-title mt-3">
                    UG Instructors
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instructorsData.map((person) => (
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
                            <div className="h-80 w-full bg-slate-100 flex items-center justify-center px-6">
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

                        <h3 className="px-5 pb-6 mt-2 text-xl font-bold text-slate-900 leading-tight">
                            {person.name}
                        </h3>
                    </article>
                ))}
            </div>
        </div>
    );
}
