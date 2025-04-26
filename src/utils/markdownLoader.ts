import matter from 'gray-matter';
//return static markdown files
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
    [key: string]: any;
  };
  content: string;
}

export async function getMarkdownFiles(directory: string): Promise<MarkdownFile[]> {
  console.log(`Getting markdown files from ${directory}`);

  // Based on the directory, it should return the appropriate static data
  if (directory.includes('blog')) {
    return getStaticMarkdownFiles('blog');
  } else if (directory.includes('events')) {
    return getStaticMarkdownFiles('events');
  }

  return [];
}

export function getStaticMarkdownFiles(type: 'blog' | 'events'): MarkdownFile[] {
  // add sample data to match the markdown files
  if (type === 'blog') {
    return [
      {
        slug: 'test-of-the-blog',
        frontmatter: {
          title: 'Test of the blog',
          date: '2025-04-17',
          description: 'this is a test of the blogging system.',
          author: 'Author',
          image: 'public/uploads/',
          category: 'Technology',
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
4. Save the file in the appropriate directory`,
      },
    ];
  }

  return [];
}

export function isUpcomingEvent(date: string): boolean {
  const eventDate = new Date(date);
  const currentDate = new Date();
  return eventDate >= currentDate;
}
