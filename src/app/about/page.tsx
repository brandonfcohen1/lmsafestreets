import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <article className="mb-32">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12">
            About LM Safe Streets
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-xl mb-8">
                LM Safe Streets is a community organization dedicated to making
                our streets safer and more accessible for everyone.
              </p>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="mb-6">
                We work to create safer streets through community engagement,
                education, and advocacy. Our goal is to ensure that all
                residents can travel safely, whether they're walking, biking, or
                driving.
              </p>
              <h2 className="text-3xl mb-4">What We Do</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">
                  Advocate for safer street designs and traffic calming measures
                </li>
                <li className="mb-2">
                  Organize community events and educational programs
                </li>
                <li className="mb-2">
                  Work with local officials to implement safety improvements
                </li>
                <li className="mb-2">
                  Collect and analyze data on street safety issues
                </li>
              </ul>
              <h2 className="text-3xl mb-4">Get Involved</h2>
              <p className="mb-6">
                We welcome all community members who share our vision of safer
                streets. Whether you want to volunteer, attend events, or
                support our initiatives, there are many ways to get involved.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
