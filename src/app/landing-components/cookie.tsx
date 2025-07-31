'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const accepted = localStorage.getItem('cookieAccepted');
		const declined = localStorage.getItem('cookieDeclined');
		const timestamp = localStorage.getItem('cookieAcceptedAt');

		// Show banner if neither accepted nor declined
		if (!accepted && !declined) {
			setVisible(true);
			return;
		}

		// Re-consent after 12 months if previously accepted
		if (accepted && timestamp) {
			const now = Date.now();
			const acceptedAt = parseInt(timestamp);
			const oneYear = 365 * 24 * 60 * 60 * 1000;
			if (now - acceptedAt > oneYear) {
				setVisible(true);
			}
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookieAccepted', 'true');
		localStorage.setItem('cookieAcceptedAt', Date.now().toString());
		localStorage.removeItem('cookieDeclined');
		setVisible(false);
	};

	const handleDecline = () => {
		localStorage.setItem('cookieDeclined', 'true');
		localStorage.removeItem('cookieAccepted');
		localStorage.removeItem('cookieAcceptedAt');
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className='fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-white border border-gray-300 rounded-lg shadow-md p-4 sm:p-6 text-xs sm:text-base flex flex-col sm:flex-row items-center justify-between gap-4'>
			<p className='text-gray-700'>
				We use cookies to improve your experience.
				<Link
					href='/privacy'
					className='text-blue-600 underline hover:text-blue-800 transition'>
					{' '}
					Privacy Policy
				</Link>
				.
			</p>
			<div className='flex gap-2'>
				{/* <button
					onClick={handleDecline}
					className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition font-semibold text-sm sm:text-base'>
					Opt Out
				</button> */}
				<button
					onClick={handleAccept}
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition font-semibold text-sm sm:text-base'>
					Got it
				</button>
			</div>
		</div>
	);
};

export default CookieBanner;
