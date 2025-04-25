import { Link } from 'react-router-dom';
import { type Project } from '@/utils/projectLoader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Link to={`/projects/${project.slug}`} className="block group">
			<Card className="h-full overflow-hidden transition-all hover:shadow-lg">
				{project.image && (
					<div className="relative h-48 overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover transition-transform group-hover:scale-105"
						/>
						<div className="absolute top-3 right-3">
							<Badge className="bg-tekOrange hover:bg-orange-600">{project.status}</Badge>
						</div>
					</div>
				)}
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="line-clamp-3 text-gray-600 dark:text-gray-300">{project.description}</p>
				</CardContent>
				<CardFooter>
					<div className="flex flex-wrap gap-2">
						{project.tags?.slice(0, 2).map(tag => (
							<Badge key={tag} variant="outline" className="text-xs">
								{tag}
							</Badge>
						))}
						{(project.tags?.length || 0) > 2 && (
							<Badge variant="outline" className="text-xs">
								+{(project.tags?.length || 0) - 2} more
							</Badge>
						)}
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProjectCard;
