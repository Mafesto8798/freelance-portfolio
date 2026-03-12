export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-4 pt-2 pb-20 lg:pt-16 lg:pb-28">

      {/* Left: Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full lg:max-w-xl">

        {/* Available Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <span className="text-xs font-semibold tracking-widest text-gray-800  uppercase">
            Available for Part-Time / Internships
          </span>
        </div>

        {/* Main Headline */}
        <div className="hero-headline">
          <p className="text-lg font-semibold tracking-widest text-gray-600  uppercase mb-3">
            Hi, I'm
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[0.92] tracking-tight text-gray-900 ">
            Kenny<br />
            <span className="text-primary">Chavarriaga</span>
          </h1>
          <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">
            <p className="text-lg lg:text-xl font-semibold text-gray-700 ">
              Frontend Developer
            </p>
          </div>
          <p className="text-sm text-gray-600  mt-1.5 tracking-wide">
            Pawtucket, Rhode Island
          </p>
        </div>

        {/* Bio */}
        <p className="hero-bio text-base lg:text-lg text-gray-700  leading-relaxed max-w-sm lg:max-w-none">
          I build fast, responsive websites and web apps with clean code and great user
          experiences. Focused on React & Next.js from design to deployed product.
        </p>

        {/* Tech Stack */}
        <div className="hero-stack flex flex-wrap gap-2 justify-center lg:justify-start">
          {["React", "Next.js", "JavaScript", "Tailwind CSS","Claude"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-white/25 backdrop-blur-sm border border-white/45 rounded-full text-xs font-semibold text-gray-800  hover:bg-white/40 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex gap-3 flex-wrap justify-center lg:justify-start">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 bg-white/25 backdrop-blur-sm border border-white/50 text-gray-900  font-semibold rounded-xl hover:bg-white/40 active:scale-95 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Right: Computer Icon */}
      <div className="hero-icon shrink-0 flex items-center justify-center lg:pr-4">
        <img
          src="/comp.png"
          alt="computer"
          width={220}
          height={220}
          className="animate-float w-32 lg:w-56"
        />
      </div>

    </div>
  );
}
