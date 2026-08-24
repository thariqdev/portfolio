"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { identity } from "@/lib/data";
import { useFinePointer } from "@/hooks/useFinePointer";
import profileImage from "@/assets/profile-image.jpg";

export default function HeroPortrait() {
    const ref = useRef<HTMLDivElement>(null);
    const isFinePointer = useFinePointer();

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);
    const rotateX = useSpring(rotateXRaw, { damping: 20, stiffness: 200 });
    const rotateY = useSpring(rotateYRaw, { damping: 20, stiffness: 200 });
    const imageX = useTransform(rotateY, (v) => v * -1.2);
    const imageY = useTransform(rotateX, (v) => v * 1.2);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isFinePointer || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateYRaw.set(px * 8);
        rotateXRaw.set(py * -8);
    };

    const handleMouseLeave = () => {
        rotateXRaw.set(0);
        rotateYRaw.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden avatar-frame"
        >
            <motion.div
                style={{ x: imageX, y: imageY }}
                className="absolute inset-[-6%]"
            >
                <Image
                    src={profileImage}
                    alt={identity.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 90vw, 384px"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs uppercase tracking-widest text-accent-blue mb-1">MT</div>
                <div className="font-display text-xl text-ink uppercase leading-tight">
                    {identity.name}
                </div>
                <div className="text-xs text-muted uppercase tracking-widest mt-1">
                    {identity.role} · {identity.location}
                </div>
                <div className="flex items-center gap-2 mt-2 text-[11px] text-accent-blue uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                    {identity.available ? "Available for opportunities" : "Not available"}
                </div>
            </div>
        </motion.div>
    );
}
