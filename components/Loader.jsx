import Image from 'next/image';

const Loader = () => {
	return (
		<div className="z-50 min-h-screen bg-black fixed min-w-full top-0 left-0 w-screen flex justify-center items-center">
			<Image
				height={256}
				width={256}
				objectFit="cover"
				src="/GV_Loading.gif"
				alt="loading animation"
			/>
		</div>
	);
};

export default Loader;
