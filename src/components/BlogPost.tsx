import React from "react";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
}) => {
  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <span className="inline-block px-3 py-1 bg-tekOrange/10 dark:bg-tekOrange/20 text-tekOrange dark:text-orange-300 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold hover:text-tekOrange transition-colors">
          <a href={`/blog/${slug}`}>{title}</a>
        </CardTitle>
        <CardDescription className="flex items-center flex-wrap gap-x-4 text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        {!showContent ? (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{summary}</p>
        ) : (
          <div className="prose dark:prose-invert prose-sm md:prose-base max-w-none pt-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || ""}</ReactMarkdown>
          </div>
        )}
      </CardContent>

      {!showContent && (
        <CardFooter className="pt-0">
          <Button
            variant="outline"
            className="border-tekOrange text-tekOrange dark:text-orange-300 hover:bg-tekOrange hover:text-white dark:hover:bg-tekOrange dark:hover:text-white transition-colors"
          >
            <a href={`/blog/${slug}`}>Read More</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default BlogPost;
