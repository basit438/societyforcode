"use client";
import React from "react";
import Navbar from "@/app/components/ui/Navbar";
import CTA from "@/app/components/sections/CTA";
import JobCard from "./components/JobCard";
import { careersData } from "./careers-data";
import { motion } from "framer-motion";

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6 border border-purple-100">
                            We're Hiring
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 font-syne leading-tight">
                            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Mission</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
                            Help us build the future of digital experiences. We're looking for passionate individuals to join our growing team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation First", desc: "We push boundaries and explore new technologies." },
                            { title: "Remote Friendly", desc: "Work from anywhere. We value output over hours." },
                            { title: "Growth Mindset", desc: "Continuous learning and development is in our DNA." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-syne">{value.title}</h3>
                                <p className="text-gray-600 font-inter">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 font-syne mb-4">Open Positions</h2>
                            <p className="text-gray-600">Find the role that fits you best.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {careersData.map((job, index) => (
                            <JobCard key={job.id} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title="Don't see the right role?"
                subtitle="We're always looking for talent. Send us your resume and we'll keep you in mind."
                buttonText="General Application"
                linkUrl="/contact"
            />
        </div>
    );
};

export default CareersPage;
