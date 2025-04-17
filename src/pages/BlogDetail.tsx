import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BlogPost from "@/components/BlogPost";
import { getMarkdownFiles, getStaticMarkdownFiles, MarkdownFile } from "@/utils/markdownLoader";
import { ArrowLeft } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<MarkdownFile | null>(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Get static posts data
        const posts = await getMarkdownFiles('content/blog');
        
        const foundPost = posts.find(p => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <SkeletonCard className="max-w-4xl mx-auto h-[80vh]" />
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate('/blog')} className="bg-tekOrange hover:bg-orange-600 text-white">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6 border-tekOrange text-tekOrange dark:text-orange-300"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          {post && (
            <BlogPost
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              author={post.frontmatter.author || "Tek Talent Africa"}
              summary={post.frontmatter.description}
              image={post.frontmatter.image || "public/uploads/tektalentlogo.png"}
              category={post.frontmatter.category || "General"}
              slug={post.slug}
              content={post.content}
              showContent={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
