import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
const basePath = process.env.NODE_ENV === 'production' ? '/portofolio' : '';

export default function Hero() {
  return (
    <section
      id="home"
      className="py-10 md:py-24 dark:bg-slate-900  lg:h-screen flex items-center ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 order-1 mb-10 flex justify-center px-4">
            <div className="relative mt-6 md:mt-10">
              {/* Glow Background */}
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#0070f3]/20 blur-3xl dark:bg-slate-600" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#0070f3]/15 blur-3xl dark:bg-slate-600" />

              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-[4px] border-[#0070f3]/20 dark:border-slate-500 scale-110 animate-ripple " />
              <div className="absolute inset-0 rounded-full border-[4px] border-[#0070f3]/10 dark:border-slate-500 scale-125 animate-ripple-delay" />

              {/* Floating Badges */}
              {/* <div className="absolute -left-6 top-8 hidden md:block animate-bounce [animation-duration:4s]">
                <span className="rounded-full border border-[#0070f3]/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-lg">
                  React
                </span>
              </div>

              <div className="absolute -right-8 bottom-20 hidden md:block animate-bounce [animation-duration:5s]">
                <span className="rounded-full border border-[#0070f3]/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-lg">
                  Laravel
                </span>
              </div>

              <div className="absolute right-0 -top-4 hidden lg:block animate-bounce [animation-duration:6s]">
                <span className="rounded-full border border-[#0070f3]/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-lg">
                  Next.js
                </span>
              </div> */}

              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-2xl dark:shadow-slate-950/50 transition-all duration-500 hover:scale-105 hover:shadow-[#0070f3]/20">
                <Image
                  width={500}
                  height={500}
                  priority
                  src={`${basePath}/images/raafi-photo.png`}
                  alt="Raafi Adzani"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover"
                />
              </div>

              {/* Decorative Dots */}
              <div className="absolute -right-12 top-10 hidden lg:grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-[#0070f3]/40 dark:bg-slate-500/40"
                  />
                ))}
              </div>
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
                    'Software Developer',
                    'Fullstack Web Developer',
                    'IT Specialist',
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
              I am an IT Specialist and Software Developer who excels both
              independently and within team environments, with a proven track
              record of effective problem-solving. Having hands-on experience in
              website analysis and development, I am driven by a strong
              curiosity for emerging technologies and thrive on challenges.
            </p>
            <div className="flex flex-col md:flex-row gap-3 text-center md:text-left">
              <Link
                href="#contact"
                className="text-base text-white font-semibold rounded-full border-2 border-blue-500 bg-blue-500 py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">
                Contact
              </Link>
              <Link
                href="https://drive.google.com/uc?export=download&id=17LfpgwObDevkRiV8jwMF4_eVT2GHWA1F"
                className="text-base text-blue-500 font-semibold rounded-full border-2 border-blue-500 py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
