import Footer from '../landing-components/footer';
import Header from '../landing-components/header';

const page = () => {
	return (
		<main>
			<Header></Header>
			<h1 className='pt-32 flex justify-center text-5xl font-semibold'>
				Terms and Conditions
			</h1>
			<section className='flex flex-col justify-center pt-8 px-4'>
				<p className='mb-4'>
					These Terms and Conditions (Terms) govern your use of our website and
					services. By accessing or using our site, you agree to these Terms.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>1. Use of Services</h2>
				<p className='mb-4'>
					You agree to use our services only for lawful purposes and not to
					infringe on the rights of others or disrupt the operation of our site.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					2. Intellectual Property
				</h2>
				<p className='mb-4'>
					All content on our site (text, graphics, code, etc.) is owned by Echo
					Web LLC or its licensors and protected by copyright and other laws.
					You may not copy or use it without written permission.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					3. Payments and Refunds
				</h2>
				<p className='mb-4'>
					Payment terms are outlined in your individual service agreement. We do
					not guarantee refunds unless stated explicitly in your contract.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>
					4. Limitation of Liability
				</h2>
				<p className='mb-4'>
					Echo Web LLC is not liable for any indirect, incidental, or
					consequential damages resulting from your use of our services.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>5. Termination</h2>
				<p className='mb-4'>
					We reserve the right to terminate access to our site or services at
					our discretion, without notice, if we believe you have violated these
					Terms.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>6. Governing Law</h2>
				<p className='mb-4'>
					These Terms are governed by the laws of the State of New Jersey,
					without regard to its conflict of laws principles.
				</p>

				<h2 className='text-xl font-semibold mt-6 mb-2'>7. Contact</h2>
				<p className='mb-4'>
					For questions about these Terms, contact us at contact@echoweb.design.
				</p>
			</section>
			<Footer></Footer>
		</main>
	);
};

export default page;
