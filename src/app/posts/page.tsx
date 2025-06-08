import { Metadata } from "next";
import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog Posts | LM Safe Streets",
  description:
    "Read our latest blog posts about safe streets initiatives and community updates.",
};

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <div className="py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </div>
      </Container>
    </main>
  );
}
