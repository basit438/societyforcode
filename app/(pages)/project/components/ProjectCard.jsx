"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Intersection Observer for scroll-reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // 3D Tilt Effect based on mouse position
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg tilt
        const rotateY = ((x - centerX) / centerX) * 10;

        setMousePosition({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <Link href={project.linkUrl} className="group block">
            {/* Wrapper for Entrance Animation */}
            <div
                className={`transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
                style={{
                    transitionDelay: `${index * 0.15}s`, // Stagger animation
                }}
            >
                {/* Inner Card for 3D Tilt - No transition delay here */}
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="project-card relative h-80 rounded-2xl overflow-hidden"
                    style={{
                        transform: isHovering
                            ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.05)`
                            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                        // IMPORTANT: No transitionDelay here to ensure instant mouse response
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-90`}></div>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${project.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
                        {/* Top Section - Category */}
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wider opacity-90 font-inter">
                                {project.category}
                            </p>
                        </div>

                        {/* Bottom Section - Title and Link */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold font-syne leading-tight transform group-hover:translate-x-2 transition-transform duration-500">
                                {project.title}
                            </h3>

                            {/* Hover Overlay with Link */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex items-center gap-2 text-lg font-medium font-inter">
                                    <span>{project.linkText}</span>
                                    <svg
                                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hover Overlay Background with Purple Tint */}
                    <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
