"use client";

import { motion } from "framer-motion";
import { aboutStatement, aboutBody } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskedLine({ text, delay }: { text: string; delay: number }) {
    return (
        <span className="block overflow-hidden">
            <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease, delay }}
                className="block"
            >
                {text}
            </motion.span>
        </span>
    );
}

const [statementLine1, statementLine2] = aboutStatement.split(/(?<=experiences)\s/);

export default function AboutSection() {
    return (
        <section id="about" className="py-28 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-5xl text-ink uppercase leading-tight mb-10">
                    <MaskedLine text={statementLine1} delay={0} />
                    <MaskedLine text={statementLine2} delay={0.1} />
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease, delay: 0.2 }}
                    className="text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    {aboutBody}
                </motion.p>
            </div>
        </section>
    );
}
