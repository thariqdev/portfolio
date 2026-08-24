"use client";

import { motion, AnimatePresence } from "framer-motion";
import { identity } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
    { label: "Profile", target: "hero" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
];

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function NavOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
    const scrollTo = (id: string) => {
        onClose();
        window.setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                    animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
                    exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                    transition={{ duration: 0.6, ease }}
                    className="fixed inset-0 z-[65] bg-bg flex flex-col justify-center px-8 md:px-16"
                >
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={listVariants}
                        className="flex flex-col gap-2 md:gap-4"
                    >
                        {links.map((link) => (
                            <motion.button
                                key={link.target}
                                variants={itemVariants}
                                onClick={() => scrollTo(link.target)}
                                data-cursor=""
                                className="group text-left font-display uppercase text-5xl md:text-7xl text-ink/70 hover:text-ink transition-colors w-fit"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.nav>

                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-14 flex items-center gap-2 text-xs uppercase tracking-widest text-muted"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                        {identity.available ? "Available for opportunities" : "Not available"}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
