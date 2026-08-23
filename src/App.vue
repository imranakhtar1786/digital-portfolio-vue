<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'

const CursorGlow = defineAsyncComponent(() => import('@/components/common/CursorGlow.vue'))
</script>

<template>
  <div class="min-h-screen bg-[#030303]">
    <CursorGlow />
    <RouterView />
  </div>
  <Analytics />
</template>
