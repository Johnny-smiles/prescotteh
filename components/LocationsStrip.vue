<template>
  <section class="bg-white py-12 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Service Areas</h3>
        <p class="text-gray-600">We proudly serve the {{ siteConfig.serviceAreas }} and surrounding communities.</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div v-for="area in siteConfig.serviceAreas" :key="area" class="text-center">
          <div class="bg-gray-50 rounded-lg p-3 hover:bg-brand-light transition-colors">
            <svg class="w-6 h-6 mx-auto mb-2 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm font-medium text-gray-700">{{ area }}</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <p class="text-gray-600 mb-4">Don't see your area? We may still be able to help!</p>
        <NuxtLink to="/contact" class="btn-primary">Contact Us</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
</script>
