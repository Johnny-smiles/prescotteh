<template>
  <section class="service-page">
    <div class="hero bg-brand-light text-center py-16 px-6">
      <h1 class="text-4xl font-bold text-brand-dark mb-4">Service A — Example Title</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        A short 1–2 sentence summary introducing this service. Keep it concise and confident.
      </p>
    </div>

    <div class="content max-w-4xl mx-auto py-12 px-6 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-brand-dark mb-3">What We Offer</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-1">
          <li>Clear, outcome-based bullet point</li>
          <li>Second quick value point</li>
          <li>Third detail or unique benefit</li>
        </ul>
      </div>

      <div class="bg-brand-accent/10 p-6 rounded-xl text-center">
        <h3 class="text-2xl font-bold mb-2 text-brand-dark">Let’s Get Started</h3>
        <p class="text-gray-700 mb-4">Add a call-to-action line that invites the user to reach out.</p>
        <NuxtLink to="/contact" class="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Service A | Integrity Design + Build',
  meta: [
    { name: 'description', content: 'Integrity Design + Build provides Service A in White Bear Lake, MN. Professional, high-quality work for local homeowners.' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service A",
      "provider": { "@type": "LocalBusiness", "name": "Integrity Design + Build" },
      "areaServed": "White Bear Lake, MN"
    })
  }]
})
</script>
