<template>
    <section class="max-w-4xl mx-auto px-6 py-16">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
        </h2>

        <div class="divide-y divide-black/10">
            <div
                v-for="(q, i) in faqs"
                :key="i"
                class="py-8"
            >
                <button
                    class="w-full text-left flex items-center justify-between gap-6"
                    @click="toggle(i)"
                    :aria-expanded="openIndex === i"
                    :aria-controls="`faq-panel-${i}`"
                >
                    <h3 class="text-xl md:text-2xl font-semibold">
                        {{ q.q }}
                    </h3>
                    <span
                        class="text-brand-primary transition-transform select-none text-3xl leading-none"
                        :class="openIndex === i ? 'rotate-45' : ''"
                    >+</span>
                </button>

                <p
                    v-if="openIndex === i"
                    :id="`faq-panel-${i}`"
                    class="mt-6 text-lg md:text-xl text-brand-dark/80"
                >
                    {{ q.a }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQ { q: string; a: string }

const faqs: FAQ[] = [
    {
        q: 'Do you offer emergency electrical or HVAC service?',
        a: 'Yes. Call any time and we will prioritize outage repairs or heating failures with the first available crew.'
    },
    {
        q: 'Can you handle electrical and HVAC work in one visit?',
        a: 'Absolutely. We coordinate electricians and heating technicians together so upgrades and installs stay on the same timeline.'
    },
    {
        q: 'Will you take care of permits and inspections?',
        a: 'We manage all paperwork, schedule inspections, and walk through the job so your project passes cleanly.'
    },
    {
        q: 'Do you service commercial properties too?',
        a: 'Yes. We support offices, schools, shops, and light industrial facilities across the St. Croix River Valley.'
    },
    {
        q: 'Can I text photos before you arrive?',
        a: 'Send panel labels, thermostat alerts, or equipment photos so we can prep parts and arrive ready to work.'
    }
]

const openIndex = ref<number | null>(0) // open first by default; set to null if you want all collapsed
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>
