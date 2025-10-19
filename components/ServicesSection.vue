<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
                Our Services
            </h2>

            <div class="grid gap-12 md:grid-cols-2">
                <NuxtLink v-for="service in services" :key="service.slug" :to="`/services/${service.slug}`" class="block hover:no-underline">
                    <ServiceCard
                        :title="service.title"
                        :items="service.bullets"
                    />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
import { services } from '~/data/services'
</script>
