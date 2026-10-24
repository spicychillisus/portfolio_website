import type { Project } from "@/utils/types";

// Replace these sample projects and their artwork with your own work.
export const projects: Project[] = [
  {
    id: "northstar",
    title: "Northstar",
    description:
      "A calmer way for small teams to plan their week, share progress, and stay focused.",
    thumbnail: "/images/projects/northstar.svg",
    languages: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "common-ground",
    title: "Common Ground",
    description:
      "A community garden directory connecting neighbors with nearby growing spaces.",
    thumbnail: "/images/projects/common-ground.svg",
    languages: ["React", "TypeScript", "PostgreSQL"],
    featured: true,
  },
  {
    id: "form-and-field",
    title: "Form & Field",
    description:
      "A considered storefront for independent makers and objects made to last.",
    thumbnail: "/images/projects/form-field.svg",
    languages: ["Next.js", "TypeScript"],
    featured: true,
  },
  {
    id: "good-measure",
    title: "Good Measure",
    description:
      "A lightweight habit tracker that makes room for imperfect, sustainable routines.",
    thumbnail: "/images/projects/good-measure.svg",
    languages: ["React", "Tailwind CSS"],
    featured: false,
  },
];