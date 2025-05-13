
import { Link } from "react-router-dom";
import { type Project } from "@/utils/projectLoader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag, Star, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  // Function to get the status color based on project status
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'active':
        return 'bg-green-500 hover:bg-green-600';
      case 'completed':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'in development':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'research':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'planning':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <Card className={cn(
        "h-full overflow-hidden transition-all hover:shadow-lg border-transparent dark:border-gray-800",
        "bg-white dark:bg-gray-800",
        "hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300",
        className
      )}>
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" 
            />
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent opacity-70"></div>
            <div className="absolute top-3 right-3">
              <Badge className={`${getStatusColor(project.status)}`}>
                {project.status}
              </Badge>
            </div>
            {project.category && (
              <div className="absolute bottom-3 left-3">
                <Badge variant="outline" className="bg-white/80 dark:bg-black/50 backdrop-blur-sm">
                  <Tag size={12} className="mr-1.5" />
                  {project.category}
                </Badge>
              </div>
            )}
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-2 text-xl group-hover:text-tekOrange transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
            {project.starCount !== undefined && (
              <div className="flex items-center">
                <Star size={14} className="mr-1 text-yellow-400" />
                <span>{project.starCount}</span>
              </div>
            )}
            
            {project.startDate && (
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-tekOrange/70" />
                <span>{new Date(project.startDate).toLocaleDateString("en-US", { month: 'short', year: 'numeric' })}</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-100 dark:border-gray-700 pt-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                {tag}
              </Badge>
            ))}
            {(project.tags?.length || 0) > 3 && (
              <Badge variant="outline" className="text-xs">+{(project.tags?.length || 0) - 3} more</Badge>
            )}
          </div>
          
          {project.collaborators && project.collaborators.length > 0 && (
            <div className="flex -space-x-2 ml-auto">
              {project.collaborators.slice(0, 3).map((collaborator, index) => (
                <div 
                  key={index} 
                  className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs"
                  title={collaborator}
                >
                  {collaborator.charAt(0).toUpperCase()}
                </div>
              ))}
              {project.collaborators.length > 3 && (
                <div 
                  className="w-6 h-6 rounded-full bg-tekOrange/20 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-tekOrange"
                >
                  +{project.collaborators.length - 3}
                </div>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
