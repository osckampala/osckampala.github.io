
import { projects } from "@/data/projects";
import { getMarkdownFiles } from "./markdownLoader";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: string;
  image?: string;
  tags?: string[];
  category?: string;
  link?: string;
  collaborators?: string[];
  starCount?: number;
  startDate?: string;
  endDate?: string;
  featured?: boolean;
  date?: string;
  content?: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    // First try to get projects from markdown files
    const mdProjects = await getMarkdownFiles('content/projects');
    
    if (mdProjects && mdProjects.length > 0) {
      return mdProjects.map(mdProject => ({
        id: mdProject.slug,
        slug: mdProject.slug,
        title: mdProject.frontmatter.title,
        description: mdProject.frontmatter.description,
        status: mdProject.frontmatter.status || 'Active',
        image: mdProject.frontmatter.image,
        tags: mdProject.frontmatter.tags,
        category: mdProject.frontmatter.category,
        link: mdProject.frontmatter.link,
        collaborators: mdProject.frontmatter.collaborators,
        starCount: mdProject.frontmatter.starCount,
        startDate: mdProject.frontmatter.startDate,
        endDate: mdProject.frontmatter.endDate,
        featured: mdProject.frontmatter.featured,
        date: mdProject.frontmatter.date,
        content: mdProject.content
      }));
    }
  } catch (error) {
    console.error("Error getting projects from markdown:", error);
  }
  
  // Fall back to static data if markdown loading fails
  return projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  try {
    // First try to get project from markdown files
    const mdProjects = await getMarkdownFiles('content/projects');
    const mdProject = mdProjects.find(p => p.slug === slug);
    
    if (mdProject) {
      return {
        id: mdProject.slug,
        slug: mdProject.slug,
        title: mdProject.frontmatter.title,
        description: mdProject.frontmatter.description,
        status: mdProject.frontmatter.status || 'Active',
        image: mdProject.frontmatter.image,
        tags: mdProject.frontmatter.tags,
        category: mdProject.frontmatter.category,
        link: mdProject.frontmatter.link,
        collaborators: mdProject.frontmatter.collaborators,
        starCount: mdProject.frontmatter.starCount,
        startDate: mdProject.frontmatter.startDate,
        endDate: mdProject.frontmatter.endDate,
        featured: mdProject.frontmatter.featured,
        date: mdProject.frontmatter.date,
        content: mdProject.content
      };
    }
  } catch (error) {
    console.error("Error getting project from markdown:", error);
  }
  
  // Fall back to static data if markdown loading fails
  return projects.find((project) => project.slug === slug);
}

// Added function to get featured projects
export async function getFeaturedProjects(count: number = 3): Promise<Project[]> {
  const allProjects = await getProjects();
  const featured = allProjects.filter(project => project.featured);
  const others = allProjects.filter(project => !project.featured);
  return [...featured, ...others].slice(0, count);
}

// Added function to get project categories
export async function getProjectCategories(): Promise<string[]> {
  const allProjects = await getProjects();
  const categories = allProjects.map(project => project.category || 'Uncategorized');
  return ['All', ...Array.from(new Set(categories))];
}

// Added function to get project tags
export async function getProjectTags(): Promise<string[]> {
  const allProjects = await getProjects();
  const allTags: string[] = [];
  allProjects.forEach(project => {
    if (project.tags && Array.isArray(project.tags)) {
      allTags.push(...project.tags);
    }
  });
  return ['All', ...Array.from(new Set(allTags))];
}

// Added function to search projects
export async function searchProjects(query: string): Promise<Project[]> {
  const allProjects = await getProjects();
  if (!query) return allProjects;
  
  const lowerQuery = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    (project.category && project.category.toLowerCase().includes(lowerQuery)) ||
    (Array.isArray(project.tags) && project.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
}
