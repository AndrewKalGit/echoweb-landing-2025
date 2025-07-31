'use client';
import { useEffect } from 'react';

declare global {
	interface Window {
		Calendly?: {
			initBadgeWidget: (options: {
				url: string;
				text: string;
				color: string;
				textColor: string;
				branding: boolean;
			}) => void;
			initPopupWidget: (options: { url: string }) => void;
		};
	}
}

const CalendlyBooking = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);

		window.onload = function () {
			if (typeof window.Calendly !== 'undefined') {
				// Floating badge
				window.Calendly.initBadgeWidget({
					url: 'https://calendly.com/contact-echoweb/book',
					text: 'Schedule time with me',
					color: '#0069ff',
					textColor: '#ffffff',
					branding: true,
				});
			}
		};
	}, []);

	return (
		<section id='booking' className='bg-white py-16 px-4 sm:px-8'>
			<div className='max-w-3xl mx-auto text-center mb-8'>
				<h2 className='text-4xl font-bold text-gray-900 mb-2'>
					Book a Discovery Call
				</h2>
				<p className='text-gray-600 text-xl mb-6'>
					Let&apos;s talk about your goals and how we can build a system that
					delivers more leads, consistently and with less stress.
				</p>
			</div>
			<div
				className='calendly-inline-widget w-full mx-auto max-w-3xl'
				data-url='https://calendly.com/contact-echoweb/book?hide_event_type_details=1&hide_gdpr_banner=1'
				style={{ minWidth: '320px', height: '600px' }}
			/>
			<div className='flex justify-center mt-4'>
				<a
					target='_blank'
					className='inline-block'
					href='https://calendly.com/contact-echoweb/book'>
					<button
						aria-label='Open Calendly booking popup'
						className='bg-blue-500 font-semibold text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-400 transition w-auto min-w-[200px]'>
						Open Full Calendar
					</button>
				</a>
			</div>
		</section>
	);
};

export default CalendlyBooking;
