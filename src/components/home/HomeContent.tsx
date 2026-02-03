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
import { ArrowRight, Megaphone, Newspaper, ChevronRight, ChevronLeft, Share2, Calendar } from "lucide-react";
import Link from "next/link";
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
                                priority
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
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl space-y-8">
                <div>
                    <AboutProgramme />
                </div>
            </div>

            {/* Unified News & Announcements Section - Moved Here */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Main Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Latest News & Announcements</h2>
                        <div className="h-1 w-24 bg-blue-900 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT COLUMN: LATEST NEWS */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 border-b border-slate-200 pb-2">Latest News</h3>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "IISc Team Wins Gold Medal and Receives Best SDG Impact Nomination at iGEM 2025",
                                        desc: "A multidisciplinary team of undergraduates has secured a gold medal for their innovative project on sustainable synthetic biology solutions...",
                                        tag: "Achievement",
                                        date: "OCTOBER 01, 2025",
                                        link: "/news/igem-2025-gold-medal"
                                    },
                                    {
                                        title: "IISc Team Achieves Historic 6th Rank at PLANCKS 2025",
                                        desc: "The physics team made history by securing the 6th rank globally in the prestigious PLANCKS international physics competition...",
                                        tag: "Achievement",
                                        date: "MAY 25, 2025",
                                        link: "/news/plancks-2025-achievement"
                                    },
                                    {
                                        title: "IISc Team Secures First Place at Indian Young Physicists’ League (IYPL) 2025",
                                        desc: "The institute's team has won the prestigious national championship, showcasing exceptional problem-solving skills in theoretical physics...",
                                        tag: "Achievement",
                                        date: "MAY 20, 2025",
                                        link: "/news/iypl-2025-first-place"
                                    }

                                ].map((item, i) => (
                                    <Link key={i} href={item.link} className="block group border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                                        <div className="flex-1 min-w-0">
                                            {/* Badge and Date Line */}
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wide border ${item.tag === 'Achievement' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                                    item.tag === 'Research' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                                        'bg-blue-50 text-blue-700 border-blue-200'
                                                    }`}>
                                                    {item.tag}
                                                </span>
                                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                    • {item.date}
                                                </span>
                                            </div>

                                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: ANNOUNCEMENTS */}
                        <div className="flex flex-col pl-0 lg:pl-8">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 border-b border-slate-200 pb-2">Announcements</h3>

                            <div className="space-y-4">
                                {[
                                    { text: "Admissions for the Academic Year 2026–2027: Coming Soon", icon: "🎓", date: "JANUARY 29, 2026", link: "#" },
                                    { text: "UG Academic Calendar Jan-April Semester", icon: "📅", date: "JANUARY 01, 2026", link: "/assets/UG%20Academic%20Calendar%20Jan-Apr%202026%20(2).pdf" },
                                    { text: "Detailed timetable for 2nd Sem Jan-April 2026 released", icon: "📝", date: "JANUARY 01, 2026", link: "/assets/2nd%20Semester%20Class%20Schdule%20of%20Jan-Apr%202026%20Term%20II%20B.Sc%20(Res)%20%26%20B.Tech%20(M%26C)%20(1)%C2%A0(5).pdf" },
                                    { text: "Detailed timetable for 4th Sem Jan-April 2026 released", icon: "📝", date: "JANUARY 01, 2026", link: "/assets/4th%20Semester%20Class%20schedule%20of%20Jan-Apr%202026%20Term%20B%20Sc(Res)%20%26%20B.Tech%20(M%26C)%2009.01.2026%C2%A0(1).pdf" },
                                    { text: "Detailed timetable for 6th Sem Jan-April 2026 released", icon: "📝", date: "JANUARY 01, 2026", link: "/assets/6th%20Semester%20Class%20Schedule%20Jan-Apr%202026%20Term%20B.Sc%20%26%20B.Tech%2009.01.2026.pdf" }
                                ].map((item, i) => (
                                    <a key={i} href={item.link} className="block group bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-200 p-5 rounded-lg cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">{item.date}</span>
                                            <div className="text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-0.5">
                                                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                                    <path d="M7 10l5 5 5-5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                                            <p className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                                                {item.text}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <AskIISc />
            </div>
        </div>
    );
};

export default HomeContent;
