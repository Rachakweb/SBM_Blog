'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence of timings
        const timeouts = [
            setTimeout(() => setStep(1), 1000), // Show Welcome
            setTimeout(() => setStep(3), 3500), // Show Built By
            setTimeout(() => setStep(4), 6000), // Show Logo
            setTimeout(() => {
                setStep(5);
                setTimeout(onComplete, 1000); // Fade out and complete
            }, 8500),
        ];

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {step < 5 && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    <div className="text-center p-6 max-w-4xl w-full">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.h1
                                    key="welcome"
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="text-center"
                                >
                                    <span className="block text-4xl md:text-6xl font-light tracking-[0.3em] text-white uppercase mb-4">
                                        Welcome
                                    </span>
                                    <span className="block text-sm md:text-lg text-gray-400 font-medium tracking-[0.5em] uppercase border-t border-gray-800 pt-4 mt-4 mx-auto w-32">
                                        to my blog
                                    </span>
                                </motion.h1>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="builtby"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col items-center"
                                >
                                    <motion.h2
                                        className="text-3xl md:text-5xl font-light mb-4 text-gray-300"
                                    >
                                        Built by
                                    </motion.h2>
                                    <motion.span
                                        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                                        animate={{
                                            textShadow: ["0 0 10px #34d399", "0 0 20px #22d3ee", "0 0 10px #34d399"]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Rak Studio
                                    </motion.span>
                                </motion.div>
                            )}
                            {step === 4 && (
                                <motion.div
                                    key="logo"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                                    transition={{ duration: 1.2 }}
                                    className="text-center"
                                >
                                    <motion.h1
                                        className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase text-center"
                                        initial={{ filter: 'blur(10px)', opacity: 0 }}
                                        animate={{ filter: 'blur(0px)', opacity: 1 }}
                                        transition={{ duration: 1.5 }}
                                    >
                                        Surat Municipal Corporation
                                    </motion.h1>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cinematic bars */}
                    <motion.div
                        initial={{ height: "50vh" }}
                        animate={{ height: "0vh" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="absolute top-0 left-0 w-full bg-black z-50 pointer-events-none"
                    />
                    <motion.div
                        initial={{ height: "50vh" }}
                        animate={{ height: "0vh" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="absolute bottom-0 left-0 w-full bg-black z-50 pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
