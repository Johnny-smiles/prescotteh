<template>
    <!-- Top header -->
    <nav class="sticky top-0 z-50 bg-white border-b border-brand-dark/10">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <!-- Logo (no image file needed) -->
            <NuxtLink to="/" class="flex items-center gap-3">
                <img src="/logo.png" :alt="`${siteConfig.siteName} Logo`" class="w-10 h-10 rounded object-cover" />
                <span class="font-semibold">{{ siteConfig.siteName }}</span>
            </NuxtLink>

            <!-- Mobile hamburger -->
            <button
                class="sm:hidden flex flex-col gap-[6px] focus:outline-none"
                @click="toggleMain()"
                :aria-expanded="isOpen.toString()"
                aria-label="Toggle navigation"
            >
        <span class="w-6 h-[2px] bg-brand-primary transition-transform"
              :class="{ 'rotate-45 translate-y-[8px]': isOpen }" />
                <span class="w-6 h-[2px] bg-brand-primary"
                      :class="{ 'opacity-0': isOpen }" />
                <span class="w-6 h-[2px] bg-brand-primary transition-transform"
                      :class="{ '-rotate-45 -translate-y-[8px]': isOpen }" />
            </button>

            <!-- Desktop / Mobile links -->
            <ul
                :class="[
          'list-none text-lg font-semibold tracking-wide',
          isOpen
            ? 'absolute top-full right-0 w-full bg-white shadow-md flex flex-col items-end px-6 py-6 space-y-4 z-50'
            : 'hidden sm:flex gap-10 items-center'
        ]"
            >
                <li><NuxtLink to="/"        class="nav-link hover:text-brand-primary" @click="closeAll">Home</NuxtLink></li>
                <li><NuxtLink to="/about"   class="nav-link hover:text-brand-primary" @click="closeAll">About</NuxtLink></li>

                <!-- Services dropdown (desktop only, click-based) -->
                <li class="relative hidden sm:block">
                    <button
                        class="nav-link cursor-pointer hover:text-brand-primary select-none"
                        @click="toggleServices()"
                        @keydown.enter.space.prevent="toggleServices()"
                        :aria-expanded="servicesOpen.toString()"
                        aria-haspopup="true"
                    >
                        Services ▾
                    </button>
                    <ul
                        v-if="servicesOpen"
                        class="absolute right-0 bg-white shadow-lg rounded-md mt-2 py-2 w-64 text-sm z-50 border border-black/5"
                    >
                        <li><NuxtLink to="/services" class="block px-4 py-2 hover:bg-brand-light" @click="closeAll">All Services</NuxtLink></li>
                        <li class="border-t mx-2 my-1"></li>
                        <li><NuxtLink to="/services/service-a" class="block px-4 py-2 hover:bg-brand-light" @click="closeAll">Service A</NuxtLink></li>
                        <li><NuxtLink to="/services/service-b" class="block px-4 py-2 hover:bg-brand-light" @click="closeAll">Service B</NuxtLink></li>
                        <li><NuxtLink to="/services/service-c" class="block px-4 py-2 hover:bg-brand-light" @click="closeAll">Service C</NuxtLink></li>
                    </ul>
                </li>

                <!-- Services in mobile drawer -->
                <li class="sm:hidden flex flex-col items-end space-y-2 w-full">
                    <NuxtLink to="/services" class="hover:text-brand-primary" @click="closeAll">All Services</NuxtLink>
                    <NuxtLink to="/services/service-a" class="hover:text-brand-primary" @click="closeAll">Service A</NuxtLink>
                    <NuxtLink to="/services/service-b" class="hover:text-brand-primary" @click="closeAll">Service B</NuxtLink>
                    <NuxtLink to="/services/service-c" class="hover:text-brand-primary" @click="closeAll">Service C</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-brand-primary" @click="closeAll">Contact</NuxtLink>
                </li>

                <!-- Recent Work top-level (desktop) -->
                <li class="hidden sm:block">
<!--                    <NuxtLink to="/recent-work" class="nav-link hover:text-brand-primary" @click="closeAll">Recent&nbsp;Work</NuxtLink>-->
                </li>

                <!-- CTA buttons (desktop) -->
                <li class="hidden sm:block">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary mr-2">
                        Call {{ siteConfig.phoneDisplay || prettyPhone }}
                    </a>
                    <NuxtLink to="/contact" class="btn-accent">
                        Request&nbsp;Estimate
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { siteConfig } from '~/site.config'

const isOpen = ref(false)
const servicesOpen = ref(false)

const prettyPhone = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return siteConfig.phone
})

function toggleMain() {
    isOpen.value = !isOpen.value
    if (!isOpen.value) servicesOpen.value = false
}
function toggleServices() {
    servicesOpen.value = !servicesOpen.value
}
function closeAll() {
    isOpen.value = false
    servicesOpen.value = false
}

// Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(event.target as Node)) {
        servicesOpen.value = false
    }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
