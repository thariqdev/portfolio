"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function CustomCursor() {
    const isFinePointer = useFinePointer();
    const [label, setLabel] = useState<string | null>(null);
    const [expanded, setExpanded] = useState(false);
    const [hasMoved, setHasMoved] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
    const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

    useEffect(() => {
        if (!isFinePointer) return;

        const handleMove = (e: MouseEvent) => {
            setHasMoved(true);
            x.set(e.clientX);
            y.set(e.clientY);

            const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
            if (target) {
                setExpanded(true);
                setLabel(target.dataset.cursor || null);
            } else {
                setExpanded(false);
                setLabel(null);
            }
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [isFinePointer, x, y]);

    if (!isFinePointer || !hasMoved) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
            <motion.div
                className="absolute rounded-full bg-ink"
                style={{ left: springX, top: springY, x: "-50%", y: "-50%", width: 6, height: 6 }}
                animate={{ opacity: label ? 0 : 1 }}
                transition={{ duration: 0.15 }}
            />
            <motion.div
                className="absolute rounded-full border border-accent-blue flex items-center justify-center"
                style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
                animate={{
                    width: expanded ? (label ? 120 : 56) : 28,
                    height: expanded ? (label ? 36 : 56) : 28,
                    borderRadius: label ? 8 : 999,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
                <AnimatePresence>
                    {label && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] uppercase tracking-widest text-ink whitespace-nowrap"
                        >
                            {label}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
