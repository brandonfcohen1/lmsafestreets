import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <article className="mb-32 pt-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">
            About LM Safe Streets
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <h2 className="text-3xl mb-4">What We Do</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">
                  Excepteur sint occaecat cupidatat non proident
                </li>
                <li className="mb-2">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                </li>
                <li className="mb-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li className="mb-2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </li>
              </ul>
              <h2 className="text-3xl mb-4">Get Involved</h2>
              <p className="mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
