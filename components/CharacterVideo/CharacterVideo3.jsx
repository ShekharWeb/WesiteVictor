const CharacterVideo3 = () => {
	return (
		<>
			<video
				data-autoplay
				autoPlay
				muted
				loop
				playsInline
				className="absolute left-0 object-cover w-full h-screen -z-50"
			>
				<source
					src={`/characters/Marketplace/Klog.mp4`}
					type="video/mp4"
				/>
			</video>
		</>
	);
};

export default CharacterVideo3;
