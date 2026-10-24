import Image from "next/image";
import Link from "next/link";
import type { ProjectCardProps } from "@/utils/types";
import { languageIcons } from "@/utils/languageIcons";

export default function ProjectCard({ project }: ProjectCardProps) {
  const preview = (
    <div className="project-image-wrap">
      <Image
        className="project-image"
        src={project.thumbnail}
        alt={`${project.title} project preview`}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
      />
      {project.liveUrl && <span className="project-image-arrow" aria-hidden="true">↗</span>}
    </div>
  );

  return (
    <article className="project-card">
      {project.liveUrl ? (
        <Link
          className="project-image-link"
          href={project.liveUrl}
          aria-label={`${project.title} live demo`}
          target="_blank"
          rel="noreferrer"
        >
          {preview}
        </Link>
      ) : preview}
      <div className="project-card-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.featured && <span className="featured-label">Featured</span>}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-card-bottom">
          <ul className="language-list" aria-label={`${project.title} technologies`}>
            {project.languages.map((language) => (
              <li key={language}>
                <span className="language-icon" title={language}>
                  <Image src={languageIcons[language]} alt="" width={17} height={17} />
                  <span className="sr-only">{language}</span>
                </span>
              </li>
            ))}
          </ul>
          {project.liveUrl && (
            <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}