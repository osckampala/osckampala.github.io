import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/components/SkeletonCard";
import { getMarkdownFiles, MarkdownFile } from "@/utils/markdownLoader";
import BlogPost from "@/components/BlogPost";

// Categories for filtering
const categories = ["All", "Technology", "Community", "Education", "Social Impact"];

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<MarkdownFile[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<MarkdownFile[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Get only static data for GitHub Pages compatibility
        const posts = await getMarkdownFiles('content/blog');
        
        setBlogPosts(posts);
        setFilteredPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.frontmatter.category === selectedCategory));
    }
  }, [selectedCategory, blogPosts]);
  
 

export default Blog;
