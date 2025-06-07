import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[600px] text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white mb-4">
          LM Safe Streets
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
          Making our streets safer and more accessible for everyone
        </h4>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/about"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="/posts"
            className="px-5 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
}
