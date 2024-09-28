import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { MdEmail, } from 'react-icons/md';



import { Moon , Sun } from "lucide-react"

import { useTheme } from '@/components/ui/theme-provider';

function Layout() {

  const [lightMode, setLightMode] = React.useState(false)



  const { setTheme } = useTheme()

  const handleMode = () => {
    if (!lightMode) {
      setTheme('light');
      localStorage.setItem('theme-mode', 'light');
      setLightMode(true);
      console.log('Light mode');
    } else {
      setTheme('dark');
      localStorage.setItem('theme-mode', 'dark');
      setLightMode(false);
      console.log('Dark mode');
    }
  }


  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode') || 'dark'; // default to dark mode
    if (savedTheme === 'light') {
      setLightMode(true);
      setTheme('light');
    } else {
      setLightMode(false);
      setTheme('dark');
    }
  }, [setTheme]);



  return (
    <div className=" min-h-screen w-full">
      <nav className="w-full flex justify-center mt-4 font-Raleway tracking-wide dark:text-[#B292FF] ">
        <div className="sm:w-[60%] md:w-[60%] lg:w-[40%] w-[95%] rounded-full  border-2 border-gray-400  dark:bg-[#272727] h-12 flex items-center justify-center ">
          <div className="w-[60%] flex items-center justify-around text-sm sm:text-lg">
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
              <CiLinkedin className="h-7 w-7" />{' '}
            </a>

            <span>
              {lightMode ? <Moon className='h-6 w-6' onClick={handleMode} /> : <Sun className='h-7 w-7' onClick={handleMode}/> }
            </span>
          </div>
        </div>
      </nav>

      <main className="min-h-screen w-full">
        <Outlet />
      </main>

      <footer className=" w-full flex justify-center mb-2 ">
        <div className="w-[95%] sm:w-[80%] rounded-full   border-2 border-gray-400 dark:bg-[#272727] h-12 flex items-center justify-center ">
          <div className="w-[60%]  dark:text-gray-400 ">
            <h1 className='text-sm sm:text-lg'>Follow me/ Drop A Message ❤️</h1>
          </div>
          <div className=" w-[30%] flex justify-end gap-4 lg:gap-6 items-center  dark:text-[#B292FF] ">
            <a href="https://github.com/PRASHANTSWAROOP001" target="_blank">
              {' '}
              <FaGithub className=" h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"
              target="_blank"
            >
              {' '}
              <CiLinkedin className="h-7 w-7" />{' '}
            </a>

            <a
              href="mailto:mrprashantswaroop@gmail.com?subject=Hello%20I%20Would%20Like%20To%20Connect?&body=I%20Saw%20Your%20Portfolio%20I%20Would%20Love%20To%20Connect."
              target="_blank"
            >
              {' '}
              <MdEmail className="h-7 w-7" />{' '}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
