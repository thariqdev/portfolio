"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";
import TechNetwork from "@/components/TechNetwork";

const ease = [0.16, 1, 0.3, 1] as const;

export default function TechSection() {
    return (
        <section id="tech" className="py-28 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease }}
                    className="font-display text-3xl md:text-4xl text-ink uppercase mb-12"
                >
                    Technology
                </motion.h2>

                <TechStack />

                <div className="mt-20 pt-16 border-t border-hairline">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5, ease }}
                        className="text-xs uppercase tracking-widest text-muted mb-8 text-center"
                    >
                        How it connects
                    </motion.p>
                    <TechNetwork />
                </div>
            </div>
        </section>
    );
}
