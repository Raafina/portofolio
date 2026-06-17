'use client';

import { useState } from 'react';

const experiences = [
  {
    company: 'Bank Jateng',
    position: 'Digital Core Development Analyst',
    date: 'May 2025 – Now',
    active: true,
    details: [],
  },
  {
    company: 'Manifestasi Tech',
    position: 'Frontend Developer',
    date: 'Mar 2025 – Now',
    active: true,
    details: [
      'Developing frontend for various projects, including research websites for university lecturers, marketplace platforms, and modern landing pages.',
      'Collaborating with cross-functional teams to translate UI/UX requirements into clean, scalable frontend components aligned with usability, accessibility, and performance best practices.',
    ],
  },
  {
    company: 'PT Golden Flower Tbk.',
    position: 'Head of Information Technology',
    date: 'Nov 2025 – Apr 2026',
    active: false,
    details: [
      'Supporting Bonded Zone (Kawasan Berikat) compliance by drafting, designing and maintaining IT infrastructure, including CCTV layouts mandated by customs regulations',
      'Architecting and deploying on-premise email infrastructure',
      'Developing and implementing a customized HRIS (Human Resource Information System)',
      'Executing full-cycle hardware setup and maintenance, including IT equipment procurement, ensuring all workstations and peripherals are optimized for peak operational performance.',
    ],
  },
  {
    company: 'Rapier Technology International',
    position: 'Frontend Developer',
    date: 'Feb 2025 – May 2025',
    acrive: false,
    details: [
      'Contributed to the development of Warehouse Management System (WMS) and Marketplace platforms for client/companies.',
      'Integrated 60+ RESTful API endpoints.',
      'Resolved 30+ development issues (bug and improvement).',
      'Presented project progress and key updates directly to clients and stakeholders.',
    ],
  },
  {
    company: 'Campus Digital Indonesia',
    position: 'Fullstack Web Developer',
    date: 'Sep 2024 – Des 2024',
    details: [
      'MBKM Kemdikbud Magang Bersertifikat batch 7th.',
      'Collaborate with stakeholders to analyze and define user requirements for the development of Customer Relationship Management (CRM).',
      'Develop backend systems and third party APIs to enhance functionality and process.',
      'Sliced the frontend based on designs provided by the UI/UX with responsive and user-friendly application.',
    ],
  },
  {
    company: 'Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah',
    position: 'Public Relation & IT Support',
    date: 'Jun 2024 – Jul 2024',
    details: [
      'Developing student intern registration website for final project assignment.',
      'Designed digital game aimed at educating the public about the "Cinta Rupiah" program.',
      "Managed and integrated data into Bank Indonesia's centralized system.",
      "Representation of Bank Indonesia's Public Relations to corporate and individuals regarding events organised.",
    ],
  },
  {
    company: 'Binar Academy',
    position: 'Fullstack Web Developer',
    date: 'Feb 2024 – Jun 2024',
    details: [
      'MBKM Kemdikbud Studi Independen Bersertifikat batch 6th.',
      'Worked on collaborative, real-world projects, utilizing technologies like Express.js and React.js to develop and deploy fullstack web applications.',
      'Developed a real-time chat app and an airplane ticket booking website.',
      'Awarded Best Final Capstone Fullstack Web Development Course MSIB batch 6.',
    ],
  },
  {
    company: 'Himpunan Mahasiswa Teknik Informatika Udinus',
    position: 'Pengurus Bidang Informasi dan Komunikasi',
    date: 'Apr 2022 – Mei 2024',
    details: [
      'Lead Content Creator Informatic Media. Coordinated a team of content creators to ensure smooth collaboration and alignment on objectives.',
      'Lead Event Hi-Talk series #4 HMTI Udinus x GDSC Udinus x Dicoding Indonesia.',
      'Actively contributed 6 national events and 2 internal events.',
      'Designed the website registration for the HMTI Workshop.',
      'Created and managed engaging social media feeds and stories for national days.',
    ],
  },
  {
    company: 'Badan Narkotika Nasional Tegal',
    position: 'Duta Anti Narkoba BNN Tegal',
    date: 'Okt 2019 – Jun 2022',
    details: [
      'Supported BNN Kota Tegal in providing educational programs on P4GN.',
      'Assisted in the declaration of "Desa Bersih Narkoba (Bersinar)" in Kota Tegal.',
      'Designed compelling graphics for events organized by Ikatan Duta Anti Narkoba BNN Kota Tegal.',
    ],
  },
];

interface ChevronProps {
  isOpen: boolean;
}

function ChevronDown({ isOpen }: ChevronProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="pt-16 md:pt-24 pb-16 md:pb-32 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
            Newest Experience
          </h2>
          <p className="text-secondary dark:text-slate-300">
            Gained valuable experience working on innovative projects, refining
            my design and development skills while collaborating with talented
            teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const isOpen = activeIndex === index;
            const isLast = index === experiences.length - 1;

            return (
              <div key={index} className="flex gap-4 md:gap-6">
                {/* Left: dot + connector */}
                <div className="flex flex-col items-center pt-5 shrink-0">
                  {/* Dot */}
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 ring-4 transition-colors duration-300 ${
                      exp.active
                        ? 'bg-emerald-500 ring-emerald-100 dark:ring-emerald-900'
                        : 'bg-slate-300 dark:bg-slate-600 ring-slate-100 dark:ring-slate-800'
                    }`}
                  />
                  {/* Connector line */}
                  {!isLast && (
                    <div className="w-px flex-1 mt-1 bg-slate-200 dark:bg-slate-700 min-h-4" />
                  )}
                </div>

                {/* Right: card */}
                <div className={`flex-1 pb-4 ${isLast ? '' : ''}`}>
                  <div
                    className={`
                      rounded-xl border-2 bg-white dark:bg-slate-900
                      shadow-sm transition-all duration-200
                      ${
                        isOpen
                          ? 'border-primary shadow-md'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }
                    `}>
                    {/* Card header — clickable */}
                    <button
                      className="w-full text-left px-4 py-4 md:px-6 md:py-5 flex items-start justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`exp-details-${index}`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="text-base md:text-lg font-bold text-dark dark:text-white leading-snug">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-sm italic text-secondary dark:text-slate-400 mb-2">
                          {exp.position}
                        </p>
                        <div className="flex items-center gap-1.5 text-secondary dark:text-slate-400">
                          <CalendarIcon />
                          <span className="text-xs">{exp.date}</span>
                        </div>
                      </div>
                      <span className="mt-1 text-slate-400 dark:text-slate-500 shrink-0">
                        <ChevronDown isOpen={isOpen} />
                      </span>
                    </button>

                    {/* Card details — accordion */}
                    <div
                      id={`exp-details-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px]' : 'max-h-0'
                      }`}>
                      <div className="px-4 pb-4 md:px-6 md:pb-5 pt-0 border-t border-slate-100 dark:border-slate-700/60">
                        <ul className="mt-3 space-y-1.5 list-disc list-outside pl-4">
                          {exp.details.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
