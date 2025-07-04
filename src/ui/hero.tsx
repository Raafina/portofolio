import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="py-10 md:py-24 dark:bg-slate-900  lg:h-screen flex items-center ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="self-end px-4 w-full lg:w-1/2 order-1 mb-10 flex justify-center">
            <div className="mt-10 w-full flex justify-center">
              <Image
                width={500}
                height={500}
                src="/portfolio/images/my-photo.png"
                alt="my pict"
              />
            </div>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2 order-2 lg:order-1">
            <h1 className="block text-4xl font-bold text-dark dark:text-white mb-2 lg:text-5xl">
              Raafi Nur Adzani
            </h1>
            <div className="h-10 overflow-hidden relative">
              <h2 className="text-secondary dark:text-slate-300 text-lg font-semibold lg:text-2xl mb-2 typing-text">
                <Typewriter
                  words={[
                    'Fullstack Web Developer',
                    'Frontend Developer',
                    'Backend Developer',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
            </div>
            <p className="font-medium text-base mb-5 text-secondary dark:text-slate-300">
              I'm a web developer with experience in various technologies,
              including JavaScript and PHP frameworks. I have a passion for
              creating innovative digital solutions that truly meet user needs.
              I also enjoy learning new things and collaborating with others to
              build better products.
            </p>
            <div className="flex flex-col md:flex-row gap-3 text-center md:text-left">
              <a
                href="#contact"
                className="text-base text-white font-semibold rounded-full bg-blue-500 py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">
                Contact
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1scFdySehWBhpUNnm4QykFh8vBGuZ3noB"
                className="text-base text-blue-500 font-semibold rounded-full border-2 border-blue-500 py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
