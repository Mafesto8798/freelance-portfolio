

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-slate-200 dark:bg-slate-700 py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-300 mb-4">
          Let's Work Together
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-slate-400 mb-8">
          Looking to improve your website or start a new project? 
          I'd love to hear from you.
        </p>

        {/* Email Button */}
        <a 
          href="mailto:kenny.chavarriaga@gmail.com"
          target="_blank"
          className="inline-block px-8 py-4 bg-primary text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </a>

        {/* Optional: Social Links */}
        <div className="mt-8 flex justify-center gap-12">
          <a href="https://github.com/mafesto8798" className="text-gray-600 dark:text-slate-400 hover:text-blue-600" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kenny-chavarriaga-805b68159/" className="text-gray-600 dark:text-slate-400 hover:text-blue-600 " target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}