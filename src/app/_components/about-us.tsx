import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

export function AboutUs({ title, excerpt, slug }: Props) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Link
            href={`/${slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
}
