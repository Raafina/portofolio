import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Project() {
  return (
    <section
      id="portofolio"
      className="pt-16 md:pt-24 md:pb-16 bg-slate-100 dark:bg-slate-800 h-fit flex items-center ">
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

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {/*  LoyalCust  */}
          <div className="md:w-1/2 mb-6 md:1/2 md:mb-12 p-4 justify-center md:text-left">
            <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
              <Image
                width={500}
                height={500}
                src="/portfoliog/images/project/loyalcust.png"
                alt="LoyalCust"
                className="w-full transition duration-300 ease-in-out group-hover:blur-sm hover:bg-black"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="mt-3 mx-3 flex flex-wrap gap-2 justify-center">
                  <a
                    href="https://github.com/galaxy7891/CRM-Backend"
                    className="bg-black rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/galaxy7891/CRM-Frontend"
                    className="bg-white rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://loyalcust.vercel.app/"
                    className="bg-primary rounded-full p-1"
                    target="_blank">
                    <svg
                      className="w-6 h-6 text-white"
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
                        d="M8 18V6l8 6-8 6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xsl text-dark dark:text-white mt-5 mb-3">
              Customer Relationship Management 'LoyalCust'
            </h3>
            <p className="font-medium text-base text-secondary dark:text-slate-300">
              LoyalCust is a web-based CRM platform that focuses on managing
              customer and sales databases to help UMKM.
            </p>
          </div>
          {/*  Terbangin  */}
          <div className="md:w-1/2 mb-6 md:mb-12 p-4 justify-center md:text-left">
            <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
              <Image
                width={500}
                height={500}
                src="/portfoliog/images/project/terbangin.png"
                alt="LoyalCust"
                className="w-full transition duration-300 ease-in-out group-hover:blur-sm hover:bg-black"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="mt-3 mx-3 flex flex-wrap gap-2 justify-center">
                  <a
                    href="https://github.com/blackjac7/km6-final-terbangin-backend"
                    className="bg-black rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/blackjac7/km6-final-terbangin-frontend"
                    className="bg-white rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://terbangin.projects.codes/"
                    className="bg-primary rounded-full p-1"
                    target="_blank">
                    <svg
                      className="w-6 h-6 text-white"
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
                        d="M8 18V6l8 6-8 6Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xsl text-dark dark:text-white mt-5 mb-3">
              Airplane Ticket Booking Website 'TerbangIn'
            </h3>
            <p className="font-medium text-base text-secondary dark:text-slate-300">
              TerbangIn is an airline ticket booking platform that allows users
              to search flight schedules, select seats, and pay for tickets
              online.
            </p>
          </div>

          {/*  Lokapath  */}
          <div className="md:w-1/2 mb-6 md:mb-12 p-4 justify-center md:text-left">
            <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
              <Image
                width={500}
                height={500}
                src="/portfoliog/images/project/lokapath.png"
                alt="LoyalCust"
                className="w-full transition duration-300 ease-in-out group-hover:blur-sm hover:bg-black"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="mt-3 mx-3 flex flex-wrap gap-2 justify-center">
                  <a
                    href="https://github.com/Raafina/Lokapath"
                    className="bg-black rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xsl text-dark dark:text-white mt-5 mb-3">
              Hiking information and news 'Lokapath'
            </h3>
            <p className="font-medium text-base text-secondary dark:text-slate-300">
              Lokapath is a platform that presents information, news, and
              stories about the world of climbing, ranging from tips, reviews,
              to hiker experiences.
            </p>
          </div>

          {/*  Sitoya  */}
          <div className="md:w-1/2 mb-12 p-4 justify-center md:text-left">
            <div className="relative rounded-md shadow-md overflow-hidden transform transition duration-300 group">
              <Image
                width={500}
                height={500}
                src="/portfoliog/images/project/sitoya.png"
                alt="LoyalCust"
                className="w-full transition duration-300 ease-in-out group-hover:blur-sm hover:bg-black"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="mt-3 mx-3 flex flex-wrap gap-2 justify-center">
                  <a
                    href="https://github.com/Raafina/Sitoya"
                    className="bg-black rounded-full p-1"
                    target="_blank">
                    <svg
                      className="text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xsl text-dark dark:text-white mt-5 mb-3">
              Artesian Water Payment Management System 'Sitoya'
            </h3>
            <p className="font-medium text-base text-secondary dark:text-slate-300">
              Sitoya was designed to manage artesian water payments in Desa
              Salam Kerep, Kota Semarang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
