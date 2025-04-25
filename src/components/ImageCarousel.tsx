import React from 'react';

interface CarouselProps {
	images: string[];
	direction: 'left' | 'right';
	className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, direction, className }) => {
	const duplicatedImages = [...images, ...images];

	return (
		<div className={`carousel-container ${className}`}>
			<div
				className={`carousel-track ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'} flex`}
			>
				{duplicatedImages.map((image, index) => (
					<div key={index} className="flex-shrink-0 p-1">
						<img
							src={image}
							alt={`Carousel image ${index + 1}`}
							className="rounded-lg h-40 w-64 object-cover shadow-md"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
