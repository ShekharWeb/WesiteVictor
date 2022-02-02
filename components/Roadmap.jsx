import Image from 'next/image';

const Roadmap = () => {
	return (
		<>
			<div className="h-full bg-gradient-to-b from-[#9C022B] to-black">
				<section className="max-w-7xl mx-auto">
					<div className="pt-20">
						<h4 className="uppercase text-white text-3xl opacity-0">
							Roadmap page
						</h4>
						<div className="relative h-132 w-192 mx-auto -mt-12 hidden lg:block">
							<Image src="/assets/RoadMap.svg" layout="fill" />
							<div className="absolute bottom-12 -left-10 text-white text-center text-sm">
								<div>Q4-2021</div>
								<div className="mt-20">
									<p className="border-b-2 border-b-red-700">
										Idea assessment
									</p>
									<p className="border-b-2 border-b-red-700">
										Research
									</p>
									<p>Team Development</p>
								</div>
							</div>
							<div className="absolute top-24 left-[13.5rem] text-white text-center text-sm">
								<div>Q1-2022</div>
								<div className="mt-28">
									<p className="border-b-2 border-b-red-700">
										Project Planning
									</p>
									<p className="border-b-2 border-b-red-700">
										Website Launch
									</p>
									<p>NFT Sales</p>
								</div>
							</div>
							<div className="absolute bottom-12 right-[11.6rem] text-white text-center text-sm">
								<div>Q1-2022</div>
								<div className="mt-20">
									<p className="border-b-2 border-b-red-700">
										IGO LAUNCH
									</p>
									<p className="border-b-2 border-b-red-700">
										Marketplace Launch
									</p>
									<p>Game Play Trailer</p>
								</div>
							</div>
							<div className="absolute top-24 -right-11 text-white text-center text-sm">
								<div>Q1-2022</div>
								<div className="mt-28">
									<p className="border-b-2 border-b-red-700">
										Game V 1.0 Release
									</p>
									<p className="border-b-2 border-b-red-700">
										Pet NFT Sales
									</p>
									<p>Game V 2.0 Release</p>
								</div>
							</div>
						</div>
						<div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-2xl py-8 px-6">
							<div className="text-center space-y-2 border-2 rounded-xl border-red-700 py-8">
								<h2 className="text-2xl text-gray-200">
									Q3-2021
								</h2>
								<div className="h-24 w-24 relative mx-auto -translate-x-2">
									<Image
										src="/assets/RoadMapImg.svg"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="text-lg text-gray-300">
									<p>Idea assessment</p>
									<p>Research</p>
									<p>Team Development</p>
								</div>
							</div>
							<div className="text-center space-y-2 border-2 rounded-xl border-red-700 py-8">
								<h2 className="text-2xl text-gray-200">
									Q4-2021
								</h2>
								<div className="h-24 w-24 relative mx-auto -translate-x-2">
									<Image
										src="/assets/RoadMapImg.svg"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="text-lg text-gray-300">
									<p>Project Planning</p>
									<p>website launch</p>
									<p>NFT sales</p>
								</div>
							</div>
							<div className="text-center space-y-2 border-2 rounded-xl border-red-700 py-8">
								<h2 className="text-2xl text-gray-200">
									Q1-2022
								</h2>
								<div className="h-24 w-24 relative mx-auto -translate-x-2">
									<Image
										src="/assets/RoadMapImg.svg"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="text-lg text-gray-300">
									<p>IGO launch</p>
									<p>Marketplace launch</p>
									<p>Game play trailer</p>
								</div>
							</div>
							<div className="text-center space-y-2 border-2 rounded-xl border-red-700 py-8">
								<h2 className="text-2xl text-gray-200">
									Q1-2022
								</h2>
								<div className="h-24 w-24 relative mx-auto -translate-x-2">
									<Image
										src="/assets/RoadMapImg.svg"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="text-lg text-gray-300">
									<p>Game V 1.0 Release</p>
									<p>Pet NFT Sales</p>
									<p>Game V 2.0 Release</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Roadmap;
