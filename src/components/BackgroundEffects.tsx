"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const glow = glowRef.current;
            if (!glow) return;
            glow.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
            <div className="absolute inset-0 bg-menu-glow" />
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div
                ref={glowRef}
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
                    willChange: "transform",
                }}
            />
            <div className="bg-grain" />
        </div>
    );
}
