import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#215900] to-black">
			<section className="max-w-7xl mx-auto">
				<div className="pt-20 pb-24 lg:pb-0">
					<h4 className="uppercase text-white text-3xl opacity-0">
						Team
					</h4>
					<div className="flex flex-col mt-2 px-4 space-y-16 md:space-y-6 max-w-5xl mx-auto">
						<div className="flex flex-col items-center space-y-16 md:space-y-0 md:flex-row justify-between">
							<div className="relative h-48 w-48">
								<Image
									src="/assets/team/Shahid.png"
									layout="fill"
									objectFit="cover"
								/>
								<div className="uppercase absolute -bottom-14 text-lg left-1/2 -translate-x-1/2 w-full text-center">
									<span className="block">Shahid sheikh</span>
									<span className="block mt-2 text-white">
										-project lead-
									</span>
									<div className="">
										<Link href="https://www.linkedin.com/in/shahidznr/">
											<a
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/icons/linkedin.png"
													width={21}
													height={21}
													objectFit="contain"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="relative h-48 w-48">
								<Image
									src="/assets/team/Suhail.png"
									layout="fill"
									objectFit="cover"
								/>
								<div className="uppercase absolute -bottom-14 text-lg left-1/2 -translate-x-1/2 w-full text-center">
									<span className="block">
										Mohammed Suhail
									</span>
									<span className="block mt-2 text-white">
										-Lead 3D Artist-
									</span>
									<div className="">
										<Link href="https://www.linkedin.com/in/mohammed-suhail-a0859989/">
											<a
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/icons/linkedin.png"
													width={21}
													height={21}
													objectFit="contain"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="relative h-48 w-48">
								<Image
									src="/assets/team/Abhishek.png"
									layout="fill"
									objectFit="cover"
								/>
								<div className="uppercase absolute -bottom-14 text-lg left-1/2 -translate-x-1/2 w-full text-center">
									<span className="block">
										ABHISHEK thory
									</span>
									<span className="block mt-2 text-white">
										-Lead Developer-
									</span>
									<div className="">
										<Link href="https://www.linkedin.com/in/abhishek-thory">
											<a
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/icons/linkedin.png"
													width={21}
													height={21}
													objectFit="contain"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-16 md:space-y-0 md:flex-row justify-between pt-8">
							<div className="relative h-48 w-48">
								<Image
									src="/assets/team/Ijal.png"
									layout="fill"
									objectFit="cover"
								/>
								<div className="uppercase absolute -bottom-14 text-lg left-1/2 -translate-x-1/2 w-full text-center">
									<span className="block">Ijal Arifin</span>
									<span className="block mt-2 text-white">
										-Lead VFX Artist-
									</span>
									<div className="">
										<Link href="https://www.instagram.com/citra_studio_recording/">
											<a
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/icons/instagram.png"
													width={21}
													height={21}
													objectFit="contain"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-80 sm:w-96 text-white">
								<p className="text-sm max-w-sm text-justify font-sans">
									The team has passion-driven youngsters who
									have dedicated their lives to following
									their dream. Kid's from the 90s who dreamt
									of building a game that brings innovation in
									the arena. Starting their gaming life from
									Tekken and Mortal Kombat, they are committed
									to taking gaming to new heights.
								</p>
							</div>
							<div className="relative h-48 w-48">
								<Image
									src="/assets/team/Prajjwal.png"
									layout="fill"
									objectFit="cover"
								/>
								<div className="uppercase absolute -bottom-14 text-lg left-1/2 -translate-x-1/2 w-full text-center">
									<span className="block">Ujjwal Kumar</span>
									<span className="block mt-2 text-white w-80 -translate-x-14">
										-Business Development Manager-
									</span>
									<div className="">
										<Link href="https://www.linkedin.com/in/ujjwal-kumar-527bab224/">
											<a
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/icons/linkedin.png"
													width={21}
													height={21}
													objectFit="contain"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Team;
