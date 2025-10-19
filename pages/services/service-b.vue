<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Service B — Example Title</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        A short introduction to Service B. Focus on the result customers care about most.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">Highlights</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>First key advantage or capability</li>
          <li>Second benefit with measurable impact</li>
          <li>Third practical outcome or deliverable</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Upgrade Your Space</h3>
        <p class="text-gray-700 mb-4">Invite users to book a consultation or explore more services.</p>
        <NuxtLink to="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Book a Consultation
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Service B | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build offers Service B in White Bear Lake, MN. Trusted professionals with a focus on design and craftsmanship.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service B",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN"
    })
  }]
})
</script>
