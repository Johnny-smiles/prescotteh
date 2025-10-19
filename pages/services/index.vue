<template>
    <main class="bg-white">
        <section class="bg-brand-gradient text-white">
            <div class="section-boxed py-16 md:py-20 space-y-6">
                <p class="text-sm uppercase tracking-[0.32em] text-white/80">Our Services</p>
                <h1 class="text-4xl md:text-5xl font-bold">Electrical &amp; HVAC expertise for every property.</h1>
                <p class="text-lg text-white/85 max-w-3xl">
                    From emergency troubleshooting to full system upgrades, Prescott Electric &amp; Heating keeps your power and comfort reliable across Prescott, River Falls, Hudson, and neighboring communities.
                </p>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20 space-y-12">
            <div class="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
                <div class="card-box bg-white shadow-card-soft space-y-4">
                    <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Why customers call us</p>
                    <ul class="space-y-3 text-brand-dark/75 text-sm">
                        <li class="flex gap-2">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            Licensed electricians and HVAC technicians coordinating every phase of your project
                        </li>
                        <li class="flex gap-2">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            Emergency dispatch plus preventative maintenance plans that keep equipment running
                        </li>
                        <li class="flex gap-2">
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            Clean work areas, transparent pricing, and inspection-ready craftsmanship
                        </li>
                    </ul>
                    <div class="pt-4 flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Request Service</NuxtLink>
                    </div>
                </div>

                <div class="services-grid md:grid-cols-2">
                    <NuxtLink
                        v-for="card in serviceCards"
                        :key="card.slug"
                        :to="card.path"
                        class="group"
                    >
                        <article class="card-box bg-white transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-card-soft h-full">
                            <p class="text-xs uppercase tracking-[0.32em] text-brand-accent mb-3">{{ card.label }}</p>
                            <h2 class="text-2xl font-semibold mb-3">{{ card.title }}</h2>
                            <p class="text-sm text-brand-dark/75 mb-4">{{ card.summary }}</p>
                            <ul class="space-y-2 text-sm text-brand-dark/65">
                                <li v-for="(item, idx) in card.bullets" :key="`card-${card.slug}-${idx}`" class="flex gap-2">
                                    <span class="mt-1 inline-flex size-1.5 rounded-full bg-brand-accent" />
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                            <span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                                View details
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </article>
                    </NuxtLink>
                </div>
            </div>

            <div class="rounded-3xl bg-brand-light/80 p-8 md:p-12">
                <div class="grid gap-8 md:grid-cols-3">
                    <div>
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Electrical</p>
                        <p class="mt-2 text-brand-dark/75">Panels, dedicated circuits, lighting design, generator hookups, and safety audits.</p>
                    </div>
                    <div>
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Heating &amp; Cooling</p>
                        <p class="mt-2 text-brand-dark/75">Furnaces, air conditioners, ductless mini-splits, heat pumps, and smart controls.</p>
                    </div>
                    <div>
                        <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Maintenance</p>
                        <p class="mt-2 text-brand-dark/75">Seasonal tune-ups, filter programs, and preventative inspections for homes and commercial sites.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '#imports'
import { services } from '~/data/services'
import { siteConfig } from '~/site.config'

const mapToPage = [
    { slug: 'residential-electrical', path: '/services/service-a', label: 'Residential' },
    { slug: 'commercial-electrical', path: '/services/service-b', label: 'Commercial' },
    { slug: 'heating-and-cooling', path: '/services/service-c', label: 'Heating & Cooling' }
]

const serviceCards = computed(() =>
    mapToPage.map((entry) => {
        const service = services.find((s) => s.slug === entry.slug)
        return {
            ...entry,
            title: service?.title ?? entry.label,
            summary: service?.summary ?? '',
            bullets: service?.bullets?.slice(0, 3) ?? []
        }
    })
)

useHead({
    title: `Services | ${siteConfig.siteName}`,
    meta: [
        {
            name: 'description',
            content: 'Explore electrical, commercial, and HVAC services from Prescott Electric & Heating. Serving Prescott, River Falls, Hudson, Hastings, Red Wing, and Cottage Grove.'
        }
    ]
})
</script>
