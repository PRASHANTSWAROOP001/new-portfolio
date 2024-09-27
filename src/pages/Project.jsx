'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'



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
      title: "Project 3",
      description: "An e-commerce platform developed using React, Node.js, and Stripe for payments.",
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.yourdomain.com"
    },
    {
      title: "Project 4",
      description: "A mobile-first web application for task management, built with React Native and Firebase.",
      githubLink: "https://github.com/yourusername/project4",
      liveLink: "https://project4.yourdomain.com"
    },
    {
      title: "Project 5",
      description: "An AI-powered chatbot using Python and natural language processing techniques.",
      githubLink: "https://github.com/yourusername/project5",
      liveLink: "https://project5.yourdomain.com"
    },
    {
      title: "Project 6",
      description: "A data visualization dashboard created with D3.js and Vue.js.",
      githubLink: "https://github.com/yourusername/project6",
      liveLink: "https://project6.yourdomain.com"
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
          <h1 className='text-center text-3xl text-gray-400'>Here, You Can Know A Little Bit More About Myself.<br />
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
            className={`w-full max-w-sm bg-card transition-all duration-500 ease-in-out ${
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
                  <GithubIcon className="mr-2 h-4 w-4" />
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
