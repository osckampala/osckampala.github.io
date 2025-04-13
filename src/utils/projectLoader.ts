
import { projects } from "@/data/projects";

export type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  slug: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
  date?: string;
};

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
