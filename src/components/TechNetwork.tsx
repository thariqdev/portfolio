"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techNetwork } from "@/lib/data";

const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 150;
const NODE_R = 40;
const CORE_R = 52;

export default function TechNetwork() {
    const [hovered, setHovered] = useState<number | null>(null);

    const nodes = techNetwork.nodes.map((node, i) => {
        const angle = (i / techNetwork.nodes.length) * Math.PI * 2 - Math.PI / 2;
        return {
            ...node,
            x: CENTER + RADIUS * Math.cos(angle),
            y: CENTER + RADIUS * Math.sin(angle),
        };
    });

    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="w-full max-w-md md:w-[420px] md:max-w-[420px] shrink-0 mx-auto"
                role="img"
                aria-label="Core stack connected to React, Next.js, Node.js, MongoDB, REST APIs, and Git"
            >
                {nodes.map((node, i) => (
                    <line
                        key={`link-${node.name}`}
                        x1={CENTER}
                        y1={CENTER}
                        x2={node.x}
                        y2={node.y}
                        className={`tech-link ${hovered === i ? "active" : ""}`}
                        strokeWidth={1}
                    />
                ))}

                <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={CORE_R}
                    className={`tech-node ${hovered !== null ? "active" : ""}`}
                    strokeWidth={1.5}
                />
                <text
                    x={CENTER}
                    y={CENTER}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-ink text-[11px] uppercase"
                    style={{ letterSpacing: "0.05em" }}
                >
                    {techNetwork.core}
                </text>

                {nodes.map((node, i) => (
                    <g
                        key={node.name}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className="cursor-pointer"
                    >
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={NODE_R}
                            className={`tech-node ${hovered === i ? "active" : ""}`}
                            strokeWidth={1.5}
                            opacity={hovered !== null && hovered !== i ? 0.35 : 1}
                        />
                        <text
                            x={node.x}
                            y={node.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-ink text-[10px] uppercase"
                            opacity={hovered !== null && hovered !== i ? 0.35 : 1}
                        >
                            {node.name}
                        </text>
                    </g>
                ))}
            </svg>

            <div className="h-20 flex items-center w-64 shrink-0 mx-auto md:mx-0 text-center md:text-left">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={hovered ?? "default"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-muted"
                    >
                        {hovered !== null
                            ? nodes[hovered].description
                            : "Hover a node to see how it fits the stack."}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
