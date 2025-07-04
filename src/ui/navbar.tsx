'use client';

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
      '(prefers-color-scheme: dark)'
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
            <a
              href="#home"
              className="font-bold text-lg text-primary py-6 block">
              raafinuradzani
            </a>
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
                      <a
                        href={`#${section}`}
                        className="group-hover:text-primary dark:text-white px-8 py-4 h-full flex rounded-lg transition duration-300 ease-in-out">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center order-1 lg:order-2">
            <button
              onClick={toggleTheme}
              className="cursor-pointer"
              aria-label="Toggle Dark Mode">
              <div className="flex items-center h-7 w-12 rounded-full relative p-1 transition duration-300 ease-in-out">
                {isDark ? (
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 5v3m0 0v3m0-3h-3m3 0h3m-3.356 7.091c-1.639 0-2.58-.248-3.708-.957-1.129-.709-2.02-1.72-2.563-2.909-.544-1.189-.718-2.505-.501-3.788.217-1.283.816-2.477 1.724-3.437-1.343.205-2.607.744-3.668 1.565-1.061.821-1.881 1.894-2.381 3.115-.5 1.221-.661 2.546-.468 3.845.193 1.299.734 2.527 1.568 3.563.835 1.036 1.935 1.844 3.192 2.344 1.257.5 2.627.675 3.975.507 1.348-.168 2.628-.672 3.713-1.463 1.085-.791 1.937-1.842 2.473-3.048-1.007.52-1.933.664-3.356.664Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
