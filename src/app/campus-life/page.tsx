"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const CampusLifePage = () => {
    const gallerySections = [
        {
            title: "Campus Environment",
            description: "Explore the beautiful and lush green Indian Institute of Science campus, along with our vibrant dining and student facilities.",
            images: [
                "/assets/image1.jpg",
                "/assets/image2.jpg",
                "/assets/image3.jpg",
                "/assets/image4.jpg",
                "/assets/image11.jpg",
                "/assets/image12.jpg",
                "/assets/ug_website_pics/iisc daining .jpg"
            ]
        },
        {
            title: "Biology Labs",
            description: "Hands-on experience and advanced research in the Department of Biology.",
            images: [
                "/assets/ug_website_pics/Biology/IMG_9494.JPG",
                "/assets/ug_website_pics/Biology/IMG_9508.JPG",
                "/assets/ug_website_pics/Biology/IMG_9487.JPG",
                "/assets/ug_website_pics/Biology/IMG_9485.JPG",
                "/assets/ug_website_pics/Biology/IMG_9488.JPG",
                "/assets/ug_website_pics/Biology/IMG_9501.JPG",
                "/assets/ug_website_pics/Biology/IMG_9504.JPG",
                "/assets/ug_website_pics/Biology/IMG_9512.JPG",
            ]
        },
        {
            title: "Chemistry Labs",
            description: "Innovative experiments and scientific discovery in the Chemistry laboratories.",
            images: [
                "/assets/ug_website_pics/chemistry/IMG_9390.JPG",
                "/assets/ug_website_pics/chemistry/IMG_9384.JPG",
                "/assets/ug_website_pics/chemistry/IMG_9386.JPG",
                "/assets/ug_website_pics/chemistry/IMG_9379.JPG",
                "/assets/ug_website_pics/chemistry/chem_lab_pres.jpg",
                "/assets/ug_website_pics/chemistry/IMG_9378.JPG",
                "/assets/ug_website_pics/chemistry/IMG_9389.JPG",
                "/assets/ug_website_pics/chemistry/IMG_9388.JPG",
            ]
        },
        {
            title: "Physics Labs",
            description: "State-of-the-art equipment and hands-on learning in the Physics practical sessions.",
            images: [
                "/assets/ug_website_pics/physics /IMG_9540.JPG",
                "/assets/ug_website_pics/physics /IMG_9546.JPG",
                "/assets/ug_website_pics/physics /IMG_9424.JPG",
                "/assets/ug_website_pics/physics /IMG_9523.JPG",
                "/assets/ug_website_pics/physics /IMG_9520.JPG",
                "/assets/ug_website_pics/physics /IMG_9529.JPG",
                "/assets/ug_website_pics/physics /IMG_9514.JPG",
                "/assets/ug_website_pics/physics /IMG_9414.JPG",
            ]
        },
        {
            title: "Electronics Labs",
            description: "Exploring circuits, robotics, and cutting-edge tech in Electronics.",
            images: [
                "/assets/ug_website_pics/electronics/IMG_9533.JPG",
                "/assets/ug_website_pics/electronics/IMG_9370.JPG",
                "/assets/ug_website_pics/electronics/IMG_9375.JPG",
                "/assets/ug_website_pics/electronics/IMG_9376.JPG",
            ]
        },
        {
            title: "Sports & Athletics",
            description: "Students actively participating in a variety of sports and athletic events.",
            images: [
                "/assets/ug_website_pics/sports /IMG_8922.JPG",
                "/assets/ug_website_pics/sports /swimming_4.jpg",
                "/assets/ug_website_pics/sports /cricket2.jpeg",
                "/assets/ug_website_pics/sports /cycling_2.jpeg",
                "/assets/ug_website_pics/sports /hockey.jpg",
                "/assets/ug_website_pics/sports /football.jpeg",
                "/assets/ug_website_pics/sports /basketball.jpg",
                "/assets/ug_website_pics/sports /volleyball_4.jpeg",
                "/assets/ug_website_pics/sports /Khokho.jpeg",
                "/assets/ug_website_pics/sports /badminton_4.jpg",
            ]
        },
        {
            title: "Pravega",
            description: "Highlights from Pravega, the annual science, technology, and cultural festival of IISc.",
            images: [
                "/assets/ug_website_pics/pravega/_SAM2112.JPG",
                "/assets/ug_website_pics/pravega/pravega_1.jpeg",
                "/assets/ug_website_pics/pravega/_SAM2117.JPG",
                "/assets/ug_website_pics/pravega/pravega_12.jpg",
                "/assets/ug_website_pics/pravega/pravega_7.jpeg",
                "/assets/ug_website_pics/pravega/DSC05744.jpg",
                "/assets/ug_website_pics/pravega/pravega_6.jpeg",
                "/assets/ug_website_pics/pravega/pravega_9.jpeg",
                "/assets/ug_website_pics/pravega/pravega_5.jpeg",
                "/assets/ug_website_pics/pravega/pravega_4.jpeg",
                "/assets/ug_website_pics/pravega/pravega_8.jpeg",
                "/assets/ug_website_pics/pravega/pravega_3.jpeg",
                "/assets/ug_website_pics/pravega/pravega_10.jpeg",
                "/assets/ug_website_pics/pravega/pravega_11.jpeg",
                "/assets/ug_website_pics/pravega/pravega_2.jpeg",
            ]
        }
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Gallery Sections */}
            <div className="container mx-auto px-4 py-16 space-y-24">
                {gallerySections.map((section, idx) => (
                    <div key={idx} className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto font-medium">{section.description}</p>
                        </div>

                        {/* Changed to 3 images per row on larger screens and adjusted aspect ratio */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                            {section.images.map((src, imgIdx) => (
                                <div
                                    key={imgIdx}
                                    onClick={() => setSelectedImage(src)}
                                    className="group relative aspect-[4/3] cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-slate-100"
                                >
                                    <Image
                                        src={src}
                                        alt={`${section.title} view ${imgIdx + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    {/* Stylish Overlay Gradient */}
                                    <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Divider except for last element */}
                        {idx !== gallerySections.length - 1 && (
                            <div className="pt-12">
                                <hr className="border-slate-200" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Fullscreen Modal Image Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Fullscreen Detailed View"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampusLifePage;
