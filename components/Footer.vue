<template>
    <footer class="bg-brand-light text-brand-dark pt-14 pb-8">
        <div class="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-center">
            <!-- Brand -->
            <div class="w-full text-center md:text-left justify-self-center">
                <img src="/logo.png" :alt="`${siteConfig.siteName} Logo`" class="w-16 h-16 rounded object-cover mx-auto md:mx-0" />
                <p class="mt-4 font-semibold">{{ brandName }}</p>
                <p class="mt-1">
                    <a :href="`tel:${phoneE164}`" class="underline">{{ phoneDisplay }}</a>
                </p>
                <p>
                    <a :href="`mailto:${email}`" class="underline">{{ email }}</a>
                </p>
                <p v-if="addressLine" class="mt-2 text-sm text-neutral-600">
                    {{ addressLine }}
                </p>
            </div>

            <!-- Links -->
            <div class="w-full md:col-span-2 text-center">
                <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
                <ul class="list-none space-y-2">
                    <li><NuxtLink to="/"                        class="hover:text-brand-primary">Home</NuxtLink></li>
                    <li><NuxtLink to="/about"                   class="hover:text-brand-primary">About</NuxtLink></li>
                    <li><NuxtLink to="/services"                class="hover:text-brand-primary">All Services</NuxtLink></li>
                    <li><NuxtLink to="/services/service-a"      class="hover:text-brand-primary">Residential Electrical</NuxtLink></li>
                    <li><NuxtLink to="/services/service-b"      class="hover:text-brand-primary">Commercial Electrical</NuxtLink></li>
                    <li><NuxtLink to="/services/service-c"      class="hover:text-brand-primary">Heating &amp; Cooling</NuxtLink></li>
                    <li><NuxtLink to="/contact"                 class="hover:text-brand-primary">Contact</NuxtLink></li>
                </ul>
            </div>

            <!-- CTA -->
            <div class="w-full text-center">
                <h3 class="text-lg font-semibold mb-3">Need Help Fast?</h3>
                <a :href="`tel:${phoneE164}`" class="btn-primary inline-block mt-2">
                    Call {{ phoneDisplay }}
                </a>
            </div>
        </div>

        <p class="text-center text-sm mt-10 border-t border-brand-dark/10 pt-6">
            © {{ new Date().getFullYear() }} {{ brandName }}. All rights reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'

const brandName = computed(() => siteConfig.siteName || 'Prescott Electric & Heating')
const email = computed(() => siteConfig.email || 'service@prescotteh.com')

const phoneDisplay = computed(() => {
    // prefer a display value if present
    const disp = (siteConfig as any).phoneDisplay
    if (disp) return disp
    const raw = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (raw.length === 11 && raw.startsWith('1')) return `(${raw.slice(1,4)}) ${raw.slice(4,7)}-${raw.slice(7)}`
    if (raw.length === 10) return `(${raw.slice(0,3)}) ${raw.slice(3,6)}-${raw.slice(6)}`
    return siteConfig.phone || ''
})
const phoneE164 = computed(() => {
    const raw = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (!raw) return ''
    if (raw.startsWith('1') && raw.length === 11) return `+${raw}`
    if (raw.length === 10) return `+1${raw}`
    return `+${raw}`
})

const addressLine = computed(() => {
    const loc = siteConfig.location || {}
    if (loc.street) return `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`
    if (loc.city && loc.state) return `${loc.city}, ${loc.state} ${loc.zip || ''}`.trim()
    return ''
})
</script>
