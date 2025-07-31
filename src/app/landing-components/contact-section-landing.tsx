'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import contactImg from '../../../public/contact.webp';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>('');

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!selectedOption) {
			setError(true);
			return;
		}

		if (form.current) {
			emailjs
				.sendForm(
					'service_da526jo',
					'template_tftl6qj',
					form.current,
					'pWK-1B7t6ZNPqH79e'
				)
				.then(
					() => {
						setSent(true);
						setError(false);
						form.current?.reset();
						setSelectedOption('');
					},
					() => {
						setError(true);
					}
				);
		}
	};

	return (
		<section id='contact' className='py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-center text-4xl sm:text-6xl font-semibold text-gray-800 mb-4 drop-shadow-2xl'>
					Let&apos;s Connect
				</h1>
				<p className='text-center text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto'>
					Whether you&apos;re exploring if we&apos;re a fit or want a better
					understanding of how we generate qualified leads, we&apos;d love to
					hear from you.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='w-full h-auto'>
						<Image
							src={contactImg}
							alt='Contact Echo Web'
							className='rounded-xl w-full h-auto drop-shadow-2xl'
						/>
					</div>

					<form
						ref={form}
						onSubmit={sendEmail}
						className='bg-white rounded-xl shadow-xl p-8 space-y-6 w-full'>
						{/* Form Header */}
						<h2 className='text-2xl font-semibold text-gray-800 mb-4'>
							Send Us a Message
						</h2>
						{sent && (
							<p className='text-green-600 font-medium'>
								Thanks! We&apos;ll be in touch shortly.
							</p>
						)}
						{error && (
							<p className='text-red-600 font-medium'>
								Something went wrong. Please try again.
							</p>
						)}

						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'>
								Name*
							</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								className='mt-2 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'>
								Email address*
							</label>
							<input
								type='email'
								id='email'
								name='email'
								required
								className='mt-2 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
							/>
						</div>

						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-700'>
								Phone
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								className='mt-2 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
							/>
						</div>

						{/* Selectable Options */}
						<div>
							<label className='font-semibold block text-sm text-gray-700 mb-2'>
								What would you like to learn more about?*
							</label>
							<div className='flex gap-4'>
								<input
									type='hidden'
									name='inquiry'
									value={selectedOption}
									readOnly
								/>

								<div
									onClick={() =>
										setSelectedOption('Are we the right fit for your business?')
									}
									className={`shadow border-gray-200 border-2 text-sm cursor-pointer flex-1 px-4 py-6 rounded-lg text-center font-medium transition ${
										selectedOption === 'Are we the right fit for your business?'
											? 'bg-blue-500 text-white'
											: ''
									}`}>
									Are We a Fit?
								</div>

								<div
									onClick={() =>
										setSelectedOption(
											'How does your lead generation system work?'
										)
									}
									className={`shadow border-gray-200 border-2  text-sm cursor-pointer flex-1 px-4 py-6 rounded-lg text-center font-medium transition ${
										selectedOption ===
										'How does your lead generation system work?'
											? 'bg-blue-500 text-white'
											: ''
									}`}>
									Lead System Questions
								</div>
							</div>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								rows={4}
								className='mt-2 block w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
							/>
						</div>

						<div>
							<button
								type='submit'
								className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-400 transition-all duration-200 font-semibold disabled:opacity-60 disabled:cursor-not-allowed'
								disabled={sent || error}>
								{sent ? 'Sent!' : 'Send Message'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
