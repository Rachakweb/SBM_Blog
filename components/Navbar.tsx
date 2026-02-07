'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 glass-dark border-b border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.png"
                                alt="RAK Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Tulip Blog
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                            <Link href="#blog" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                            <Link href="#documents" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Documents</Link>
                            <Link href="#about" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-xs text-gray-400 flex flex-col items-end">
                            <span>Developer</span>
                            <span className="font-bold text-emerald-400">Rak Studio</span>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                            onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <Download size={16} />
                            Download PDF
                        </motion.button>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-dark absolute w-full border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="#blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                        <Link href="#documents" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Documents</Link>
                        <div className="border-t border-gray-700 pt-4 mt-4">
                            <div className="flex justify-between items-center px-3">
                                <span className="text-gray-400 text-sm">Dev: Rak Studio</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
