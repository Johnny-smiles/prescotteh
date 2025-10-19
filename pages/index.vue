<template>
    <main class="flex flex-col bg-white">
        <!-- HERO (reuse your existing component) -->
        <HeroSection />

        <!-- Services (existing component) -->
        <section class="my-12 max-w-7xl mx-auto w-full px-6">
            <HomepageServices />
        </section>

        <!-- Why Choose {{SITE_NAME}} (value props) -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">Why Choose {{ siteConfig.siteName }}</h2>
                <p class="mt-2 text-neutral-600">Precision PDR with fast turnaround and OEM paint preserved.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(v, i) in siteConfig.valueProps" :key="'val-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <h3 class="font-semibold text-xl">{{ v.title }}</h3>
                    <p class="mt-2 text-neutral-600">{{ v.text }}</p>
                </div>
            </div>
        </section>

        <!-- About {{SITE_NAME}} -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold">About {{ siteConfig.siteName }}</h2>
                    <p class="mt-4 text-neutral-700">
                        We provide precision paintless dent repair to {{ siteConfig.location.city }} and the {{ siteConfig.serviceAreas }}.
                        Our process removes dents without repainting—keeping your finish factory-correct and your CarFax clean.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Get a Free Quote</NuxtLink>
                    </div>
                </div>
                <div class="rounded-xl overflow-hidden shadow-md">
                    <!-- Replace this with any local image -->
                    <NuxtImg src="/pdr-hero.jpg" alt="Paintless dent repair" class="w-full h-72 md:h-96 object-cover" />
                </div>
            </div>
        </section>

        <!-- Reviews -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(r, i) in siteConfig.reviews" :key="'rev-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <p class="text-neutral-700">“{{ r.text }}”</p>
                    <p class="mt-3 text-sm text-neutral-500">— {{ r.name }}</p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="my-12 md:my-16">
            <div class="max-w-7xl mx-auto w-full px-6">
                <div class="bg-brand-gradient rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold">Free Estimate & Fast Scheduling</h2>
                        <p class="mt-2 text-white/90">Text photos of the dent for the quickest quote.</p>
                    </div>
                    <div class="flex gap-3">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || siteConfig.phone }}</a>
                        <NuxtLink to="/contact" class="btn-accent text-black">Request Estimate</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold">FAQs</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(f, i) in siteConfig.faqs" :key="'faq-'+i" class="bg-white rounded-xl shadow-md p-6">
                    <h3 class="font-semibold text-lg">{{ f.q }}</h3>
                    <p class="mt-2 text-neutral-700">{{ f.a }}</p>
                </div>
            </div>
        </section>

        <!-- Service Areas -->
        <section class="my-12 md:my-16 max-w-7xl mx-auto w-full px-6">
            <div class="text-center mb-6">
                <h2 class="text-3xl md:text-4xl font-bold">Service Areas</h2>
                <p class="mt-2 text-neutral-600">We serve the {{ siteConfig.serviceAreas }}.</p>
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
        <span
            v-for="(area, i) in siteConfig.serviceAreas"
            :key="'area-'+i"
            class="chip"
        >{{ area }}</span>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import HeroSection      from '~/components/HeroSection.vue'
import HomepageServices from '~/components/HomepageServices.vue'
import { siteConfig }   from '~/site.config'
import { useHead }      from '#imports'

/* ------------------------------------------------------------------
   LocalBusiness structured data (kept from your electrician site)
-------------------------------------------------------------------*/
const structuredData = {
    '@context': 'https://schema.org',
    '@type':    'LocalBusiness',
    name:        siteConfig.siteName,
    url:         siteConfig.siteUrl,
    telephone:   siteConfig.phone,
    description: siteConfig.description,
    image:       siteConfig.socialImage || undefined,
    address: {
        '@type':           'PostalAddress',
        streetAddress:     siteConfig.location.street || undefined,
        addressLocality:   siteConfig.location.city,
        addressRegion:     siteConfig.location.state,
        postalCode:        siteConfig.location.zip,
        addressCountry:    siteConfig.location.country
    },
    openingHours: siteConfig.hours,
    geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
        '@type':    'GeoCoordinates',
        latitude:   siteConfig.location.latitude,
        longitude:  siteConfig.location.longitude
    } : undefined,
    areaServed: siteConfig.serviceAreas
}

useHead({
    script: [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }]
})
</script>

<style scoped>
.chip {
    display: inline-flex; align-items: center; gap: .5rem;
    border-radius: 9999px; padding: .35rem .75rem; font-size: .875rem;
    border: 1px solid rgba(0,0,0,.08); background: #fff;
}
</style>
