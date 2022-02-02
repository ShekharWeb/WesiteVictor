import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Socials from '../components/Socials';
import NavbarRealmarketplace from '../components/NavbarRealmarketplace';
import Loader from '../components/Loader';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import * as gtag from '../lib/gtag';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 7000);
	}, []);

	return (
		<>
			<RecoilRoot>
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>
				<Script
					id="gtag-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>
				{isLoading ? (
					<Loader />
				) : (
					<>{router.pathname === '/' && <Navbar />}</>
				)}
				<Component {...pageProps} />
				<div className="fixed left-6 bottom-8">
					<Socials flex="col" classProperty="space-y-4" />
				</div>
			</RecoilRoot>
		</>
	);
}

export default MyApp;
