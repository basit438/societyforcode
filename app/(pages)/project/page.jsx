"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/ui/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import CustomCursor from "./components/CustomCursor";
import CTA from "@/app/components/sections/CTA";
import { projectsData } from "./projects-data";

const Page = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    useEffect(() => {
        // Trigger hero animation on mount
        setTimeout(() => setIsHeroVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Navbar */}
            <Navbar />

            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

            {/* Dotted Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
                <div className={`max-w-4xl transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {/* Floating Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-lg shadow-purple-200/50 border border-purple-200 rounded-full mb-8">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700 font-semibold font-inter">Our Latest Projects</span>
                    </div>

                    <h1 className={`text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1] font-syne transition-all duration-1000 delay-100 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        Our Recent
                        <span className="block relative mt-2">
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 blur-2xl opacity-40 transform scale-110" />
                                <span className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                                    Work
                                </span>
                            </span>
                        </span>
                    </h1>

                    <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium font-inter transition-all duration-1000 delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        A collection of what we've actually built - from open-source libraries to production apps.
                        See our best work in action.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <ProjectsGrid projects={projectsData} />

            {/* CTA Section */}
            <CTA />
        </div>
    );
};

export default Page;
