<script setup>
import ContactSection from '@/components/home/ContactSection.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-20">
      <ContactSection :is-open="false" />
    </main>

    <Footer />
  </div>
</template>
