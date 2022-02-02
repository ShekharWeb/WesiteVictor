const CharacterVideo8 = () => {
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
					src={`/characters/Marketplace/Viggu.mp4`}
					type="video/mp4"
				/>
			</video>
		</>
	);
};

export default CharacterVideo8;
