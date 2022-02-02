const WeaponsCard = () => {
	return (
		<div>
			<div className="relative h-60 w-40">
				<Image
					src="/assets/Marketplace_img/06a.png"
					layout="fill"
					objectFit="contain"
				/>
				<p
					className={`absolute uppercase text-xl bottom-4 lg:bottom-0 left-1/2 -translate-x-1/2 text-${white}`}
				>
					sumhug
				</p>
			</div>
			<div className="flex items-center justify-center">
				<button className="bg-[#9B0000] w-32 -translate-x-1 px-2 -skew-x-12 py-1 text-lg text-white">
					<span className="skew-x-12">Buy - $149 busd</span>
				</button>
			</div>
		</div>
	);
};

export default WeaponsCard;
