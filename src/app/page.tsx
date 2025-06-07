import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import StreetsMap from "@/app/_components/map";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="relative h-[600px] w-full">
        <StreetsMap />
        <div className="absolute inset-0 pointer-events-none">
          <Container>
            <div className="pt-16">
              <Intro />
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
