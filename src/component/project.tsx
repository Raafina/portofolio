import { useState } from 'react';
import Image from 'next/image';
import TechStackBadge from '../ui/icons/techstack-badge';
import ProjectModal from '../ui/icons/project-modal';

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
    title: "Customer Relationship Management 'LoyalCust'",
    description:
      'LoyalCust is a web-based CRM platform that focuses on managing customer and sales databases to help UMKM.',
    image: `${basePath}/images/project/loyalcust.png`,
    techStack: [
      'Laravel',
      'Cloudinary',
      'Next JS',
      'React',
      'Redux',
      'TailwindCSS',
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
      {
        src: `${basePath}/images/project/loyalcust.png`,
        alt: 'LoyalCust Dashboard',
      },
      {
        src: `${basePath}/images/project/loyalcust.png`,
        alt: 'Customer Management',
      },
      {
        src: `${basePath}/images/project/loyalcust.png`,
        alt: 'Sales Analytics',
      },
    ],
  },
  {
    id: 2,
    title: "Airplane Ticket Booking Website 'TerbangIn'",
    description:
      'TerbangIn is an airline ticket booking platform that allows users to search flight schedules, select seats, and pay for tickets online.',
    image: `${basePath}/images/project/terbangin.png`,
    techStack: ['React', 'Node JS', 'Express JS', 'PostgreSQL', 'Redux'],
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
      {
        src: `${basePath}/images/project/terbangin.png`,
        alt: 'Flight Search',
      },
      {
        src: `${basePath}/images/project/terbangin.png`,
        alt: 'Seat Selection',
      },
    ],
  },
  {
    id: 3,
    title: "Hiking information and news 'Lokapath'",
    description:
      'Lokapath is a platform that presents information, news, and stories about the world of climbing, ranging from tips, reviews, to hiker experiences.',
    image: `${basePath}/images/project/lokapath.png`,
    techStack: ['Laravel', 'MySQL', 'Tailwind', 'jQuery'],
    links: [
      {
        type: 'repository',
        url: 'https://github.com/Raafina/Lokapath',
        icon: 'github',
      },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/lokapath.png`,
        alt: 'Lokapath Homepage',
      },
      {
        src: `${basePath}/images/project/lokapath.png`,
        alt: 'Hiking Articles',
      },
      {
        src: `${basePath}/images/project/lokapath.png`,
        alt: 'Trail Information',
      },
    ],
  },
  {
    id: 4,
    title: "Artesian Water Payment Management System 'Sitoya'",
    description:
      'Sitoya was designed to manage artesian water payments in Desa Salam Kerep, Kota Semarang.',
    image: `${basePath}/images/project/sitoya.png`,
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    links: [
      {
        type: 'repository',
        url: 'https://github.com/Raafina/Sitoya',
        icon: 'github',
      },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/sitoya.png`,
        alt: 'Sitoya Dashboard',
      },
      {
        src: `${basePath}/images/project/sitoya.png`,
        alt: 'Payment Management',
      },
      {
        src: `${basePath}/images/project/sitoya.png`,
        alt: 'Customer Records',
      },
    ],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="portofolio"
      className="pt-16 md:pt-24 md:pb-16 bg-slate-100 dark:bg-slate-800 h-fit flex items-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-2">Portofolio</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Selected Project
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              Here are some of the projects that I have built and developed.
              Every project that is done reflects a commitment to continue to
              improve capabilities and provide solutions according to needs.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center gap-6 xl:w-10/12 xl:mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => handleViewDetails(project)}
              className="w-full md:w-[calc(50%-12px)] mb-6 md:mb-0 p-4 justify-center md:text-left border-slate-300 dark:border-slate-600 border-2 rounded-2xl bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-700 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full transition duration-300 ease-in-out"
                />
              </div>

              <h3 className="font-bold text-xl text-dark dark:text-white mt-5 mb-3">
                {project.title}
              </h3>

              <p className="font-medium text-base text-secondary dark:text-slate-300 mb-4">
                {project.description}
              </p>

              <div>
                <div className="flex flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <TechStackBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
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
