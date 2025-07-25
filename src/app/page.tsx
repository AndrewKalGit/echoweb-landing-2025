import Header from './landing-components/header';
import Banner from './landing-components/banner-landing';
import Aboutsectionlanding from './landing-components/about-section-landing';
import Footer from './landing-components/footer';
import Services from './landing-components/services-section-landing';
import Contact from './landing-components/contact-section-landing';
import Booking from './landing-components/booking-section-landing';
import Testimonials from './landing-components/testimonials-section-landing';
import Leadform from './landing-components/lead-gen-form';
import Casestudies from './landing-components/case-studies';

export default function Home() {
	return (
		<main>
			<Header></Header>
			<Banner></Banner>
			<Services></Services>
			<Aboutsectionlanding></Aboutsectionlanding>
			<Casestudies></Casestudies>
			<Testimonials></Testimonials>
			<Booking></Booking>
			<Leadform></Leadform>
			<Contact></Contact>
			<Footer></Footer>
		</main>
	);
}
