<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Service C — Example Title</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Introduce Service C in one friendly, short paragraph — no fluff, just clarity.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">What’s Included</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Item one — practical and value-driven</li>
          <li>Item two — highlights expertise</li>
          <li>Item three — rounds out the service</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Let’s Work Together</h3>
        <p class="text-gray-700 mb-4">Encourage users to reach out for a free quote or consultation.</p>
        <NuxtLink to="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Get a Free Quote
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Service C | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build provides Service C in White Bear Lake, MN. High-quality design and craftsmanship for your next project.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service C",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN"
    })
  }]
})
</script>
