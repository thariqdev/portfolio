"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavOverlay from "@/components/NavOverlay";

export default function SiteNav() {
    const [open, setOpen] = useState(false);

    const scrollToTop = () => {
        setOpen(false);
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-6 md:px-10 py-5">
                <button
                    onClick={scrollToTop}
                    data-cursor=""
                    className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0"
                >
                    <span className="font-display text-sm text-ink">MT</span>
                </button>

                <button
                    onClick={() => setOpen((v) => !v)}
                    data-cursor=""
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="w-9 h-9 flex items-center justify-center text-ink"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </header>

            <NavOverlay open={open} onClose={() => setOpen(false)} />
        </>
    );
}
