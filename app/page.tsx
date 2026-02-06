'use client';

import Image from 'next/image';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import DocumentSection from '@/components/DocumentSection';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Residential Area Visit",
    date: "Jan 21, 2026",
    category: "South-West Zone",
    excerpt: "Inspection of cleanliness and waste management practices in residential sectors.",
    image: "/residential-visit.jpg"
  },
  {
    title: "Bulk Waste Generator (Hotel Marriott)",
    date: "Jan 22, 2026",
    category: "South-West Zone",
    excerpt: "Reviewing waste segregation and disposal mechanisms at a major bulk waste generator.",
    image: "/hotel-waste.png"
  },
  {
    title: "Sewage Treatment Plant (Bhesan STP)",
    date: "Jan 23, 2026",
    category: "West Zone",
    excerpt: "Field visit to Bhesan STP to understand sewage treatment processes.",
    image: "/bhesan-stp.jpg"
  },
  {
    title: "Solid Waste Processing Facility – Bhatar",
    date: "Jan 27, 2026",
    category: "South-West Zone",
    excerpt: "Observing solid waste processing and management at the Bhatar facility.",
    image: "/solid waste.jpg"
  },
  {
    title: "Public Toilet Inspection (CT/PT)",
    date: "Jan 28, 2026",
    category: "South-West Zone",
    excerpt: "Inspection of Community Toilets and Public Toilets for hygiene and maintenance.",
    image: "/solid-waste-bhatar.png"
  },
  {
    title: "School Visit – Eco Club Awareness",
    date: "Jan 29, 2026",
    category: "South Zone A",
    excerpt: "Educational visit to promote eco-friendly practices and awareness among students.",
    image: "/school visit.png"
  },
  {
    title: "Dindoli STP – Advanced Wastewater Treatment",
    date: "Jan 30, 2026",
    category: "South-East Zone",
    excerpt: "Exploring advanced technologies in wastewater treatment at Dindoli STP.",
    image: "/stp 2.webp"
  },
  {
    title: "5R Center Visit – West Zone",
    date: "Jan 31, 2026",
    category: "West Zone",
    excerpt: "Visit to the 5R Center to study Reduce, Reuse, Recycle, Recover, and Refuse initiatives.",
    image: "/5r.avif"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
                  TULIP INTERNSHIP • SWACHH BHARAT MISSION
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                    Transforming
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
                    Urban Landscapes
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                  Exploring the field realities of waste management and urban sanitation in Surat.
                  A comprehensive field visit blog by Bhupendra Kumar Ravi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
                  >
                    Read the Stories
                  </button>
                  <button
                    onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all"
                  >
                    View Report
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">Field Notes</h2>
                  <p className="text-gray-400">Observations and insights from the ground.</p>
                </div>
                <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
                  >
                    <div className="h-48 bg-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                      {post.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        /* Placeholder for images */
                        <div className="w-full h-full bg-blue-900/20 flex items-center justify-center text-blue-500/30 font-bold text-4xl">
                          {/* Placeholder Icon or Text */}
                          <div className="flex flex-col items-center">
                            <span className="text-2xl opacity-50 mb-2">SMC</span>
                            <span className="text-sm opacity-50">Field Visit</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-6">{post.excerpt}</p>
                      <span className="inline-flex items-center text-blue-400 text-sm font-medium">
                        Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <DocumentSection />

          {/* Footer */}
          <footer className="py-12 bg-black border-t border-gray-800 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Tulip Blog</span>
            </div>
            <p className="text-gray-500 text-sm">
              Built with ❤️ by Rak Studio using Next.js & Tailwind CSS.
              {/* <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex justify-between items-center px-3">
                  <span className="text-gray-400 text-sm">Dev: Rak Studio</span>
                  <a href="https://rakweb.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm">Rak Studio</a>
                </div>
              </div> */}

            </p>

          </footer>
        </motion.div>
      )}
    </main>
  );
}
