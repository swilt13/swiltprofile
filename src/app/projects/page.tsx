"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const analyticsProjects = [
  {
    title: "2026 Predictive Model",
    subtitle: "TJ Friedl · Colt Keith · Oneil Cruz",
    description: "A machine learning model that predicts 2026 stats and WAR using historical performance data.",
    tech: ["Python", "RandomForestRegressor", "Plotly", "Dash", "Render"],
    image: "/images/war.jpg",
    url: "https://war-model.onrender.com/",
  },
  {
    title: "2025 MiLB Hitters",
    subtitle: "Interactive Scatter Plot",
    description: "A unique way to filter and visualize MiLB hitting data — choose your own axes and hover metrics.",
    tech: ["Python", "Plotly", "Dash", "Render"],
    image: "/images/hitter.jpg",
    url: "https://milb-scatter.onrender.com/",
  },
  {
    title: "2025 MiLB Pitchers",
    subtitle: "Interactive Scatter Plot",
    description: "Explore pitching metrics across all MiLB levels with fully customizable visualization controls.",
    tech: ["Python", "Plotly", "Dash", "Render"],
    image: "/images/pitcher.jpg",
    url: "https://pitching-scatter.onrender.com/",
  },
];

const scoutingReports = [
  {
    name: "Liam Peterson",
    school: "University of Florida",
    desc: "A quick dive into the Gator standout.",
    photo: "/images/liampeterson.webp",
    logo: "/images/Florida_Gators_gator_logo.png",
    href: "/reports/liam-peterson",
    overall: 55,
  },
  {
    name: "Nathan Taylor",
    school: "University of Cincinnati",
    desc: "An in-depth analysis of the Bearcats ace.",
    photo: "/images/nathantaylor.jpeg",
    logo: "/images/Cincinnati_Bearcats_logo.png",
    href: "/reports/nathan-taylor",
    overall: 50,
  },
  {
    name: "Dax Whitney",
    school: "Oregon State University",
    desc: "An in-depth analysis of the Beavers standout.",
    photo: "/images/daxwhitney.webp",
    logo: "/images/Oregon_State_Beavers_logo.png",
    href: "/reports/dax-whitney",
    overall: 50,
  },
  {
    name: "Owen Kramkowski",
    school: "University of Arizona",
    desc: "An in-depth analysis of the Wildcat standout.",
    photo: "/images/owenkramkowski.webp",
    logo: "/images/arizona.svg",
    href: "/reports/owen-kramkowski",
    overall: 50,
  },
  {
    name: "Parker Messick",
    school: "Cleveland Guardians",
    desc: "An in-depth analysis of the Guardian standout.",
    photo: "/images/messick.jpeg",
    logo: "/images/guardians.png",
    href: "/reports/parker-messick",
    overall: 55,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function GradeChip({ value }: { value: number }) {
  const color =
    value >= 60
      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      : value >= 55
      ? "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30"
      : "bg-blue-500/20 text-blue-400 border-blue-500/30";
  return (
    <span className={`border text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>
      {value} OVR
    </span>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0f1a2e]">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-[#f59e0b]" />
            Portfolio
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-4">My Projects</h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            A mix of live analytics applications and in-depth player scouting reports —
            blending data with an eye for the game.
          </p>
        </motion.div>

        {/* Analytics Projects */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-7 bg-[#f59e0b] rounded-full" />
            Analytics &amp; Modeling
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {analyticsProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-[#2e3a52] shadow-xl cursor-pointer block"
                style={{ minHeight: 260 }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/70 to-[#0d1117]/30" />
                </div>
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end" style={{ minHeight: 260 }}>
                  <div className="mb-2">
                    <span className="text-xs text-[#f59e0b] font-medium uppercase tracking-wider">
                      Live App ↗
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm mb-3">{project.subtitle}</p>
                  <p className="text-[#cbd5e1] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/10 text-white/70 border border-white/10 rounded-md px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Scouting Reports */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-7 bg-blue-400 rounded-full" />
            Scouting Reports
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scoutingReports.map((player, i) => (
              <motion.div
                key={player.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6 }}
              >
                <Link
                  href={player.href}
                  className="group block glass rounded-2xl p-6 border border-[#2e3a52] hover:border-[#f59e0b]/40 transition-all duration-300 shadow-xl h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#2e3a52] group-hover:border-[#f59e0b]/50 transition-colors flex-shrink-0">
                      <Image
                        src={player.photo}
                        alt={player.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={player.logo}
                        alt={player.school}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                      {player.name}
                    </h3>
                    <GradeChip value={player.overall} />
                  </div>
                  <p className="text-[#f59e0b] text-xs font-medium mb-2">{player.school}</p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{player.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#f59e0b] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Report
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
