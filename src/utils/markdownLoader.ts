
import matter from 'gray-matter';

export interface MarkdownFile {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    slug?: string;
    author?: string;
    image?: string;
    category?: string;
    location?: string;
    tags?: string[];
    featured?: boolean;
    [key: string]: any;
  };
  content: string;
}

// Function to fetch markdown files from specified directory
export async function getMarkdownFiles(directory: string): Promise<MarkdownFile[]> {
  console.log(`Getting markdown files from ${directory}`);
  
  try {
    const directoryPath = directory.startsWith('/') ? directory : `/${directory}`;

    if (directory.includes('blog')) {
      const response = await fetch(`/content/blog/index.json`).catch(() => null);
      if (response && response.ok) {
        const fileList = await response.json();
        return await Promise.all(fileList.map(async (file: string) => {
          const fileResponse = await fetch(`/content/blog/${file}`);
          const fileContent = await fileResponse.text();
          const { data, content } = matter(fileContent);
          return {
            slug: file.replace(/\.md$/, ''),
            frontmatter: data,
            content
          };
        }));
      }
      // Fallback to static data if fetch fails
      return getStaticMarkdownFiles('blog');
    } 
    else if (directory.includes('events')) {
      const response = await fetch(`/content/events/index.json`).catch(() => null);
      if (response && response.ok) {
        const fileList = await response.json();
        return await Promise.all(fileList.map(async (file: string) => {
          const fileResponse = await fetch(`/content/events/${file}`);
          const fileContent = await fileResponse.text();
          const { data, content } = matter(fileContent);
          return {
            slug: file.replace(/\.md$/, ''),
            frontmatter: data,
            content
          };
        }));
      }
      // Fallback to static data if fetch fails
      return getStaticMarkdownFiles('events');
    } 
    else if (directory.includes('projects')) {
      const response = await fetch(`/content/projects/index.json`).catch(() => null);
      if (response && response.ok) {
        const fileList = await response.json();
        return await Promise.all(fileList.map(async (file: string) => {
          const fileResponse = await fetch(`/content/projects/${file}`);
          const fileContent = await fileResponse.text();
          const { data, content } = matter(fileContent);
          return {
            slug: file.replace(/\.md$/, ''),
            frontmatter: data,
            content
          };
        }));
      }
      // Fallback to static data if fetch fails
      return getStaticMarkdownFiles('projects');
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching markdown files:", error);
    // Fallback to static content if there's an error
    if (directory.includes('blog')) return getStaticMarkdownFiles('blog');
    if (directory.includes('events')) return getStaticMarkdownFiles('events');
    if (directory.includes('projects')) return getStaticMarkdownFiles('projects');
    return [];
  }
}
export function getStaticMarkdownFiles(type: 'blog' | 'events' | 'projects'): MarkdownFile[] {

  
  if (type === 'blog') {
    return [
      {
        slug: 'test-of-the-blog',
        frontmatter: {
          title: "Test of the blog",
          date: "2025-04-17",
          description: "This is a test of the blogging system.",
          author: "TekTalent Team",
          image: "/images/tek-talent-meetup-1.jpeg",
          category: "Technology",
          tags: ["react", "javascript", "web development"],
          featured: true
        },
        content: `# Blog System Guide

## Frontmatter
The frontmatter contains essential metadata about the blog post:
- title: The main title of the post
- date: Publication date
- description: A brief summary of the post
- author: The writer's name
- image: Path to the featured image
- category: Post categorization
- slug: URL-friendly identifier
- tags: Related keywords

## Content
The main content is written in Markdown format, which supports:
- Headers
- Lists
- Links
- Images
- Code blocks
- And more...

## Technical Implementation
The system uses:
- TypeScript for type safety
- Gray-matter for parsing markdown files
- Static file generation for optimal performance

## How to Create a New Post
1. Create a new markdown file
2. Add frontmatter with required metadata
3. Write content in markdown format
4. Save the file in the appropriate directory`
      }
    ];
  }
  
  return [];
}

export function isUpcomingEvent(date: string): boolean {
  const eventDate = new Date(date);
  const currentDate = new Date();
  return eventDate >= currentDate;
}

// Added function to get categories from markdown files
export function getCategories(files: MarkdownFile[]): string[] {
  const categories = files.map(file => file.frontmatter.category || 'Uncategorized');
  return ['All', ...Array.from(new Set(categories))];
}

// Added function to get tags from markdown files
export function getTags(files: MarkdownFile[]): string[] {
  const allTags: string[] = [];
  files.forEach(file => {
    if (file.frontmatter.tags && Array.isArray(file.frontmatter.tags)) {
      allTags.push(...file.frontmatter.tags);
    }
  });
  return ['All', ...Array.from(new Set(allTags))];
}

// Added function to get featured items
export function getFeaturedItems(files: MarkdownFile[], count: number = 3): MarkdownFile[] {
  const featured = files.filter(file => file.frontmatter.featured);
  const others = files.filter(file => !file.frontmatter.featured);
  return [...featured, ...others].slice(0, count);
}

// Added function for search
export function searchFiles(files: MarkdownFile[], query: string): MarkdownFile[] {
  if (!query) return files;
  
  const lowerQuery = query.toLowerCase();
  return files.filter(file => 
    file.frontmatter.title.toLowerCase().includes(lowerQuery) ||
    file.frontmatter.description.toLowerCase().includes(lowerQuery) ||
    (file.frontmatter.author && file.frontmatter.author.toLowerCase().includes(lowerQuery)) ||
    (file.frontmatter.category && file.frontmatter.category.toLowerCase().includes(lowerQuery)) ||
    (Array.isArray(file.frontmatter.tags) && file.frontmatter.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
}
