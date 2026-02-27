

export default function Hero() {
  return (
            <div className="flex flex-col items-center justify-center gap-8 p-10 lg:p-16 bg-slate-200 rounded-t-xl ">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
                    Hi, I'm <strong className="text-blue-500 font-bold">Kenny Chavarriaga</strong>! A Web Developer in Pawtucket, Rhode Island
                </h1>
                <p className="text-xl text-gray-800 dark:text-gray-300 py-4">
                    I build fast, mobile-friendly websites that help local businesses grow.
                </p>
                <span className="flex flex-col lg:flex-row justify-center gap-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Contact Me
                </button>
                </span>
            </div>
  );
}