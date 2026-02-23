"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call for form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10 bg-brand-blue/50 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                    <p className="mt-4 text-slate-400 text-center max-w-2xl">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
                            <div className="p-4 bg-brand-purple/10 rounded-xl">
                                <Mail className="w-8 h-8 text-brand-purple" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 mb-1">Email Me</h3>
                                <a href="mailto:thariqmohammed660@gmail.com" className="text-lg font-bold text-white hover:text-brand-accent transition-colors">
                                    thariqmohammed660@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
                            <div className="p-4 bg-brand-accent/10 rounded-xl">
                                <MapPin className="w-8 h-8 text-brand-accent" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 mb-1">Location</h3>
                                <p className="text-lg font-bold text-white">Ernakulam, Kerala, India</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
                            <div className="p-4 bg-emerald-400/10 rounded-xl">
                                <Linkedin className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-400 mb-1">Professional Profile</h3>
                                <a href="#" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6" suppressHydrationWarning>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-brand-blue/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-brand-blue/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-brand-blue/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                suppressHydrationWarning
                                className="w-full py-4 bg-gradient-to-r from-brand-purple to-brand-accent hover:from-brand-purple/90 hover:to-brand-accent/90 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <p className="text-emerald-400 text-sm text-center font-medium">
                                    Message sent successfully!
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
