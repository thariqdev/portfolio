import { identity } from "@/lib/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-hairline px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted uppercase tracking-widest">
            <div className="text-center md:text-left">
                <div className="text-ink">{identity.name}</div>
                <div>{identity.role}</div>
            </div>

            <div>© {currentYear} · Built with React / Next.js</div>

            <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor=""
                className="text-muted hover:text-ink transition-colors"
            >
                LinkedIn
            </a>
        </footer>
    );
}
