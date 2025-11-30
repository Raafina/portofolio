'use client';

import { useState } from 'react';
import CalendarIcon from '../ui/icons/calendar';
import ChevronIcon from '../ui/icons/chevron';

const experiences = [
  {
    company: 'Manifestasi Tech',
    position: 'Frontend Developer',
    date: 'March 2025 - Present',
    details: [
      'Developing frontend for various projects, including research websites for university lecturers, marketplace platforms, and modern landing pages.',
      ' Collaborating with cross-functional teams to translate UI/UX requirements into clean, scalable frontend components aligned with usability, accessibility, and performance best practices.',
    ],
  },
  {
    company: 'Rapier Technology International',
    position: 'Frontend Developer',
    date: 'February 2025 - May 2025',
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
    date: 'September 2024 - December 2024',
    details: [
      'MBKM Kemdikbud Magang Bersertifikat batch 7th.',
      'Collaborate with stakeholders to analyze and define user requirements for the development of Customer Relationship Management (CRM).',
      'Develop backend systems and third party APIs to enhance functionality and process.',
      'Sliced the frontend based on designs provided by the UI/UX with responsive and user-friendly application.',
    ],
  },
  {
    company: 'Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah',
    position: 'Public Relation',
    date: 'June 2024 - July 2024',
    details: [
      'Developing student intern registration website for final project assigment.',
      'Designed digital game aimed at educating the public about the "Cinta Rupiah" program.',
      "Managed and integrated data into Bank Indonesia's centralized system.",
      "Representation of Bank Indonesia's Public Relations to corporate and individuals regarding events organised.",
    ],
  },
  {
    company: 'Binar Academy',
    position: 'Fullstack Web Developer',
    date: 'February 2024 - June 2024',
    details: [
      'MBKM Kemdikbud Studi Independen Bersertifikat batch 6th.',
      'Worked on collaborative, real-world projects, utilizing technologies like Express.js and React.js to develop and deploy fullstack web applications.',
      'Developed a real-time chat app and an airplane ticket booking website.',
      'Awarded Best Final Capstone Fullstack Web Development Course MSIB batch 6',
    ],
  },
  {
    company: 'Himpunan Mahasiswa Teknik Informatika Udinus',
    position: 'Pengurus Bidang Informasi dan Komunikasi',
    date: 'April 2022 - May 2024',
    details: [
      'Lead Content Creator Informatic Media. Coordinated a team of content creators to ensure smooth collaboration and alignment on objectives, led efforts to source and create compelling news stories on the latest advancements in technology and informatics, and maintained editorial quality while driving engagement across digital platforms.',
      'Lead Event Hi-Talk series #4 HMTI Udinus x GDSC Udinus x Dicoding Indonesia. Organized and executed an engaging event on Flutter for Multi-Platform Apps to enhance skills in modern app development, collaborated with Dicoding Indonesia to provide free class tokens for attendees, and hired experts to deliver insightful sessions, offering hands-on experience and practical knowledge.',
      'Actively contributed 6 national events and 2 internal events.',
      'Designed the website registration for the HMTI Workshop to provide a seamless and user-friendly sign-up process, ensuring efficient data collection and management.',
      'Created and managed engaging social media feeds and stories for national days.',
    ],
  },
  {
    company: 'Badan Narkotika Nasional Tegal',
    position: 'Duta Anti Narkoba BNN Tegal',
    date: 'October 2019 - June 2022',
    details: [
      'Supported BNN Kota Tegal in providing educational programs on P4GN (Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika).',
      'Assisted in the declaration of "Desa Bersih Narkoba (Bersinar)" in Kota Tegal, promoting anti-narcotics initiatives at the village level.',
      'Designed compelling graphics for events organized by Ikatan Duta Anti Narkoba BNN Kota Tegal.',
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="pt-16 md:pt-24 pb-16 md:pb-32 bg-slate-100 dark:bg-slate-800 lg:h-fit flex items-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-2">Experience</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Newest Experience
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              Gained valuable experience working on innovative projects,
              refining my design and development skills while collaborating with
              talented teams.
            </p>
          </div>
        </div>

        <div className="w-full md:px-24">
          {experiences.map((exp, index) => (
            <div key={index} className="accordion-container">
              <div className="accordion-item border-slate-300 rounded-xl dark:border-slate-600 border-2 dark:shadow-slate-700 p-3 md:px-6 md:py-4 shadow-md transform transition duration-300 mb-3 hover:bg-gray-100 dark:hover:bg-slate-700 bg-white dark:bg-slate-800">
                <div
                  className="accordion-header flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}>
                  <div>
                    <h1 className="font-bold text-lg md:text-xl text-dark dark:text-white">
                      {exp.company}
                    </h1>
                    <h2 className="italic text-base md:text-md text-dark dark:text-white">
                      {exp.position}
                    </h2>
                    <div className="h-6 text-secondary dark:text-slate-300 flex">
                      <CalendarIcon />
                      <p className="text-secondary dark:text-slate-300 ms-2 text-sm self-center">
                        {exp.date}
                      </p>
                    </div>
                  </div>

                  <ChevronIcon activeIndex={activeIndex} index={index} />
                </div>

                <div
                  className={`accordion-content transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-[1000px] mt-3' : 'max-h-0'
                  }`}>
                  <ul
                    style={{ listStyleType: 'disc', marginLeft: '20px' }}
                    className="text-slate-600 dark:text-slate-200">
                    {exp.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
