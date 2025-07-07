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
    title: "Polyclinic Management System 'Sora Clinic'",
    description:
      'Sora Clinic is a web-based polyclinic management system designed to streamline patient queue handling and doctor scheduling. It offers an intuitive interface for administrators, doctors, and patients to manage appointments efficiently. Built for scalability and ease of use, Sora Clinic helps healthcare providers deliver better, faster service.',
    image: `${basePath}/images/project/soraClinic/1.png`,
    techStack: ['Laravel', 'Tailwind', 'Flowbite Plugin', 'MySQL'],
    links: [
      {
        type: 'Repository',
        url: 'https://github.com/Raafina/Sora-Clinic',
        icon: 'github',
      },
      // {
      //   type: 'demo',
      //   url: 'https://nsmhc-undip-dashboard.vercel.app/',
      //   icon: 'demo',
      // },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/soraClinic/1.png`,
        alt: 'Sora Clinic Dashboard',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_1.png`,
        alt: 'Sora Clinic doctor 1',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_2.png`,
        alt: 'Sora Clinic doctor 2',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_3.png`,
        alt: 'Sora Clinic doctor 3',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_4.png`,
        alt: 'Sora Clinic doctor 4',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_5.png`,
        alt: 'Sora Clinic doctor 5',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_6.png`,
        alt: 'Sora Clinic doctor 6',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_7.png`,
        alt: 'Sora Clinic doctor 7',
      },
      {
        src: `${basePath}/images/project/soraClinic/doctor_8.png`,
        alt: 'Sora Clinic doctor 8',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_1.png`,
        alt: 'Sora Clinic patient 1',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_2.png`,
        alt: 'Sora Clinic patient 2',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_3.png`,
        alt: 'Sora Clinic patient 3',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_4.png`,
        alt: 'Sora Clinic patient 4',
      },
      {
        src: `${basePath}/images/project/soraClinic/patient_5.png`,
        alt: 'Sora Clinic patient 5',
      },
      {
        src: `${basePath}/images/project/soraClinic/admin_1.png`,
        alt: 'Sora Clinic admin 1',
      },
      {
        src: `${basePath}/images/project/soraClinic/admin_2.png`,
        alt: 'Sora Clinic admin 2',
      },
    ],
  },
  {
    id: 2,
    title: "School Data Management 'Sekonekti'",
    description:
      'Sekonekti is a simple school management system that focuses on school data storage. This system helps schools track information about students, parents, teachers, and classes in one centralized location. With basic summary and reporting features, Sekonekti offers an efficient solution for schools that need structure without unnecessary complexity.',
    image: `${basePath}/images/project/sekonekti/1.png`,
    techStack: [
      'Laravel',
      'Tailwind',
      'TypeScript',
      'Intertia',
      'React JS',
      'MySQL',
    ],
    links: [
      {
        type: 'Repository',
        url: 'https://github.com/Raafina/Sekonekti',
        icon: 'github',
      },
      // {
      //   type: 'demo',
      //   url: 'https://nsmhc-undip-dashboard.vercel.app/',
      //   icon: 'demo',
      // },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/sekonekti/1.png`,
        alt: 'Sekonekti 1',
      },
      {
        src: `${basePath}/images/project/sekonekti/2.png`,
        alt: 'Sekonekti 2',
      },
      {
        src: `${basePath}/images/project/sekonekti/3.png`,
        alt: 'Sekonekti 3',
      },
      {
        src: `${basePath}/images/project/sekonekti/4.png`,
        alt: 'Sekonekti 4',
      },
      {
        src: `${basePath}/images/project/sekonekti/5.png`,
        alt: 'Sekonekti 5',
      },
      {
        src: `${basePath}/images/project/sekonekti/6.png`,
        alt: 'Sekonekti 6',
      },
      {
        src: `${basePath}/images/project/sekonekti/7.png`,
        alt: 'Sekonekti 7',
      },
      {
        src: `${basePath}/images/project/sekonekti/8.png`,
        alt: 'Sekonekti 8',
      },
    ],
  },
  {
    id: 3,
    title: 'Nursing Student Mother Heart Connection Dashboard',
    description:
      'Dashboard for the Nursing Students Mother Heart Connection (NSMHC) research project of the Jurusan Keperawatan Fakultas Kedokteran UNDIP.',
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
      {
        src: `${basePath}/images/project/nsmhc/1.png`,
        alt: 'NSMHC 1',
      },
      {
        src: `${basePath}/images/project/nsmhc/2.png`,
        alt: 'NSMHC 2',
      },
      {
        src: `${basePath}/images/project/nsmhc/3.png`,
        alt: 'NSMHC 3',
      },
    ],
  },
  {
    id: 3.5,
    title: 'Automated Selection System using MOORA Method for BI Internship',
    description:
      'A decision support system developed for Final Project Internship at Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah. The system automates the internship selection process using the MOORA method. This project automates applicant ranking based on weighted criteria to ensure fair and efficient candidate evaluation.',
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
        url: 'https://github.com/Raafina/Final-Project-Intern-BI-BE',
        icon: 'github',
      },
    ],
    detailImages: [
      {
        src: `${basePath}/images/project/bi/1.png`,
        alt: 'BI 1',
      },
      {
        src: `${basePath}/images/project/bi/2.png`,
        alt: 'BI 2',
      },
      {
        src: `${basePath}/images/project/bi/3.png`,
        alt: 'BI 3',
      },
      {
        src: `${basePath}/images/project/bi/4.png`,
        alt: 'BI 4',
      },
      {
        src: `${basePath}/images/project/bi/5.png`,
        alt: 'BI 5',
      },
      {
        src: `${basePath}/images/project/bi/6.png`,
        alt: 'BI 6',
      },
    ],
  },
  {
    id: 4,
    title: "Customer Relationship Management 'LoyalCust'",
    description:
      'LoyalCust is a web-based CRM platform that focuses on managing customer and sales databases to help UMKM.',
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
      {
        src: `${basePath}/images/project/loyalcust/1.png`,
        alt: 'Loyalcust 1',
      },
      {
        src: `${basePath}/images/project/loyalcust/2.png`,
        alt: 'Loyalcust 2',
      },
      {
        src: `${basePath}/images/project/loyalcust/3.png`,
        alt: 'Loyalcust 3',
      },
      {
        src: `${basePath}/images/project/loyalcust/4.png`,
        alt: 'Loyalcust 4',
      },
      {
        src: `${basePath}/images/project/loyalcust/5.png`,
        alt: 'Loyalcust 5',
      },
      {
        src: `${basePath}/images/project/loyalcust/6.png`,
        alt: 'Loyalcust 6',
      },
      {
        src: `${basePath}/images/project/loyalcust/7.png`,
        alt: 'Loyalcust 7',
      },
      {
        src: `${basePath}/images/project/loyalcust/8.png`,
        alt: 'Loyalcust 8',
      },
      {
        src: `${basePath}/images/project/loyalcust/9.png`,
        alt: 'Loyalcust 9',
      },
      {
        src: `${basePath}/images/project/loyalcust/10.png`,
        alt: 'Loyalcust 10',
      },
    ],
  },
  {
    id: 5,
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
    ],
  },
  {
    id: 6,
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
        alt: 'Lokapath 1',
      },
    ],
  },
  {
    id: 7,
    title: "Artesian Water Payment Management System 'Sitoya'",
    description:
      'Sitoya was designed to manage artesian water payments in Desa Salam Kerep, Kota Semarang.',
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
      {
        src: `${basePath}/images/project/sitoya/1.png`,
        alt: 'Sitoya 1',
      },
      {
        src: `${basePath}/images/project/sitoya/2.png`,
        alt: 'Sitoya 2',
      },
      {
        src: `${basePath}/images/project/sitoya/3.png`,
        alt: 'Sitoya 3',
      },
      {
        src: `${basePath}/images/project/sitoya/4.png`,
        alt: 'Sitoya 4',
      },
      {
        src: `${basePath}/images/project/sitoya/5.png`,
        alt: 'Sitoya 5',
      },
      {
        src: `${basePath}/images/project/sitoya/6.png`,
        alt: 'Sitoya 6',
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

        <div className="w-full flex flex-wrap justify-center md:gap-6 xl:mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => handleViewDetails(project)}
              className="w-full  hover:scale-105 transition md:w-1/3 lg:w-1/4 mb-6 md:mb-0 p-4 justify-center md:text-left border-slate-300 dark:border-slate-600 border-2 rounded-2xl bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-700 cursor-pointer hover:shadow-lg  duration-300">
              <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full transition duration-300 ease-in-out"
                />
              </div>

              <h3 className="font-bold text-lg text-dark dark:text-white mt-5 mb-3">
                {project.title}
              </h3>

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
