<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About {{ siteConfig.siteName }}</h1>

            <p class="mb-4 text-brand-dark/80">
                <strong>{{ siteConfig.siteName }}</strong> began as a small electrical shop in {{ siteConfig.location.city }}, {{ siteConfig.location.state }} back in 1963.
                Today, the company combines licensed electricians and HVAC technicians under one roof so you never have to juggle multiple contractors to keep your property running.
            </p>

            <p class="mb-4 text-brand-dark/80">
                We handle panel work, lighting design, dedicated circuits, and code corrections—then stay onsite to install or service the furnaces, air conditioners, and mini-splits that power your comfort.
                Every project starts with clear options, a written estimate, and a tidy job site. It is the same way we have earned trust from homeowners, schools, and local businesses throughout the St. Croix River Valley.
            </p>

            <p class="text-brand-dark/80">
                Need emergency help or planning a remodel? Reach us anytime and we will map the electrical and HVAC scope together.
                <NuxtLink to="/contact" class="underline text-brand-primary">
                    Request an onsite visit
                </NuxtLink>
                or call to speak with a dispatcher right away.
            </p>
        </section>
    </main>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>
