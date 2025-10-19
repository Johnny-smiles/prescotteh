<template>
  <section class="bg-brand-gradient text-white py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Flexible Financing Available</h3>
        <p class="text-white/90 mb-6">
          We understand that quality service shouldn't break the budget. 
          Ask about our financing options to make your project more affordable.
        </p>
        
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/10 rounded-lg p-4">
            <svg class="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
            </svg>
            <h4 class="font-semibold mb-2">0% Interest</h4>
            <p class="text-sm text-white/80">Qualified applicants</p>
          </div>
          
          <div class="bg-white/10 rounded-lg p-4">
            <svg class="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <h4 class="font-semibold mb-2">Flexible Terms</h4>
            <p class="text-sm text-white/80">Up to 60 months</p>
          </div>
          
          <div class="bg-white/10 rounded-lg p-4">
            <svg class="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <h4 class="font-semibold mb-2">Quick Approval</h4>
            <p class="text-sm text-white/80">Same-day decisions</p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary">Get Pre-Approved</NuxtLink>
          <a :href="`tel:${siteConfig.phone}`" class="btn-accent text-black">Call for Details</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
</script>
