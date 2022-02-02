import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const GameIntro = () => {
	const [mute, setMute] = useState(true);

	return (
		<div className="h-screen">
			<section className="relative">
				<video
					id="video"
					muted={mute}
					data-autoplay
					autoPlay
					playsInline
					loop
					className="absolute left-0 object-cover w-full h-screen z-30"
				>
					<source src="/assets/GV_INTRO_2022.mp4" type="video/mp4" />
				</video>
			</section>
			<div className="absolute bottom-14 right-14 z-50">
				<div
					className="cursor-pointer"
					onClick={() => {
						mute ? setMute(false) : setMute(true);
						console.log(mute);
					}}
				>
					{mute ? (
						<VolumeOffIcon className="text-white h-8 w-8 opacity-50 md:hover:opacity-75" />
					) : (
						<VolumeUpIcon className="text-white h-8 w-8 opacity-50 md:hover:opacity-75" />
					)}
				</div>
			</div>
			<div className="absolute w-full h-full bg-black top-0 left-0 -z-10"></div>
		</div>
	);
};

export default GameIntro;
