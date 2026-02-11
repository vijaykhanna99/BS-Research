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
    const labImage = "/assets/robot_vehicle.jpg";
    const highlightImage = "/assets/engineer_pointing.jpg";
    const championsImg1 = "/assets/champions.png";

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
            <div className="relative h-[480px]">
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
                        <div className="relative w-full h-[480px]">
                            <Image
                                src={championsImg1}
                                alt="IISc Campus"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    Champions in research
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[480px]">
                            <Image
                                src={labImage}
                                alt="Lab Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    The Best of the Best
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[480px]">
                            <Image
                                src={highlightImage}
                                alt="Highlights"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    Catalyzing Careers
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="custom-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg hover:shadow-xl group" aria-label="Previous Slide">
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button className="custom-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-lg hover:shadow-xl group" aria-label="Next Slide">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
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
