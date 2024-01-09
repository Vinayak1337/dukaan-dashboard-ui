import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#353C53'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			spacing: {
				26: '6.5rem',
				27: '6.75rem',
        28: '7rem',
        37: '9.25rem',
        38: '9.5rem',
				81: '20.25rem',
				82: '20.5rem',
				83: '20.75rem',
				84: '21rem',
				85: '21.25rem',
				86: '21.5rem',
				87: '21.75rem',
				88: '22rem',
				89: '22.5rem',
				90: '23rem',
				91: '23.5rem',
				100: '25rem'
			}
		}
	},
	plugins: []
};
export default config;
