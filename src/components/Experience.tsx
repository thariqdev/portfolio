"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Associate Software Engineer",
            company: "Evoqins Pvt Ltd",
            location: "Kerala, India",
            duration: "Sept 2024 – Present",
            description: [
                "Developing scalable enterprise applications using React and Next.js.",
                "Collaborating with cross-functional teams to design and implement complex features.",
                "Optimizing application performance and enforcing clean code principles.",
            ],
        },
        {
            id: 2,
            role: "Jr Software Developer",
            company: "Asian Media Group",
            location: "Kerala, India",
            duration: "Sept 2023 – Sept 2024",
            description: [
                "Built and maintained robust mutual fund platforms and complex admin dashboards.",
                "Integrated live market data APIs to display real-time financial information.",
                "Designed and implemented secure, performant frontend architectures.",
            ],
        },
        {
            id: 3,
            role: "MEARN Stack Intern",
            company: "Luminar Technolab",
            location: "Kochi, Kerala, India",
            duration: "2023",
            description: [
                "Received intensive training in MongoDB, Express, Angular/React, and Node.js.",
                "Developed comprehensive full-stack prototype projects.",
                "Gained hands-on experience in RESTful API creation and database management.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 relative z-10 bg-brand-blue/30 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
                    >
                        Professional <span className="text-gradient">Experience</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-brand-purple/30 ml-3 md:ml-6 space-y-12 pb-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-purple border-4 border-brand-blue" />

                                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-brand-purple/30 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-lg font-medium text-brand-purple mt-1 mb-2">
                                                <Briefcase size={18} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5 text-sm text-slate-400 font-medium">
                                            <div className="flex items-center gap-2 md:justify-end">
                                                <Calendar size={16} />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 md:justify-end">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mt-6">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-300">
                                                <span className="text-brand-accent mt-1.5 flex-shrink-0">•</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
