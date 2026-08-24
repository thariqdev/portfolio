"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValueEvent,
    useMotionTemplate,
    type MotionValue,
} from "framer-motion";
import { experience } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ease = [0.16, 1, 0.3, 1] as const;

function findReachedIndex(progress: number, fractions: number[]) {
    let reached = -1;
    for (let i = 0; i < fractions.length; i++) {
        if (progress >= fractions[i]) reached = i;
    }
    return reached;
}

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Fractional position (0-1) of each dot along the track, measured from real
    // layout rather than assumed to be evenly spaced — item heights vary with
    // description/tag length, so an even split would drift out of sync with
    // where the dots actually sit.
    const [dotFractions, setDotFractions] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"],
    });

    useEffect(() => {
        const measure = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerTop = container.getBoundingClientRect().top;
            const trackHeight = container.offsetHeight;
            if (trackHeight === 0) return;
            const fractions = itemRefs.current.map((el) => {
                if (!el) return 0;
                const dotCenter = el.getBoundingClientRect().top - containerTop + 6;
                return Math.min(1, Math.max(0, dotCenter / trackHeight));
            });
            setDotFractions(fractions);

            // Re-sync the reached index against the already-measured layout, in
            // case the page loaded already scrolled into the section (e.g.
            // browser scroll restoration) rather than waiting for the next
            // scroll "change" event to fire.
            const reached = findReachedIndex(scrollYProgress.get(), fractions);
            setCurrentIndex((prev) => (prev === reached ? prev : reached));
        };

        measure();
        const observer = new ResizeObserver(measure);
        if (containerRef.current) observer.observe(containerRef.current);
        window.addEventListener("resize", measure);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [scrollYProgress]);

    // The line itself tracks scroll 1:1 — no spring lag here, so it reads as
    // directly connected to the user's scroll rather than trailing behind it.
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (dotFractions.length === 0) return;
        const reached = findReachedIndex(progress, dotFractions);
        setCurrentIndex((prev) => (prev === reached ? prev : reached));
    });

    return (
        <section id="experience" className="py-28 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease }}
                    className="font-display text-3xl md:text-4xl text-ink uppercase mb-16"
                >
                    Experience
                </motion.h2>

                <div ref={containerRef} className="relative pl-10">
                    <div className="absolute left-[3px] top-0 bottom-0 w-px bg-hairline" />
                    <motion.div
                        style={{ height: prefersReducedMotion ? "100%" : lineHeight }}
                        className="absolute left-[3px] top-0 w-px timeline-line shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    />
                    {!prefersReducedMotion && (
                        <motion.div
                            style={{ top: lineHeight }}
                            className="absolute left-[3px] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue blur-[3px] opacity-80"
                        />
                    )}

                    <div className="flex flex-col gap-16">
                        {experience.map((item, index) => (
                            <TimelineItem
                                key={item.company}
                                item={item}
                                index={index}
                                isCurrent={!prefersReducedMotion && index === currentIndex}
                                isReached={prefersReducedMotion || index <= currentIndex}
                                scrollYProgress={scrollYProgress}
                                dotFraction={dotFractions[index] ?? 0}
                                reducedMotion={prefersReducedMotion}
                                setRef={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({
    item,
    isCurrent,
    isReached,
    scrollYProgress,
    dotFraction,
    reducedMotion,
    setRef,
}: {
    item: (typeof experience)[number];
    index: number;
    isCurrent: boolean;
    isReached: boolean;
    scrollYProgress: MotionValue<number>;
    dotFraction: number;
    reducedMotion: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}) {
    const activationRaw = useTransform(scrollYProgress, (p): number => (p >= dotFraction ? 1 : 0));
    const activation = useSpring(activationRaw, { stiffness: 220, damping: 26 });

    const dotScale = useTransform(activation, [0, 1], [1, 1.15]);
    const glowOpacity = useTransform(activation, [0, 1], [0, 0.65]);
    const glowShadow = useMotionTemplate`0 0 12px rgba(56, 189, 248, ${glowOpacity})`;
    const contentOpacity = useTransform(activation, [0, 1], [0.55, 1]);
    const contentY = useTransform(activation, [0, 1], [6, 0]);

    const dotStyle = reducedMotion
        ? {}
        : { scale: dotScale, boxShadow: glowShadow };
    const contentStyle = reducedMotion
        ? {}
        : { opacity: contentOpacity, y: contentY };

    return (
        <motion.div ref={setRef} style={contentStyle} className="relative">
            <motion.span
                style={dotStyle}
                className={`absolute -left-10 top-1.5 w-2 h-2 rounded-full transition-colors duration-300 ${
                    isReached ? "bg-accent-blue" : "bg-muted"
                }`}
            />
            {isCurrent && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-[42px] top-0 w-4 h-4 rounded-full border border-accent-blue/50"
                />
            )}
            <div className="text-xs uppercase tracking-widest text-muted mb-2">
                {item.duration}
            </div>
            <h3
                className={`font-display text-xl uppercase mb-1 transition-colors duration-300 ${
                    isCurrent ? "text-ink" : "text-ink/70"
                }`}
            >
                {item.company}
            </h3>
            <div className="text-sm text-accent-blue mb-3">{item.role}</div>
            <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
                {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-hairline text-ink/80"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
