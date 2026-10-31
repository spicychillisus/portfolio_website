import type { ReactNode } from "react";

export type Language =
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "PostgreSQL";

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  languages: Language[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  project_link?: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ProjectCardProps {
  project: Project;
}

export type Theme = "light" | "dark";