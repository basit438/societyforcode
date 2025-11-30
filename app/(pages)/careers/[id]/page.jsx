"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/ui/Navbar";
import ApplicationForm from "../components/ApplicationForm";
import { careersData } from "../careers-data";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";

const JobDetailsPage = () => {
    const params = useParams();
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);

    const job = careersData.find((j) => j.id === params.id);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
                    <Link href="/careers" className="text-purple-600 hover:underline">
                        Back to Careers
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <ApplicationForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                jobTitle={job.title}
            />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                        Back to all jobs
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full mb-4">
                            {job.department}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-syne">
                            {job.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-purple-500" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-purple-500" />
                                {job.type}
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-purple-500" />
                                {job.salary}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-syne">About the Role</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {job.description}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-syne">Requirements</h2>
                                <ul className="space-y-4">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <div className="mt-1.5 min-w-5">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                            </div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-syne">Responsibilities</h2>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-purple-500 min-w-5 mt-0.5" />
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-syne">Interested?</h3>
                                <p className="text-gray-600 mb-6 text-sm">
                                    If you think you're a good fit, we'd love to hear from you.
                                </p>
                                <button
                                    onClick={() => setIsFormOpen(true)}
                                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors shadow-lg shadow-purple-900/10 hover:shadow-purple-600/20"
                                >
                                    Apply for this Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JobDetailsPage;
