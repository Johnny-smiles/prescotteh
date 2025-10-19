<template>
    <!-- Variation: HomepageServices layout "staggered-panels" selected from catalog -->
    <section class="bg-brand-light/70 py-20">
        <div class="section-boxed space-y-12">
            <header class="max-w-3xl space-y-4">
                <p class="text-brand-accent uppercase tracking-[0.28em] text-sm">Full-Scope Service</p>
                <h2 class="text-3xl md:text-4xl leading-tight">Electrical upgrades, troubleshooting, and reliable heating & cooling.</h2>
                <p class="text-base text-brand-dark/80">
                    Our licensed crews cover every phase of your project—from planning and permitting to the final system check—so you can keep work and life running smoothly.
                </p>
            </header>

            <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
                <div class="grid gap-6 md:grid-cols-2">
                    <NuxtLink
                        v-for="service in featuredServices"
                        :key="service.slug"
                        :to="service.path"
                        class="group"
                    >
                        <div class="card-box h-full bg-white transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-card-soft">
                            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent mb-3">
                                {{ service.label }}
                            </p>
                            <h3 class="text-2xl font-semibold mb-3">{{ service.title }}</h3>
                            <p class="text-base text-brand-dark/75 mb-4">{{ service.summary }}</p>
                            <ul class="space-y-2 text-sm text-brand-dark/70">
                                <li
                                    v-for="(item, idx) in service.bullets"
                                    :key="`service-${service.slug}-${idx}`"
                                    class="flex items-start gap-2"
                                >
                                    <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </NuxtLink>
                </div>

                <aside class="card-box bg-white/80 backdrop-blur">
                    <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Need a custom project?</p>
                    <h3 class="mt-4 text-2xl font-semibold">Schedule a walk-through or remote consult.</h3>
                    <p class="mt-3 text-brand-dark/75">
                        From panel upgrades paired with HVAC installs to lighting design for growing businesses, we build plans that keep you safe, efficient, and within budget.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay }}</a>
                        <NuxtLink to="/services" class="btn-outline">View All Services</NuxtLink>
                    </div>
                    <div class="mt-6 rounded-3xl bg-brand-light/80 p-5 text-sm text-brand-dark/80">
                        <p class="font-semibold text-brand-accent">Popular pairings</p>
                        <ul class="mt-2 space-y-2">
                            <li v-for="combo in pairings" :key="combo">• {{ combo }}</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { services } from '~/data/services'
import { siteConfig } from '~/site.config'

const serviceMap = [
    {
        slug: 'service-a',
        targetSlug: 'residential-electrical',
        label: 'Home Electrical',
        path: '/services/service-a'
    },
    {
        slug: 'service-b',
        targetSlug: 'commercial-electrical',
        label: 'Commercial Projects',
        path: '/services/service-b'
    },
    {
        slug: 'service-c',
        targetSlug: 'heating-and-cooling',
        label: 'Heating & Cooling',
        path: '/services/service-c'
    }
]

const featuredServices = computed(() => {
    return serviceMap.map((item) => {
        const svc = services.find((service) => service.slug === item.targetSlug)
        return {
            ...item,
            title: svc?.title ?? 'Service',
            summary: svc?.summary ?? '',
            bullets: svc?.bullets?.slice(0, 3) ?? []
        }
    })
})

const pairings = [
    'Panel replacement with high-efficiency furnace install',
    'Lighting retrofit paired with mini-split zoning',
    'Generator transfer switch and surge protection'
]
</script>
