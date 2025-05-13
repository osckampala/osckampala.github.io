import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  image?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Blog posts directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug: data.slug || fileName.replace(/\.md$/, ''),
          title: data.title,
          date: data.date,
          description: data.description || '',
          content,
          image: data.image,
          author: data.author,
          category: data.category,
          tags: data.tags || [],
        };
      })
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || slug,
      title: data.title,
      date: data.date,
      description: data.description || '',
      content,
      image: data.image,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts();
  const categories = new Set<string>();
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories);
}

export async function getBlogTags(): Promise<string[]> {
  const posts = await getBlogPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags);
} 