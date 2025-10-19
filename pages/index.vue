<template>
    <main class="flex flex-col bg-white">
        <HeroSection />

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start">
                <div class="space-y-6">
                    <h2 class="text-3xl md:text-4xl">Everyday reliability for power and comfort.</h2>
                    <p class="text-lg text-brand-dark/80">
                        {{ siteConfig.homeContent.intro }}
                    </p>
                    <ul class="grid gap-3 sm:grid-cols-2 text-brand-dark/75">
                        <li
                            v-for="(point, index) in siteConfig.homeContent.bullets"
                            :key="`home-bullet-${index}`"
                            class="flex items-start gap-3"
                        >
                            <span class="mt-1 inline-flex size-2 rounded-full bg-brand-primary" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="flex flex-wrap gap-3 pt-2">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ displayPhone }}</a>
                        <NuxtLink to="/contact" class="btn-accent">Request Service</NuxtLink>
                    </div>
                </div>

                <div class="card-box bg-white/90">
                    <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">One-call coordination</p>
                    <h3 class="mt-4 text-2xl font-semibold">Electrical and HVAC experts on a shared schedule.</h3>
                    <p class="mt-3 text-brand-dark/75">
                        Whether you need a new panel, smart thermostat, or complete system change-out, our crews handle the permits, planning, and install timeline together.
                    </p>
                    <div class="mt-6 grid gap-4">
                        <div v-for="item in coordination" :key="item.title" class="flex gap-4 items-start">
                            <div class="flex size-12 items-center justify-center rounded-full bg-brand-primary/15 text-brand-accent font-semibold">
                                {{ item.badge }}
                            </div>
                            <div>
                                <p class="font-semibold">{{ item.title }}</p>
                                <p class="text-sm text-brand-dark/70">{{ item.copy }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HomepageServices />

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-10 md:grid-cols-3">
                <div
                    v-for="(value, index) in siteConfig.valueProps"
                    :key="`value-prop-${index}`"
                    class="card-box bg-white shadow-card-soft"
                >
                    <p class="text-sm uppercase tracking-[0.28em] text-brand-accent mb-3">Why choose us</p>
                    <h3 class="text-2xl font-semibold mb-3">{{ value.title }}</h3>
                    <p class="text-brand-dark/75">{{ value.text }}</p>
                </div>
            </div>
        </section>

        <section class="bg-brand-gradient text-white">
            <div class="section-boxed py-16 md:py-20">
                <div class="grid gap-10 lg:grid-cols-2 items-center">
                    <div class="space-y-5">
                        <p class="text-sm uppercase tracking-[0.32em] text-white/80">Project-ready crews</p>
                        <h2 class="text-3xl md:text-4xl">Panel upgrades, system installs, and preventative maintenance.</h2>
                        <p class="text-white/85">
                            Outages, equipment failures, and seasonal tune-ups all get priority scheduling. Need a permitting partner? We coordinate with inspectors so your project clears the first walkthrough.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <NuxtLink to="/services" class="btn-accent">See Service Details</NuxtLink>
                            <NuxtLink to="/about" class="btn-outline text-white border-white/40">Our Story</NuxtLink>
                        </div>
                    </div>

                    <div class="hero-band bg-white/90 text-brand-dark space-y-6 p-8">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="rounded-3xl bg-brand-light/70 p-5">
                                <p class="text-sm uppercase tracking-[0.28em] text-brand-accent">Electrical</p>
                                <p class="mt-2 font-semibold text-lg">Load calculations, dedicated circuits, lighting design.</p>
                            </div>
                            <div class="rounded-3xl bg-brand-light/70 p-5">
                                <p class="text-sm uppercase tracking-[0.28em] text-brand-accent">HVAC</p>
                                <p class="mt-2 font-semibold text-lg">Furnaces, AC, heat pumps, and ductless comfort zones.</p>
                            </div>
                        </div>
                        <div class="rounded-3xl border border-brand-muted/60 p-5">
                            <p class="font-semibold">Safety walk-through</p>
                            <p class="text-sm text-brand-dark/75 mt-1">
                                Ask about our safety inspection that checks grounding, breakers, combustion, and airflow in a single visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-center">
                <div class="space-y-4">
                    <p class="text-sm uppercase tracking-[0.32em] text-brand-accent">Client feedback</p>
                    <h2 class="text-3xl md:text-4xl">Trusted by homeowners and local businesses.</h2>
                    <p class="text-brand-dark/75">
                        We bring the same level of craftsmanship to long-term maintenance clients as we do to one-time emergency repairs.
                    </p>
                </div>
                <div class="grid gap-6 md:grid-cols-3">
                    <article
                        v-for="(review, index) in siteConfig.reviews"
                        :key="`review-${index}`"
                        class="card-box bg-white/95 shadow-card-soft"
                    >
                        <p class="text-sm text-brand-dark/75">“{{ review.text }}”</p>
                        <p class="mt-4 text-sm font-semibold text-brand-accent">{{ review.name }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="max-w-3xl mx-auto text-center space-y-6">
                <h2 class="text-3xl md:text-4xl">Ready when your power or comfort is on the line.</h2>
                <p class="text-brand-dark/75">
                    Call us for emergency support or schedule a walk-through to plan your next upgrade.
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ displayPhone }}</a>
                    <NuxtLink to="/contact" class="btn-accent">Schedule Online</NuxtLink>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl">Frequently Asked Questions</h2>
                <p class="mt-3 text-brand-dark/70">Straight answers about electrical and HVAC service in the St. Croix River Valley.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
                <div
                    v-for="(faq, index) in siteConfig.faqs"
                    :key="`faq-${index}`"
                    class="card-box bg-white/95 shadow-none border border-brand-muted/40"
                >
                    <h3 class="text-xl font-semibold mb-2">{{ faq.q }}</h3>
                    <p class="text-brand-dark/75 text-sm">{{ faq.a }}</p>
                </div>
            </div>
        </section>

        <section class="section-boxed py-16 md:py-20">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl">Service Areas</h2>
                <p class="mt-2 text-brand-dark/70">
                    Serving {{ serviceAreaList }} with on-call electrical and HVAC support.
                </p>
            </div>
            <div class="flex flex-wrap justify-center gap-2">
                <span
                    v-for="(area, idx) in siteConfig.serviceAreas"
                    :key="`service-area-${idx}`"
                    class="chip"
                >
                    {{ area }}
                </span>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import HeroSection      from '~/components/HeroSection.vue'
