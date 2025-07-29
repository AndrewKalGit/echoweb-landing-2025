const Services = () => {
	return (
		<section id='services' className='py-10 mb-10 bg-gray-50/25'>
			<div className='container mx-auto px-4 xl:px-20'>
				<h1 className='flex justify-center py-2 text-4xl sm:text-5xl font-semibold text-gray-900'>
					Services
				</h1>
				<p className='text-center text-2xl flex justify-center text-gray-800'>
					How our building blocks work together to generate leads
				</p>
				<div className='mt-10 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8'>
					{[
						{
							icon: (
								<svg
									width='64'
									height='64'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
									<line x1='3' y1='9' x2='21' y2='9' />
									<line x1='9' y1='21' x2='9' y2='9' />
								</svg>
							),
							title: 'User Experience Design',
							desc: 'Informative and engaging text, images, and layouts that guide visitors to take action.',
						},
						{
							icon: (
								<svg
									width='64'
									height='64'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<circle cx='11' cy='11' r='8' />
									<line x1='21' y1='21' x2='16.65' y2='16.65' />
								</svg>
							),
							title: 'Search Visibility',
							desc: 'We research what people are searching for and align your content to match their intent.',
						},
						{
							icon: (
								<svg
									width='64'
									height='64'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
									<polyline points='7 10 12 15 17 10' />
									<line x1='12' y1='15' x2='12' y2='3' />
								</svg>
							),
							title: 'Conversion Strategy',
							desc: 'We developed 4+ lead generation tatics that work to convert visitors into leads.',
						},
						{
							icon: (
								<svg
									width='64'
									height='64'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M13 2v4h-2V2h2z' />
									<path d='M6.05 4.05l2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42z' />
									<path d='M2 13h4v-2H2v2z' />
									<path d='M4.05 17.95l2.83-2.83 1.42 1.42-2.83 2.83-1.42-1.42z' />
									<path d='M13 22v-4h-2v4h2z' />
									<path d='M17.95 19.95l-2.83-2.83 1.42-1.42 2.83 2.83-1.42 1.42z' />
									<path d='M22 11h-4v2h4v-2z' />
									<path d='M19.95 6.05l-2.83 2.83-1.42-1.42 2.83-2.83 1.42 1.42z' />
								</svg>
							),
							title: 'Ongoing Performance Optimization',
							desc: 'We continue to delpoy and optimize your funnel to ensure it is producing leads.',
						},
					].map((service) => (
						<div
							key={service.title}
							className='flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl min-w-full max-w-xs min-h-[200px]'>
							{service.icon}
							<h2 className='text-xl font-semibold text-gray-900 text-center'>
								{service.title}
							</h2>
							<p className='text-gray-700 text-sm text-center'>
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
