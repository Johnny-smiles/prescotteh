<template>
  <section class="services-page">
    <div class="hero text-center bg-brand-light py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Our Remodeling Services</h1>
      <p class="max-w-2xl mx-auto text-gray-700">
        From kitchen makeovers to basement finishing, Integrity brings your ideas to life.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto py-12 px-6">
      <NuxtLink to="/services/service-a" class="service-card group">
        <div class="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <NuxtImg 
            src="/images/kitchen.jpg" 
            alt="Service A" 
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="(event) => (event.target as HTMLImageElement).style.display = 'none'"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-brand-accent transition">Service A</h3>
            <p class="text-gray-700">Short description of Service A.</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/services/service-b" class="service-card group">
        <div class="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <NuxtImg 
            src="/images/bathroom.jpg" 
            alt="Service B" 
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="(event) => (event.target as HTMLImageElement).style.display = 'none'"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-brand-accent transition">Service B</h3>
            <p class="text-gray-700">Short description of Service B.</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/services/service-c" class="service-card group">
        <div class="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <NuxtImg 
            src="/images/basement.jpg" 
            alt="Service C" 
            class="w-full h-48 object-cover"
            loading="lazy"
            @error="(event) => (event.target as HTMLImageElement).style.display = 'none'"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-brand-accent transition">Service C</h3>
            <p class="text-gray-700">Short description of Service C.</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Remodeling Services | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Explore our remodeling services including kitchens, bathrooms, and basements in White Bear Lake, MN.' }
  ]
})
</script>

