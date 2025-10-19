<template>
  <section class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div v-if="trust?.licensed" class="text-center">
          <div class="w-12 h-12 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-gray-700">Licensed & Insured</p>
        </div>
        
        <div v-if="trust?.yearsInBusiness" class="text-center">
          <div class="w-12 h-12 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-gray-700">{{ trust.yearsInBusiness }}+ Years</p>
        </div>
        
        <div v-if="trust?.googleRating" class="text-center">
          <div class="w-12 h-12 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-gray-700">{{ trust.googleRating }}/5 Google</p>
        </div>
        
        <div v-if="trust?.satisfaction" class="text-center">
          <div class="w-12 h-12 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-sm font-medium text-gray-700">{{ trust.satisfaction }}% Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'

// Define trust object with optional properties
const trust = {
  licensed: true, // Default to true, can be overridden in site.config
  yearsInBusiness: 5, // Default value, can be overridden
  googleRating: 4.8, // Default value, can be overridden
  satisfaction: 98 // Default value, can be overridden
}
</script>
