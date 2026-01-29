"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MessageFromUGDeans from "./MessageFromUGDeans";
import AskIISc from "./AskIISc";
import { ArrowRight, Megaphone, Newspaper, ChevronRight, Share2, Calendar } from "lucide-react";
import Link from "next/link";

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
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="relative"
                >
                    <SwiperSlide>
                        <img
                            src={championsImg1}
                            alt="IISc Campus"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    Champions in research
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={labImage}
                            alt="Lab Image"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    The Best of the Best
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={highlightImage}
                            alt="Highlights"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4 uppercase">
                                    Catalyzing Careers
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="custom-prev absolute left-10 top-1/2 transform -translate-y-1/2 p-4 rounded-full z-10 w-auto h-auto">
                    <i className="fa fa-chevron-left text-4xl text-white"></i>
                </button>
                <button className="custom-next absolute right-10 top-1/2 transform -translate-y-1/2 p-4 rounded-full z-10 w-auto h-auto">
                    <i className="fa fa-chevron-right text-4xl text-white"></i>
                </button>
            </div>

            {/* Components Section */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl space-y-8">
                <div>
                    <MessageFromUGDeans />
                </div>
                <div>
                    <AskIISc />
                </div>
            </div>

            {/* Divider with generous but correct spacing */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>
            </div>

            {/* Unified News & Announcements Section */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT COLUMN: News */}
                        <div className="flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-slate-100">
                                <div className={sectionHeaderClass}>
                                    <div className="p-2 bg-blue-600 rounded-lg text-white shadow-sm shadow-blue-200">
                                        <Newspaper className="w-6 h-6" />
                                    </div>
                                    <h2 className={headingClass}>Latest Updates</h2>
                                </div>
                                <span className="text-sm font-bold text-slate-400 cursor-not-allowed flex items-center gap-1 opacity-70">
                                    View All <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>

                            {/* News List */}
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "IISc Team Wins Gold Medal and Receives Best SDG Impact Nomination at iGEM 2025",
                                        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                                        tag: "Achievement",
                                        date: "October 2025",
                                        link: "/news/igem-2025-gold-medal"
                                    },
                                    {
                                        title: "IISc Team Achieves Historic 6th Rank at PLANCKS 2025 International Physics Competition",
                                        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                                        tag: "Achievement",
                                        date: "May 2025",
                                        link: "/news/plancks-2025-achievement"
                                    },
                                    {
                                        title: "IISc Team Secures First Place at Indian Young Physicists’ League (IYPL) 2025",
                                        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                                        tag: "Achievement",
                                        date: "May 2025",
                                        link: "/news/iypl-2025-first-place"
                                    },

                                ].slice(0, 4).map((item, i) => (
                                    <Link key={i} href={item.link} className="flex gap-4 group cursor-pointer items-start p-4 bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 rounded-2xl transition-all duration-300 block">
                                        <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                            <img
                                                src={item.image}
                                                alt="thumbnail"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 py-1">
                                            <div className={newsMetaClass}>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.tag === 'Achievement' ? 'bg-amber-100 text-amber-700' :
                                                    item.tag === 'Research' ? 'bg-purple-100 text-purple-700' :
                                                        'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {item.tag}
                                                </span>
                                                <span className="text-slate-300">•</span>
                                                <span>{formatDate(item.date)}</span>
                                            </div>
                                            <h3 className={newsTitleClass}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Announcements */}
                        <div className="flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-slate-100">
                                <div className={sectionHeaderClass}>
                                    <div className="p-2 bg-orange-600 rounded-lg text-white shadow-sm shadow-orange-200">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <h2 className={headingClass}>Announcements</h2>
                                </div>
                                <span className="text-sm font-bold text-slate-400 cursor-not-allowed flex items-center gap-1 opacity-70" title="Coming Soon">
                                    Archive <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>

                            {/* Announcements List */}
                            <div className="space-y-4">
                                {[
                                    { text: "Admission for 2026-2027 coming soon", new: true, date: "2026-01-29" },
                                    { text: "UG Academic Calendar Jan-April Semester", new: false, date: "2026-01-01", link: "/assets/UG%20Academic%20Calendar%20Jan-Apr%202026%20(2).pdf" },
                                    { text: "Detailed timetable for 2nd Sem Jan-April 2026 released", new: false, date: "2026-01-01", link: "/assets/2nd%20Semester%20Class%20Schdule%20of%20Jan-Apr%202026%20Term%20II%20B.Sc%20(Res)%20%26%20B.Tech%20(M%26C)%20(1)%C2%A0(5).pdf" },
                                    { text: "Detailed timetable for 4th Sem Jan-April 2026 released", new: false, date: "2026-01-01", link: "/assets/4th%20Semester%20Class%20schedule%20of%20Jan-Apr%202026%20Term%20B%20Sc(Res)%20%26%20B.Tech%20(M%26C)%2009.01.2026%C2%A0(1).pdf" },
                                    { text: "Detailed timetable for 6th Sem Jan-April 2026 released", new: false, date: "2026-01-01", link: "/assets/6th%20Semester%20Class%20Schedule%20Jan-Apr%202026%20Term%20B.Sc%20%26%20B.Tech%2009.01.2026.pdf" }
                                ].map((item, i) => {
                                    const content = (
                                        <div className="group flex gap-4 items-start p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-300 cursor-pointer">
                                            <div className="mt-1">
                                                {item.new ? (
                                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                        <Megaphone className="w-4 h-4 animate-pulse" />
                                                    </div>
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {item.new && (
                                                        <span className="text-[10px] font-extrabold uppercase text-white bg-orange-500 px-2 py-0.5 rounded shadow-sm shadow-orange-200">
                                                            New
                                                        </span>
                                                    )}
                                                    <span className={announceDateClass}>{formatDate(item.date)}</span>
                                                </div>
                                                <p className={announceTextClass}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    if (item.link) {
                                        return (
                                            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                                {content}
                                            </a>
                                        );
                                    }

                                    return <div key={i}>{content}</div>;
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
