"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge"; // tumhara cva wala Badge component

// Tumhara custom experience data
const experiencesData = [
  {
    company: "Tech Company",
    title: "Frontend Developer",
    period: "Jan 2023 - Present",
    description:
      "Building responsive UIs using React, Next.js, and TailwindCSS. Worked on multiple client projects.",
    technologies: ["React", "Next.js", "TailwindCSS", "JavaScript"],
  },
  {
    company: "Startup Inc.",
    title: "Web Developer Intern",
    period: "Jun 2022 - Dec 2022",
    description:
      "Assisted in developing websites and dashboards with modern frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    company: "Freelance Projects",
    title: "Fullstack Developer",
    period: "Mar 2021 - May 2022",
    description:
      "Worked on multiple client websites, implementing responsive designs and dynamic features using React and TailwindCSS.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="my-16 scroll-mt-20 px-4 md:px-0">
      <h2 className="mb-10 text-3xl font-bold text-center">Experience</h2>

      <div className="relative max-w-2xl mx-auto">
        {experiencesData.map((data, index) => (
          <div
            key={index}
            className="relative pl-8 pb-12 [&:not(:last-child)]:pb-16"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-2.5 h-full w-[2px] bg-gray-300">
              <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />
            </div>

            {/* Card animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border bg-gray-100">
                  🏢
                </div>
                <span className="text-lg font-semibold">{data.company}</span>
              </div>

              <div>
                <h3 className="text-xl font-medium">{data.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  📅 {data.period}
                </p>
              </div>

              <p className="text-gray-600">{data.description}</p>

              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" size="lg">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
