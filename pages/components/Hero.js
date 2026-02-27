

export default function Hero() {
  return (
            <div className="w-full flex flex-col items-center justify-center gap-8 px-4 py-8 lg:p-24 bg-slate-300 dark:bg-slate-900 rounded-t-xl">
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-slate-300 text-center">
                    Hi, I'm <strong className="text-primary font-bold">Kenny Chavarriaga</strong>! A Web Developer in Pawtucket, Rhode Island
                </h1>
                <p className="text-2xl text-gray-800 dark:text-gray-300 py-12 w-7/8 lg:w-5/8 text-center leading-relaxed">
                    I build fast, mobile-friendly websites that help local businesses grow. With a focus on clean design and seamless user experience, I create custom solutions that drive results. Let's work together to bring your vision to life!
                </p>
                <span className="flex flex-col lg:flex-row justify-center gap-6">
                <img src="/comp.png" alt="computer" height={200} width={100} className="pt-12"/>
                </span>
                <button className="bg-primary hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Contact Me
                </button>
            </div>
  );
}