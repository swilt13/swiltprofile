"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workExperience = [
  {
    role: "Data Analyst Intern",
    company: "Triple Crown Sports",
    period: "February 2026 – August 2026",
    type: "work",
    bullets: [
      "Assist in creation and implementation of data tools for continued development, growth and efficiency of the College Consulting Division",
      "Collaborate with analytics department to oversee Transfer Portal Rankings data pipeline, execute and maintain data pipeline scripts ensuring data transfer into appropriate SQL tables",
      "Deliver reliable and accurate data infrastructure that enhances recruiting evaluation capabilities, supporting division growth and efficiency",
    ],
  },
  {
    role: "Video Scout",
    company: "Sports Info Solutions",
    period: "May 2025 – Sep 2025",
    type: "work",
    bullets: [
      "Scored and charted over 150 games across all levels (NCAA, A, A+, AA, AAA, MLB)",
      "Evaluated defensive plays and baserunning decisions, distinguishing between positive and negative outcomes",
      "Completed Scout School to strengthen player evaluation and talent assessment skills",
      "Attended company-led SQL classes to enhance data management and support scouting analysis",
    ],
  },
  {
    role: "Pitcher Timing Intern",
    company: "Inside Edge",
    period: "May 2024 – Oct 2024",
    type: "work",
    bullets: [
      "Provided data and insights to 23 MLB Clubs and ESPN/MLB Network to support advance scouting decisions",
      "Recorded data points on pitcher timing with runners on base at the MLB, Triple-A, and Double-A levels",
      "Delivered information that contributed to scouting reports and aided teams during a season that produced the highest MLB stolen base total since 1915",
    ],
  },
  {
    role: "Data Intern",
    company: "Milestone Business Solutions",
    period: "May 2024 – Aug 2024",
    type: "work",
    bullets: [
      "Centralized company data to improve organization-wide efficiency and inform future business growth strategies",
    ],
  },
];

const education = [
  {
    school: "Indiana University",
    location: "Bloomington, IN",
    degree: "MS, Information Systems",
    minor: "",
    gpa: "Starting August 2026",
  },
  {
    school: "Indiana University",
    location: "Bloomington, IN",
    degree: "BS, Informatics",
    minor: "Minor in Business",
    gpa: "3.7 GPA",
  },
];

const leadership = [
  {
    role: "Volunteer Partner",
    org: "Special Olympics Golf",
    period: "June 2025 – Present",
    desc: "Supported athletes with intellectual disabilities by assisting in skill development and encouraging participation.",
  },
  {
    role: "Team Captain — Varsity Baseball",
    org: "Guerin Catholic High School",
    period: "April 2018 – June 2021",
    desc: "Team Captain & Golden Eagle Award Winner for Leadership.",
  },
];

const skills = ["SQL", "Python", "HTML", "CSS", "JavaScript", "Plotly", "Dash", "Flask", "Data Analysis", "Player Evaluation", "Scouting Reports", "Git"];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof workExperience)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b] to-[#2e3a52]" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

      <div className="glass rounded-2xl p-6 border border-[#2e3a52] hover:border-[#f59e0b]/30 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <p className="text-[#f59e0b] font-medium">{item.company}</p>
          </div>
          <span className="text-sm text-[#94a3b8] bg-[#1a2035] border border-[#2e3a52] rounded-full px-3 py-1 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[#94a3b8] text-sm leading-relaxed">
              <span className="text-[#f59e0b] mt-1 flex-shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0f1a2e]">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#f59e0b] text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-[#f59e0b]" />
            Background
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-4">Experience</h1>
            </div>
            <a
              href="/documents/srw-resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#0d1117] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#f59e0b]/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-blue-400 rounded-full" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-[#2e3a52]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                    <p className="text-[#f59e0b] font-medium mt-0.5">
                      {edu.degree}{edu.minor ? ` · ${edu.minor}` : ""}
                    </p>
                    <p className="text-[#94a3b8] text-sm mt-1">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-lg font-extrabold gradient-text">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience */}
        <section className="mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-7 bg-[#f59e0b] rounded-full" />
            Work Experience
          </motion.h2>
          <div>
            {workExperience.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-emerald-400 rounded-full" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="px-4 py-2 glass border border-[#2e3a52] rounded-lg text-sm text-[#e2e8f0] font-medium hover:border-[#f59e0b]/40 hover:text-[#f59e0b] transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-purple-400 rounded-full" />
            Leadership &amp; Involvement
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 border border-[#2e3a52] hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base leading-tight">{item.role}</h3>
                  <span className="text-xs text-[#94a3b8] whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-purple-400 text-sm font-medium mb-2">{item.org}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
