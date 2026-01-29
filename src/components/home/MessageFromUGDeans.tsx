import React from "react";
import { Quote } from "lucide-react";

const MessageFromUGDeans = () => {
    return (
        <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-50/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative z-10">
                {/* Title Section */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                        <Quote className="w-8 h-8 rotate-180" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Message from UG Deans
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mt-2"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p className="font-medium text-slate-800 text-xl">
                        Greetings to you all.
                    </p>
                    <p>
                        We are delighted to welcome you to the Bachelor of Science (Research) Programme at the Indian Institute of Science. This programme is designed to provide a strong foundation in science while nurturing curiosity, critical thinking, and a research-oriented mindset across disciplines.
                    </p>
                    <p>
                        At IISc, you will be part of a vibrant academic ecosystem that encourages interdisciplinary learning, close interaction with faculty, and early exposure to research. We strongly urge you to make full use of the opportunities available—through coursework, laboratories, projects, and seminars—to explore your interests and develop both depth and breadth in scientific inquiry.
                    </p>
                    <p>
                        Beyond academics, we encourage you to engage with the broader campus life, collaborate with peers from diverse backgrounds, and remain mindful of the responsibility that comes with being part of a premier institution of national importance. Your learning journey here is not only about acquiring knowledge, but also about contributing meaningfully to society through science and innovation.
                    </p>
                    <p>
                        We wish you a rewarding and fulfilling experience at IISc and look forward to seeing you grow as thoughtful researchers and responsible global citizens.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageFromUGDeans;
