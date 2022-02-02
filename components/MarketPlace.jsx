import Ocrs from './Ocrs';
import Weapons from './Weapons';
import { useRouter } from 'next/router';

const MarketPlace = () => {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-gradient-to-b to-[#A35200] from-black">
			<section className="max-w-7xl mx-auto xl:flex xl:flex-col xl:h-screen xl:justify-center">
				<div className="pt-20">
					<h4 className="uppercase text-white text-3xl border-b-slate-50 border-b-2">
						Orcs
					</h4>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center lg:flex lg:flex-row px-4 space-x-2 lg:justify-between text-sm lg:text-base">
						<Ocrs />
					</div>
				</div>
				<div className="mt-2">
					<h4 className="uppercase text-white text-3xl border-b-slate-50 border-b-2">
						weapons
					</h4>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center lg:flex lg:flex-row px-4 space-x-2 lg:justify-between text-sm lg:text-base">
						<Weapons />
					</div>
				</div>
				<div
					className="flex mt-2 justify-center items-center"
					// onClick={() => router.push('/realmarketplace')}
				>
					<p className="uppercase text-2xl text-black translate-x-2 z-30">
						opening
					</p>
					<p className="uppercase text-7xl text-white -translate-x-1 z-10">
						soon!
					</p>
				</div>
			</section>
		</div>
	);
};

export default MarketPlace;
