import Footer from '../landing-components/footer';
import Header from '../landing-components/header';

const page = () => {
	return (
		<div>
			<Header></Header>
			<h1 className='pt-32 flex justify-center text-5xl font-semibold'>
				Privacy Policy
			</h1>
			<section className='flex flex-col justify-center pt-8 px-4'>
				<p className='mb-4'>
					Echo Web LLC (we, us, or our) respects your privacy. This Privacy
					Policy outlines how we collect, use, and protect your information when
					you use our website and services.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					1. Information We Collect
				</h2>
				<p className='mb-2'>
					We may collect the following types of information:
				</p>
				<ul className='list-disc list-inside mb-4'>
					<li>
						Personal information (name, email, phone) via forms or direct
						communication
					</li>
					<li>Business-related data (company name, industry, role)</li>
					<li>
						Usage data (IP address, browser type, pages visited, referral
						source)
					</li>
				</ul>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					2. How We Use Information
				</h2>
				<p className='mb-4'>We use your information to:</p>
				<ul className='list-disc list-inside mb-4'>
					<li>Respond to inquiries and provide services</li>
					<li>Improve our offerings and website experience</li>
					<li>
						Send updates, newsletters, or promotional materials (only with
						consent)
					</li>
				</ul>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					3. Sharing Your Information
				</h2>
				<p className='mb-4'>
					We do not sell or rent your personal information. We may share data
					with service providers or partners only as necessary to operate and
					improve our services.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					4. Cookies and Tracking
				</h2>
				<p className='mb-4'>
					Our site may use cookies to enhance user experience and gather usage
					data. You can disable cookies in your browser settings if preferred.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>5. Data Security</h2>
				<p className='mb-4'>
					We implement reasonable security measures to protect your data from
					unauthorized access, disclosure, or misuse.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>6. Your Rights</h2>
				<p className='mb-4'>
					You may request to access, update, or delete your personal data by
					contacting us. We will respond within a reasonable timeframe.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					7. Third-Party Links
				</h2>
				<p className='mb-4'>
					Our site may contain links to third-party websites. We are not
					responsible for their privacy practices or content.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					8. Updates to This Policy
				</h2>
				<p className='mb-4'>
					We may update this policy occasionally. Any changes will be posted
					here with an updated revision date.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>9. Contact</h2>
				<p className='mb-4'>
					For privacy-related questions or requests, contact us at
					contact@echoweb.design.
				</p>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default page;
