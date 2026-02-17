"use client";
import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function FellowshipGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        {
            src: "/assets/fellowhship/midwest-anna-group-winners-scaled.jpeg",
            alt: "Fellowship Winners Group Photo",
            caption: "Fellowship Winners and Members"
        },
        {
            src: "/assets/fellowhship/Group-Pic-AANA-2025.png",
            alt: "IISc AANA 2025 Group Picture",
            caption: "IISc AANA Gathering 2025"
        }
    ];

    return (
        <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md border border-slate-100 group cursor-pointer"
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                            </div>
                        </div>
                        <div className="p-3 bg-white text-center text-sm text-slate-500 font-medium group-hover:text-blue-600 transition-colors">
                            {img.caption}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-all duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Image Container */}
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking blank space in container from closing if desired, but we want background click to close.
                    >
                        <img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                        />
                    </div>

                    {/* Close Button - Placed after content and with high Z-index to ensure visibility/clickability */}
                    <button
                        className="absolute top-4 right-4 z-[110] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>
            )}
        </div>
    );
}
