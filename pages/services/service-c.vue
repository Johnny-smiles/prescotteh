<template>
    <main class="bg-brand-light/60">
        <section class="bg-brand-gradient text-white">
            <div class="section-boxed py-16 md:py-20">
                <div class="max-w-3xl space-y-4">
                    <p class="text-sm uppercase tracking-[0.32em] text-white/80">Heating &amp; Cooling</p>
                    <h1 class="text-4xl md:text-5xl font-bold">{{ service.title }}</h1>
                    <p class="text-lg text-white/85">{{ service.intro }}</p>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start">
                <div class="space-y-6">
                    <h2 class="text-3xl font-semibold text-brand-dark">Comfort solutions</h2>
                    <ul class="space-y-3 text-brand-dark/80">
                        <li v-for="(point, idx) in service.bullets" :key="`bullet-${idx}`" class="flex gap-3">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="rounded-3xl bg-white shadow-card-soft p-6">
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Performance check</p>
                        <p class="mt-3 text-brand-dark/75">
                            Each install includes airflow balancing, thermostat calibration, and a full equipment rundown so you know how to operate and maintain your system.
                        </p>
                    </div>
                </div>

                <aside class="card-box bg-white">
                    <h3 class="text-2xl font-semibold mb-4">Stay comfortable year-round</h3>
                    <p class="text-brand-dark/75 mb-6">
                        {{ service.cta }}
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Request Tune-up</NuxtLink>
                    </div>
                    <div class="mt-8 rounded-3xl bg-brand-light/80 p-5 text-sm text-brand-dark/75">
                        <p class="font-semibold text-brand-accent">We service</p>
                        <ul class="mt-2 space-y-2">
                            <li v-for="item in equipment" :key="item">• {{ item }}</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>

        <section class="section-boxed pb-16 md:pb-20">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl">Heating &amp; cooling FAQs</h2>
                <p class="mt-2 text-brand-dark/70">Straight talk for Wisconsin winters and humid summers.</p>
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
    slug: 'heating-and-cooling',
    title: 'Heating & Cooling Services',
    intro: 'Install, replace, and maintain furnaces, air conditioners, and ductless systems that keep your space comfortable through Prescott winters and humid summers.',
    bullets: [
        'High-efficiency furnace and air conditioner installs',
        'Ductless mini-splits, heat pumps, and smart thermostats',
        'Seasonal tune-ups, filter programs, and emergency repairs'
    ],
    cta: 'Request your comfort check today.',
    faqs: [
        {
            q: 'Do you service all major HVAC brands?',
            a: 'Yes. We work on most manufacturer models and can source parts quickly through our distributor network.'
        },
        {
            q: 'Can you add zones to my existing system?',
            a: 'We install ductless mini-splits or add smart dampers to create separate comfort zones without major renovations.'
        },
        {
            q: 'How often should I schedule maintenance?',
            a: 'Plan for furnace service each fall and air conditioner tune-ups each spring. Regular care extends equipment life and keeps warranties intact.'
        }
    ]
}

const equipment = [
    'Gas & electric furnaces',
    'Central air conditioners',
    'Heat pumps & mini-splits',
    'Air quality accessories'
]

const metaDescription = 'Heating and cooling experts for furnace installs, AC service, ductless mini-splits, and seasonal maintenance across Prescott, River Falls, and Hudson.'

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
