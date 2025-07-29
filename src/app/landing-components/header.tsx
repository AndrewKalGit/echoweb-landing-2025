'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
	const [hideNavbar, setHideNavbar] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef(null);
	const hamburgerButtonRef = useRef(null); // <== Added ref for burger button

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
				setHideNavbar(true);
			} else {
				setHideNavbar(false);
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	// Outside click handler
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const menuEl = mobileMenuRef.current as unknown as HTMLElement | null;
			const buttonEl =
				hamburgerButtonRef.current as unknown as HTMLElement | null;

			if (
				isMobileMenuOpen &&
				menuEl &&
				!menuEl.contains(event.target as Node) &&
				buttonEl &&
				!buttonEl.contains(event.target as Node)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	return (
		<header className='flex justify-center'>
			<div
				className={`fixed z-50 border-b mt-2 bg-white border-gray-200 rounded-xl shadow-sm w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] ${
					hideNavbar ? '-translate-y-full' : 'translate-y-0'
				} transition-transform duration-100 ease-in-out`}>
				<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<div className='flex-1 md:flex md:items-center md:gap-12'>
							<Link className='block text-gray-700' href='/'>
								<span className='sr-only'>Home</span>
								<Image
									src='/logo.png'
									alt='Logo'
									width={500}
									height={500}
									className='w-20'
								/>
							</Link>
						</div>

						<div className='md:flex md:items-center md:gap-12'>
							<nav aria-label='Global' className='hidden xl:block'>
								<ul className='flex items-center gap-6 text-sm'>
									<li>
										<a
											className='text-gray-700 transition hover:text-gray-700/75'
											href='#services'>
											Services
										</a>
									</li>
									<li>
										<a
											className='text-gray-700 transition hover:text-gray-700/75'
											href='#about'>
											About
										</a>
									</li>
									<li>
										<a
											className='text-gray-700 transition hover:text-gray-700/75'
											href='#case-studies'>
											Case Studies
										</a>
									</li>
									<li>
										<a
											className='text-gray-700 transition hover:text-gray-700/75'
											href='#contact'>
											Contact
										</a>
									</li>
								</ul>
							</nav>

							<div className='flex items-center gap-6'>
								<div className='sm:flex sm:gap-4'>
									<a
										className='rounded-sm hover:bg-blue-500/90 bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm'
										href='#booking'>
										Build My Funnel
									</a>
								</div>

								<div className='block xl:hidden'>
									<button
										ref={hamburgerButtonRef}
										onClick={() => setIsMobileMenuOpen((prev) => !prev)}
										className='rounded-sm border-2 border-gray-400 bg-gray-100 p-2 text-gray-800 transition hover:text-gray-700 hover:cursor-pointer'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='size-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth='2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>

					{isMobileMenuOpen && (
						<div
							ref={mobileMenuRef}
							className='xl:hidden mt-2 p-2 bg-white rounded-b-lg'>
							<ul className='flex flex-col gap-6 text-sm'>
								<li>
									<a
										className='text-gray-700 transition hover:text-gray-700/75'
										href='#services'>
										Services
									</a>
								</li>
								<li>
									<a
										className='text-gray-700 transition hover:text-gray-700/75'
										href='#about'>
										About
									</a>
								</li>
								<li>
									<a
										className='text-gray-700 transition hover:text-gray-700/75'
										href='#case-studies'>
										Case Studies
									</a>
								</li>
								<li className='mb-4'>
									<a
										className='text-gray-700 transition hover:text-gray-700/75'
										href='#contact'>
										Contact
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
