"use client";

import { motion } from "framer-motion";
import {
    Code2, Layers, Braces, FileType2, Server, Route,
    Database, Globe, Paintbrush, GitBranch, Github,
    FileCode2, Zap, Table2, KeyRound, Send, BookOpen,
} from "lucide-react";
import { techStack, type Level } from "@/lib/data";

const icons: Record<string, typeof Code2> = {
    Python: FileCode2,
    FastAPI: Zap,
    PostgreSQL: Database,
    SQLAlchemy: Table2,
    "React.js": Code2,
    "Next.js": Layers,
    JavaScript: Braces,
    TypeScript: FileType2,
    "JWT Auth": KeyRound,
    "Node.js": Server,
    "Express.js": Route,
    MongoDB: Database,
    "REST APIs": Globe,
    Postman: Send,
    Swagger: BookOpen,
    "Tailwind CSS": Paintbrush,
    Git: GitBranch,
    GitHub: Github,
};

const levelColor: Record<Level, string> = {
    Advanced: "text-accent-blue",
    Proficient: "text-ink",
    "Working Knowledge": "text-muted",
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function TechStack() {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, i) => {
                    const Icon = icons[tech.name] ?? Code2;
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.4, ease, delay: (i % 4) * 0.05 }}
                            className="panel-card p-5 group"
                        >
                            <Icon
                                size={22}
                                className="text-accent-blue mb-3 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="text-sm text-ink mb-1">{tech.name}</div>
                            <div className={`text-[10px] uppercase tracking-widest mb-2 ${levelColor[tech.level]}`}>
                                {tech.level}
                            </div>
                            <p className="text-xs text-muted leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 overflow-hidden">
                                {tech.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