import HomepageServices from '~/components/HomepageServices.vue'
import { siteConfig }   from '~/site.config'
import { useHead }      from '#imports'
import { computed }     from 'vue'

const displayPhone = computed(() => siteConfig.phoneDisplay || siteConfig.phone)
const serviceAreaList = computed(() => (siteConfig.serviceAreas || []).join(', '))

const coordination = [
    { badge: '01', title: 'Licensed specialists', copy: 'Master electricians and HVAC technicians collaborate on load, airflow, and efficiency.' },
    { badge: '02', title: 'Permits + inspections', copy: 'We coordinate paperwork, scheduling, and walk-throughs so everything passes cleanly.' },
    { badge: '03', title: 'Clean work sites', copy: 'Protective floor coverings, tidy wiring, and thorough clean-up after every visit.' }
]

/* ------------------------------------------------------------------
   LocalBusiness structured data
-------------------------------------------------------------------*/
const sameAsList = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.yelp,
    siteConfig.social.nextdoor
].filter(Boolean)

const structuredData = {
    '@context': 'https://schema.org',
    '@type':    'LocalBusiness',
    '@id':      `${siteConfig.siteUrl}#business`,
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
    areaServed: siteConfig.serviceAreas,
    geo: siteConfig.location.latitude && siteConfig.location.longitude ? {
        '@type':    'GeoCoordinates',
        latitude:   siteConfig.location.latitude,
        longitude:  siteConfig.location.longitude
    } : undefined,
    sameAs: sameAsList.length ? sameAsList : undefined
}

useHead({
    script: [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }]
})
</script>
