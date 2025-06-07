import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

export function AboutUs({ title, excerpt, slug }: Props) {
  return (
    <section className="py-12 md:py-16">
      <div className="md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-2xl sm:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            <Link
              href={`/${slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {title}
            </Link>
          </h3>
        </div>
        <div className="mt-6 md:mt-0">
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-300">
            {excerpt}
          </p>
          <Link
            href={`/${slug}`}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Learn more about us
            <svg
              className="ml-1.5 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
