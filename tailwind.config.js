module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			height: {
				108: '27rem',
				120: '30rem',
				132: '33rem',
				144: '36rem',
			},
			width: {
				108: '27rem',
				120: '30rem',
				132: '33rem',
				144: '36rem',
				156: '39rem',
				168: '42rem',
				180: '45rem',
				192: '48rem',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
