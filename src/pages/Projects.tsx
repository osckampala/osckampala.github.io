
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SuggestProjectForm from "@/components/SuggestProjectForm";
import SkeletonCard from "@/components/SkeletonCard";
import { getProjects, type Project } from "@/utils/projectLoader";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const whatsappLink = "link to the whatsapp community";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const projectData = getProjects();
      setProjects(projectData);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tekOrange/10 to-orange-100 dark:from-tekOrange/5 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-gray-800 dark:text-white">Our Projects</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
              Explore the innovative projects being developed by our community members. Join us in building
              technology solutions that benefit our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <SuggestProjectForm 
                trigger={
                  <Button className="bg-tekOrange hover:bg-orange-600 text-white">
                    Suggest a Project
                  </Button>
                }
              />
              <Button 
                variant="outline" 
                className="border-tekOrange text-tekOrange hover:bg-tekOrange/10"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Display Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Projects</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(3).fill(0).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Have a Project Idea?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for innovative project ideas to support our community's growth.
            If you have an idea for a project, we'd love to hear from you!
          </p>
          <SuggestProjectForm 
            trigger={
              <Button className="bg-tekOrange hover:bg-orange-600 text-white">
                Submit Your Idea
              </Button>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
