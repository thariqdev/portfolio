"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { identity, navLinks } from "@/lib/data";
import NavOverlay from "@/components/NavOverlay";

export default function SiteNav() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-6 md:px-10 py-5">
                <button
                    onClick={() => scrollTo("hero")}
                    data-cursor=""
                    className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0"
                >
                    <span className="font-display text-sm text-ink">MT</span>
                </button>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.target}
                            onClick={() => scrollTo(link.target)}
                            data-cursor=""
                            className="nav-link uppercase tracking-widest"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2 text-xs text-muted uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    {identity.available ? "Available for opportunities" : "Not available"}
                </div>

                <button
                    onClick={() => setOpen((v) => !v)}
                    data-cursor=""
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="md:hidden w-9 h-9 flex items-center justify-center text-ink"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </header>

            <div className="md:hidden">
                <NavOverlay open={open} onClose={() => setOpen(false)} />
            </div>
        </>
    );
}
