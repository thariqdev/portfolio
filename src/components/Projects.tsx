"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Rudo – Mutual Fund Platform",
            description: "Comprehensive mutual fund platform with a full admin panel and an intuitive user investment dashboard. Features real-time API integration, server-side rendering, and advanced SEO optimization.",
            tech: ["React.js", "Next.js", "Strapi", "Tailwind CSS"],
            links: { github: "#", live: "#" },
            featured: true,
        },
        {
            title: "Rayi – Mutual Fund Platform",
            description: "Robust financial platform featuring a detailed admin dashboard and live market data API integration. Built with a focus on clean, maintainable architecture and performance.",
            tech: ["React.js", "Node.js", "Express", "MongoDB"],
            links: { github: "#", live: "#" },
            featured: true,
        },
        {
            title: "Ice Cream Booking Website",
            description: "A full-stack e-commerce platform allowing users to browse, customize, and book ice cream orders. Complete with payment gateway integration and inventory management.",
            tech: ["Angular", "Node.js", "MongoDB", "Express"],
            links: { github: "#", live: "#" },
            featured: false,
        },
        {
            title: "React News Website",
            description: "A modern responsive news portal converted meticulously from an Adobe XD design to a fully functional UI. Features categorized news feeds and infinite scrolling.",
            tech: ["React.js", "Tailwind CSS", "News API"],
            links: { github: "#", live: "#" },
            featured: false,
        },
    ];

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                    <p className="mt-4 text-slate-400 text-center max-w-2xl">
                        A selection of my recent work, highlighting my expertise in building scalable, real-world financial platforms and robust web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-brand-blue rounded-2xl">
                                        <Layers className="text-brand-accent w-8 h-8" />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="text-slate-400 hover:text-brand-accent transition-colors">
                                            <Github size={22} />
                                        </a>
                                        <a href={project.links.live} className="text-slate-400 hover:text-brand-purple transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
