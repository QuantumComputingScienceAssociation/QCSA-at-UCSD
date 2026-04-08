"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainWebsiteFooter from "../Components/mainWebsiteFooter";
import MainWebsiteHeader from "../Components/mainWebsiteHeader";

// TODO: Replace all course lists below with verified UCSD QCSA quantum-relevant courses

const COURSES = [
	"TODO: Add UCSD Quantum Mechanics course 1",
	"TODO: Add UCSD Quantum Mechanics course 2",
	"TODO: Add UCSD Quantum Mechanics course 3",
];

const Quantum_Information_Theory_COURSES = [
	"TODO: Add UCSD Quantum Information Theory course 1",
	"TODO: Add UCSD Quantum Information Theory course 2",
];

const AMO_COURSES = [
	"TODO: Add UCSD AMO Physics / Quantum Optics course 1",
	"TODO: Add UCSD AMO Physics / Quantum Optics course 2",
];

const SOLID_STATE_COURSES = [
	"TODO: Add UCSD Solid State Physics course 1",
	"TODO: Add UCSD Solid State Physics course 2",
];

const DEVICE_COURSES = [
	"TODO: Add UCSD Quantum Devices / Engineering course 1",
	"TODO: Add UCSD Quantum Devices / Engineering course 2",
];

// TODO: Add real course descriptions keyed by the course names above
const DESCRIPTIONS: Record<string, string> = {};

