import Image from 'next/image';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Socials from './Socials';

const Navbar = () => {
	const [open, setOpen] = useState(true);
	const openNavlist = () => (!open ? setOpen(true) : setOpen(false));
	const router = useRouter();

	return (
		<>
			<div className="bg-transparent fixed top-0 left-0 w-full z-50">
				<div className="max-w-8xl mx-auto relative">
					<div className="flex items-center justify-between px-8 py-4">
						<div
							onClick={() => router.push('/')}
							className="relative h-20 w-40 md:h-10 md:w-24 lg:h-12 lg:w-28 xl:h-16 xl:w-36 cursor-pointer"
						>
							<Image
								src="/assets/GV-Logo.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="hidden lg:block">
							<ul
								className={`flex space-x-6 text-white -translate-x-6`}
								id="menu"
							>
								{router.pathname === '/' ? (
									<>
										<li data-menuanchor="home">
											<a
												href="#home"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												HOME
											</a>
										</li>
										<li data-menuanchor="about">
											<a
												href="#about"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												ABOUT
											</a>
										</li>
										<li data-menuanchor="game-intro">
											<a
												href="#game-intro"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												Game intro
											</a>
										</li>
										<li data-menuanchor="characters">
											<a
												href="#characters"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												Characters
											</a>
										</li>
										<li data-menuanchor="marketplace">
											<a
												href="#marketplace"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												MarketPlace
											</a>
										</li>
										<li data-menuanchor="roadmap">
											<a
												href="#roadmap"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												Roadmap
											</a>
										</li>
										<li data-menuanchor="team">
											<a
												href="#team"
												className={`uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												team
											</a>
										</li>
									</>
								) : (
									<>
										<li>
											<span
												onClick={() => router.push('/')}
												className={` cursor-pointer uppercase md:text-base xl:text-lg md:hover:text-purple-600 transition-all duration-200 ease-out`}
											>
												HOME
											</span>
										</li>
									</>
								)}
								<li>
									<a
										// href="https://drive.google.com/file/d/1bKCaGdTTAULur87K6ixyrF_hMJ7puCJ0/preview"
										href="https://drive.google.com/file/d/1xxpB51MyOmIxD9GzBpJB4ypJeG6IaVcU/preview"
										target="_blank"
										className="uppercase md:text-base xl:text-lg text-white md:hover:text-purple-600 transition-all duration-200 ease-out cursor-pointer"
									>
										Whitepaper
									</a>
								</li>
							</ul>
						</div>
						{open ? (
							<MenuAlt3Icon
								onClick={openNavlist}
								className="inline lg:hidden h-10 w-10 cursor-pointer text-white"
							/>
						) : (
							<XIcon
								onClick={openNavlist}
								className="inline lg:hidden h-10 w-10 cursor-pointer text-white"
							/>
						)}
						<div className="hidden lg:block">
							<button>
								<span></span>
							</button>
						</div>
						{/* Navbar for mobile */}
						{!open && (
							<div className="absolute top-0 left-0 z-40 lg:hidden">
								<div className="flex flex-col justify-evenly space-y-4 items-center w-72 sm:w-96 h-screen bg-indigo-900">
									<ul className="text-lg flex flex-col items-center text-gray-100 space-y-4 mt-20">
										<div
											onClick={() => {
												router.push('/');
												openNavlist();
											}}
											className="relative h-28 w-52 -mt-28"
										>
											<Image
												src="/assets/GV-Logo.png"
												layout="fill"
												objectFit="contain"
											/>
										</div>
										<li
											onClick={() => {
												setOpen(true);
											}}
											className="cursor-pointer"
										>
											<a href="#home">home</a>
										</li>
										<li
											onClick={() => {
												setOpen(true);
											}}
											className="cursor-pointer"
										>
											<a href="#about">about</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={openNavlist}
										>
											<a href="#game-intro">game intro</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={() => {
												setOpen(true);
											}}
										>
											<a href="#characters">characters</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={openNavlist}
										>
											<a href="#marketplace">
												marketplace
											</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={openNavlist}
										>
											<a href="#roadmap">roadmap</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={openNavlist}
										>
											<a href="#team">team</a>
										</li>
										<li
											className="cursor-pointer"
											onClick={openNavlist}
										>
											<a
												// href="https://drive.google.com/file/d/1bKCaGdTTAULur87K6ixyrF_hMJ7puCJ0/preview"
												href="https://drive.google.com/file/d/1xxpB51MyOmIxD9GzBpJB4ypJeG6IaVcU/preview"
												target="_blank"
											>
												whitepaper
											</a>
										</li>
										<div className="w-full flex justify-center pt-20">
											<Socials
												flex="row"
												classProperty="space-x-6 mx-auto"
											/>
										</div>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
