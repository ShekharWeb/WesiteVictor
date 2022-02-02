import { useEffect, useState } from 'react';
import CharacterVideo1 from './CharacterVideo/CharacterVideo1';
import CharacterVideo2 from './CharacterVideo/CharacterVideo2';
import CharacterVideo3 from './CharacterVideo/CharacterVideo3';
import CharacterVideo4 from './CharacterVideo/CharacterVideo4';
import CharacterVideo5 from './CharacterVideo/CharacterVideo5';
import CharacterVideo6 from './CharacterVideo/CharacterVideo6';
import CharacterVideo7 from './CharacterVideo/CharacterVideo7';
import CharacterVideo8 from './CharacterVideo/CharacterVideo8';
import CharacterVideo9 from './CharacterVideo/CharacterVideo9';

const Characters = () => {
	const text = [
		{
			primary: 'The blood hunter',
			secondary: 'beware of Durzum if you want to live.',
		},
		{
			primary: 'The angry one',
			secondary: 'death frights the Gholug.',
		},
		{
			primary: 'The Saviour of Earth',
			secondary: "Klog is the enemy's bad luck.",
		},
		{
			primary: 'The Hope Conqueror',
			secondary: 'the last words you speak before death.',
		},
		{
			primary: 'The Evil Messiah',
			secondary: 'beware of Snakha he knows your secrets.',
		},
		{
			primary: 'The Master of Victory',
			secondary: 'there is only one master.',
		},
		{
			primary: 'The Violent one',
			secondary: 'Enemies pray for mercy.',
		},
		{
			primary: 'The Vicious Hero',
			secondary: 'the ultimate battle hero.',
		},
		{
			primary: 'The Fire hearted',
			secondary: 'the lion of the jungle.',
		},
	];

	const [appState, setAppState] = useState({
		objects: [
			{ id: 1, toggled: true },
			{ id: 2, toggled: false },
			{ id: 3, toggled: false },
			{ id: 4, toggled: false },
			{ id: 5, toggled: false },
			{ id: 6, toggled: false },
			{ id: 7, toggled: false },
			{ id: 8, toggled: false },
			{ id: 9, toggled: false },
		],
	});

	const [characterText, setCharacterText] = useState({
		primary: 'The blood hunter',
		secondary: 'beware of Durzum if you want to live.',
	});

	const [bgVideo, setBgVideo] = useState(1);

	function toggleActive(index) {
		let arrayCopy = [
			{ id: 1, toggled: false },
			{ id: 2, toggled: false },
			{ id: 3, toggled: false },
			{ id: 4, toggled: false },
			{ id: 5, toggled: false },
			{ id: 6, toggled: false },
			{ id: 7, toggled: false },
			{ id: 8, toggled: false },
			{ id: 9, toggled: false },
		];

		arrayCopy[index].toggled = true;

		setAppState({ objects: arrayCopy });
	}

	const changeVideo = () => {
		if (bgVideo === 1) return <CharacterVideo1 />;
		if (bgVideo === 2) return <CharacterVideo2 />;
		if (bgVideo === 3) return <CharacterVideo3 />;
		if (bgVideo === 4) return <CharacterVideo4 />;
		if (bgVideo === 5) return <CharacterVideo5 />;
		if (bgVideo === 6) return <CharacterVideo6 />;
		if (bgVideo === 7) return <CharacterVideo7 />;
		if (bgVideo === 8) return <CharacterVideo8 />;
		if (bgVideo === 9) return <CharacterVideo9 />;
	};

	useEffect(() => {
		// console.log('----Start----');
		appState.objects.forEach((value, index) => {
			if (value.toggled) {
				setCharacterText(text[index]);
				return 0;
			}
		});
		// console.log('----End----');
	}, [appState]);

	return (
		<>
			<div className="h-screen relative">
				<section className="relative h-screen z-20">
					<section className="relative">{changeVideo()}</section>
					<div className="flex justify-start px-8">
						<h3
							className={`uppercase text-white pt-24 text-3xl opacity-0`}
						>
							Characters
						</h3>
					</div>
					<div className="flex flex-col items-end -mt-4 space-y-1 px-8">
						<button
							className={`${
								appState.objects[0].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-blue-700 to-purple-700 text-white'
							} px-4 py-2 text-2xl uppercase -skew-x-12 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(0);
								setBgVideo(1);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Durzum
							</div>
						</button>
						<button
							className={`${
								appState.objects[1].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-purple-700 to-blue-700 text-white'
							} px-4 py-2 text-2xl uppercase -skew-x-12 -translate-x-3 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(1);
								setBgVideo(2);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Gholug
							</div>
						</button>
						<button
							className={`${
								appState.objects[2].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-blue-700 to-purple-700 text-white'
							}  px-4 py-2 text-2xl uppercase -skew-x-12 -translate-x-6 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(2);
								setBgVideo(3);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Klog
							</div>
						</button>
						<button
							className={`${
								appState.objects[3].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-purple-700 to-blue-700 text-white'
							}  px-4 py-2 text-2xl uppercase skew-x-12 -translate-x-6 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(3);
								setBgVideo(4);
							}}
						>
							<div className="-skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Orakh
							</div>
						</button>
						<button
							className={`${
								appState.objects[4].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-blue-700 to-purple-700 text-white'
							}  px-4 py-2 text-2xl uppercase skew-x-12 -translate-x-3 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(4);
								setBgVideo(5);
							}}
						>
							<div className="-skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Snakha
							</div>
						</button>
						<button
							className={`${
								appState.objects[5].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-purple-700 to-blue-700 text-white'
							}  px-4 py-2 text-2xl uppercase skew-x-12 translate-x-0 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(5);
								setBgVideo(6);
							}}
						>
							<div className="-skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Sumhug
							</div>
						</button>
						<button
							className={`${
								appState.objects[6].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-blue-700 to-purple-700 text-white'
							}  px-4 py-2 text-2xl uppercase -skew-x-12 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(6);
								setBgVideo(7);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Varbu
							</div>
						</button>
						<button
							className={`${
								appState.objects[7].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-purple-700 to-blue-700 text-white'
							}  px-4 py-2 text-2xl uppercase -skew-x-12 -translate-x-3 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(7);
								setBgVideo(8);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Viggu
							</div>
						</button>
						<button
							className={`${
								appState.objects[8].toggled
									? 'text-black bg-white'
									: 'bg-gradient-to-b from-blue-700 to-purple-700 text-white'
							}  px-4 py-2 text-2xl uppercase -skew-x-12 -translate-x-6 w-40 transition-all duration-200 ease-out md:hover:opacity-90`}
							onClick={() => {
								toggleActive(8);
								setBgVideo(9);
							}}
						>
							<div className="skew-x-12 md:hover:scale-95 md:active:scale-105 transition-all duration-200 ease-out">
								Xunag
							</div>
						</button>
					</div>
					<div className="absolute bottom-6 lg:bottom-4 left-16 lg:left-20 text-white">
						<p className="text-xl">
							&ldquo;{characterText.primary}&rdquo;
						</p>
						<p className="text-sm">{characterText.secondary}</p>
					</div>
				</section>
				<div className="absolute top-0 left-0 h-screen w-full bg-black -z-10"></div>
			</div>
		</>
	);
};

export default Characters;
