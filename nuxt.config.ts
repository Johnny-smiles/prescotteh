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

    // <head> config for Vogt Electric
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Vogt Electric — {{HERO_HEADLINE}}',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Vogt Electric is a locally owned electrical contractor serving homeowners and businesses across the Twin Cities. From panel upgrades to lighting and EV charger installations, we deliver safe, reliable, and efficient electrical solutions.'
                },
                { name: 'robots', content: 'index, follow' },

                /* Open Graph */
                { property: 'og:title',       content: 'Vogt Electric — {{HERO_HEADLINE}}' },
                { property: 'og:description', content: 'Vogt Electric is a locally owned electrical contractor serving homeowners and businesses across the Twin Cities. From panel upgrades to lighting and EV charger installations, we deliver safe, reliable, and efficient electrical solutions.' },
                { property: 'og:image',       content: 'https://www.vogtelectric.com/og-image.jpg' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:url',         content: 'https://www.vogtelectric.com' },
                { property: 'og:type',        content: 'website' },

                /* Twitter */
                { name: 'twitter:card',        content: 'summary_large_image' },
                { name: 'twitter:title',       content: 'Vogt Electric — {{HERO_HEADLINE}}' },
                { name: 'twitter:description', content: 'Vogt Electric is a locally owned electrical contractor serving homeowners and businesses across the Twin Cities. From panel upgrades to lighting and EV charger installations, we deliver safe, reliable, and efficient electrical solutions.' },
                { name: 'twitter:image',       content: 'https://www.vogtelectric.com/og-image.jpg' }
            ],
            link: [
                { rel: 'canonical', href: 'https://www.vogtelectric.com' },

                // Fonts (no @nuxtjs/google-fonts needed)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap'
                },

                // Favicon
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ],
            script: [
                /* Plausible Analytics (new domain) */
                {
                    src: 'https://plausible.io/js/script.js',
                    defer: true,
                    'data-domain': '{{ANALYTICS_DOMAIN}}'
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
        url: 'https://www.vogtelectric.com',
        name: 'Vogt Electric'
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
            siteName: 'Vogt Electric',
            siteUrl: 'https://www.vogtelectric.com'
        }
    }
})
