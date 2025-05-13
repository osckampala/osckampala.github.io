
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MarkdownRenderer from "./MarkdownRenderer";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  category: string;
  slug: string;
  content?: string;
  showContent?: boolean;
  tags?: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  summary,
  image,
  category,
  slug,
  content,
  showContent = false,
  tags
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      {!showContent && (
        <div className="relative overflow-hidden h-48">
          <Link to={`/blog/${slug}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-tekOrange hover:bg-orange-600">
                {category}
              </Badge>
            </div>
          </Link>
        </div>
      )}
      
      <div className={`p-5 flex flex-col flex-grow ${showContent ? 'px-0 sm:px-4 md:px-6 lg:px-8' : ''}`}>
        {!showContent ? (
          <Link to={`/blog/${slug}`}>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white hover:text-tekOrange dark:hover:text-tekOrange transition-colors">
              {title}
            </h3>
          </Link>
        ) : (
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {title}
          </h1>
        )}
        
        <div className="flex flex-wrap items-center text-sm mb-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-center mr-4 mb-1">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center mb-1">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        {showContent && content ? (
          <div className="mb-4 prose dark:prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
            <MarkdownRenderer content={content} />
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{summary}</p>
        )}
        
        {tags && Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {!showContent && (
          <div className="mt-auto">
            <Link to={`/blog/${slug}`}>
              <Button variant="ghost" className="p-0 h-auto text-tekOrange hover:text-orange-600 hover:bg-transparent flex items-center group">
                Read More 
                <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
