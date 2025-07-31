'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Testimonials from './testimonials-section-landing';

const buzzWords = ['Leads', 'Bookings', 'Growth'];

const Bannerlanding = () => {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false); // start fade out
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % buzzWords.length);
				setFade(true); // fade in after word change
			}, 300); // fade out duration
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='bg-gradient-to-br from-gray-50 via-white to-blue-100 flex flex-col lg:flex-row items-center justify-center min-h-[75vh] px-4 py-20 sm:px-16 bg-gray-100 pt-30'>
			{/* Left: CTA Content */}
			<div className='min-w-[45vw] flex justify-center'>
				<div className='text-center lg:text-left p-10 py-20'>
					<h1 className='text-5xl font-bold text-gray-900 xl:text-7xl'>
						More <br />
						<strong
							className={`inline-block text-blue-500 transition-all duration-300 ease-in-out drop-shadow-2xl min-w-[7ch] ${
								fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
							}`}>
							{buzzWords[index]}
						</strong>
					</h1>
					<h2 className='text-4xl font-bold text-gray-700 xl:text-6xl'>
						Less Stress
					</h2>
					<p className='mt-4 text-pretty text-gray-700 text-lg/relaxed xl:text-2xl/relaxed'>
						Funnels that attract more leads. <br /> Sales you own. System we
						manage.
					</p>
					<div className='mt-4 flex justify-center lg:justify-start gap-4 sm:mt-6'>
						<a
							className='inline-block rounded-md border bg-blue-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-500/90'
							href='#'>
							Build My Funnel
						</a>
					</div>
				</div>
			</div>

			{/* Right: Image */}
			<div className='lg:min-w-[30vw]'>
				<Image
					src='/bannerbg.webp'
					alt='Banner Image'
					quality={100}
					width={500}
					height={500}
					loading='eager'
					placeholder='blur'
					blurDataURL='/bannerbg.webp'
					className='pt-8 drop-shadow-2xl max-w-full h-auto'
					priority
				/>
			</div>
		</section>
	);
};

export default Bannerlanding;
