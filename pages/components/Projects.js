import Image from "next/image";

export default function Projects() {
    const projects = [
    {
      title: "Music Theory Learning App",
      description: "Interactive tool for musicians to learn and practice music theory.",
      thumbnail: "/music.png",
      tech: ["Next.js", "React", "Local Storage"],
      link: "https://music-theory-explorer-wheat.vercel.app/",
      github: "https://github.com/Mafesto8798/web-design-practice"
    },
    {
      title: "Restaurant Website Template",
      description: "Mobile-friendly site featuring menu display, hours, location, and contact form.",
      thumbnail: "/mex.png",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://rosa-kitchen.netlify.app/",
      github: "https://github.com/yourusername/restaurant-template"
    },
    {
      title: "Yoga Studio Template",
      description: "Clean layout with class schedules, instructor bios, and booking functionality.",
      thumbnail: "/music.png",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://yoga-demo.netlify.app",
      github: "https://github.com/yourusername/yoga-template"
    }
  ]

  return (
    <section id="projects" className=" bg-slate-300 dark:bg-slate-900 py-48 px-6">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-300 mb-4">
            My Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Recent projects I've built
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-18">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className=" bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-600 ">
      
     {/* Project Screenshot with Hover Overlay */}
      <div className="relative h-48 overflow-hidden group">
        {/* Background Image */}
        <Image 
          src={project.thumbnail} 
          alt={`${project.title} thumbnail`} 
          width={800} 
          height={300} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Hover Overlay - Hidden on Mobile, Shown on Desktop Hover */}
        <div className="hidden lg:flex absolute inset-0 bg-linear-to-br dark:from-indigo-800/60 dark:to-purple-900/60 from-blue-400/60 to-orange-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-primary text-slate-300 text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            View Live
          </a>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-lg hover:text-primary transition"
          >
            View Code
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-slate-300 mb-3">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links - Mobile Only */}
          <div className="lg:hidden flex gap-3">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-primary text-white text-sm rounded hover:bg-blue-700 transition"
            >
              View Live
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-100 transition"
            >
              Code
            </a>
          </div>
        </div>
      </div>
  )
}