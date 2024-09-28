import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import TechData from "../data/tech.json"

import Autoplay from "embla-carousel-autoplay"

function Home() {
  return (
    <div className='w-full min-h-screen py-4 lg:py-10'>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-10 lg:gap-y-0 justify-items-center">
        {/* Text Card */}
        <Card className="w-[90%] lg:w-[90%] mx-auto lg:mx-0 border-none font-Raleway  shadow-none  tracking-wider">
          <CardHeader>
            <CardTitle>Hello, I Am Prashant Swaroop</CardTitle>
          </CardHeader>
          <CardContent>
            Hey there! I'm a full-stack dev in the making, currently diving into the MERN stack and building cool projects to level up.

            After a year of front-end work, where I got to define features and build apps, I realized how much I love coding—especially that magical moment when everything works and all the checks turn green!
            <br />
            <br />
            I'd love the chance to work on real-world projects and take my skills to the next level.

            Oh, and coffee? It's my co-pilot. ☕ Let's build something awesome!
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button className="rounded-full">Download Resume</Button>
            <Link to="/project"><Button className="rounded-full" variant="outline">Projects</Button></Link>
          </CardFooter>
        </Card>

        <img src="photo.svg" alt="profile photo" className="object-cover w-[90%] lg:w-[50%] h-auto " />

      </section>

      <section className='w-full py-4 lg:py-8'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className='w-full py-10'
        >
          {/* Flexbox settings for centering on mobile and starting from the left on large screens */}
          <CarouselContent className='flex px-4  gap-10 sm:gap-20 items-center  '>
            {TechData.map(({ name, id, path }) => {
              return (
                <CarouselItem
                  key={id}
                  className='basis-1/2 md:basis-1/2 lg:basis-1/4 flex items-center'
                >
                  <div
                    key={id}
                    className={`flex h-40 w-60 items-center justify-start rounded-xl border-2 dark:bg-[#272727]`}
                  >
                    <div className='px-4'>
                      <img src={path} alt={name} className='w-16' />
                      <h1 className='fond-semibold py-2 text-lg'>{name}</h1>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>


      <section className='w-full text-center font-Raelway'>

        <h1 className='text-4xl py-4 md:text-6xl md:py-8 text-[#9f75ff]'> Javascript</h1>

        <h1 className='text-4xl py-4 md:text-6xl md:py-8 text-[#843dff]'> React </h1>

        <h1 className='text-4xl py-4 md:text-6xl md:py-8 text-[#6b04fd]'>
          Coffe
        </h1>

      </section>

      <div className='py-4 md:py-8'>
        <h1 className='text-2xl md:text-4xl md:px-12 md:text-left text-center py-2 dark:text-gray-400'>These Are The Technologies  </h1>
        <h1 className=' text-2xl md:text-4xl md:px-12 md:text-left text-center py-2 dark:text-gray-400'> that i have been using.</h1>
      </div>

      <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 py-4 md:pt-12 md:pb-20'>
        <Card className='w-[90%] md:w-[80%] duration-500 hover:scale-105 border-2 dark:border-[#B292FF]'>
          <CardHeader>
            <CardTitle className='text-xl text-center'> Front-End Engineering </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col justify-center items-center gap-2'>
            <div className='flex items-center justify-center gap-4'>
              <img src="react.svg" alt="react logo" className='w-10 h-10' />
              <h1>React</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="redux.svg" alt="redux logo" className='w-10 h-10' />
              <h1>Redux</h1>
            </div>


            <div className='flex items-center justify-center gap-4'>
              <img src="vite.svg" alt="vite logo" className='w-8 h-8' />
              <h1>Vite</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="tailwind css.svg" alt="Tailwind css logo" className='w-8 h-8' />
              <h1>Tailwind</h1>
            </div>



          </CardContent>
        </Card>

        <Card className='w-[90%] md:w-[80%] duration-500 hover:scale-105 border-2 dark:border-[#B292FF]'>
          <CardHeader>
            <CardTitle className='text-xl text-center'> Languages </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col justify-center items-center gap-2'>

            <div className='flex items-center justify-center gap-4'>
              <img src="javascript.svg" alt="react logo" className='w-10 h-10' />
              <h1>Javascript</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="python.svg" alt="python" className='w-10 h-10' />
              <h1>Python</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="c++.svg" alt="c++" className='w-10 h-10' />
              <h1>C++</h1>
            </div>

          </CardContent>
        </Card>

        <Card className='w-[90%] md:w-[80%] duration-500 hover:scale-105 border-2 dark:border-[#B292FF]'>
          <CardHeader>
            <CardTitle className='text-xl text-center'> Back-End Technology </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-4'>
              <img src="nodelogo.svg" alt="node js logo" className='w-10 h-10' />
              <h1>Node Js</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="express.png" alt="express logo" className='w-10 h-10' />
              <h1>Express Js</h1>
            </div>



            <div className='flex items-center justify-center gap-4'>
              <img src="mogodb.svg" alt="mongoDB logo" className='w-10 h-10' />
              <h1>MongoDb</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt='supabase logo' className='w-10 h-10' />
              <h1>Supabase</h1>
            </div>

          </CardContent>
        </Card>

        <Card className='w-[90%] md:w-[80%] duration-500 hover:scale-105 border-2 dark:border-[#B292FF] '>
          <CardHeader>
            <CardTitle className='text-center text-xl '> DevOps </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-4'>
              <img src="Git.svg" alt="Git Logo" className='w-10 h-10' />
              <h1>Git</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <img src="GitHub Actions.svg" alt="redux logo" className='w-10 h-10' />
              <h1>Github Actions</h1>
            </div>
          </CardContent>
        </Card>
      </section>




    </div>
  );
}

export default Home;
