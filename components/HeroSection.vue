<template>
    <!-- Variation: HeroSection variant "with-cta-band" from catalog -->
    <section class="relative isolate overflow-hidden bg-brand-gradient text-white">
        <div class="absolute inset-0 bg-brand-radial opacity-90" />
        <div class="absolute -top-24 -left-24 size-[360px] rounded-full bg-white/10 blur-3xl" />
        <div class="absolute -bottom-28 -right-20 size-[320px] rounded-full bg-black/20 blur-3xl" />

        <div class="section-boxed relative z-10 flex flex-col gap-12 py-16 md:py-24">
            <div class="grid gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
                <div class="space-y-6">
                    <p class="uppercase tracking-[0.28em] text-sm text-white/80">{{ siteConfig.hero.eyebrow }}</p>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                        {{ siteConfig.hero.headline }}
                    </h1>
                    <p class="text-lg md:text-xl text-white/85">
                        {{ siteConfig.hero.subheadline }}
                    </p>
                    <ul class="grid gap-3 text-sm sm:text-base text-white/85 md:grid-cols-2">
                        <li
                            v-for="(point, idx) in siteConfig.homeContent.bullets.slice(0, 4)"
                            :key="`hero-bullet-${idx}`"
                            class="flex items-start gap-3"
                        >
                            <span class="mt-1 inline-flex size-2.5 rounded-full bg-white/80" />
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                    <div class="flex flex-wrap gap-3 pt-4">
                        <a :href="`tel:${siteConfig.phone}`" class="btn-primary">
                            {{ siteConfig.hero.ctaPrimaryLabel }}
                        </a>
                        <NuxtLink to="/contact" class="btn-accent">
                            {{ siteConfig.hero.ctaSecondaryLabel }}
                        </NuxtLink>
                    </div>
                </div>

                <div class="hero-band p-8 md:p-10 text-brand-dark space-y-6">
                    <div>
                        <p class="text-sm font-medium text-brand-accent uppercase tracking-[0.32em]">Licensed & Insured</p>
                        <p class="mt-3 text-2xl font-semibold">Electrical + HVAC under one roof.</p>
                    </div>
                    <div class="grid gap-4">
                        <div class="flex items-start gap-4">
                            <div class="flex size-12 items-center justify-center rounded-full bg-brand-primary/15 text-brand-accent font-semibold">
                                24/7
                            </div>
                            <div>
                                <p class="font-semibold">Emergency Support</p>
                                <p class="text-sm text-brand-dark/75">On-call help when power fails or the heat stops.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="flex size-12 items-center justify-center rounded-full bg-brand-primary/15 text-brand-accent font-semibold">
                                60+
                            </div>
                            <div>
                                <p class="font-semibold">Years Serving Prescott</p>
                                <p class="text-sm text-brand-dark/75">Trusted by neighbors, schools, and local businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-4 text-sm text-brand-dark/75">
                        <div class="flex items-center gap-2">
                            <svg class="h-5 w-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 2a3 3 0 00-3 3v3.586a1 1 0 00.293.707l6.414 6.414a1 1 0 001.414 0l6.414-6.414A1 1 0 0017 8.586V5a3 3 0 00-3-3H5zm3 3a1 1 0 00-.894.553L6.382 7H5a1 1 0 100 2h2a1 1 0 00.894-.553L8.618 6H11a1 1 0 100-2H8z" clip-rule="evenodd"/>
                            </svg>
                            <span>{{ prettyPhone }}</span>
                        </div>
                        <span class="hidden sm:block h-4 w-px bg-brand-dark/30" />
                        <span>Prescott • River Falls • Hudson</span>
                    </div>
                </div>
            </div>

            <div class="hero-band flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-8 py-6">
                <p class="text-base md:text-lg font-semibold text-brand-dark">
                    Need a licensed electrician or heating tech today? Call {{ prettyPhone }}.
                </p>
                <div class="flex flex-wrap gap-3">
                    <a :href="`sms:${siteConfig.phone}`" class="btn-outline">Text Photos</a>
                    <NuxtLink to="/services" class="btn-accent">View Services</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'

const prettyPhone = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return siteConfig.phone
})
</script>
