import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	keywords: [
		'Web Designer',
		'Web Development',
		'SEO',
		'Booking System',
		'Web Design',
		'Bookig Website',
		'Web Design Services',
		'Edison NJ Web Design',
		'New Jersey Web Design',
	],
	openGraph: {
		title: 'Echoweb Design',
		description: 'Web Design and Development Services',
		url: 'https://echoweb.design',
		siteName: 'Echoweb Design',
		type: 'website',
		locale: 'en_US',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
