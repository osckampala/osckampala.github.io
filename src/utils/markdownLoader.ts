
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
        slug: '',
        frontmatter: {
          title: "",
          date: "",
          description: "",
          author: "",
          image: "public/uploads/",
          category: ""
        },
        content: ""
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