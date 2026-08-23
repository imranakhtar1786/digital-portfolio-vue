<script setup>
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <div class="min-h-screen bg-[#030303]">
    <RouterView />
  </div>
  <Analytics />
</template>
