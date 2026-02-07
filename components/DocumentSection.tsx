'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

export default function DocumentSection() {
    return (
        <section id="documents" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Field Visit Documents
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Access the official field visit report and detailed observations from my Tulip Internship under Swachh Bharat Mission.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-dark p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-white">Project Report PDF</h3>
                                <p className="text-gray-400 text-sm">
                                    Comprehensive report covering waste management analysis, field observations, and strategic recommendations for Surat Municipal Corporation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700/50">
                            <span className="text-gray-500 text-sm">Format: PDF • Size: 2.41 MB</span>
                            <a
                                href="/blog.pdf"
                                download
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105"
                            >
                                <Download size={18} />
                                Download Now
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Why read this report?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Detailed analysis of waste processing units",
                                "Insights into Swachh Bharat Mission implementation",
                                "Strategic suggestions for operational efficiency",
                                "Field photography and real-world data"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-gray-300"
                                >
                                    <ArrowRight size={16} className="text-purple-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
