export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-brand-blue/50 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-bold tracking-tighter text-white">
                        Mohammed <span className="text-brand-purple">Thariq</span>
                    </span>
                    <p className="text-sm text-slate-400 text-center md:text-left">
                        React & Next.js Developer based in Kerala, India.
                    </p>
                </div>

                <p className="text-sm text-slate-500">
                    © {currentYear} Mohammed Thariq. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
