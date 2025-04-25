import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BackToTop from '@/components/BackToTop';
import SkeletonCard from '@/components/SkeletonCard';
import ImageCarousel from '@/components/ImageCarousel';
import { ArrowRight } from 'lucide-react';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [visibleSections, setVisibleSections] = useState<string[]>([]);
	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const featuresSectionRef = useRef<HTMLDivElement>(null);
	const ctaSectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setVisibleSections(prev => [...prev, entry.target.id]);
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
		if (featuresSectionRef.current) observer.observe(featuresSectionRef.current);
		if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);

		return () => {
			clearTimeout(timer);
			observer.disconnect();
		};
	}, []);

	const carouselImages = [
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
	];

	const carouselImages2 = [
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
		'public/uploads/tektalentlogo.png',
	];

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Hero Section with Text First */}
			<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
				<div className="container mx-auto px-4 z-10 text-center mb-16">
					<div className="animate-fade-in max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800 dark:text-white">
							<span className="text-tekOrange">Tek Talent</span> Africa Community
						</h1>
						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
							A vibrant community of tech enthusiasts, developers and innovators building the future
							of technology in Africa.
						</p>
						<div className="flex flex-wrap gap-6 justify-center">
							<Button className="bg-tekOrange hover:bg-orange-600 text-white text-lg px-8 py-6">
								Join Our Community
							</Button>
							<Button
								variant="outline"
								className="border-tekOrange text-tekOrange hover:bg-tekOrange/10 text-lg px-8 py-6"
							>
								Learn More
							</Button>
						</div>
					</div>
				</div>

				{/* Carousel images below the text */}
				<div className="w-full mt-12">
					{/* Top carousel - moving right */}
					<div className="carousel-container w-full mb-4">
						<div className="carousel-track carousel-track-right">
							{carouselImages.map((image, index) => (
								<div key={`top-${index}`} className="flex-shrink-0 w-80 h-60 p-1">
									<img
										src={image}
										alt={`Tech Event ${index}`}
										className="w-full h-full object-cover rounded-lg shadow-md"
									/>
								</div>
							))}
							{carouselImages.map((image, index) => (
								<div key={`top-repeat-${index}`} className="flex-shrink-0 w-80 h-60 p-1">
									<img
										src={image}
										alt={`Tech Event ${index}`}
										className="w-full h-full object-cover rounded-lg shadow-md"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Bottom carousel - moving left */}
					<div className="carousel-container w-full">
						<div className="carousel-track carousel-track-left">
							{carouselImages2.map((image, index) => (
								<div key={`bottom-${index}`} className="flex-shrink-0 w-80 h-60 p-1">
									<img
										src={image}
										alt={`Tech Community ${index}`}
										className="w-full h-full object-cover rounded-lg shadow-md"
									/>
								</div>
							))}
							{carouselImages2.map((image, index) => (
								<div key={`bottom-repeat-${index}`} className="flex-shrink-0 w-80 h-60 p-1">
									<img
										src={image}
										alt={`Tech Community ${index}`}
										className="w-full h-full object-cover rounded-lg shadow-md"
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Scroll down indicator */}
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-8 h-12 border-2 border-tekOrange rounded-full flex items-start justify-center p-1">
						<div className="w-1.5 h-3 bg-tekOrange rounded-full animate-bounce-subtle"></div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about" ref={aboutSectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
				<div className="container mx-auto px-4">
					<div
						className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${visibleSections.includes('about') ? 'animate-fade-in' : 'opacity-0'}`}
					>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
								About Us
							</h2>
							<div className="w-24 h-1 bg-tekOrange mb-6"></div>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
								Tek Talent Africa is a community-driven platform dedicated to fostering tech talent
								and innovation across Africa. We provide resources, networking opportunities, and
								support to help tech enthusiasts grow and succeed.
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								Our mission is to bridge the gap between tech education and industry needs, creating
								a sustainable ecosystem for tech talent development in Africa.
							</p>
						</div>

						<div
							className={
								loading
									? 'h-80'
									: `h-80 overflow-hidden rounded-xl shadow-lg ${visibleSections.includes('about') ? 'animate-fade-in' : 'opacity-0'}`
							}
						>
							{loading ? (
								<div className="skeleton h-full w-full rounded-xl"></div>
							) : (
								<img
									src="public/uploads/tektalentlogo.png"
									alt="Tek Talent comunity"
									className="w-full h-full object-cover"
								/>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Featured Sections Preview */}
			<section id="features" ref={featuresSectionRef} className="py-20 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4">
					<div
						className={`text-center mb-16 ${visibleSections.includes('features') ? 'animate-fade-in' : 'opacity-0'}`}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
							What We Do
						</h2>
						<div className="w-24 h-1 bg-tekOrange mx-auto mb-6"></div>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Discover the various initiatives and activities we're undertaking to foster tech
							growth and innovation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Events Card */}
						{loading ? (
							<SkeletonCard />
						) : (
							<div
								className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-100' : 'opacity-0'}`}
							>
								<div className="h-48 overflow-hidden">
									<img
										src="public/uploads/tektalentlogo.png"
										alt="Tech Events"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
										Events & Activities
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										From workshops to hackathons, we organize a variety of events to help you learn,
										connect, and grow your skills.
									</p>
									<Link to="/events">
										<Button
											variant="ghost"
											className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center"
										>
											Explore Events <ArrowRight size={16} className="ml-1" />
										</Button>
									</Link>
								</div>
							</div>
						)}

						{/* Projects Card */}
						{loading ? (
							<SkeletonCard />
						) : (
							<div
								className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-200' : 'opacity-0'}`}
							>
								<div className="h-48 overflow-hidden">
									<img
										src="public/uploads/tektalentlogo.png"
										alt="Tech Projects"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Projects</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										Explore our community projects and initiatives that are making a real impact in
										the tech ecosystem.
									</p>
									<Link to="/projects">
										<Button
											variant="ghost"
											className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center"
										>
											View Projects <ArrowRight size={16} className="ml-1" />
										</Button>
									</Link>
								</div>
							</div>
						)}

						{/* Blog Card */}
						{loading ? (
							<SkeletonCard />
						) : (
							<div
								className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-300' : 'opacity-0'}`}
							>
								<div className="h-48 overflow-hidden">
									<img
										src="public/uploads/tektalentlogo.png"
										alt="Tech Blog"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Blog</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										Insights, tutorials, and stories from our community members and tech experts in
										Africa and beyond.
									</p>
									<Link to="/blog">
										<Button
											variant="ghost"
											className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center"
										>
											Read Articles <ArrowRight size={16} className="ml-1" />
										</Button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Join Community CTA */}
			<section id="cta" ref={ctaSectionRef} className="py-20 bg-tekOrange text-white">
				<div className="container mx-auto px-4 text-center">
					<div
						className={`max-w-3xl mx-auto ${visibleSections.includes('cta') ? 'animate-fade-in' : 'opacity-0'}`}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
						<p className="text-lg mb-8">
							Be part of a growing community of tech enthusiasts, developers, and innovators.
							Together, we're building the future of technology in Africa.
						</p>
						<Button className="bg-white text-tekOrange hover:bg-gray-100 text-lg px-8 py-6">
							Get Started
						</Button>
					</div>
				</div>
			</section>

			<BackToTop />
		</div>
	);
};

export default Home;
