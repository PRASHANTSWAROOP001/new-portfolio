'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import { RiGithubLine } from "react-icons/ri";



export default function CombinedProjectPage() {
  const [visibleProjects, setVisibleProjects] = useState(0)

  const projectsData = [
    {
      title: "Travel Ai Agent",
      description: "React Js Project That Uses Gemini Api To Create Travel Plans.",
      githubLink: "https://github.com/PRASHANTSWAROOP001/Travel-AI-Agent",
      liveLink: "https://travel-ai-agent.netlify.app/"
    },
    {
      title: "Recipe App",
      description: "A Simple Recipe App That Uses Redux And Async Thunk To Fetch Data",
      githubLink: "https://github.com/PRASHANTSWAROOP001/FOOD-RECIPE-APP",
      liveLink: "https://prashantswaroop001.github.io/FOOD-RECIPE-APP/"
    },
    {
      title: "Shopping Cart",
      description: "A Basic Program To Understand Context Api And State Management In React Js ",
      githubLink: "https://github.com/PRASHANTSWAROOP001/Shoping-Cart?tab=readme-ov-file",
      liveLink: "https://prashantswaroop001.github.io/Shoping-Cart/"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleProjects((prev) => (prev < projectsData.length ? prev + 1 : prev))
    }, 300) // Adjust this value to change the delay between each card appearance

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <section className='w-full py-10'>
        <div>
          <h1 className='text-center text-3xl dark:text-gray-400'>Here, You Can Know A Little Bit More About Myself.<br />
            As A Developer. See My Experience.</h1>
        </div>

        <div className='flex items-center justify-center py-8 '>
          <Button className='rounded-full'>Download Resume</Button>
        </div>
      </section>

      <section className='w-full pt-12 pb-24'>

      <h1 className="text-3xl font-bold mb-8 text-center py-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className={`w-full max-w-sm bg-card transition-all duration-500 ease-in-out   dark:border-[#B292FF] ${
              index < visibleProjects
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary text-center">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-secondary-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  < RiGithubLine className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      </section>
    </div>
  )
}
