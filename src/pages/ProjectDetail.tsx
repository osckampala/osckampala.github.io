import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProject, type Project } from '@/utils/projectLoader';
import { Badge } from '@/components/ui/badge';
import SkeletonCard from '@/components/SkeletonCard';

const ProjectDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const [project, setProject] = useState<Project | undefined>(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProject = async () => {
			setLoading(true);
			try {
				await new Promise(resolve => setTimeout(resolve, 500));
				const projectData = getProject(slug || '');
				setProject(projectData);
			} catch (error) {
				console.error('Error fetching project:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProject();
	}, [slug]);

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
		<div className="pt-20">
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-4xl mx-auto">
					<Link
						to="/projects"
						className="inline-flex items-center text-tekOrange hover:underline mb-6"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Projects
					</Link>

					<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
						{project.image && (
							<div className="relative h-64 md:h-80">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-4 right-4">
									<Badge className="bg-tekOrange hover:bg-orange-600">{project.status}</Badge>
								</div>
							</div>
						)}

						<div className="p-6 md:p-8">
							<h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
								{project.title}
							</h1>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.tags?.map(tag => (
									<Badge key={tag} variant="outline">
										{tag}
									</Badge>
								))}
							</div>

							<div className="prose dark:prose-invert max-w-none">
								<p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
									{project.description}
								</p>

								<h2 className="text-xl font-semibold mb-3">Current Status: {project.status}</h2>
								<p className="text-gray-600 dark:text-gray-300 mb-6">
									We're actively working on this project and looking for community members to
									contribute. If you're interested in getting involved, please reach out to us!
								</p>

								<h2 className="text-xl font-semibold mb-3">Get Involved</h2>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									Join our team and help us make this project a reality. We're looking for
									contributors with various skills and backgrounds.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
