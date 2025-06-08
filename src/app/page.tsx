import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import StreetsMap from "@/app/_components/map";
import { AboutUs } from "./_components/about-us";

export default function Index() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);

  return (
    <main className="min-h-screen">
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <StreetsMap />
        </div>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white mb-4">
                LM Safe Streets
              </h1>
              <h4 className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                Making our streets safer and more accessible for everyone
              </h4>
              <div className="mt-8 flex justify-center gap-4 pointer-events-auto">
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
          </Container>
        </div>
      </div>
      <Container>
        <div className="py-16 md:py-24">
          <AboutUs
            title="About LM Safe Streets"
            excerpt="We are a community organization dedicated to making our streets safer and more accessible for everyone. Learn more about our mission and how you can get involved."
            slug="about"
          />
          {featuredPosts.length > 0 && <MoreStories posts={featuredPosts} />}
        </div>
      </Container>
    </main>
  );
}
