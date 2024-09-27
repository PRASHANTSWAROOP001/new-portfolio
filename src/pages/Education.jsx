import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function EducationPage() {
  const [visibleCards, setVisibleCards] = useState(0)

  const educationData = [
    {
      title: "Post Graduation",
      college: "Institute Of Engineering & Technology Lucknow",
      university: "Dr. A P J Abdul Kalam Technical University",
      grade: "8.2 CGPA",
      year: "2025",
      description: "Getting Strong Hold On Computer Fundamentals ⌨️ As Well As Latest Web 🕸️ Technologies."
    },
    {
      title: "Undergraduation",
      college: "Shri Jai Narain Degree College K.K.C Lucknow ",
      university: "Lucknow University",
      grade: "56.56%",
      year: "2022",
      description: "Here I explore the realm of Pure Mathematics 😎. This is also the when my love for Computer Science 👨‍💻 Began."
    },
    {
      title: "12th Grade",
      college: "Shri Krishna Geeta Inter College",
      university: "UP Board Allhabad",
      grade: "73%",
      year: "2018",
      description: "Same Old Maths ➗ And Science 🔭."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) => (prev < educationData.length ? prev + 1 : prev))
    }, 500) // Adjust this value to change the delay between each card appearance

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Education</h1>
      <div className="flex flex-col items-center space-y-8 w-full">
        {educationData.map((edu, index) => (
          <Card 
            key={index} 
            className={`w-[90%] max-w-3xl bg-card transition-all duration-500 ease-in-out ${
              index < visibleCards 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-full'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{edu.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-secondary-foreground">College/School</h3>
                  <p>{edu.college}</p>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-foreground">University/Board</h3>
                  <p>{edu.university}</p>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-foreground">Grade/CGPA</h3>
                  <p>{edu.grade}</p>
                </div>
                <div>
                  <h3 className="font-medium text-secondary-foreground">Year of Passing</h3>
                  <p>{edu.year}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-secondary-foreground mb-2">Description</h3>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}