export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Glass Card */}
        <div className="bg-white/20  backdrop-blur-md border border-white/40 rounded-2xl p-10 lg:p-14 text-center">

          <p className="text-xs font-semibold tracking-widest text-gray-600  uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900  mb-4">
            Let&apos;s Work Together
          </h2>

          <p className="text-base lg:text-lg text-gray-700  mb-10 leading-relaxed">
            Looking to hire a frontend developer or start a new web project?
            <br className="hidden lg:block" />
            I&apos;d love to hear from you.
          </p>

          {/* Email Button */}
          <a
            href="mailto:kenny.chavarriaga@gmail.com"
            className="inline-block px-10 py-4 bg-primary text-white text-base font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-xl mb-10"
          >
            Get In Touch
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/30 "></div>
            <span className="text-xs text-gray-600 uppercase tracking-wider">
              or find me on
            </span>
            <div className="flex-1 h-px bg-white/30 "></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mafesto8798"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-gray-800  text-sm font-semibold rounded-xl hover:bg-white/40 active:scale-95 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kenny-chavarriaga-805b68159/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/25 backdrop-blur-sm border border-white/40 text-gray-800  text-sm font-semibold rounded-xl hover:bg-white/40 active:scale-95 transition-all"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
