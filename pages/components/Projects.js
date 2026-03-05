import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Music Theory Key Explorer",
      description: "Interactive tool for musicians to learn scales and write/save chord progressions.",
      thumbnail: "/music.png",
      tech: ["Next.js", "React", "Local Storage"],
      link: "https://music-theory-explorer-wheat.vercel.app/",
      github: "https://github.com/Mafesto8798/web-design-practice"
    },
    {
      title: "Rosa's Kitchen",
      description: "Mobile-friendly site featuring navigation, business information, menu, hours, location and contact.",
      thumbnail: "/mex.png",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://rosa-kitchen.netlify.app/",
      github: "https://github.com/yourusername/restaurant-template"
    }
  ]

  return (
    <section id="projects" className="w-full py-24 px-2 lg:px-6">
      <div className="max-w-8xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-gray-600  uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
            My Work
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gray-500/40 "></div>
            <p className="text-base text-gray-600 ">
              Recent projects I&apos;ve built
            </p>
            <div className="h-px w-8 bg-gray-500/40 "></div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="lg:w-3/4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
    <div className="bg-white/20  backdrop-blur-md border border-white/40  rounded-xl overflow-hidden hover:bg-white/30  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Project Screenshot with Hover Overlay */}
      <div className="relative h-48 overflow-hidden group">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          width={800}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay - Desktop only */}
        <div className="hidden lg:flex absolute inset-0 bg-linear-to-br from-blue-500/60 to-orange-400/60  opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 backdrop-blur-[2px]">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/60 text-white text-sm font-semibold rounded-lg hover:bg-white/35 transition"
          >
            View Code
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900  mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-white/30  border-white/50 unded-full text-xs font-medium text-gray-800 "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Mobile Only */}
        <div className="lg:hidden flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/30 border border-white/50 text-gray-800  text-sm font-semibold rounded-lg hover:bg-white/45 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
