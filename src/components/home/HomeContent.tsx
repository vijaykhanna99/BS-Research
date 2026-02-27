"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import AboutProgramme from "./AboutProgramme";
import AskIISc from "./AskIISc";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ScienceDisciplines from "./ScienceDisciplines";

const HomeContent = () => {
    // Assets paths

    // Standard Typography Classes
    const headingClass = "text-2xl font-bold text-slate-900 tracking-tight";
    const sectionHeaderClass = "flex items-center gap-3 mb-2";

    // News Item Styles
    // News Item Styles
    const newsTitleClass = "text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors";
    const newsMetaClass = "text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2";

    // Announcement Item Styles
    const announceTextClass = "text-base font-semibold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors";
    const announceDateClass = "text-xs font-bold text-slate-400 uppercase tracking-wide";

    // Date formatter helper
    const formatDate = (dateString: string) => {
        // Handle Month Year format (e.g. "October 2025")
        if (/^[a-zA-Z]+ \d{4}$/.test(dateString)) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
        }

        const date = new Date(dateString);
        const today = new Date();

        const isToday = date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const isYesterday = date.getDate() === yesterday.getDate() &&
            date.getMonth() === yesterday.getMonth() &&
            date.getFullYear() === yesterday.getFullYear();

        if (isToday) return "TODAY";
        if (isYesterday) return "YESTERDAY";

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="bg-white">

            {/* Hero Carousel */}
            <div className="relative w-full h-[400px] md:h-[480px] lg:h-[520px]">
                <style>{`
                    .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: transparent;
                        border: 2px solid rgba(255, 255, 255, 0.8);
                        opacity: 1;
                        transition: all 0.3s ease;
                        margin: 0 8px !important; /* Force spacing */
                    }
                    .swiper-pagination-bullet-active {
                        background: #007bff; /* Bright Blue */
                        border-color: #007bff;
                        transform: scale(1.1);
                    }
                `}</style>
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade, Pagination]}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="relative w-full h-full"
                >
                    <SwiperSlide>
                        <ScienceDisciplines />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/IMG_9389.JPG"
                                alt="Catalyzing Careers"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/IMG_9485.JPG"
                                alt="Campus Life"
                                fill
                                className="object-cover object-[center_35%]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/IMG_9424.JPG"
                                alt="IISc Experience"
                                fill
                                className="object-cover object-[center_30%]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/DSC05744.jpg"
                                alt="Another Perspective"
                                fill
                                className="object-cover object-[center_25%]"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/image7.jpg"
                                alt="Lab View"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="custom-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg hover:shadow-xl group" aria-label="Previous Slide">
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button className="custom-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg hover:shadow-xl group" aria-label="Next Slide">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Open Day Marquee */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#8E1C24]/95 via-red-900/95 to-[#8E1C24]/95 backdrop-blur-md border-t border-red-500/30 overflow-hidden z-20 py-1.5 shadow-xl">
                    <div className="flex w-[200%] animate-marquee" style={{ animationDuration: '30s' }}>
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-around w-1/2 text-white/90 font-medium text-[11px] md:text-xs tracking-wide whitespace-nowrap px-4 hover:pause">
                                <span>
                                    🚀 OPEN DAY AT IISC 2026 IS ON <strong className="text-white uppercase font-bold text-[#FFD700]">SATURDAY, MARCH 7 (9 AM - 5 PM) !</strong> ✨ LIVE EXPERIMENTS ✨ SCIENTIFIC DEMOS ✨ POPULAR SCIENCE LECTURES ✨ EXHIBITIONS
                                </span>
                                <a
                                    href="https://openday.iisc.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-red-900 hover:bg-slate-100 transition-all rounded border border-white/20 px-3 py-1 font-bold text-[10px] md:text-[11px] shadow-sm ml-6 tracking-wide uppercase shrink-0"
                                    style={{ transform: "translateZ(0)" }}
                                >
                                    VISIT WEBSITE
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Components Section */}
            <div>
                <AboutProgramme />
            </div>

            <div>
                <AskIISc />
            </div>




        </div>
    );
};

export default HomeContent;
