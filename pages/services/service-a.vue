<template>
    <main class="bg-brand-light/60">
        <section class="bg-brand-gradient text-white">
            <div class="section-boxed py-16 md:py-20">
                <div class="max-w-3xl space-y-4">
                    <p class="text-sm uppercase tracking-[0.32em] text-white/80">Residential Service</p>
                    <h1 class="text-4xl md:text-5xl font-bold">{{ service.title }}</h1>
                    <p class="text-lg text-white/85">{{ service.intro }}</p>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start">
                <div class="space-y-6">
                    <h2 class="text-3xl font-semibold text-brand-dark">What we deliver</h2>
                    <ul class="space-y-3 text-brand-dark/80">
                        <li v-for="(point, idx) in service.bullets" :key="`bullet-${idx}`" class="flex gap-3">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="rounded-3xl bg-white p-6 shadow-card-soft">
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">How it works</p>
                        <p class="mt-3 text-brand-dark/75">
                            We start with a safety inspection, evaluate your load needs, and review upgrade options on-site. Every project includes permitting, clean installation work, and a final walkthrough.
                        </p>
                    </div>
                </div>

                <aside class="card-box bg-white">
                    <h3 class="text-2xl font-semibold mb-4">Need help fast?</h3>
                    <p class="text-brand-dark/75 mb-6">
                        {{ service.cta }}
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Request Service</NuxtLink>
                    </div>
                    <div class="mt-8 rounded-3xl bg-brand-light/80 p-5 text-sm text-brand-dark/75">
                        <p class="font-semibold text-brand-accent">Serving</p>
                        <p>{{ serviceAreas }}</p>
                    </div>
                </aside>
            </div>
        </section>

        <section class="section-boxed pb-16 md:pb-20">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl">Residential electrical FAQs</h2>
                <p class="mt-2 text-brand-dark/70">Clear answers for Prescott, River Falls, Hudson, and nearby neighborhoods.</p>
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
import { computed } from 'vue'
import { useHead } from '#imports'
import { siteConfig } from '~/site.config'

const service = {
    slug: 'residential-electrical',
    title: 'Residential Electrical Services',
    intro: 'Keep your Prescott home safe and efficient with licensed electricians who upgrade panels, add circuits, and solve nuisance trips without guesswork.',
    bullets: [
        'Panel replacements, load balancing, and grounding',
        'Outlet, lighting, EV charger, and generator installs',
        'Whole-home surge protection and safety inspections'
    ],
    cta: 'Book your in-home assessment today.',
    faqs: [
        {
            q: 'How quickly can you respond to an outage?',
            a: 'Emergency calls are prioritized the same day whenever possible. We stabilize the issue first and schedule permanent repairs right after.'
        },
        {
            q: 'Do you handle permits for panel upgrades?',
            a: 'Yes. Our team prepares the paperwork, submits it to the city, and coordinates inspections so everything passes the first time.'
        },
        {
            q: 'Can you install smart devices and EV chargers?',
            a: 'Absolutely. We install and configure smart switches, EV charging stations, and backup monitors with clean wiring ready for future expansion.'
        }
    ]
}

const serviceAreas = computed(() => (siteConfig.serviceAreas || []).join(', '))

const metaDescription = 'Licensed residential electricians for panel upgrades, lighting, EV chargers, and surge protection in Prescott, River Falls, and Hudson.'

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
