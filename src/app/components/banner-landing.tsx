'use client';

import { useState, useEffect } from 'react';

const Bannerlanding = () => {
	const [buzzWord, setBuzzWord] = useState<string[]>([
		'Leads',
		'Bookings',
		'Growth',
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setBuzzWord((prev) => {
				const newBuzzWord = [...prev];
				newBuzzWord.push(newBuzzWord.shift()!);
				return newBuzzWord;
			});
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className='bg-gradient-to-br pt-4 bg-gray-300 via-white to-blue-50 lg:grid lg:place-content-center'>
			<div className='bg-[url(/bannerbg.png)] bg-no-repeat bg-size-[820px] bg-right mx-auto min-h-[75vh] w-screen px-4 py-28 sm:px-32 sm:py-32'>
				<div className='w-[90vw] sm:w-[70vw] xl:w-[60vw] mx-auto text-center bg-white p-10 py-20 rounded-lg shadow-lg max-w-2xl'>
					<h1 className='text-5xl font-bold text-gray-900 xl:text-7xl'>
						More <strong className='text-blue-500'>{buzzWord[0]}</strong>
					</h1>
					<h2 className='text-5xl font-bold text-gray-900 xl:text-7xl'>
						Less Stress
					</h2>
					<p className='mt-4 text-lg text-pretty text-gray-700 sm:text-xl/relaxed'>
						Our landing page are engineered & optimized to drive appointments,
						bookings, and leads for your business.
					</p>
					<div className='mt-4 flex justify-center gap-4 sm:mt-6'>
						<a
							className='inline-block rounded-md border bg-blue-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-500/90'
							href='#'>
							Book a Free Consultation
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bannerlanding;
