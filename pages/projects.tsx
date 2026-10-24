import Head from "next/head";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Your Name</title>
        <meta
          name="description"
          content="Selected software and product design projects by Your Name."
        />
      </Head>
      <section className="page-intro content-width" aria-labelledby="projects-heading">
        <p className="eyebrow">Selected work</p>
        <h1 id="projects-heading">Projects</h1>
        <p className="page-intro-copy">
          A collection of experiments, collaborations, and products built with care.
          <span className="placeholder-note"> Replace this line with your own introduction.</span>
        </p>
      </section>
      <section className="section all-projects-section content-width" aria-label="All projects">
        <div className="project-grid all-projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}