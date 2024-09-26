import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
        <Card className="w-[90%] lg:w-[70%] mx-auto lg:mx-0 border-none font-Raleway">
          <CardHeader>
            <CardTitle>Hello, I Am Prashant Swaroop</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis ad exercitationem blanditiis eius voluptatibus? Eaque consequuntur neque autem eveniet voluptate nostrum architecto amet quam dolor voluptatem sed quibusdam.
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="rounded-full">Download Resume</Button>
            <Button className="rounded-full" variant="outline">Projects</Button>
          </CardFooter>
        </Card>

        <img src="photo.svg" alt="profile photo" className="object-cover w-[90%] lg:w-[30%] h-auto " />

      </section>

      <section className='w-full py-4 lg:py-8'>
        <Carousel plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]} className='w-full py-10'>
          <CarouselContent className='flex gap-5 sm:gap-20 items-center' >
            {TechData.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className=' md:basis-1/2 lg:basis-1/4 '>
                  <div key={id} class=" flex h-40 w-60 items-center justify-start rounded-xl border-2 bg-violet-300">
                    <div class="px-4">
                      <img src={path} alt={name} class="w-16" />
                      <h1 class="fond-semibold py-2 text-lg yellow">{name}</h1>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

        </Carousel>
      </section>


    </div>
  );
}

export default Home;
