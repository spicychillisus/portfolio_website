import Head from "next/head";
import Link from "next/link";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Your Name | Software Developer</title>
        <meta
          name="description"
          content="The personal portfolio of Your Name, a software developer building thoughtful digital products."
        />
      </Head>
      <Hero />
      <About />
      <section className="section projects-section content-width" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I&apos;ve made</p>
            <h2 id="featured-heading">Featured projects</h2>
          </div>
          <Link className="text-link view-all-link" href="/projects">
            View all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="project-grid featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}