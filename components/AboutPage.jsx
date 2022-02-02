import Image from 'next/image';

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#5700C2] to-black flex justify-center items-center">
			<section className="max-w-6xl mx-auto xl:flex px-16 xl:px-2 pt-24 xl:justify-between xl:items-center">
				<div className="basis-2/3 text-white space-y-6 lg:space-y-2">
					<div className="space-y-3 lg:space-y-2">
						<h5 className="text-xl text-[#FF0000]">
							INTRODUCTION TO 'GUERDON VICTOR'
						</h5>
						<p className="font-sans text-xs text-justify max-w-3xl">
							It's is one of the best skill based PvP NFT Combat
							Game based on new reward model K2E (Kill-to-Earn)
							which captures the essence of classic games like
							Tekken and Mortal Kombat. It is built on Binance
							Smart Chain Network and is developed in Unreal
							Engine. Here you can earn rewards based on your
							strategy, intellectual gameplay, and proper
							engagement.
						</p>
						<p className="font-sans text-xs text-justify max-w-3xl">
							The game has made quite a fresh entry into the NFT
							gaming zone. The main idea behind the game
							development is entertainment and involvement of the
							gamers. To provide the gamers with the best combat
							gaming experiences, there will be new features added
							to the game periodically. So the players can remain
							engaged, and the game becomes even more interesting.
						</p>
					</div>
					<div className="space-y-3 lg:space-y-2">
						<h5 className="text-xl text-[#FF0000]">GAME MODEL</h5>
						<p className="font-sans text-xs text-justify max-w-3xl">
							Unlike Play-to-Earn NFT games, this game gives you
							the opportunity to have a stable earning and a
							reliable currency. You don't have to do any
							breeding, farming, planting, staking, hatching,
							lending, etc.
						</p>
						<p className="font-sans text-xs text-justify max-w-3xl">
							Each player will stake one '$VICT' coin to play the
							game and winner will be rewarded by opponent's coin.
							There will be 3 levels in the fight, the winner of 2
							rounds will be the "VICTOR".
						</p>
					</div>
					<div className="flex flex-col sm:flex-row justify-between md:justify-evenly items-center space-y-8 sm:space-y-0">
						<div className="relative h-40 w-40 sm:h-32 sm:w-32 md:h-36 md:w-36">
							<Image
								src="/assets/about/about_04.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative h-40 w-40 sm:h-32 sm:w-32 md:h-36 md:w-36">
							<Image
								src="/assets/about/about_05.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative h-40 w-40 sm:h-32 sm:w-32 md:h-36 md:w-36">
							<Image
								src="/assets/about/about_06.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
				<div className="basis-1/3 py-12 xl:py-0">
					<div className="grid lg:hidden xl:grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 place-items-center space-y-8 sm:space-y-0">
						<div className="relative h-60 w-60 sm:h-52 sm:w-52 sm:col-span-2 place-items-center">
							<Image
								src="/assets/about/about_01.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative h-60 w-60 sm:h-52 sm:w-52">
							<Image
								src="/assets/about/about_02.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative h-60 w-60 sm:h-52 sm:w-52">
							<Image
								src="/assets/about/about_03.svg"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
