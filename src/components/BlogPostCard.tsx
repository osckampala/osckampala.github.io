import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {post.category && (
            <span className="px-3 py-1 bg-tekOrange/10 text-tekOrange rounded-full text-sm font-medium">
              {post.category}
            </span>
          )}
          <time className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
          <Link to={`/blog/${post.slug}`} className="hover:text-tekOrange transition-colors">
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {post.author && (
              <>
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                    {post.author[0]}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {post.author}
                </span>
              </>
            )}
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-tekOrange hover:text-orange-600 font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard; 