// tailwind.config.js
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#1A1A1A', // charcoal body text
                'brand-primary': '#118AB2', // electric teal
                'brand-primary-2': '#1CA4C6', // light teal glow
                'brand-accent': '#0B6E7E', // deep sea accent
                'brand-light': '#F5F7FA', // cool mist background
                'brand-muted': '#D7E4EB'
            },
            fontFamily: {
                heading: ['Russo One', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            container: { center: true, padding: '1.75rem' },
            borderRadius: {
                '2xl': '1.5rem',
                pill: '999px'
            },
            boxShadow: {
                card: '0 24px 48px -28px rgba(17,138,178,0.45)',
                'card-soft': '0 16px 32px -20px rgba(26,26,26,0.25)'
            },
            backgroundImage: {
                'brand-radial': 'radial-gradient(circle at 15% 20%, rgba(28,164,198,0.28), transparent 55%), radial-gradient(circle at 85% 40%, rgba(11,110,126,0.32), transparent 60%)'
            },
            keyframes: {
                'fade-in': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            },
            animation: { 'fade-in': 'fade-in 0.9s ease-out forwards' },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            // Safely stringify a font stack regardless of array/string form
            const toStack = (v, fallback) => {
                if (Array.isArray(v)) return v.join(',');
                if (typeof v === 'string') return v;
                return fallback;
            };

            const body = theme('fontFamily.body');
            const heading = theme('fontFamily.heading');

            addBase({
                'html, body': {
                    fontFamily: toStack(body, 'Inter,system-ui,sans-serif'),
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                },
                'h1,h2,h3,h4,h5,h6': {
                    fontFamily: toStack(heading, 'Montserrat,sans-serif'),
                    lineHeight: '1.2',
                    fontWeight: '700',
                },
            });
        }),
    ],
}
