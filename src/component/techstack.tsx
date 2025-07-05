import Bootstrap from '../ui/icons/techstack/bootstrap';
import Cloudinary from '../ui/icons/techstack/cloudinary';
import ExpressJS from '../ui/icons/techstack/express-js';
import JavaScript from '../ui/icons/techstack/javascript';
import Laravel from '../ui/icons/techstack/laravel';
import MongoDB from '../ui/icons/techstack/mongodb';
import MYSQL from '../ui/icons/techstack/mysql';
import NextJS from '../ui/icons/techstack/next-js';
import NodeJS from '../ui/icons/techstack/node-js';
import PHP from '../ui/icons/techstack/php';
import PostgreSQL from '../ui/icons/techstack/postgresql';
import Python from '../ui/icons/techstack/python';
import ReactJS from '../ui/icons/techstack/react-js';
import Tailwind from '../ui/icons/techstack/tailwind';
import TypeScript from '../ui/icons/techstack/typescript';

const techStack = [
  { name: 'Laravel', icon: <Laravel />, show: true },
  { name: 'Next JS', icon: <NextJS />, show: true },
  { name: 'Node JS', icon: <NodeJS />, show: true },
  { name: 'React JS', icon: <ReactJS />, show: true },
  { name: 'Express JS', icon: <ExpressJS />, show: true },
  { name: 'Tailwind', icon: <Tailwind />, show: true },
  { name: 'Bootstrap', icon: <Bootstrap />, show: true },
  { name: 'TypeScript', icon: <TypeScript />, show: true },
  { name: 'JavaScript', icon: <JavaScript />, show: true },
  { name: 'Python', icon: <Python />, show: true },
  { name: 'PHP', icon: <PHP />, show: true },
  { name: 'MySQL', icon: <MYSQL />, show: true },
  { name: 'PostgreSQL', icon: <PostgreSQL />, show: true },
  { name: 'MongoDB', icon: <MongoDB />, show: true },
  { name: 'Cloudinary', icon: <Cloudinary />, show: true },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="pt-16 md:pt-24 pb-16 md:pb-32 dark:bg-dark lg:h-screen flex items-center ">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-2">Skills</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Techstack
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              These are the technologies and tools that I use in my development
              process.
            </p>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap w-full gap-2 sm:gap-4 mb-2 sm:mb-4 justify-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border-slate-300 dark:border-slate-600 w-14 sm:w-24 md:w-32 lg:w-52 border-2 rounded-2xl p-1 sm:p-3 shadow-md dark:shadow-slate-800 transform transition duration-300 hover:bg-gray-100 dark:hover:bg-slate-800 flex lg:flex">
                  <div className="bg-slate-100 dark:bg-slate-800 p-1 sm:p-2 rounded-xl">
                    {tech.icon}
                  </div>
                  <h3 className="font-inter items-center text-base text-dark dark:text-white hidden lg:flex ms-3">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
