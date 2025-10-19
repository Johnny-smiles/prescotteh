// nuxt.config.ts
export default defineNuxtConfig({
    // SSR + static output
    ssr: true,
    nitro: {
        preset: 'static',
        prerender: {
            crawlLinks: true,
            failOnError: false, // keep going even if some links/images 404 during crawl
            ignore: [
                '/_ipx/**',   // ignore IPX-transformed URLs
                '/privacy',   // add these pages later
                '/terms'
            ]
            // If you want to lock down to explicit pages only, set crawlLinks:false and add routes:[...]
        }
    },

    // <head> config for Prescott Electric & Heating
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Prescott Electric & Heating — Electrical & HVAC in Prescott, WI',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Prescott Electric & Heating provides licensed electrical and HVAC service for homes and small businesses across Prescott, River Falls, Hudson, and the St. Croix River Valley.'
                },
                { name: 'robots', content: 'index, follow' },

                /* Open Graph */
                { property: 'og:title',       content: 'Prescott Electric & Heating — Electrical & HVAC in Prescott, WI' },
                { property: 'og:description', content: 'Reliable electricians and HVAC technicians serving Prescott, River Falls, Hudson, and nearby communities since 1963.' },
                { property: 'og:image',       content: 'https://prescotteh.com/og-image.jpg' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:url',         content: 'https://prescotteh.com' },
                { property: 'og:type',        content: 'website' },

                /* Twitter */
                { name: 'twitter:card',        content: 'summary_large_image' },
                { name: 'twitter:title',       content: 'Prescott Electric & Heating — Electrical & HVAC in Prescott, WI' },
                { name: 'twitter:description', content: 'Full-service electrical and heating/cooling support throughout Prescott and the St. Croix Valley.' },
                { name: 'twitter:image',       content: 'https://prescotteh.com/og-image.jpg' }
            ],
            link: [
                { rel: 'canonical', href: 'https://prescotteh.com' },

                // Fonts (no @nuxtjs/google-fonts needed)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Russo+One&display=swap'
                },

                // Favicon
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ],
            script: [
                /* Plausible Analytics (new domain) */
                {
                    src: 'https://plausible.io/js/script.js',
                    defer: true,
                    'data-domain': 'prescotteh.com'
                },
                /* Google Tag Manager - handled in components for better compatibility */
            ]
        }
    },

    // Nuxt Image (IPX)
    image: {
        provider: 'ipx',
        quality: 75,
        screens: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
        formats: 'webp'
    },

    // Global CSS (your brand + utility classes live here)
    css: ['~/assets/main.css'],

    modules: [
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
        cssPath: '~/assets/main.css',
        configPath: 'tailwind.config.js'
    },

    // Sitemap (module uses this for absolute URLs)
    site: {
        url: 'https://prescotteh.com',
        name: 'Prescott Electric & Heating, Inc.'
        // You can customize routes/exclude later if needed
    },

    // Compatibility date
    compatibilityDate: '2025-04-10',
    
    // Dev server configuration
    devServer: {
        port: 3000
    },
    
    // Runtime config to avoid serialization issues
    runtimeConfig: {
        public: {
            siteName: 'Prescott Electric & Heating, Inc.',
            siteUrl: 'https://prescotteh.com'
        }
    }
})
