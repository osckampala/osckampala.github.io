import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Filter, Tag, Rss, Loader } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";
import { getMarkdownFiles, MarkdownFile, getCategories, getTags, searchFiles } from "@/utils/markdownLoader";
import BlogPost from "@/components/BlogPost";
import { useToast } from "@/components/ui/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import { Link } from "react-router-dom";

const Blog = () => {
  // State management
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [blogPosts, setBlogPosts] = useState<MarkdownFile[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<MarkdownFile[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [tags, setTags] = useState<string[]>(['All']);
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { toast } = useToast();
  
  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getMarkdownFiles('content/blog');
        
        setBlogPosts(posts);
        setFilteredPosts(posts);
        setCategories(getCategories(posts));
        setTags(getTags(posts));
        
        setLoading(false);
        
        // Simulate page loading for smoother transitions
        setTimeout(() => setPageLoading(false), 800);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        toast({
          title: "Error loading blog posts",
          description: "Please try again later",
          variant: "destructive"
        });
        setLoading(false);
        setPageLoading(false);
      }
    };
    
    fetchPosts();
  }, [toast]);
  
  // Filter posts based on category, tag, and search query
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...blogPosts];
      
      // Apply category filter
      if (selectedCategory !== "All") {
        filtered = filtered.filter(post => post.frontmatter.category === selectedCategory);
      }
      
      // Apply tag filter
      if (selectedTag !== "All") {
        filtered = filtered.filter(post => 
          post.frontmatter.tags && 
          Array.isArray(post.frontmatter.tags) && 
          post.frontmatter.tags.includes(selectedTag)
        );
      }
      
      // Apply search filter
      if (searchQuery) {
        filtered = searchFiles(filtered, searchQuery);
      }
      
      setFilteredPosts(filtered);
    };
    
    applyFilters();
  }, [selectedCategory, selectedTag, searchQuery, blogPosts]);

  // Handle subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter",
    });
    setEmail("");
  };
  
  // Reset all filters
  const resetFilters = useCallback(() => {
    setSelectedCategory("All");
    setSelectedTag("All");
    setSearchQuery("");
  }, []);
  
  // Delayed search implementation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Search is implemented in the filter effect
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  
  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <div className="pt-20 pb-16 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-tekOrange/10 to-orange-100 dark:from-tekOrange/5 dark:to-gray-800 py-16 md:py-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnpNMTggMGMxLjIgMCAyLjEuOSAyLjEgMi4xdjU1LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFINmMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMi4xQzMuOSAuOSA0LjggMCA2IDBoMTJ6TTU0IDBjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDQyYy0xLjIgMC0yLjEtLjktMi4xLTIuMVYyLjFDMzkuOS45IDQwLjggMCA0MiAwaDEyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-tekOrange via-tekOrangeDark to-orange-700">Our Blog</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Insights, stories and knowledge from our community members. Stay updated with the 
                latest trends, tutorials and discussions in the tech world.
              </p>
            </AnimatedSection>
            
            {/* Search bar */}
            <AnimatedSection animation="slide-up" delay={100} className="max-w-xl mx-auto">
              <div className="relative">
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-tekOrange/20 focus:border-tekOrange transition-all shadow-md hover:shadow-lg focus:shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter size={18} className={`text-gray-500 dark:text-gray-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              {/* Advanced filters */}
              <div className={`bg-white dark:bg-gray-800 rounded-b-lg shadow-lg mt-1 overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0 p-0'}`}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Tag size={14} className="mr-1" /> Categories
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Badge 
                          key={category} 
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={selectedCategory === category 
                            ? "bg-tekOrange hover:bg-orange-600 cursor-pointer" 
                            : "hover:bg-tekOrange/10 cursor-pointer"}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Tag size={14} className="mr-1" /> Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant={selectedTag === tag ? "default" : "outline"}
                          className={selectedTag === tag 
                            ? "bg-tekOrange hover:bg-orange-600 cursor-pointer" 
                            : "hover:bg-tekOrange/10 cursor-pointer"}
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-2"></div>
      </div>

      {/* Latest Articles Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : selectedCategory !== 'All' || selectedTag !== 'All' 
                  ? 'Filtered Articles' 
                  : 'Latest Articles'}
            </h2>
            
            {(searchQuery || selectedCategory !== 'All' || selectedTag !== 'All') && (
              <Button 
                variant="outline" 
                className="border-tekOrange text-tekOrange hover:bg-orange-50 dark:hover:bg-tekOrange/20"
                onClick={resetFilters}
              >
                <Filter size={16} className="mr-2" />
                Clear Filters
              </Button>
            )}
          </AnimatedSection>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(6).fill(0).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              filteredPosts.map((post, index) => (
                <AnimatedSection 
                  key={post.slug} 
                  animation="slide-up" 
                  delay={index * 100} 
                  className="h-full transform transition-transform hover:-translate-y-1"
                >
                  <BlogPost
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    author={post.frontmatter.author || "Tek Talent Africa"}
                    summary={post.frontmatter.description}
                    image={post.frontmatter.image || "/public/uploads/tektalentlogo.png"}
                    category={post.frontmatter.category || "General"}
                    slug={post.slug}
                  />
                </AnimatedSection>
              ))
            )}
          </div>
          
          {/* Empty state */}
          {filteredPosts.length === 0 && !loading && (
            <AnimatedSection animation="fade-in" delay={300} className="text-center py-10">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tekOrange/10 flex items-center justify-center">
                  <Search className="text-tekOrange h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">No posts found</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  We couldn't find any blog posts matching your current filters. Try adjusting your search or filters to see more results.
                </p>
                <Button 
                  className="bg-tekOrange hover:bg-orange-600 text-white"
                  onClick={resetFilters}
                >
                  View All Posts
                </Button>
              </div>
            </AnimatedSection>
          )}
          
          {/* Load more button */}
          {filteredPosts.length > 0 && filteredPosts.length >= 6 && (
            <AnimatedSection animation="fade-in" delay={800} className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-tekOrange text-tekOrange dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-tekOrange/20 group relative overflow-hidden"
                onClick={() => {
                  toast({
                    title: "Loading more posts",
                    description: "This feature will be available soon.",
                  });
                }}
              >
                <span className="relative z-10">Load More</span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-tekOrange/10 transform translate-y-full group-hover:translate-y-0 transition-transform"></span>
              </Button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Newsletter Subscription - Glass Effect */}
      <AnimatedSection animation="slide-up" delay={400} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-tekOrange/5 dark:to-gray-800/50 -z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnpNMTggMGMxLjIgMCAyLjEuOSAyLjEgMi4xdjU1LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFINmMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMi4xQzMuOSAuOSA0LjggMCA2IDBoMTJ6TTU0IDBjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDQyYy0xLjIgMC0yLjEtLjktMi4xLTIuMVYyLjFDMzkuOS45IDQwLjggMCA0MiAwaDEyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]  opacity-5 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg p-8 border border-white/20 dark:border-white/5">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-tekOrange/10">
              <Rss className="text-tekOrange h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Get the latest blog posts and updates delivered directly to your inbox. No spam, just valuable content.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-md focus:outline-none focus:border-tekOrange shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-tekOrange hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-tekOrange to-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform"></span>
              </Button>
            </form>
            <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to our <a href="#" className="text-tekOrange hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
 
export default Blog;
