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
        q: 'How long does PDR take?',
        a: 'Small door dings can be finished in a couple of hours. Larger creases or multi-panel repairs take longer; we’ll give you a clear estimate after seeing photos.'
    },
    {
        q: 'Will PDR affect my paint or CarFax?',
        a: 'No—PDR preserves your OEM paint and typically does not show up on CarFax because there’s no repainting or body filler involved.'
    },
    {
        q: 'Can I text photos for a quote?',
        a: 'Yes. Text a few angles of the dent and include year/make/model for the fastest quote. We’ll reply with an estimate and available time slots.'
    },
    {
        q: 'Do you handle insurance for hail?',
        a: 'Absolutely. We provide insurance-friendly estimates and help coordinate the process so your hail damage is repaired panel by panel.'
    },
    {
        q: 'Do you offer mobile service?',
        a: 'For many single-panel dents we can come to you. For larger or complex work, we’ll schedule a drop-off at our Lakeland location.'
    }
]

const openIndex = ref<number | null>(0) // open first by default; set to null if you want all collapsed
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>
