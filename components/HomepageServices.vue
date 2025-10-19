<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <!-- four-wide grid on lg, two-wide on md, single on mobile -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <NuxtLink to="/services/service-a">
                        <ServiceCardSimple
                            title="Service A"
                            description="Short description of Service A."
                        />
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/services/service-b">
                        <ServiceCardSimple
                            title="Service B"
                            description="Short description of Service B."
                        />
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/services/service-c">
                        <ServiceCardSimple
                            title="Service C"
                            description="Short description of Service C."
                        />
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/services">
                        <ServiceCardSimple
                            title="All Services"
                            description="View all our services and solutions."
                        />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCardSimple from '~/components/ServiceCardSimple.vue'
</script>
