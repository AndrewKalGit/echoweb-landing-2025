'use client';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
	{
		name: 'Mike L.',
		role: 'Owner, Amoria Tea',
		text: `Echo Web did a fantastic job on our site Amoria Tea. They built out a custom contact form, SEO account setup, and great design to attract our customers. The owners are very friendly and work closely with you to build the site according to your needs.`,
	},
	{
		name: 'Yoku C.',
		role: 'Founder, Yoku Wellness',
		text: `Echo Web improved our SEO and helped increase customer bookings dramatically. Their setup brought in more consistent leads we could actually work with.`,
	},
	{
		name: 'Thomas R.',
		role: 'Owner, R. Family Musicians',
		text: `Andrew and his team at Echo bring a style of quality & ingenuity to every request & concern my company had. 150% customer satisfaction provided.`,
	},
];

const TestimonialGrid = () => {
	return (
		<section className='bg-white py-16 px-4 sm:px-8'>
			<div className='max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-3'>
				{testimonials.map((testimonial, i) => (
					<div
						key={i}
						className='rounded-2xl shadow-xl p-6 flex flex-col justify-around items-center text-center'>
						{/* Stars */}
						<div className='flex justify-center gap-1 mb-4'>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className='text-yellow-400 drop-shadow-md w-5 h-5 fill-yellow-400'
								/>
							))}
						</div>

						{/* Image */}
						{/* {testimonial.image && (
							<div className='mb-4'>
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={80}
									height={80}
									className='rounded-full shadow-md object-cover'
								/>
							</div>
						)} */}

						{/* Text */}
						<p className='text-gray-700 italic mb-4 line-clamp-4'>
							“{testimonial.text}”
						</p>

						{/* Name */}
						<div>
							<p className='text-lg font-semibold text-gray-900'>
								{testimonial.name}
							</p>
							<p className='text-sm text-gray-500'>{testimonial.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialGrid;
