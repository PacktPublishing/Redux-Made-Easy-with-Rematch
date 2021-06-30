const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1600px',
			},
			gridTemplateColumns: {
				'0\/5': '1fr 0.5fr'
			}
		},
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: [
				'Inter',
				...defaultTheme.fontFamily.sans
			]
		}
	},
	darkMode: false,
};
