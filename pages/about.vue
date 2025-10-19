<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About {{ siteConfig.siteName }}</h1>

            <p class="mb-4">
                <strong>{{ siteConfig.siteName }}</strong> is a locally owned shop in {{ siteConfig.location.city }}, {{ siteConfig.location.state }} focused on
                precision <em>paintless dent repair</em> (PDR), hail restoration, and detailing.
                Our mission is simple: deliver fast, clean results that preserve your OEM paint
                and make your car look new again.
            </p>

            <p class="mb-4">
                From door dings and sharp creases to multi-panel hail, we've seen—and fixed—it all.
                Using specialized lighting and tools, we gently massage metal from behind the panel,
                avoiding fillers and repainting. The result: factory-correct panels, quicker turnarounds,
                and a repair that typically doesn't show up on CarFax.
            </p>

            <p>
                Need us to come to you for a small dent, or prefer a drop-off at our {{ siteConfig.location.city }} location?
                We'll work around your schedule and provide insurance-friendly estimates when needed.
                <NuxtLink to="/contact" class="underline text-brand-primary">
                    Request a Free Estimate
                </NuxtLink>
                today.
            </p>

            <!-- Shop/Team Photo (keep your existing file, or replace the src later) -->
<!--            <NuxtImg-->
<!--                src="/aboutFamily.jpeg"-->
<!--                alt="The Acadia PDR team"-->
<!--                class="w-full max-w-md mx-auto mt-10 rounded-lg shadow-md object-cover"-->
<!--            />-->
        </section>
    </main>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>
