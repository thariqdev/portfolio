"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Vue.js", level: 75 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "HTML5/CSS3", level: 95 },
                { name: "Tailwind CSS", level: 90 },
            ],
        },
        {
            title: "Backend & Tools",
            skills: [
                { name: "Node.js", level: 70 },
                { name: "MongoDB", level: 70 },
                { name: "REST API Integration", level: 95 },
                { name: "Axios/Fetch", level: 90 },
                { name: "Git & GitHub", level: 85 },
                { name: "Agile/Scrum", level: 80 },
            ],
        },
        {
            title: "Testing & Quality",
            skills: [
                { name: "Unit Testing", level: 80 },
                { name: "React Testing Library", level: 85 },
                { name: "API Testing", level: 80 },
                { name: "Debugging", level: 90 },
                { name: "Performance Optimization", level: 85 },
                { name: "SEO Optimization", level: 80 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 relative z-10 bg-brand-blue/30 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                    <p className="mt-4 text-slate-400 text-center max-w-2xl">
                        A comprehensive overview of my technical expertise, focusing on modern frontend technologies and full-stack capabilities.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-8 rounded-3xl"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-accent text-sm">
                                    {catIndex + 1}
                                </span>
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                                            <span className="text-sm font-medium text-brand-accent">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-white/5 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-brand-purple to-brand-accent h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
