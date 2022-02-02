import Image from 'next/image';

const Weapons = () => {
	return (
		<>
			<>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W1a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						KHOPESH
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W2a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						KOPIS
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W3a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						warhammer
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W4a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						SHURIKEN
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W5a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						MANICA
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W6a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						KATANA
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W7a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						FALX
					</p>
				</div>
				<div className="relative h-48 w-24">
					<Image
						src="/assets/Marketplace_img/W8a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						TANTO
					</p>
				</div>
				<div className="relative h-48 w-24 col-span-2 sm:col-span-1">
					<Image
						src="/assets/Marketplace_img/W9a.png"
						layout="fill"
						objectFit="contain"
					/>
					<p className="absolute text-white uppercase bottom-4 lg:bottom-3 left-1/2 -translate-x-1/2">
						SKULLAXE
					</p>
				</div>
			</>
		</>
	);
};

export default Weapons;
