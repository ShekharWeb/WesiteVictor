import style from './Home.module.css';

const HomePage = () => {
	return (
		<div className="h-screen">
			<section className="relative">
				<video
					data-autoplay
					autoPlay
					muted
					loop
					playsInline
					className="absolute left-0 object-cover w-full h-screen -z-50"
				>
					<source
						src="/assets/Home_Video_Final.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="flex justify-center">
					<h3
						className={`uppercase text-[#FF0000] pt-24 font-black text-2xl ${style.red_text}`}
					>
						A new chapter in the book of nft games
					</h3>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
