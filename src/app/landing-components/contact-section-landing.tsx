import Image from 'next/image';
import contactImg from '../../../public/contact.webp';

const Contact = () => {
	return (
		<section id='contact'>
			<h1 className='flex justify-center text-5xl font-semibold mt-10 text-gray-800'>
				Contact
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto p-8'>
				<Image
					src={contactImg}
					alt='Visual Summary of Our Services'
					className='rounded-lg w-full h-auto drop-shadow-2xl'
				/>
				<form className='shadow-lg mt-4 p-8 roudned-lg bg-white'>
					<h2 className='text-2xl font-semibold mb-4 text-gray-800'>
						More Questions?
					</h2>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
