import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface EventCardProps {
	image: string;
	title: string;
	date: string;
	summary: string;
	className?: string;
	slug: string;
	location?: string;
	content?: string;
	showContent?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
	image,
	title,
	date,
	summary,
	className = '',
	slug,
	location,
	content,
	showContent = false,
}) => {
	return (
		<div
			className={`rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
		>
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
				/>
			</div>
			<div className="p-5">
				<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white hover:text-tekOrange transition-colors">
					<a href={`/events/${slug}`}>{title}</a>
				</h3>

				<div className="flex flex-col gap-2 mb-3 text-gray-600 dark:text-gray-400">
					<div className="flex items-center">
						<Calendar size={16} className="mr-2 text-tekOrange" />
						<span className="text-sm">{date}</span>
					</div>

					{location && (
						<div className="flex items-center">
							<MapPin size={16} className="mr-2 text-tekOrange" />
							<span className="text-sm">{location}</span>
						</div>
					)}
				</div>

				{!showContent ? (
					<p className="text-gray-600 dark:text-gray-300 mb-4">{summary}</p>
				) : (
					<div className="mt-4">
						<MarkdownRenderer content={content || ''} />
					</div>
				)}

				{!showContent && (
					<Button
						variant="outline"
						className="border-tekOrange text-tekOrange hover:bg-tekOrange hover:text-white transition-colors dark:text-orange-300 dark:hover:text-white"
					>
						<a href={`/events/${slug}`}>Read More</a>
					</Button>
				)}
			</div>
		</div>
	);
};

export default EventCard;
