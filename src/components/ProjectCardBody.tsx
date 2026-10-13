"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function ProjectCardBody({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const ref = useRef<HTMLElement>(null);
    const isFinePointer = useFinePointer();

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);
    const rotateX = useSpring(rotateXRaw, { damping: 25, stiffness: 250 });
    const rotateY = useSpring(rotateYRaw, { damping: 25, stiffness: 250 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!isFinePointer || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateYRaw.set(px * 3);
        rotateXRaw.set(py * -3);
    };

    const handleMouseLeave = () => {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
    };

    const number = String(index + 1).padStart(2, "0");
    const tiltProps = {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { rotateX, rotateY, transformPerspective: 1000 },
    };

    return (
        <div className="panel-card rounded-3xl overflow-hidden flex flex-col h-full w-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-hairline bg-panel-alt shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-blue/70" />
                <span className="ml-3 text-[11px] text-muted truncate">
                    {project.name.toLowerCase()}
                </span>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-[3fr_2fr] overflow-hidden min-h-0">
                {project.liveUrl ? (
                    <motion.a
                        ref={ref as React.RefObject<HTMLAnchorElement>}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor={project.liveUrlLabel ? `View ${project.liveUrlLabel}` : "View project"}
                        className="relative overflow-hidden bg-menu-glow block min-h-[220px] md:min-h-0"
                        {...tiltProps}
                    >
                        <ProjectMockupVisual name={project.name} />
                    </motion.a>
                ) : (
                    <motion.div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        data-cursor="Case study soon"
                        className="relative overflow-hidden bg-menu-glow min-h-[220px] md:min-h-0"
                        {...tiltProps}
                    >
                        <ProjectMockupVisual name={project.name} />
                    </motion.div>
                )}

                <div className="relative p-6 md:p-10 flex flex-col justify-center gap-4 border-l border-hairline overflow-y-auto">
                    <span
                        aria-hidden
                        className="pointer-events-none select-none absolute -top-2 right-4 font-display text-[5rem] md:text-[7rem] leading-none text-ink/[0.04]"
                    >
                        {number}
                    </span>

                    <div className="relative flex items-center gap-3">
                        <span className="font-display text-sm text-accent-blue">
                            Project {number}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-hairline text-muted">
                            {project.status}
                        </span>
                    </div>

                    <h3 className="relative font-display text-2xl md:text-4xl text-ink uppercase leading-none">
                        {project.name}
                    </h3>

                    <div className="text-xs uppercase tracking-widest text-muted">
                        {project.category}
                    </div>

                    <p className="text-sm text-muted leading-relaxed max-w-md">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-hairline text-ink/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.note && (
                        <p className="text-xs text-muted/80 italic leading-relaxed max-w-md">
                            {project.note}
                        </p>
                    )}

                    {project.liveUrl ? (
                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor=""
                                className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-ink"
                            >
                                {project.liveUrlLabel ?? "View project"}
                                <ArrowRight
                                    size={16}
                                    className="text-accent-blue transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                            {project.secondaryUrl && (
                                <a
                                    href={project.secondaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor=""
                                    className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-ink"
                                >
                                    {project.secondaryUrlLabel ?? "View secondary"}
                                    <ArrowRight
                                        size={16}
                                        className="text-accent-blue transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>
                            )}
                        </div>
                    ) : (
                        <span className="text-xs uppercase tracking-widest text-muted pt-2">
                            {project.sourceLabel}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProjectMockupVisual({ name }: { name: string }) {
    return (
        <>
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-4xl md:text-6xl text-ink/15 uppercase relative z-10 text-center px-4">
                    {name}
                </span>
            </div>
        </>
    );
}
