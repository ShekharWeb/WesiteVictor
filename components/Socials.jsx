import Link from 'next/link';
import Telegram from './Icons/Telegram';
import Facebook from './Icons/Facebook';
import Twitter from './Icons/Twitter';
import Youtube from './Icons/Youtube';

const Socials = (props) => {
	return (
		<>
			<div className={`flex flex-${props.flex} ${props.classProperty}`}>
				<Link href="https://www.youtube.com/channel/UCROtuij0ENpYGgihkfw_95g">
					<a target="_blank">
						<Youtube className="fill-slate-100 md:hover:fill-purple-600 md:hover:scale-125 md:active:scale-105 transition-all duration-200 ease-out" />
					</a>
				</Link>
				<Link href="https://t.me/guerdonvictor">
					<a target="_blank">
						<Telegram className="fill-slate-100 md:hover:fill-purple-600 md:hover:scale-125 md:active:scale-105 transition-all duration-200 ease-out" />
					</a>
				</Link>
				<Link href="https://twitter.com/guerdonvictor">
					<a target="_blank">
						<Twitter className="fill-slate-100 md:hover:fill-purple-600 scale-125 md:hover:scale-150 md:active:scale-125 transition-all duration-200 ease-out" />
					</a>
				</Link>
				<Link href="https://www.facebook.com/GuerdonVictor/">
					<a target="_blank">
						<Facebook className="fill-slate-100 md:hover:fill-purple-600 md:hover:scale-125 md:active:scale-105 transition-all duration-200 ease-out" />
					</a>
				</Link>
			</div>
		</>
	);
};

export default Socials;
