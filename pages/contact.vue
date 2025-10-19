<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-8">Request a Free Estimate</h1>

            <!-- Confirmation message -->
            <div
                v-if="showConfirmation"
                class="mb-8 p-4 rounded-md bg-green-100 text-green-800 border border-green-300 text-lg font-medium"
            >
                Thank you! Your request has been received. We'll be in touch soon.
            </div>

            <form
                name="estimate"
                method="POST"
                action="/contact?success=1"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                enctype="multipart/form-data"
                class="space-y-6"
            >
                <!-- Netlify required hidden input -->
                <input type="hidden" name="form-name" value="estimate" />
                <p class="hidden">
                    <label>Don’t fill this out <input name="bot-field" /></label>
                </p>

                <!-- Contact info -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Preferred Contact</label>
                        <select
                            name="contactPreference"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>Text</option>
                            <option>Call</option>
                            <option>Email</option>
                        </select>
                    </div>
                </div>

                <!-- Vehicle & location -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Vehicle (Year / Make / Model)</label>
                        <input
                            type="text"
                            name="vehicle"
                            placeholder="e.g., 2021 Toyota Camry"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Repair Location</label>
                        <select
                            name="location"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>Mobile Service (onsite)</option>
                            <option>Drop-off in {{ADDRESS_CITY}}</option>
                            <option>Either</option>
                        </select>
                    </div>
                </div>

                <!-- Photos -->
                <div>
                    <label class="block font-medium mb-1">Photos (up to 5)</label>
                    <input
                        type="file"
                        name="photos"
                        accept="image/*"
                        multiple
                        class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                    <p class="text-sm text-neutral-600 mt-2">
                        Tip: Stand back 3–5 ft and include reflection lines. Add 2–3 angles if possible.
                    </p>
                </div>

                <!-- Details -->
                <div>
                    <label class="block font-medium mb-1">Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Where is the dent? When did it occur? Any prior paint work on that panel?"
                        class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    ></textarea>
                </div>

                <div class="flex flex-wrap gap-3">
                    <button type="submit" class="btn-primary">Send Request</button>
                    <NuxtLink to="/" class="btn-outline">Back to Home</NuxtLink>
                    <a :href="`tel:${phone}`" class="btn-accent text-black">Or Call {{ phoneDisplay }}</a>
                </div>
            </form>

            <!-- Alt CTA -->
            <div class="mt-10 bg-brand-gradient rounded-2xl p-6 md:p-8 text-white">
                <h2 class="text-2xl font-bold">Text Photos for the Fastest Quote</h2>
                <p class="mt-2 text-white/90">
                    Send 2–3 angles and your year/make/model. We’ll reply with an estimate and available time slots.
                </p>
                <div class="mt-4">
                    <a :href="`sms:${phone}?body=Hi%20{{SITE_NAME}}%2C%20I%27d%20like%20an%20estimate.`" class="btn-primary">
                        Text {{ phoneDisplay }}
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { siteConfig } from '~/site.config'

const showConfirmation = ref(false)

onMounted(() => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.has('success') || window.location.hash === '#success') {
            showConfirmation.value = true
        }
        if (window.location.pathname.endsWith('/thanks/')) {
            showConfirmation.value = true
        }
    }
})

// Phone helpers for CTAs
const phone = computed(() => siteConfig.phone || '')
const phoneDisplay = computed(() => {
    if ((siteConfig).phoneDisplay) return (siteConfig).phoneDisplay
    const digits = (phone.value || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return phone.value
})
</script>
