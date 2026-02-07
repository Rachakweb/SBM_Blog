'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import DocumentSection from '@/components/DocumentSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, User, Calendar, Target, CheckCircle2, Lightbulb, Image as ImageIcon } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  details?: {
    facility: string;
    location: string;
    zone: string;
    focusArea: string[];
    authority: string;
    observations: string[];
    learnings: string[];
    images?: string[];
  };
}

const blogPosts: BlogPost[] = [
  {
    title: "Residential Area Visit",
    date: "Jan 21, 2026",
    category: "South-West Zone",
    excerpt: "Inspection of cleanliness and waste management practices in residential sectors.",
    image: "/residential-visit.jpg",
    details: {
      facility: "Residential Area",
      location: "Ashirwad Bungalow, Piplod (Opp. Iscon Mall, Piplod)",
      zone: "South-West Zone",
      focusArea: [
        "Door-to-door waste collection system",
        "Source segregation practices",
        "Citizen participation",
        "No littering & no open dumping indicators"
      ],
      authority: "Dr. Ketan Garasiya",
      observations: [
        "100% door-to-door waste collection system implemented.",
        "Households were encouraged to segregate waste into: Wet waste, Dry waste, Domestic hazardous waste.",
        "Collection vehicles operated on scheduled timing (10:00 AM onwards).",
        "No visible open dumping spots in the locality.",
        "Awareness among residents regarding cleanliness ranking under Swachh Survekshan.",
        "Sanitation workers were equipped with proper collection tools."
      ],
      learnings: [
        "Source segregation is the foundation of effective waste management.",
        "Citizen awareness directly influences city cleanliness performance.",
        "Monitoring litter-free areas is essential for Swachh Survekshan scoring.",
        "Community participation makes sanitation systems sustainable."
      ]
    }
  },
  {
    title: "Bulk Waste Generator (Hotel Marriott)",
    date: "Jan 22, 2026",
    category: "South-West Zone",
    excerpt: "Reviewing waste segregation and disposal mechanisms at a major bulk waste generator.",
    image: "/hotel-waste.png",
    details: {
      facility: "Bulk Waste Generator (BWG)",
      location: "Hotel Marriott, Ambika Niketan",
      zone: "South-West Zone",
      focusArea: [
        "Segregation at source",
        "On-site waste processing",
        "Compliance of BWG norms",
        "Documentation as per Swachh Survekshan"
      ],
      authority: "Dr. Ketan Garasiya",
      observations: [
        "Waste was segregated within hotel premises.",
        "Biodegradable waste processed on-site (composting system).",
        "Dry waste stored separately and sent to authorized recyclers.",
        "Proper documentation maintained as per Solid Waste Management Rules, 2016.",
        "Regular municipal inspection ensures compliance.",
        "Kitchen waste management was systematic and hygienic."
      ],
      learnings: [
        "Bulk Waste Generators are responsible for managing their own waste.",
        "Decentralized waste processing reduces burden on municipal systems.",
        "Documentation and compliance monitoring strengthen accountability.",
        "Commercial establishments play a major role in urban cleanliness."
      ],
      images: [
        "/hotel-marriott-1.jpg",
        "/hotel-marriott-2.jpg",
        "/hotel-marriott-3.jpg"
      ]
    }
  },
  {
    title: "Sewage Treatment Plant (Bhesan STP)",
    date: "Jan 23, 2026",
    category: "West Zone",
    excerpt: "Field visit to Bhesan STP to understand sewage treatment processes.",
    image: "/bhesan-stp.jpg",
    details: {
      facility: "STP",
      location: "Near Club 100 Cricket Ground, Bhesan Main Road (Bhesan Sewage Treatment Plant)",
      zone: "West Zone",
      focusArea: [
        "Dry waste sorting process",
        "Recyclables recovery",
        "Worker safety",
        "Cleanliness standards",
        "Recovery efficiency as per Swachh Survekshan"
      ],
      authority: "Dr. Rikita Patel",
      observations: [
        "The STP follows a structured multi-stage wastewater treatment process: Screening → Grit Removal → Primary Clarification → Aeration → Secondary Clarification → Filtration → Disinfection.",
        "Aeration tanks use biological microorganisms to break down organic matter efficiently.",
        "Significant reduction in pollution levels: Raw sewage BOD: 200–300 mg/L, Treated water BOD: < 20 mg/L.",
        "Treated water meets environmental discharge standards prescribed by CPCB.",
        "Sludge generated is collected and processed through drying beds.",
        "Worker safety measures such as protective gear and monitoring systems are implemented.",
        "Cleanliness and operational efficiency are evaluated under Swachh Survekshan performance indicators."
      ],
      learnings: [
        "Wastewater treatment is essential for preventing environmental contamination and protecting public health.",
        "Biological treatment plays a major role in reducing organic pollution.",
        "Performance efficiency directly impacts city sanitation rankings under Swachh Survekshan.",
        "STPs are not just treatment units — they are critical infrastructure for sustainable urban development."
      ],
      images: [
        "/bhesan-stp-1.jpg",
        "/bhesan-stp-2.jpg",
        "/bhesan-stp-3.jpg",
        "/bhesan-stp-4.jpg"
      ]
    }
  },
  {
    title: "Solid Waste Processing Facility – Bhatar",
    date: "Jan 27, 2026",
    category: "South-West Zone",
    excerpt: "Observing solid waste processing and management at the Bhatar facility.",
    image: "/solid waste.jpg",
    details: {
      facility: "Solid Waste Processing Facility",
      location: "Beside Bhatar Sewage Treatment Plant, Gokulnagar, Bhatar (Ecovision Environmental Resources LLP)",
      zone: "South-West Zone",
      focusArea: [
        "Plastic waste segregation",
        "Processing methods",
        "Plastic ban enforcement",
        "Extended Producer Responsibility (EPR)",
        "Plastic waste indicators"
      ],
      authority: "Dr. Ketan Garasiya",
      observations: [
        "Dry waste sorted using conveyor-based segregation systems.",
        "Plastic waste categorized by type for recycling.",
        "Awareness regarding single-use plastic ban.",
        "EPR framework ensures producers take responsibility for plastic waste.",
        "Recyclables such as plastic, paper, and metal recovered efficiently.",
        "Facility cleanliness and worker safety protocols maintained."
      ],
      learnings: [
        "Waste has economic value when properly segregated.",
        "EPR policy strengthens accountability in plastic waste management.",
        "Material Recovery Facilities support circular economy models.",
        "Plastic waste indicators are important for Swachh Survekshan scoring."
      ],
      images: [
        "/solid-waste-bhatar-1.jpg",
        "/solid-waste-bhatar-2.jpg",
        "/solid-waste-bhatar-3.jpg"
      ]
    }
  },
  {
    title: "Public Toilet Inspection (CT/PT)",
    date: "Jan 28, 2026",
    category: "South-West Zone",
    excerpt: "Inspection of Community Toilets and Public Toilets for hygiene and maintenance.",
    image: "/solid-waste-bhatar.png",
    details: {
      facility: "Public Toilet (Community/ Public Toilet – CT/PT)",
      location: "Below Parle Point Bridge, Citylight (Opp. Citylight Ward Office)",
      zone: "South-West Zone",
      focusArea: [
        "O&M practices",
        "Cleaning frequency",
        "Availability of water & electricity",
        "Signage",
        "Staff deployment",
        "CT/PT cleanliness & functionality parameters"
      ],
      authority: "Dr. Ketan Garasiya",
      observations: [
        "Cleaning schedule displayed and maintained regularly.",
        "Continuous water supply available.",
        "Electricity and ventilation functioning properly.",
        "Clear signage and gender-specific sections.",
        "Staff deployed for monitoring and maintenance.",
        "Feedback mechanisms available for public complaints."
      ],
      learnings: [
        "Infrastructure alone is insufficient without proper maintenance.",
        "Regular inspection ensures hygiene standards.",
        "Public toilets significantly impact Swachh Survekshan rankings.",
        "O&M practices determine sustainability of sanitation facilities."
      ],
      images: [
        "/public-toilet-1.jpg",
        "/public-toilet-2.jpg",
        "/public-toilet-3.jpg"
      ]
    }
  },
  {
    title: "School Visit – Eco Club Awareness",
    date: "Jan 29, 2026",
    category: "South Zone A",
    excerpt: "Educational visit to promote eco-friendly practices and awareness among students.",
    image: "/school visit.png",
    details: {
      facility: "School",
      location: "Near V.T. Poddar College, Pramukh Park, Pandesara",
      zone: "South Zone A",
      focusArea: [
        "Eco-club formation",
        "IEC activities",
        "Plastic-free campus",
        "Student participation"
      ],
      authority: "Dr. Kinjal Patel",
      observations: [
        "Eco-clubs actively promoting cleanliness awareness.",
        "Students involved in campus cleanliness drives.",
        "Awareness sessions conducted on waste segregation.",
        "Plastic-free initiatives implemented within school premises.",
        "Posters and IEC materials displayed for behavioral change."
      ],
      learnings: [
        "Behavioral change begins at school level.",
        "Students can act as ambassadors of Swachh Bharat.",
        "IEC activities are powerful tools for awareness.",
        "Long-term sanitation success depends on youth engagement."
      ],
      images: [
        "/school-visit-1.jpg",
        "/school-visit-2.jpg",
        "/school-visit-3.jpg",
        "/school-visit-4.jpg"
      ]
    }
  },
  {
    title: "Dindoli STP – Advanced Wastewater Treatment",
    date: "Jan 30, 2026",
    category: "South-East Zone",
    excerpt: "Exploring advanced technologies in wastewater treatment at Dindoli STP.",
    image: "/stp 2.webp",
    details: {
      facility: "Sewage Treatment Plant",
      location: "Khodiyar Nagar Road, Opp. Balajinagar, Dindoli",
      zone: "South-East Zone",
      focusArea: [
        "Wastewater treatment process",
        "Treated water reuse",
        "Environmental compliance",
        "STP performance indicators under Swachh Survekshan"
      ],
      authority: "Dr. Nimesh Desai",
      observations: [
        "The STP follows a multi-stage treatment process: Screening → Grit Removal → Primary Sedimentation → Aeration (Biological Treatment) → Secondary Clarification → Filtration → Disinfection → Treated Water Discharge/Reuse.",
        "The plant primarily uses the Activated Sludge Process (ASP) for biological treatment, achieving approximately 85–95% BOD removal efficiency.",
        "Continuous monitoring of key water quality parameters such as BOD, COD, TSS, and pH level is carried out as per CPCB norms.",
        "Raw sewage typically contains BOD: 200–300 mg/L, TSS: 250–350 mg/L. After treatment, levels are reduced to BOD: < 10–20 mg/L, TSS: < 10–20 mg/L.",
        "Aeration tanks play a critical role by supplying oxygen to microorganisms that break down organic pollutants.",
        "Sludge generated during treatment is thickened, digested, and dewatered using sludge drying beds or mechanical systems.",
        "Some advanced facilities support biogas generation from sludge digestion, which can be reused for energy.",
        "Treated water is reused for gardening, industrial cooling, construction, and lake/groundwater recharge.",
        "The plant maintains compliance documentation under State Pollution Control Board regulations.",
        "Automation systems such as SCADA-based monitoring help regulate aeration, flow rates, and energy consumption."
      ],
      learnings: [
        "Wastewater treatment is a scientific and technology-driven environmental protection system, not just a disposal mechanism.",
        "Microorganisms are the backbone of biological treatment — without proper aeration and environmental control, efficiency drops significantly.",
        "Aeration consumes the highest energy in STPs; therefore, optimized oxygen supply is crucial for both performance and cost control.",
        "Sludge is not waste — it is a resource that can generate biogas or be converted into compost after stabilization.",
        "Advanced treatment ensures that treated water can safely be reused, supporting water conservation and sustainable urban development.",
        "Monitoring and regulatory compliance are as important as infrastructure itself.",
        "Modern STPs represent a shift from “waste disposal” to a circular water economy model under Swachh Bharat Mission (Urban) 2.0"
      ],
      images: [
        "/dindoli-stp-1.jpg",
        "/dindoli-stp-2.jpg",
        "/dindoli-stp-3.jpg",
        "/dindoli-stp-4.jpg"
      ]
    }
  },
  {
    title: "5R Center Visit – West Zone",
    date: "Jan 31, 2026",
    category: "West Zone",
    excerpt: "Visit to the 5R Center to study Reduce, Reuse, Recycle, Recover, and Refuse initiatives.",
    image: "/5r.avif",
    details: {
      facility: "5R Center",
      location: "5R Center Galaxy Circle Pal",
      zone: "West Zone",
      focusArea: [
        "Understanding Refuse, Reduce, Reuse, Recycle & Repair",
        "Role of 5R centers in waste reduction",
        "Consolidation of field learnings"
      ],
      authority: "Dr. Rikita Patel",
      observations: [
        "Community-level waste collection and sorting.",
        "Promotion of reusable and repairable goods.",
        "Awareness programs on reducing waste generation.",
        "Support for recycling ecosystem.",
        "Encouragement of sustainable consumption habits."
      ],
      learnings: [
        "5R principle promotes circular economy.",
        "Refusing unnecessary waste is the first step toward sustainability.",
        "Repair culture reduces landfill dependency.",
        "Swachh Bharat Mission now focuses on resource efficiency, not just cleanliness"
      ],
      images: [
        "/5r-center-1.jpg",
        "/5r-center-2.jpg",
        "/5r-center-3.jpg"
      ]
    }
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

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
                    className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col h-full"
                  >
                    <div className="h-48 bg-gray-800 relative overflow-hidden shrink-0">
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
                        <div className="w-full h-full bg-blue-900/20 flex items-center justify-center text-blue-500/30 font-bold text-4xl">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl opacity-50 mb-2">SMC</span>
                            <span className="text-sm opacity-50">Field Visit</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 flex-grow">{post.excerpt}</p>

                      {/* Check if post has details before showing open button */}
                      {post.details ? (
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors w-min whitespace-nowrap"
                        >
                          Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ) : (
                        <span className="inline-flex items-center text-gray-600 text-sm font-medium cursor-not-allowed">
                          Coming Soon
                        </span>
                      )}
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
            </p>
          </footer>
        </motion.div>
      )}

      {/* Blog Details Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-blue-500/10 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 hover:bg-gray-700/80 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    {selectedPost.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedPost.title}</h2>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {selectedPost.date}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {selectedPost.details && (
                  <>
                    {/* General Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-800">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                          <p className="text-gray-200">{selectedPost.details.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 shrink-0">
                          <User size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Authority</p>
                          <p className="text-gray-200">{selectedPost.details.authority}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 md:col-span-2">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                          <Target size={20} />
                        </div>
                        <div className="w-full">
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Focus Areas (Swachh Survekshan)</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedPost.details.focusArea.map((area, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Observations */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center text-blue-400">
                        <CheckCircle2 className="mr-3" /> Key Observations
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedPost.details.observations.map((obs, i) => (
                          <li key={i} className="flex items-start p-3 bg-gray-800/20 rounded-xl border border-gray-800/50 hover:bg-gray-800/40 transition-colors">
                            <span className="w-6 h-6 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold mr-3 shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-gray-300 leading-relaxed">{obs}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learnings */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center text-yellow-400">
                        <Lightbulb className="mr-3" /> What I Learned
                      </h3>
                      <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 p-6 rounded-2xl border border-yellow-500/10">
                        <ul className="space-y-3">
                          {selectedPost.details.learnings.map((learning, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-yellow-500 mr-2 mt-1.5">•</span>
                              <span className="text-gray-300 italic">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Gallery Section */}
                    {selectedPost.details.images && selectedPost.details.images.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-400">
                          <ImageIcon className="mr-3" /> Gallery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedPost.details.images.map((img, i) => (
                            <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-gray-800 group">
                              <Image
                                src={img}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {!selectedPost.details && (
                  <div className="text-center py-20 text-gray-500">
                    <p>Detailed report coming soon...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
