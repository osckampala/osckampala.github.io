
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag as TagIcon, ExternalLink, Github, Users } from "lucide-react";
import { getProject, type Project } from "@/utils/projectLoader";
import { Badge } from "@/components/ui/badge";
import SkeletonCard from "@/components/SkeletonCard";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 300));
        const projectData = await getProject(slug || "");
        setProject(projectData);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
        
        // Optimize loader timing for better UX
        setTimeout(() => setPageLoading(false), 300);
      }
    };

    fetchProject();
  }, [slug]);

  if (pageLoading) {
    return <PageLoader />;
  }

  if (loading) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <SkeletonCard />
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-tekOrange hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>{project.title} | Tek Talent Africa</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        {project.image && <meta property="og:image" content={project.image} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-tekOrange hover:underline mb-6 block"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </AnimatedSection>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <AnimatedSection animation="fade-in" delay={100}>
                {project.image && (
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-tekOrange hover:bg-orange-600">{project.status}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h1 className="text-2xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h1>
                    </div>
                  </div>
                )}
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200} className="p-6 md:p-8">
                {!project.image && (
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    {project.title}
                  </h1>
                )}
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  {project.date && (
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-tekOrange" />
                      <span>Started: {project.date}</span>
                    </div>
                  )}
                  
                  {project.category && (
                    <div className="flex items-center">
                      <TagIcon size={16} className="mr-2 text-tekOrange" />
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">{tag}</Badge>
                  ))}
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/70 p-6 rounded-xl mb-8">
                    <h2 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-10 h-10 rounded-full bg-tekOrange/10 flex items-center justify-center mr-3">
                        <Users size={18} className="text-tekOrange" />
                      </span>
                      Current Status: {project.status}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We're actively working on this project and looking for community members to 
                      contribute. If you're interested in getting involved, please reach out to us!
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.link && (
                        <Button 
                          className="bg-tekOrange hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </Button>
                      )}
                      
                      <Button 
                        variant="outline" 
                        className="border-tekOrange text-tekOrange hover:bg-tekOrange/10"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub Repository
                      </Button>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3">Get Involved</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Join our team and help us make this project a reality. We're looking for contributors 
                    with various skills and backgrounds.
                  </p>
                  
                  {/* Project timeline */}
                  <div className="mt-10 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
                    <div className="relative pl-6 border-l-2 border-tekOrange/30 space-y-6">
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border-4 border-tekOrange bg-white dark:bg-gray-800"></div>
                        <h4 className="font-medium">Research & Planning</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border-4 border-tekOrange bg-white dark:bg-gray-800"></div>
                        <h4 className="font-medium">Design & Prototyping</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border-4 border-tekOrange/30 bg-white dark:bg-gray-800"></div>
                        <h4 className="font-medium">Development</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Starting Next Month</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border-4 border-tekOrange/30 bg-white dark:bg-gray-800"></div>
                        <h4 className="font-medium">Testing & Launch</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Q3 2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-tekOrange/10 dark:bg-tekOrange/20 p-6 rounded-xl mt-10">
                    <h3 className="text-lg font-semibold text-tekOrange mb-3">
                      Ready to Contribute?
                    </h3>
                    <p className="mb-4">
                      We welcome contributors of all skill levels. Fill out our form or join our community WhatsApp group to learn more about getting involved.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-tekOrange hover:bg-orange-600 text-white">Join this Project</Button>
                      <Button variant="ghost" className="text-tekOrange hover:bg-tekOrange/10">Contact Project Lead</Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
