'use client';

import { useState } from 'react';
import Image from 'next/image';
import TechStackBadge from '../ui/techstack-badge';
import ProjectModal from '../ui/project-modal';

const basePath = process.env.NODE_ENV === 'production' ? '/portofolio' : '';

interface DetailImage {
  src: string;
  alt: string;
}

interface ProjectLink {
  type: string;
  url: string;
  icon: 'github' | 'demo';
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links: ProjectLink[];
  detailImages: DetailImage[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Event Management System 'Temutix'",
    description:
      'TemuTix is an online ticket booking platform that makes it easy to discover and purchase tickets for concerts, festivals, and various events. It offers a seamless user experience with digital tickets, secure payments, and real-time event info.',
    image: `${basePath}/images/project/temutix/1.png`,
    techStack: [
      'Next JS',
      'React JS',
      'Express JS',
      'TypeScript',
      'MongoDB',
      'Cloudinary',
    ],
    links: [
      {
        type: 'backend',
        url: 'https://github.com/Raafina/Temutix-BE',
        icon: 'github',
      },
      {
        type: 'frontend',
        url: 'https://github.com/Raafina/Temutix-FE',
        icon: 'github',
      },
      { type: 'demo', url: 'https://temutix.vercel.app/', icon: 'demo' },
    ],
    detailImages: [
      { src: `${basePath}/images/project/temutix/1.png`, alt: 'TemuTix 1' },
      { src: `${basePath}/images/project/temutix/2.png`, alt: 'TemuTix 2' },
      { src: `${basePath}/images/project/temutix/3.png`, alt: 'TemuTix 3' },
      { src: `${basePath}/images/project/temutix/4.png`, alt: 'TemuTix 4' },
      { src: `${basePath}/images/project/temutix/5.png`, alt: 'TemuTix 5' },
      { src: `${basePath}/images/project/temutix/6.png`, alt: 'TemuTix 6' },
      { src: `${basePath}/images/project/temutix/7.png`, alt: 'TemuTix 7' },
    ],
  },
  {
    id: 2,
    title: 'Jamur Cikuda Nusantara',
    description:
      'A landing page and simple e-commerce site for a mushroom-based product brand. Presents product information, highlights the brand, and allows users to browse and purchase through a clean, user-friendly interface.',
    image: `${basePath}/images/project/jamurcikuda/1.png`,
    techStack: ['Next JS', 'React JS', 'Zustand', 'TypeScript'],
    links: [{ type: 'demo', url: 'https://jamurcikuda.co.id/', icon: 'demo' }],
    detailImages: [
      {
        src: `${basePath}/images/project/jamurcikuda/1.png`,
        alt: 'Jamur Cikuda 1',
      },
      {
        src: `${basePath}/images/project/jamurcikuda/2.png`,
        alt: 'Jamur Cikuda 2',
      },
      {
        src: `${basePath}/images/project/jamurcikuda/3.png`,
        alt: 'Jamur Cikuda 3',
      },
      {
        src: `${basePath}/images/project/jamurcikuda/4.png`,
        alt: 'Jamur Cikuda 4',
      },
      {
        src: `${basePath}/images/project/jamurcikuda/5.png`,
        alt: 'Jamur Cikuda 5',
      },
      {
        src: `${basePath}/images/project/jamurcikuda/6.png`,
        alt: 'Jamur Cikuda 6',
      },
    ],
  },
  {
    id: 3,
    title: "Polyclinic Management System 'Sora Clinic'",
    description:
      'A web-based polyclinic management system for patient queue handling and doctor scheduling. Designed for administrators, doctors, and patients with an intuitive interface.',
    image: `${basePath}/images/project/soraClinic/1.png`,
    techStack: ['Laravel', 'Tailwind', 'Flowbite Plugin', 'MySQL'],
    links: [
      {
        type: 'repository',
        url: 'https://github.com/Raafina/Sora-Clinic',
        icon: 'github',
      },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/soraClinic/1.png`,
        alt: 'Sora Clinic Dashboard',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_1.png`,
        alt: 'Doctor view 1',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_3.png`,
        alt: 'Doctor view 3',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_4.png`,
        alt: 'Doctor view 4',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_6.png`,
        alt: 'Doctor view 6',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_7.png`,
        alt: 'Doctor view 7',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_1.png`,
        alt: 'Patient view 1',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_2.png`,
        alt: 'Patient view 2',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_3.png`,
        alt: 'Patient view 3',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_4.png`,
        alt: 'Patient view 4',
      },
    ],
  },
  {
    id: 4,
    title: "School Data Management 'Sekonekti'",
    description:
      'A school management system centralizing data for students, parents, teachers, and classes. Includes summary and reporting features for structured data management.',
    image: `${basePath}/images/project/sekonekti/1.png`,
    techStack: [
      'Laravel',
      'Tailwind',
      'TypeScript',
      'Inertia',
      'React JS',
      'MySQL',
    ],
    links: [
      {
        type: 'repository',
        url: 'https://github.com/Raafina/Sekonekti',
        icon: 'github',
      },
    ],
    detailImages: [
      { src: `${basePath}/images/project/sekonekti/1.png`, alt: 'Sekonekti 1' },
      { src: `${basePath}/images/project/sekonekti/2.png`, alt: 'Sekonekti 2' },
      { src: `${basePath}/images/project/sekonekti/3.png`, alt: 'Sekonekti 3' },
      { src: `${basePath}/images/project/sekonekti/4.png`, alt: 'Sekonekti 4' },
      { src: `${basePath}/images/project/sekonekti/5.png`, alt: 'Sekonekti 5' },
      { src: `${basePath}/images/project/sekonekti/6.png`, alt: 'Sekonekti 6' },
      { src: `${basePath}/images/project/sekonekti/7.png`, alt: 'Sekonekti 7' },
      { src: `${basePath}/images/project/sekonekti/8.png`, alt: 'Sekonekti 8' },
    ],
  },
  {
    id: 5,
    title: 'NSMHC Research Dashboard — UNDIP',
    description:
      'Dashboard for the Nursing Students Mother Heart Connection (NSMHC) research project at Jurusan Keperawatan Fakultas Kedokteran UNDIP.',
    image: `${basePath}/images/project/nsmhc/1.png`,
    techStack: [
      'Next JS',
      'React JS',
      'TanStack Query',
      'Tailwind',
      'TypeScript',
    ],
    links: [
      {
        type: 'frontend',
        url: 'https://github.com/Raafina/NSMHC-UNDIP-Dashboard',
        icon: 'github',
      },
      {
        type: 'demo',
        url: 'https://nsmhc-undip-dashboard.vercel.app/',
        icon: 'demo',
      },
    ],
    detailImages: [
      { src: `${basePath}/images/project/nsmhc/1.png`, alt: 'NSMHC 1' },
      { src: `${basePath}/images/project/nsmhc/2.png`, alt: 'NSMHC 2' },
      { src: `${basePath}/images/project/nsmhc/3.png`, alt: 'NSMHC 3' },
    ],
  },
  {
    id: 6,
    title: 'Automated Selection System — Bank Indonesia',
    description:
      'A decision support system for internship applicant selection using the MOORA method. Automates ranking based on weighted criteria for fair and efficient candidate evaluation.',
    image: `${basePath}/images/project/bi/1.png`,
    techStack: ['React JS', 'Express JS', 'Redux', 'Tailwind'],
    links: [
      {
        type: 'backend',
        url: 'https://github.com/Raafina/Final-Project-Intern-BI-BE',
        icon: 'github',
      },
      {
        type: 'frontend',
        url: 'https://github.com/Raafina/Final-Project-Intern-BI-FE',
        icon: 'github',
      },
    ],
    detailImages: [
      { src: `${basePath}/images/project/bi/1.png`, alt: 'BI 1' },
      { src: `${basePath}/images/project/bi/2.png`, alt: 'BI 2' },
      { src: `${basePath}/images/project/bi/3.png`, alt: 'BI 3' },
      { src: `${basePath}/images/project/bi/4.png`, alt: 'BI 4' },
      { src: `${basePath}/images/project/bi/5.png`, alt: 'BI 5' },
      { src: `${basePath}/images/project/bi/6.png`, alt: 'BI 6' },
    ],
  },
  {
    id: 7,
    title: "Customer Relationship Management 'LoyalCust'",
    description:
      'A web-based CRM platform focused on managing customer and sales databases to help small businesses (UMKM) grow.',
    image: `${basePath}/images/project/loyalcust/1.png`,
    techStack: [
      'Laravel',
      'Cloudinary',
      'Next JS',
      'React JS',
      'Redux',
      'Tailwind',
      'TypeScript',
      'PostgreSQL',
    ],
    links: [
      {
        type: 'backend',
        url: 'https://github.com/galaxy7891/CRM-Backend',
        icon: 'github',
      },
      {
        type: 'frontend',
        url: 'https://github.com/galaxy7891/CRM-Frontend',
        icon: 'github',
      },
      { type: 'demo', url: 'https://loyalcust.vercel.app/', icon: 'demo' },
    ],
    detailImages: [
      { src: `${basePath}/images/project/loyalcust/1.png`, alt: 'Loyalcust 1' },
      { src: `${basePath}/images/project/loyalcust/2.png`, alt: 'Loyalcust 2' },
      { src: `${basePath}/images/project/loyalcust/3.png`, alt: 'Loyalcust 3' },
      { src: `${basePath}/images/project/loyalcust/4.png`, alt: 'Loyalcust 4' },
      { src: `${basePath}/images/project/loyalcust/5.png`, alt: 'Loyalcust 5' },
      { src: `${basePath}/images/project/loyalcust/6.png`, alt: 'Loyalcust 6' },
      { src: `${basePath}/images/project/loyalcust/7.png`, alt: 'Loyalcust 7' },
      { src: `${basePath}/images/project/loyalcust/8.png`, alt: 'Loyalcust 8' },
      { src: `${basePath}/images/project/loyalcust/9.png`, alt: 'Loyalcust 9' },
      {
        src: `${basePath}/images/project/loyalcust/10.png`,
        alt: 'Loyalcust 10',
      },
    ],
  },
  {
    id: 8,
    title: "Airplane Ticket Booking Website 'TerbangIn'",
    description:
      'An airline ticket booking platform for searching flight schedules, selecting seats, and completing online payment.',
    image: `${basePath}/images/project/terbangin.png`,
    techStack: ['React JS', 'Express JS', 'PostgreSQL', 'Redux'],
    links: [
      {
        type: 'backend',
        url: 'https://github.com/blackjac7/km6-final-terbangin-backend',
        icon: 'github',
      },
      {
        type: 'frontend',
        url: 'https://github.com/blackjac7/km6-final-terbangin-frontend',
        icon: 'github',
      },
      { type: 'demo', url: 'https://terbangin.projects.codes/', icon: 'demo' },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/terbangin.png`,
        alt: 'TerbangIn Homepage',
      },
    ],
  },
  {
    id: 9,
    title: "Artesian Water Payment Management 'Sitoya'",
    description:
      'A payment management system for artesian water services in Desa Salam Kerep, Kota Semarang.',
    image: `${basePath}/images/project/sitoya/1.png`,
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    links: [
      {
        type: 'repository',
        url: 'https://github.com/Raafina/Sitoya',
        icon: 'github',
      },
    ],
    detailImages: [
      { src: `${basePath}/images/project/sitoya/1.png`, alt: 'Sitoya 1' },
      { src: `${basePath}/images/project/sitoya/2.png`, alt: 'Sitoya 2' },
      { src: `${basePath}/images/project/sitoya/3.png`, alt: 'Sitoya 3' },
      { src: `${basePath}/images/project/sitoya/4.png`, alt: 'Sitoya 4' },
      { src: `${basePath}/images/project/sitoya/5.png`, alt: 'Sitoya 5' },
      { src: `${basePath}/images/project/sitoya/6.png`, alt: 'Sitoya 6' },
    ],
  },
];

// ── Arrow icon ─────────────────────────────────────────────────────────────────

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  );
}

// ── Project card ───────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ease-out hover:scale-[1.04]">
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800 ">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="w-full h-full "
        />

        {/* Hover pill */}
        <div className="absolute inset-0 flex items-center justify-center hover:bg-black/30">
          <span className="flex items-center gap-1.5 text-white text-sm font-medium bg-slate-900/70 px-3.5 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            View project <ArrowUpRightIcon />
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 md:px-5">
        <h3 className="font-semibold text-sm md:text-[15px] text-slate-900 dark:text-white leading-snug mb-3 line-clamp-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <TechStackBadge key={i} tech={tech} />
          ))}
          {project.techStack.length > 4 && (
            <span className="inline-block text-xs font-medium px-2 py-1 text-slate-400 dark:text-slate-500">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="portofolio"
      className="pt-16 md:pt-24 pb-16 md:pb-28 bg-slate-100 dark:bg-slate-800 px-4">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
            Portofolio
          </p>
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-secondary dark:text-slate-300">
            A collection of projects spanning web apps, dashboards, and
            management systems — each built with attention to usability and
            clean code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projectsData.map((project) => (
            <ProjectCard
              key={`${project.id}-${project.title}`}
              project={project}
              onClick={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
