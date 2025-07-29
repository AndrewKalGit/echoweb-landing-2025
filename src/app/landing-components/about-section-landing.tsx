import aboutimg from '../../../public/aboutsectionimg.webp';
import Image from 'next/image';

const Aboutsectionlanding = () => {
	return (
		<section className='bg-gradient-to-br bg-gray-50 via-white to-blue-50'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8'>
					<div>
						<div className='max-w-lg md:max-w-none'>
							<h2 className='text-4xl font-semibold text-gray-900 sm:text-6xl drop-shadow-2xl'>
								About Echo Web, LLC
							</h2>

							<p className='mt-4 text-gray-700 text-2xl'>
								We are a web agency specializing in generating leads. We focus
								on creating user-friendly websites that convert visitors into
								leads.
							</p>
							<ul className='mt-6 space-y-2 text-gray-700 text-lg sm:text-xl'>
								<li className='hover:shadow-2xl pt-4 bg-white shadow-lg p-10 rounded-sm'>
									<h3 className='font-semibold text-2xl'>Techniques:</h3>
									<p>
										We use scripts to capture key B2B data, direct methods like
										instant booking, contact forms for deeper inquiries, and
										lead magnet forms to attract interest.
									</p>
								</li>
								<li className='hover:shadow-2xl pt-4 bg-white shadow-lg p-8 rounded-sm'>
									<h3 className='font-semibold text-2xl'>Tools:</h3>
									<p>
										We use a variety of tools to ensure that your website is
										generating leads. Google anlaytics, Google Search Console,
										Calendly, Apollo, Next.js, React and more.
									</p>
								</li>
								<li className='hover:shadow-2xl pt-4 bg-white shadow-lg p-8 rounded-sm'>
									<h3 className='font-semibold text-2xl'>Strategy:</h3>
									<p>
										We start by understanding your needs and your customers pain
										points. We then use this insight to build personalized lead
										funnels, connecting strategy with the right tools.
									</p>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<Image
							src={aboutimg}
							className='rounded-full'
							alt='about section image'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Aboutsectionlanding;
