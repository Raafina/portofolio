'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const toTopRef = useRef<HTMLDivElement>(null);

  // Sticky Navbar Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (headerRef.current?.offsetTop ?? 0)) {
        setIsSticky(true);
        toTopRef.current?.classList.remove('hidden');
        toTopRef.current?.classList.add('flex');
      } else {
        setIsSticky(false);
        toTopRef.current?.classList.remove('flex');
        toTopRef.current?.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark Mode Handler
  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const isDarkMode = stored === 'dark' || (!stored && prefersDark);
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    updateTheme(newMode);
  };

  return (
    <header
      ref={headerRef}
      className={`${
        isSticky ? 'navbar-fixed' : ''
      } absolute bg-transparent top-0 left-0 w-full flex items-center z-10 `}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="#home"
              className="font-bold text-lg text-primary py-6 block">
              raafinuradzani
            </Link>
          </div>

          <div className="flex items-center px-4 order-2 lg:order-1">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="block absolute lg:hidden right-4">
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-top-left duration-300 ease-in-out"></span>
            </button>

            <nav
              className={`${
                navOpen ? '' : 'hidden'
              } bg-white dark:bg-dark lg:dark:bg-transparent max-w-[250px] w-full rounded-lg shadow-lg dark:shadow-slate-800 absolute right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none`}>
              <ul className="block lg:flex">
                {['home', 'skills', 'portofolio', 'experience', 'contact'].map(
                  (section) => (
                    <li className="group" key={section}>
                      <Link
                        href={`#${section}`}
                        className="group-hover:text-primary dark:text-white px-8 py-4 h-full flex rounded-lg transition duration-300 ease-in-out">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center order-1 lg:order-2">
            <button
              onClick={toggleTheme}
              className="cursor-pointer"
              aria-label="Toggle Dark Mode">
              <div className="relative flex h-7 w-12 items-center rounded-full p-1 transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 cursor-pointer">
                <div
                  className={`absolute h-5 w-5 rounded-full bg-white flex items-center justify-center shadow-md transform transition duration-300 ease-in-out ${
                    isDark ? 'translate-x-5' : 'translate-x-0'
                  }`}>
                  {isDark ? (
                    /* Moon Icon */
                    <svg
                      className="w-6 h-6 text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                      />
                    </svg>
                  ) : (
                    /* Sun Icon */
                    <svg
                      className="w-4 h-4 text-amber-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
