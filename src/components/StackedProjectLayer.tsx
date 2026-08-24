"use client";

import type { ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

const ENTER_FRACTION = 0.5;

// Framer Motion hardware-accelerates simple scroll-linked transforms via native
// WAAPI/ScrollTimeline animations, which require keyframe offsets within [0, 1].
// segEnd + segSpan for the last card (and similar edge math) can drift past 1,
// which throws "Offsets must be null or in the range [0,1]" at mount time.
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export default function StackedProjectLayer({
    index,
    total,
    isActive,
    scrollYProgress,
    children,
}: {
    index: number;
    total: number;
    isActive: boolean;
    scrollYProgress: MotionValue<number>;
    children: ReactNode;
}) {
    const segStart = clamp01(index / total);
    const segEnd = clamp01((index + 1) / total);
    const segSpan = segEnd - segStart;
    const enterEnd = clamp01(segStart + segSpan * ENTER_FRACTION);
    const recedeEnd = clamp01(segEnd + segSpan * ENTER_FRACTION);
    const isFirst = index === 0;
    const isLast = segEnd >= recedeEnd;

    // The card physically travels from fully below the stage (100% of its own height)
    // up into resting position. No opacity fade here — it's a solid card covering
    // whatever sits beneath it, not a card fading into view. Project 01 has nothing
    // to enter from below, so it simply stays put from the start.
    const y = useTransform(
        scrollYProgress,
        isFirst ? [0, 1] : [segStart, enterEnd],
        isFirst ? ["0%", "0%"] : ["100%", "0%"]
    );

    // Once the NEXT card begins its own entrance, this card recedes subtly underneath
    // it — a small scale/opacity dip, never a fade-out. The last card has no successor,
    // so its recede range would collapse to a zero-length [1,1] after clamping — guard
    // it the same way as isFirst instead of feeding useTransform a degenerate range.
    const scale = useTransform(scrollYProgress, isLast ? [0, 1] : [segEnd, recedeEnd], isLast ? [1, 1] : [1, 0.97]);
    const opacity = useTransform(scrollYProgress, isLast ? [0, 1] : [segEnd, recedeEnd], isLast ? [1, 1] : [1, 0.85]);

    return (
        <motion.div
            style={{ y, opacity, scale, zIndex: index }}
            className={`absolute inset-0 flex items-center justify-center px-3 sm:px-6 md:px-10 ${
                isActive ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
            <div className="w-full max-w-6xl h-[88vh] sm:h-[85vh] md:h-[78vh] max-h-[820px]">
                {children}
            </div>
        </motion.div>
    );
}
