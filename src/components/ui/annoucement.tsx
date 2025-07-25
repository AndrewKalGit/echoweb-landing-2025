//To Do:
// 1. Add a dismiss button to the announcement bar
// 2. Ensure the announcement bar is styled consistently with the header
// 3. Make sure the announcement bar is responsive and works well on mobile devices
// 4. Test the announcement bar functionality across different browsers
// 5. Consider adding a close animation for better user experience
// 6. Ensure the announcement bar does not interfere with the header navigation
// 7. Add accessibility features to the announcement bar, such as ARIA roles and labels

const Annoucement = () => {
	return (
		<div className='fixed flex w-full z-100 items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2 text-gray-900'>
			<span> </span>

			<p className='text-center font-medium'>
				Lorem, ipsum dolor
				<a href='#' className='inline-block underline'>
					{' '}
					sit amet consectetur{' '}
				</a>
			</p>

			<button
				type='button'
				aria-label='Dismiss'
				className='rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='size-5'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18 18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	);
};

export default Annoucement;
