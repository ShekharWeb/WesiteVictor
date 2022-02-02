const CharacterVideo2 = () => {
	return (
		<>
			<video
				data-autoplay
				autoPlay
				muted
				loop
				className="absolute left-0 object-cover w-full h-screen -z-50"
				playsInline
			>
				<source
					src={`/characters/Marketplace/Gholug.mp4`}
					type="video/mp4"
				/>
			</video>
		</>
	);
};

export default CharacterVideo2;
