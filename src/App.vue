<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import { useLenis } from '@/composables/useLenis'

const CursorGlow = defineAsyncComponent(() => import('@/components/common/CursorGlow.vue'))

useLenis()
</script>

<template>
  <div class="min-h-screen bg-[#030303]">
    <CursorGlow />
    <RouterView />
  </div>

  <Analytics />
</template>
