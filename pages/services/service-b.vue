<template>
    <main class="bg-white">
        <section class="bg-brand-gradient text-white">
            <div class="section-boxed py-16 md:py-20">
                <div class="max-w-3xl space-y-4">
                    <p class="text-sm uppercase tracking-[0.32em] text-white/80">Commercial Service</p>
                    <h1 class="text-4xl md:text-5xl font-bold">{{ service.title }}</h1>
                    <p class="text-lg text-white/85">{{ service.intro }}</p>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start">
                <div class="space-y-6">
                    <h2 class="text-3xl font-semibold text-brand-dark">Solutions for busy facilities</h2>
                    <ul class="space-y-3 text-brand-dark/80">
                        <li v-for="(point, idx) in service.bullets" :key="`bullet-${idx}`" class="flex gap-3">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="rounded-3xl bg-brand-light/70 p-6">
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">On your schedule</p>
                        <p class="mt-3 text-brand-dark/75">
                            We work nights or weekends when needed, coordinate with your GC or facilities manager, and keep work zones safe for staff and guests.
                        </p>
                    </div>
                </div>

                <aside class="card-box bg-white shadow-card-soft">
                    <h3 class="text-2xl font-semibold mb-4">Let’s plan your project</h3>
                    <p class="text-brand-dark/75 mb-6">
                        {{ service.cta }}
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Book a Walk-through</NuxtLink>
                    </div>
                    <div class="mt-8 rounded-3xl border border-brand-muted/60 p-5 text-sm text-brand-dark/75">
                        <p class="font-semibold text-brand-accent">Common projects</p>
                        <ul class="mt-2 space-y-2">
                            <li v-for="item in highlights" :key="item">• {{ item }}</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>

        <section class="section-boxed pb-16 md:pb-20">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl">Commercial electrical FAQs</h2>
                <p class="mt-2 text-brand-dark/70">Support for retailers, offices, schools, light industrial, and more.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
                <div
                    v-for="(faq, idx) in service.faqs"
                    :key="`faq-${idx}`"
                    class="card-box bg-white shadow-none border border-brand-muted/50"
                >
                    <h3 class="text-xl font-semibold mb-2">{{ faq.q }}</h3>
                    <p class="text-brand-dark/75 text-sm">{{ faq.a }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import { siteConfig } from '~/site.config'

const service = {
    slug: 'commercial-electrical',
    title: 'Commercial Electrical Projects',
    intro: 'Reliable electricians for tenant build-outs, lighting upgrades, and maintenance across Prescott, River Falls, Hudson, and the entire St. Croix River Valley.',
    bullets: [
        'Tenant improvements, new circuits, and gear upgrades',
        'Lighting retrofits, controls, and energy reporting',
        'Maintenance programs for offices, schools, and shops'
    ],
    cta: 'Schedule a site walk-through today.',
    faqs: [
        {
            q: 'Can you work outside regular business hours?',
            a: 'Yes. We frequently schedule evening or weekend work to keep your operations running without interruption.'
        },
        {
            q: 'Do you help with design-build projects?',
            a: 'We collaborate with architects and general contractors to design electrical layouts, calculate loads, and deliver as-built documentation.'
        },
        {
            q: 'Are your crews trained for safety compliance?',
            a: 'Our technicians follow OSHA and NFPA 70E standards, provide lockout/tagout procedures, and maintain proper PPE on every job.'
        }
    ]
}

const highlights = [
    'Service upgrades with equipment installation',
    'Restaurant and retail remodels',
    'Lighting controls and occupancy sensors'
]

const metaDescription = 'Commercial electrical contractors for tenant build-outs, lighting retrofits, and maintenance throughout Prescott, River Falls, Hudson, and nearby communities.'

useHead({
    title: `${service.title} | ${siteConfig.siteName}`,
    meta: [
        { name: 'description', content: metaDescription }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                '@id': `${siteConfig.siteUrl}/services/${service.slug}#service`,
                name: service.title,
                serviceType: service.title,
                description: metaDescription,
                provider: {
                    '@type': siteConfig.businessType || 'LocalBusiness',
                    name: siteConfig.siteName,
                    telephone: siteConfig.phone
                },
                areaServed: siteConfig.serviceAreas,
                url: `${siteConfig.siteUrl}/services/${service.slug}`
            })
        }
    ]
})
</script>
