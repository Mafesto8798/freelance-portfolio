export default function Footer() {
  return (
    <footer className="w-full border-t border-white/30  bg-white/10  backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Name + copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-gray-800 ">
            Kenny Chavarriaga
          </p>
          <p className="text-xs text-gray-800  mt-0.5">
            &copy; {new Date().getFullYear()} &middot; Frontend Developer
          </p>
        </div>

        {/* Center: Built with */}
        <p className="text-xs text-gray-800  tracking-wide">
          Built with Next.js &amp; Tailwind CSS
        </p>

        {/* Right: Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mafesto8798"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-800  hover:text-primary  transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kenny-chavarriaga-805b68159/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-800  hover:text-primary  transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}
