"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface PitchGrade {
  pitch: string;
  grade: number;
}

export interface StatRow {
  year: string;
  era: string;
  ip: string;
  soPercent: string;
  bbPercent: string;
}

export interface ScoutingReportProps {
  name: string;
  affiliation: string;
  affiliationLabel?: string;
  bio: string;
  dob: string;
  photo: string;
  logo: string;
  grades: PitchGrade[];
  overall: number;
  analysis: string[];
  statsLabel?: string;
  stats: StatRow[];
  mechanics: string[];
  arsenal: string[];
  finalThoughts?: string[];
}

function GradeBar({ pitch, grade, index }: { pitch: string; grade: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const color =
    grade >= 60
      ? "from-emerald-500 to-emerald-400"
      : grade >= 55
      ? "from-[#f59e0b] to-[#fcd34d]"
      : grade >= 50
      ? "from-blue-500 to-blue-400"
      : "from-slate-500 to-slate-400";

  const pct = ((grade - 20) / 60) * 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="flex items-center gap-4"
    >
      <span className="text-[#94a3b8] text-sm w-40 flex-shrink-0">{pitch}</span>
      <div className="flex-1 bg-[#1a2035] rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ delay: index * 0.07 + 0.2, duration: 0.7, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
      <span className="text-white font-bold text-sm w-8 text-right">{grade}</span>
    </motion.div>
  );
}

export default function ScoutingReport({
  name,
  affiliation,
  affiliationLabel = "Team",
  bio,
  dob,
  photo,
  logo,
  grades,
  overall,
  analysis,
  statsLabel = "College Career",
  stats,
  mechanics,
  arsenal,
  finalThoughts,
}: ScoutingReportProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0f1a2e]">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#f59e0b] text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Player Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-[#2e3a52] p-8 mb-10"
        >
          <div className="flex flex-wrap gap-6 items-start">
            {/* Photo */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#f59e0b]/40 flex-shrink-0">
              <Image src={photo} alt={name} fill className="object-cover object-top" />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-3xl font-extrabold text-white">{name}</h1>
                <div className="relative w-10 h-10">
                  <Image src={logo} alt={affiliation} fill className="object-contain" />
                </div>
              </div>
              <p className="text-[#f59e0b] font-medium mb-3">{affiliation}</p>
              <div className="flex flex-wrap gap-4 text-sm text-[#94a3b8]">
                <span><span className="text-white font-medium">{affiliationLabel}:</span> {affiliation}</span>
                <span><span className="text-white font-medium">Bio:</span> {bio}</span>
                <span><span className="text-white font-medium">DOB:</span> {dob}</span>
                <span><span className="text-white font-medium">Evaluated by:</span> Spencer Wilt</span>
              </div>
            </div>
            {/* Overall grade */}
            <div className="text-center flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 border border-[#f59e0b]/30 flex items-center justify-center">
                <span className="text-2xl font-extrabold text-[#f59e0b]">{overall}</span>
              </div>
              <p className="text-xs text-[#94a3b8] mt-1">Overall</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Skill Grades */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass rounded-2xl border border-[#2e3a52] p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-[#f59e0b] rounded-full" />
              Skill Grades
            </h2>
            <div className="space-y-4">
              {grades.map((g, i) => (
                <GradeBar key={g.pitch} pitch={g.pitch} grade={g.grade} index={i} />
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass rounded-2xl border border-[#2e3a52] p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-blue-400 rounded-full" />
              {statsLabel}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2e3a52]">
                    {["Year", "ERA", "IP", "SO%", "BB%"].map((h) => (
                      <th key={h} className="text-left text-[#94a3b8] font-semibold pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stats.map((row, i) => (
                    <tr key={i} className="border-b border-[#1a2035] last:border-0">
                      <td className="py-3 pr-4 text-[#f59e0b] font-medium">{row.year}</td>
                      <td className="py-3 pr-4 text-white">{row.era}</td>
                      <td className="py-3 pr-4 text-white">{row.ip}</td>
                      <td className="py-3 pr-4 text-white">{row.soPercent}</td>
                      <td className="py-3 text-white">{row.bbPercent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>

        {/* Analysis */}
        <Section title="Analysis" color="bg-emerald-400" delay={0.35}>
          {analysis.map((p, i) => (
            <p key={i} className="text-[#94a3b8] leading-relaxed">{p}</p>
          ))}
        </Section>

        {/* Mechanics */}
        <Section title="Pitching Mechanics" color="bg-purple-400" delay={0.4}>
          {mechanics.map((p, i) => (
            <p key={i} className="text-[#94a3b8] leading-relaxed">{p}</p>
          ))}
        </Section>

        {/* Arsenal */}
        <Section title="Arsenal" color="bg-blue-400" delay={0.45}>
          {arsenal.map((p, i) => (
            <p key={i} className="text-[#94a3b8] leading-relaxed">{p}</p>
          ))}
        </Section>

        {/* Final Thoughts */}
        {finalThoughts && finalThoughts.length > 0 && (
          <Section title="Final Thoughts" color="bg-[#f59e0b]" delay={0.5}>
            {finalThoughts.map((p, i) => (
              <p key={i} className="text-[#94a3b8] leading-relaxed">{p}</p>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  color,
  delay,
  children,
}: {
  title: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="glass rounded-2xl border border-[#2e3a52] p-6 mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <span className={`w-1 h-6 ${color} rounded-full`} />
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </motion.section>
  );
}
