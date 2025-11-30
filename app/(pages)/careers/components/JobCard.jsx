"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const JobCard = ({ job, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/careers/${job.id}`} className="group block">
                <div className="relative p-8 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">
                                    {job.department}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 font-syne group-hover:text-purple-700 transition-colors">
                                    {job.title}
                                </h3>
                            </div>
                            <div className="p-2 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                                <ArrowRight className="w-5 h-5 text-purple-600 transform group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-inter mb-6">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {job.type}
                            </div>
                        </div>

                        {/* Description Preview */}
                        <p className="text-gray-600 line-clamp-2 mb-4 text-sm leading-relaxed">
                            {job.description}
                        </p>

                        {/* Apply Text */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default JobCard;
