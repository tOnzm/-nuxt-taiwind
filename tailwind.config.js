/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js}',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.{js,vue,ts}',
        './pages/**/*.{js,vue,ts}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        container: {
            center: true,
        },
        borderWidth: {
            DEFAULT: '0.1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
            8: '8px',
        },

        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            purple: '#3f3cbb',
            midnight: '#121063',
            metal: '#565584',
            tahiti: '#3ab7bf',
            silver: '#ecebff',
            'bubble-gum': '#ff77e9',
            bermuda: '#78dcca',
            primary: '#FB6445',
            black: '#000000',
            gray200: '#e5e7eb',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    plugins: [require('flowbite/plugin')],
}