export default function QuantumClassesPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="min-h-screen bg-[#FDFAF4] flex flex-col font-kantumruy ">
			<MainWebsiteHeader/>
			<main className="w-full max-w-6xl mx-auto px-6 py-16">
				<motion.h1 
					className="text-center text-3xl sm:text-4xl font-bold text-[#003E74] mb-8 font-kantumruy"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Quantum Classes at UC San Diego (TODO: Update with real quantum-related class names)
				</motion.h1>

				<motion.section 
					className="bg-white rounded-lg shadow-[0_0_40px_rgba(99,179,255,0.20)] mt-24 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
				>
					<div className="md:col-span-2">
						<h3 className="text-3xl text-[#003E74] font-bold mb-6 ">Quantum Mechanics</h3>

						<div className="divide-y">
							{COURSES.map((c, i) => {
								const open = openIndex === i;
								return (
									<div key={c} className="py-3">
										<button
											onClick={() => setOpenIndex(open ? null : i)}
											className="w-full flex items-center justify-between text-left space-x-4"
											aria-expanded={open}
											aria-controls={`course-content-${i}`}
											aria-label={`Toggle ${c} course details`}
										>
											<span className="text-lg text-gray-800">{c}</span>
											<svg
												className={`w-5 h-5 text-gray-700 transform transition-transform duration-150 ${open ? "rotate-180" : ""}`}
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										{open && (
											<div className="mt-3 text-sm text-gray-600 pl-2 font-kantumruy" id={`course-content-${i}`}>
												{DESCRIPTIONS[c] ? (
													<div dangerouslySetInnerHTML={{ __html: DESCRIPTIONS[c] }} />
												) : (
													<>Placeholder information about {c}. You can replace this with instructors, quarter, or notes.</>
												)}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Right gradient card with avatar */}
					<aside className="flex items-center justify-center relative pointer-events-none">
                        <div className="w-full h-full flex items-start justify-center relative">
							{/* Background aura image */}
							<div className="absolute inset-0 flex items-center justify-center opacity-100">
								<Image 
									src="/images/quantum_aura.png" 
									alt="quantum aura background" 
									width={600} 
									height={400} 
									className="object-contain max-w-none" 
								/>
							</div>
							{/* Foreground atom image */}
	                        <div className="-mt-2 relative">
								<Image 
									src="/images/quantum_atom.png" 
									alt="quantum atom" 
									width={400} 
									height={200} 
									className="object-contain max-w-none" 
								/>
							</div>
						</div>
									
					</aside>
				</motion.section>

					{/* Quantum Information Theory */}
					<motion.section 
						className="bg-white rounded-lg shadow-[0_0_40px_rgba(99,179,255,0.20)] mt-24 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
					>
						<div className="md:col-span-2">
							<h3 className="text-3xl text-[#003E74] font-bold mb-6 ">Quantum Information Theory</h3>

							<div className="divide-y">
								{Quantum_Information_Theory_COURSES.map((c, i) => {
									const idx = COURSES.length + i; // offset so indices stay unique
									const open = openIndex === idx;
									return (
										<div key={c} className="py-3">
											<button
												onClick={() => setOpenIndex(open ? null : idx)}
												className="w-full flex items-center justify-between text-left space-x-4"
												aria-expanded={open}
												aria-controls={`course-content-${idx}`}
												aria-label={`Toggle ${c} course details`}
											>
												<span className="text-lg text-gray-800">{c}</span>
												<svg
													className={`w-5 h-5 text-gray-700 transform transition-transform duration-150 ${open ? "rotate-180" : ""}`}
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>

											{open && (
												<div className="mt-3 text-sm text-gray-600 pl-2" id={`course-content-${idx}`}>
													{DESCRIPTIONS[c] ? (
														<div dangerouslySetInnerHTML={{ __html: DESCRIPTIONS[c] }} />
													) : (
														<>Placeholder information about {c}. You can replace this with instructors, quarter, or notes.</>
													)}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>

						{/* Right gradient card with avatar */}
					<aside className="flex items-center justify-center relative pointer-events-none">
                        <div className="w-full h-full flex items-start justify-center relative">
							{/* Background aura image */}
							<div className="absolute inset-0 flex items-center justify-center opacity-100">
								<Image 
									src="/images/quantum_aura.png" 
									alt="quantum aura background" 
									width={600} 
									height={400} 
									className="object-contain max-w-none" 
								/>
							</div>
							{/* Foreground atom image */}
	                        <div className="-mt-2 relative">
								<Image 
									src="/images/orbital.png" 
									alt="quantum atom" 
									width={350} 
									height={300} 
									className="object-contain max-w-none" 
								/>
							</div>
						</div>
									
					</aside>
					</motion.section>

					{/* AMO Physics / Quantum Optics */}
					<motion.section 
						className="bg-white rounded-lg shadow-[0_0_40px_rgba(99,179,255,0.20)] mt-24 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
					>
						<div className="md:col-span-2">
							<h3 className="text-3xl text-[#003E74] font-bold mb-6 ">AMO Physics / Quantum Optics</h3>

							<div className="divide-y">
								{AMO_COURSES.map((c, i) => {
									const idx = COURSES.length + Quantum_Information_Theory_COURSES.length + i;
									const open = openIndex === idx;
									return (
										<div key={c} className="py-3">
											<button
												onClick={() => setOpenIndex(open ? null : idx)}
												className="w-full flex items-center justify-between text-left space-x-4"
												aria-expanded={open}
												aria-controls={`course-content-${idx}`}
												aria-label={`Toggle ${c} course details`}
											>
												<span className="text-lg text-gray-800">{c}</span>
												<svg
													className={`w-5 h-5 text-gray-700 transform transition-transform duration-150 ${open ? "rotate-180" : ""}`}
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>

											{open && (
												<div className="mt-3 text-sm text-gray-600 pl-2" id={`course-content-${idx}`}>
													{DESCRIPTIONS[c] ? (
														<div dangerouslySetInnerHTML={{ __html: DESCRIPTIONS[c] }} />
													) : (
														<>Placeholder information about {c}. You can replace this with instructors, quarter, or notes.</>
													)}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>

							{/* Right gradient card with avatar */}
					<aside className="flex items-center justify-center relative pointer-events-none">
                        <div className="w-full h-full flex items-start justify-center relative">
							{/* Background aura image */}
							<div className="absolute inset-0 flex items-center justify-center opacity-100">
								<Image 
									src="/images/quantum_aura.png" 
									alt="quantum aura background" 
									width={600} 
									height={400} 
									className="object-contain max-w-none" 
								/>
							</div>
							{/* Foreground atom image */}
	                        <div className="-mt-2 relative">
								<Image 
									src="/images/random_waves.png" 
									alt="quantum atom" 
									width={350} 
									height={300} 
									className="object-contain max-w-none" 
								/>
							</div>
						</div>
									
					</aside>
					</motion.section>

				{/* Solid State Physics */}
				<motion.section 
					className="bg-white rounded-lg shadow-[0_0_40px_rgba(99,179,255,0.20)] mt-24 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
				>
					<div className="md:col-span-2">
						<h3 className="text-3xl text-[#003E74] font-bold mb-6 ">Solid State Physics</h3>

						<div className="divide-y">
							{SOLID_STATE_COURSES.map((c, i) => {
								const idx = COURSES.length + Quantum_Information_Theory_COURSES.length + AMO_COURSES.length + i;
								const open = openIndex === idx;
								return (
									<div key={c} className="py-3">
										<button
											onClick={() => setOpenIndex(open ? null : idx)}
											className="w-full flex items-center justify-between text-left space-x-4"
											aria-expanded={open}
											aria-controls={`course-content-${idx}`}
											aria-label={`Toggle ${c} course details`}
										>
											<span className="text-lg text-gray-800">{c}</span>
											<svg
												className={`w-5 h-5 text-gray-700 transform transition-transform duration-150 ${open ? "rotate-180" : ""}`}
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										{open && (
											<div className="mt-3 text-sm text-gray-600 pl-2" id={`course-content-${idx}`}>
												{DESCRIPTIONS[c] ? (
													<div dangerouslySetInnerHTML={{ __html: DESCRIPTIONS[c] }} />
												) : (
													<>Placeholder information about {c}. You can replace this with instructors, quarter, or notes.</>
												)}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

						{/* Right gradient card with avatar */}
					<aside className="flex items-center justify-center relative pointer-events-none">
                        <div className="w-full h-full flex items-start justify-center relative">
							{/* Background aura image */}
							<div className="absolute inset-0 flex items-center justify-center opacity-100">
								<Image 
									src="/images/quantum_aura.png" 
									alt="quantum aura background" 
									width={600} 
									height={400} 
									className="object-contain max-w-none" 
								/>
							</div>
							{/* Foreground atom image */}
	                        <div className="-mt-2 relative">
								<Image 
									src="/images/crystals.png" 
									alt="quantum atom" 
									width={350} 
									height={300} 
									className="object-contain max-w-none" 
								/>
							</div>
						</div>
									
					</aside>
				</motion.section>

				{/* Device Design and Fabrication */}
				<motion.section 
					className="bg-white rounded-lg shadow-[0_0_40px_rgba(99,179,255,0.20)] mt-24 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0, duration: 0.6 }}
					whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
				>
					<div className="md:col-span-2">
						<h3 className="text-3xl text-[#003E74] font-bold mb-6 ">Device Design and Fabrication</h3>

						<div className="divide-y">
							{DEVICE_COURSES.map((c, i) => {
								const idx = COURSES.length + Quantum_Information_Theory_COURSES.length + AMO_COURSES.length + SOLID_STATE_COURSES.length + i;
								const open = openIndex === idx;
								return (
									<div key={c} className="py-3">
										<button
											onClick={() => setOpenIndex(open ? null : idx)}
											className="w-full flex items-center justify-between text-left space-x-4"
											aria-expanded={open}
											aria-controls={`course-content-${idx}`}
											aria-label={`Toggle ${c} course details`}
										>
											<span className="text-lg text-gray-800">{c}</span>
											<svg
												className={`w-5 h-5 text-gray-700 transform transition-transform duration-150 ${open ? "rotate-180" : ""}`}
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										{open && (
											<div className="mt-3 text-sm text-gray-600 pl-2" id={`course-content-${idx}`}>
												{DESCRIPTIONS[c] ? (
													<div dangerouslySetInnerHTML={{ __html: DESCRIPTIONS[c] }} />
												) : (
													<>Placeholder information about {c}. You can replace this with instructors, quarter, or notes.</>
												)}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

						{/* Right gradient card with avatar */}
					<aside className="flex items-center justify-center relative pointer-events-none">
                        <div className="w-full h-full flex items-start justify-center relative">
							{/* Background aura image */}
							<div className="absolute inset-0 flex items-center justify-center opacity-100">
								<Image 
									src="/images/quantum_aura.png" 
									alt="quantum aura background" 
									width={600} 
									height={400} 
									className="object-contain max-w-none" 
								/>
							</div>
							{/* Foreground atom image */}
	                        <div className="-mt-2 relative">
								<Image 
									src="/images/quantum_chip.png" 
									alt="quantum atom" 
									width={350} 
									height={200} 
									className="object-contain max-w-none" 
								/>
							</div>
						</div>
									
					</aside>
				</motion.section>

                            
			</main>

			<MainWebsiteFooter />
		</div>
	);
}