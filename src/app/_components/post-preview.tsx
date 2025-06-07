import Link from "next/link";
import { Post } from "@/interfaces/post";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Post["author"];
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="group">
      <div className="mb-4">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-xl font-semibold mb-2 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-300">
        {excerpt}
      </p>
    </div>
  );
}
