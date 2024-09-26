import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';

function Layout() {
  return (
    <div className=" min-h-screen w-full">
      <nav className="w-full flex justify-center mt-4 font-Raleway tracking-wide text-[#B292FF] ">
        <div className="sm:w-[60%] md:w-[60%] lg:w-[40%] w-[90%] rounded-full bg-[#131313] h-12 flex items-center justify-center ">
          <div className="w-[60%] flex items-center justify-around">
            <Link to="/">prashant</Link>
            <Link to="/education">education</Link>
            <Link to="/project">project</Link>
          </div>
          <div className=" w-[30%] flex justify-center gap-4 lg:gap-6 items-center">
            <a href="https://github.com/PRASHANTSWAROOP001" target="_blank">
              {' '}
              <FaGithub className=" h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"
              target="_blank"
            >
              {' '}
              <CiLinkedin className="h-8 w-8" />{' '}
            </a>

            <a
              href="mailto:mrprashantswaroop@gmail.com?subject=Hello%20I%20Would%20Like%20To%20Connect?&body=I%20Saw%20Your%20Portfolio%20I%20Would%20Love%20To%20Connect."
              target="_blank"
            >
              {' '}
              <MdEmail className="h-8 w-8" />{' '}
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen w-full">
        <Outlet />
      </main>

      <footer className=" w-full flex justify-center mb-2 ">
        <div className="w-[90%] sm:w-[80%] rounded-full  bg-[#131313] h-12 flex items-center justify-center ">
          <div className="w-[60%] text-gray-400">
            <h1>Follow me/ Drop A Message ❤️</h1>
          </div>
          <div className=" w-[30%] flex justify-end gap-4 lg:gap-6 items-center  text-[#B292FF] ">
            <a href="https://github.com/PRASHANTSWAROOP001" target="_blank">
              {' '}
              <FaGithub className=" h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"
              target="_blank"
            >
              {' '}
              <CiLinkedin className="h-8 w-8" />{' '}
            </a>

            <a
              href="mailto:mrprashantswaroop@gmail.com?subject=Hello%20I%20Would%20Like%20To%20Connect?&body=I%20Saw%20Your%20Portfolio%20I%20Would%20Love%20To%20Connect."
              target="_blank"
            >
              {' '}
              <MdEmail className="h-8 w-8" />{' '}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
