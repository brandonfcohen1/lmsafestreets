import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import StreetsMap from "@/app/_components/map";
import { AboutUs } from "./_components/about-us";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="relative h-[600px] w-full">
        <StreetsMap />
        <div className="absolute inset-0 pointer-events-none">
          <Container>
            <Intro />
          </Container>
        </div>
      </div>
      <Container>
        <AboutUs
          title="About LM Safe Streets"
          excerpt="We are a community organization dedicated to making our streets safer and more accessible for everyone. Learn more about our mission and how you can get involved."
          slug="about"
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
