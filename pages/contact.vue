<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Request Electrical or HVAC Service</h1>
            <p class="text-brand-dark/75 mb-8">
                Share a few project details and our dispatcher will confirm the fastest appointment. For emergencies, call immediately so we can triage help.
            </p>

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

                <!-- Service details -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Property Type</label>
                        <select
                            name="propertyType"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>Single-family home</option>
                            <option>Multi-family</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Service Needed</label>
                        <select
                            name="serviceNeeded"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        >
                            <option>Electrical troubleshooting</option>
                            <option>Panel or wiring upgrade</option>
                            <option>Heating service or install</option>
                            <option>Cooling service or install</option>
                            <option>Maintenance plan</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Service Address</label>
                        <input
                            type="text"
                            name="serviceAddress"
                            placeholder="Street, city, ZIP"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Preferred Appointment Window</label>
                        <input
                            type="text"
                            name="preferredTime"
                            placeholder="e.g., ASAP, weekday mornings, specific date"
                            class="w-full border border-black/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
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
                        Tip: Snap wide shots of the breaker panel, equipment labels, or the issue location so our team can arrive prepared.
                    </p>
                </div>

                <!-- Details -->
                <div>
                    <label class="block font-medium mb-1">Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Describe the issue, equipment model numbers, recent work completed, or any outage alarms."
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
                <h2 class="text-2xl font-bold">Need emergency help right now?</h2>
                <p class="mt-2 text-white/90">
                    Text photos of the panel, thermostat, or equipment alerts. We will reply with troubleshooting steps and dispatch timing.
                </p>
                <div class="mt-4">
                    <a :href="`sms:${phone}?body=Hi%20Prescott%20Electric%20%26%20Heating%2C%20can%20you%20help%20with...`" class="btn-primary">
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
