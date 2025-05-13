
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import SuggestProjectForm from "@/components/SuggestProjectForm";
import SkeletonCard from "@/components/SkeletonCard";
import { getProjects, type Project, getProjectCategories, getProjectTags, searchProjects } from "@/utils/projectLoader";
import { useToast } from "@/components/ui/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import { Search, Filter, Tag, Sparkles, Briefcase, Code, ArrowRight } from "lucide-react";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [tags, setTags] = useState<string[]>(["All"]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const whatsappLink = "https://chat.whatsapp.com/EFuw7WPQzTjKswuvJQX2n3";
  const { toast } = useToast();
  
  // Fetch projects and metadata
  useEffect(() => {
    const fetchData = async () => {
      try {
        const timer = setTimeout(async () => {
          const projectData = await getProjects();
          setProjects(projectData);
          setFilteredProjects(projectData);
          
          // Extract unique categories and tags
          const categoriesData = await getProjectCategories();
          const tagsData = await getProjectTags();
          setCategories(categoriesData);
          setTags(tagsData);
          
          setLoading(false);
          
          // Simulate page loading for smoother transitions
          setTimeout(() => setPageLoading(false), 600);
        }, 500);
        
        return () => clearTimeout(timer);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false);
        setTimeout(() => setPageLoading(false), 600);
      }
    };
    
    fetchData();
  }, []);
  
  // Filter projects based on category, tag, and search query
  useEffect(() => {
    const filterProjects = async () => {
      if (!projects.length) return;
      
      let filtered = [...projects];
      
      // Apply category filter
      if (activeCategory !== "All") {
        filtered = filtered.filter(p => p.category === activeCategory);
      }
      
      // Apply tag filter
      if (activeTag !== "All") {
        filtered = filtered.filter(p => 
          p.tags && Array.isArray(p.tags) && p.tags.includes(activeTag)
        );
      }
      
      // Apply search filter
      if (searchQuery) {
        const searchResults = await searchProjects(searchQuery);
        filtered = searchResults.filter(p => {
          // Apply current filters to search results
          if (activeCategory !== "All" && p.category !== activeCategory) {
            return false;
          }
          if (activeTag !== "All" && (!p.tags || !p.tags.includes(activeTag))) {
            return false;
          }
          return true;
        });
      }
      
      setFilteredProjects(filtered);
    };
    
    filterProjects();
  }, [activeCategory, activeTag, searchQuery, projects]);
  
  // Handle outside click to close filter panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  };
  
  const resetFilters = () => {
    setActiveCategory("All");
    setActiveTag("All");
    setSearchQuery("");
  };

  if (pageLoading) {
    return <PageLoader />;
  }
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-tekOrange/10 to-orange-100 dark:from-tekOrange/5 dark:to-gray-800 py-16 md:py-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnpNMTggMGMxLjIgMCAyLjEuOSAyLjEgMi4xdjU1LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFINmMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMi4xQzMuOSAuOSA0LjggMCA2IDBoMTJ6TTU0IDBjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDQyYy0xLjIgMC0yLjEtLjktMi4xLTIuMVYyLjFDMzkuOS45IDQwLjggMCA0MiAwaDEyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-tekOrange via-tekOrangeDark to-orange-700">Our Projects</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Explore the innovative projects being developed by our community members. Join us in building
                technology solutions that benefit our community and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <SuggestProjectForm 
                  trigger={
                    <Button className="bg-tekOrange hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                      <Sparkles size={18} className="mr-2" />
                      Suggest a Project
                    </Button>
                  }
                />
                <Button 
                  variant="outline" 
                  className="border-tekOrange text-tekOrange hover:bg-tekOrange/10 shadow-sm hover:shadow-md transition-all"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Join Our Community
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-2"></div>
      </div>
      
      {/* Search and Filter Bar (Sticky) */}
      <AnimatedSection animation="slide-up" delay={200} className="sticky top-16 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search input */}
            <div className="relative w-full md:w-auto md:flex-grow max-w-lg">
              <Input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border-tekOrange/20 focus:border-tekOrange transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
            
            {/* Top categories */}
            <div className="hidden md:block overflow-x-auto pb-2">
              <div className="flex gap-2">
                {categories.slice(0, 5).map(category => (
                  <Button 
                    key={category} 
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className={activeCategory === category 
                      ? "bg-tekOrange hover:bg-orange-600 text-white" 
                      : "border-tekOrange/50 text-tekOrange dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-tekOrange/20"}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
                
                {/* Filter button */}
                <div className="relative" ref={filterRef}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <Filter size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                    Filters
                  </Button>
                  
                  {/* Advanced filter panel */}
                  {isFilterOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Tag size={14} className="mr-2" />
                        Filter by Tags
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 10).map(tag => (
                          <Badge 
                            key={tag} 
                            variant={activeTag === tag ? "default" : "outline"}
                            className={`cursor-pointer ${activeTag === tag 
                              ? "bg-tekOrange hover:bg-orange-600" 
                              : "hover:bg-tekOrange/10"}`}
                            onClick={() => handleTagClick(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="w-full justify-center"
                          onClick={resetFilters}
                        >
                          Reset All Filters
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Reset button - only show if filters are applied */}
                {(activeCategory !== "All" || activeTag !== "All" || searchQuery) && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={resetFilters}
                    className="text-tekOrange hover:bg-tekOrange/10"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile categories */}
          <div className="md:hidden mt-3 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category 
                    ? "bg-tekOrange hover:bg-orange-600 text-white whitespace-nowrap" 
                    : "border-tekOrange text-tekOrange dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-tekOrange/20 whitespace-nowrap"}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Projects Display Section */}
      <AnimatedSection animation="fade-in" delay={300} className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative">
              {activeCategory === "All" && activeTag === "All" && !searchQuery
                ? "Featured Projects" 
                : searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : activeCategory !== "All"
                    ? `${activeCategory} Projects`
                    : `Projects tagged with "${activeTag}"`}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-tekOrange to-orange-300/40 rounded-full"></span>
            </h2>
            
            <div className="text-sm text-gray-500">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.id} 
                  animation="slide-up" 
                  delay={400 + index * 100} 
                  className="h-full"
                >
                  <ProjectCard 
                    project={project} 
                  />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection animation="fade-in" delay={400} className="text-center py-12">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tekOrange/10 flex items-center justify-center">
                  <Search className="text-tekOrange h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">No projects found</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  We couldn't find any projects matching your current filters. Try adjusting your search criteria.
                </p>
                <Button 
                  className="bg-tekOrange hover:bg-orange-600 text-white"
                  onClick={resetFilters}
                >
                  View All Projects
                </Button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </AnimatedSection>
      
      {/* Project Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Project Categories</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our community works on a diverse range of projects across different domains to solve real-world problems
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Applications",
                description: "Interactive web platforms and applications built with modern frameworks",
                icon: <Code className="h-6 w-6 text-blue-500" />,
                count: projects.filter(p => p.category === "Web Development").length || 5,
                color: "bg-blue-50 dark:bg-blue-900/20"
              },
              {
                title: "Mobile Apps",
                description: "Cross-platform and native mobile applications for Android and iOS",
                icon: <Briefcase className="h-6 w-6 text-green-500" />,
                count: projects.filter(p => p.category === "Mobile Development").length || 4,
                color: "bg-green-50 dark:bg-green-900/20"
              },
              {
                title: "Education",
                description: "Learning platforms and tools to improve access to quality education",
                icon: <Sparkles className="h-6 w-6 text-orange-500" />,
                count: projects.filter(p => p.category === "Education").length || 6,
                color: "bg-orange-50 dark:bg-orange-900/20"
              },
              {
                title: "Healthcare",
                description: "Technologies and innovations addressing healthcare challenges",
                icon: <Briefcase className="h-6 w-6 text-red-500" />,
                count: projects.filter(p => p.category === "Healthcare").length || 3,
                color: "bg-red-50 dark:bg-red-900/20"
              },
              {
                title: "E-Commerce",
                description: "Digital marketplaces and e-commerce solutions for businesses",
                icon: <Code className="h-6 w-6 text-purple-500" />,
                count: projects.filter(p => p.category === "E-Commerce").length || 2,
                color: "bg-purple-50 dark:bg-purple-900/20"
              },
              {
                title: "Open Source",
                description: "Collaborative projects contributed by our community members",
                icon: <Sparkles className="h-6 w-6 text-teal-500" />,
                count: projects.filter(p => p.category === "Open Source").length || 7,
                color: "bg-teal-50 dark:bg-teal-900/20"
              }
            ].map((category, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-up" 
                delay={300 + (index * 100)} 
                className={`rounded-xl p-6 transition-all hover:shadow-md group ${category.color}`}
              >
                <div className="flex items-start">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1 group-hover:text-tekOrange transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {category.count} Project{category.count !== 1 ? 's' : ''}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-tekOrange hover:text-tekOrangeDark hover:bg-tekOrange/10 p-0"
                        asChild
                      >
                        <Link to="#" className="flex items-center">
                          View <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project Showcase */}
      <AnimatedSection animation="fade-in" delay={600} className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="relative">
              {/* Background gradient with pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-tekOrange/10 to-orange-100 dark:from-tekOrange/5 dark:to-gray-800"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnpNMTggMGMxLjIgMCAyLjEuOSAyLjEgMi4xdjU1LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFINmMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMi4xQzMuOSAuOSA0LjggMCA2IDBoMTJ6TTU0IDBjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDQyYy0xLjIgMC0yLjEtLjktMi4xLTIuMVYyLjFDMzkuOS45IDQwLjggMCA0MiAwaDEyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]  opacity-5"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative p-8 md:p-12">
                <div className="order-2 md:order-1">
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Community Impact Projects</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      Our projects focus on solving real problems in the African tech ecosystem. From educational resources to innovative applications, we're building technology that makes a difference.
                    </p>
                    <Button 
                      className="bg-tekOrange hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden relative group"
                      onClick={() => {
                        toast({
                          title: "Projects Gallery",
                          description: "This feature will be available soon!",
                        });
                      }}
                    >
                      <span className="relative z-10">View Project Gallery</span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-tekOrange to-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48">
                      <img 
                        src="/public/images/tek-talent-meetup-1.jpeg" 
                        alt="Project showcase" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48">
                      <img 
                        src="/public/images/tek-talent-meetup-2.jpeg" 
                        alt="Project showcase" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48">
                      <img 
                        src="/public/images/tek-talent-meetup-3.jpeg" 
                        alt="Project showcase" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48">
                      <img 
                        src="/public/images/tek-talent-soroti.jpeg" 
                        alt="Project showcase" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection animation="slide-up" delay={700} className="py-16 bg-gradient-to-br from-tekOrange to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project Idea?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for innovative project ideas to support our community's growth.
            If you have an idea for a project, we'd love to hear from you!
          </p>
          <SuggestProjectForm 
            trigger={
              <Button className="bg-white text-tekOrange hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-6 text-lg">
                Submit Your Idea
              </Button>
            }
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
