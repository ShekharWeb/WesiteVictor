import Characters from '../components/Characters';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import HomePage from '../components/HomePage';
import MarketPlace from '../components/MarketPlace';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import GameIntro from '../components/GameIntro';
import AboutPage from '../components/AboutPage';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="/Favicon.ico" />
				<title>
					Guerdon Vicor - A new chapter in the book of NFT Games
				</title>
				<meta
					name="description"
					content="A PvP Combat game based on K2E (Kill-to-Earn) model. NO Breeding, Planting, Farming, Hatching, Staking, etc,. A NFT game with forever fixed reward!"
				/>
				<meta
					name="keywords"
					content="Guerdon Victor,Guerdon,Victor,NFT,Blockchain,Blockchain Games,NFT Game,NFT Games,Play to earn,P2E Game,P2E Games, Play and earn,NFT,NFT,ICO,IDO,PlaytoEarn,NFT2022,Game 2022"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-J9VMRGEVC5"
				></script>
			</Head>
			{/* <main className="block xl:hidden">
				<HomePage />
				<Characters />
				<MarketPlace />
				<Roadmap />
				<Team />
			</main> */}
			<main className="">
				<ReactFullpage
					licenseKey={'C371640E-52EF4F02-848C959F-2A407D92'}
					anchors={[
						'home',
						'about',
						'game-intro',
						'characters',
						'marketplace',
						'roadmap',
						'team',
					]}
					menu="#menu"
					responsiveWidth={1023}
					render={({ state, fullpageApi }) => {
						return (
							<>
								<ReactFullpage.Wrapper className="fp-auto-height-responsive">
									<main
										className="section"
										data-anchor="home"
									>
										<HomePage />
									</main>
									<main
										className="section"
										data-anchor="about"
									>
										<AboutPage />
									</main>
									<main
										className="section"
										data-anchor="game-intro"
									>
										<GameIntro />
									</main>
									<main
										className="section"
										data-anchor="characters"
									>
										<Characters />
									</main>
									<main
										className="section"
										data-anchor="marketplace"
									>
										<MarketPlace />
									</main>
									<main
										className="section"
										data-anchor="roadmap"
									>
										<Roadmap />
									</main>
									<main
										className="section"
										data-anchor="team"
									>
										<Team />
									</main>
								</ReactFullpage.Wrapper>
							</>
						);
					}}
				/>
			</main>
		</>
	);
}
