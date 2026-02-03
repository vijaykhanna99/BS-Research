"use client";
import Image from 'next/image';

export const coordinatorsData = [
    {
        name: "Deepak D'Souza",
        role: "Chair, CSA",
        image: "/assets/deepak-dsouza.jpg",
        profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
    },
    {
        name: "Anirban Chakrabarty",
        role: "PHY",
        image: "/assets/anirban-chakraborty.jpg",
        profile: "https://cds.iisc.ac.in/people/anirban-chakraborty/",
    },
    {
        name: "Siddhartha Gadgil",
        role: "MA",
        image: "/assets/siddhartha-gadgil.jpg",
        profile: "https://math.iisc.ac.in/~gadgil/",
    },
    {
        name: "Dipanjan Gope",
        role: "ECE",
        image: "/assets/dipanjan-gope.jpg",
        profile: "https://eecs.iisc.ac.in/people/dipanjan-gope/",
    },
    {
        name: "Prasad Hegde",
        role: "CHEP",
        image: "/assets/prasad-hegde.jpg",
        profile: "https://scholar.google.co.in/citations?user=hvj3D7IAAAAJ&hl=en",
    },
    {
        name: "Shashi Jain",
        role: "MGMT",
        image: "/assets/shashi-jain.jpg",
        profile: "https://mgmt.iisc.ac.in/shashi-jain/",
    },
    {
        name: "Vamsi Pritam Pingali",
        role: "MA",
        image: "/assets/vamsi-pritham.jpg",
        profile: "https://math.iisc.ac.in//~vamsipingali/",
    },
    {
        name: "Tarun Rambha",
        role: "CiSTUP",
        image: "/assets/tarun-rambha.jpg",
        profile: "https://scholar.google.com/citations?user=7lO3hwgAAAAJ&hl=en",
    },
];

export default function CoordinatorsList() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {coordinatorsData.map((member, index) => (
                <a
                    key={index}
                    href={member.profile}
                    target="_blank"
                    className="group bg-white p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
                >
                    <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden bg-slate-100 group-hover:ring-4 ring-blue-50 transition-all">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1 text-lg">
                        {member.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full">{member.role}</p>
                </a>
            ))}
        </div>
    );
}
