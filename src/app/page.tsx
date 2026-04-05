"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0d1117] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-[#f59e0b] text-sm font-medium tracking-widest uppercase mb-5">
                <span className="w-8 h-px bg-[#f59e0b]" />
                Data Analytics &amp; Technology
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-white leading-none tracking-tight mb-6"
            >
              Spencer<br />
              <span className="gradient-text">Wilt</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#94a3b8] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Software developer and data analyst with a passion for building tools
              that turn complex data into clear insights. Pursuing an MS in Information
              Systems at Indiana University, with a specialty in baseball analytics
              and a track record of delivering data pipelines, web applications, and
              scouting infrastructure for professional sports organizations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#0d1117] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#f59e0b]/25 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="/experience"
                className="px-6 py-3 border border-[#2e3a52] hover:border-[#f59e0b]/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-[#1a2035] hover:-translate-y-0.5"
              >
                Experience
              </Link>
              <a
                href="/documents/srw-resume.pdf"
                download
                className="px-6 py-3 border border-[#2e3a52] hover:border-[#60a5fa]/50 text-[#94a3b8] hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-[#1a2035] hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <a
                href="https://www.linkedin.com/in/spencerwilt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/30 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M10.666 13.333H13.333V22.667H10.666V13.333ZM12 11.333C12.7364 11.333 13.333 10.7364 13.333 10C13.333 9.2636 12.7364 8.66699 12 8.66699C11.2636 8.66699 10.667 9.2636 10.667 10C10.667 10.7364 11.2636 11.333 12 11.333ZM15.333 13.333H18V14.667H18.04C18.4267 13.96 19.2933 13.2133 20.4933 13.2133C23.04 13.2133 23.3333 14.8133 23.3333 16.64V22.6667H20.6667V17.3333C20.6667 16.2933 20.64 14.96 19.2267 14.96C17.7867 14.96 17.6 16.08 17.6 17.2533V22.6667H15.3333V13.3333H15.333Z" fill="white"/>
                </svg>
              </a>
              <a
                href="https://github.com/swilt13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-[#181717] border border-[#2e3a52] flex items-center justify-center hover:scale-110 hover:shadow-lg hover:border-[#f59e0b]/30 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M16 8C11.58 8 8 11.58 8 16C8 19.31 10.29 21.98 13.47 22.82C13.89 22.89 14.03 22.64 14.03 22.43C14.03 22.25 14.02 21.81 14.02 21.22C11.73 21.7 11.14 20.34 11.14 20.34C10.77 19.41 10.23 19.18 10.23 19.18C9.45 18.68 10.29 18.69 10.29 18.69C11.15 18.76 11.6 19.59 11.6 19.59C12.37 20.89 13.62 20.53 14.09 20.32C14.16 19.79 14.37 19.43 14.61 19.22C12.84 19.01 10.97 18.3 10.97 15.64C10.97 14.87 11.25 14.25 11.72 13.76C11.64 13.55 11.39 12.77 11.8 11.74C11.8 11.74 12.47 11.52 14.01 12.42C14.65 12.24 15.35 12.15 16.05 12.15C16.75 12.15 17.45 12.24 18.09 12.42C19.53 11.52 20.2 11.74 20.2 11.74C20.61 12.77 20.36 13.55 20.28 13.76C20.75 14.25 21.03 14.87 21.03 15.64C21.03 18.31 19.16 19.01 17.39 19.22C17.7 19.48 17.97 20.01 17.97 20.81C17.97 21.89 17.96 22.21 17.96 22.43C17.96 22.64 18.1 22.9 18.53 22.82C21.71 21.98 24 19.31 24 16C24 11.58 20.42 8 16 8Z" fill="white"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-[380px] h-[500px]">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#f59e0b]/25 to-blue-500/10 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#f59e0b]/15 shadow-2xl">
                <Image
                  src="/images/SRW IU 2022.jpeg"
                  alt="Spencer Wilt"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1117]/60 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
