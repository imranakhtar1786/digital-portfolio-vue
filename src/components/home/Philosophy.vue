<script setup>
import { ref } from 'vue'
import { Sparkles, Terminal, CheckCircle2, Zap, Shield, Code, Cpu } from 'lucide-vue-next'

const activeTab = ref(0)

const principles = [
  {
    id: 'spatial',
    title: '01. Spatial & Tactile Design',
    subtitle: 'Every pixel is placed with intentional physical weight and glassmorphic depth.',
    description: 'We reject generic web templates. Our design engineering team meticulously calculates glass refraction indices, micro-spring curves, and spatial light sources to deliver a product that feels tangible and elite.',
    codeSnippet: `// Custom GLSL Refraction Pass
uniform sampler2D u_texture;
uniform vec2 u_mouse;
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec4 color = texture2D(u_texture, uv + u_mouse * 0.02);
  gl_FragColor = mix(color, vec4(0.83, 0.68, 0.21, 1.0), 0.15);
}`
  },
  {
    id: 'speed',
    title: '02. Zero-Latency Execution',
    subtitle: '100/100 Core Web Vitals with instantaneous reactive render loops.',
    description: 'Performance is a luxury feature. We optimize asset delivery down to the byte, utilizing HTTP/3 edge caching, pre-compiled WebAssembly math modules, and zero layout-shift Vue hydration.',
    codeSnippet: `// Sub-millisecond State Hydration
const state = shallowRef(createZeroCopyBuffer(1024));
useFrameLoop((delta) => {
  if (state.value.dirty) {
    flushRenderQueueAsync(state.value);
  }
});`
  },
  {
    id: 'ownership',
    title: '03. Total Code Ownership',
    subtitle: 'Zero vendor lock-in with clean, self-contained TypeScript/Vue codebases.',
    description: 'You own 100% of the repository, design assets, and shader modules upon project completion. We provide comprehensive documentation, CI/CD pipelines, and developer onboarding.',
    codeSnippet: `// Clean Component Interface Contract
export interface BespokePlatformConfig {
  readonly brandId: string;
  readonly shaderQuality: 'ultra' | 'cinematic';
  readonly enableSpatialAudio: true;
  readonly ipOwnershipGuaranteed: true;
}`
  }
]
</script>

<template>
  <section id="philosophy" class="relative bg-[#030303] py-28 text-white overflow-hidden border-t border-white/5">
    <div class="mx-auto w-[90%] max-w-7xl">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          <Sparkles :size="14" />
          <span>Engineering Philosophy</span>
        </div>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-silver-gradient">
          THE APPLE STANDARD OF CRAFT<span class="text-[#D4AF37]">.</span>
        </h2>
        <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed">
          We combine hyper-polished visual aesthetics with rigorous computer science principles to craft web applications that redefine digital quality.
        </p>
      </div>

      <!-- Principles & Interactive Code Terminal -->
      <div class="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        
        <!-- Left: Principle Selection Tabs -->
        <div class="space-y-4">
          <div
            v-for="(p, idx) in principles"
            :key="p.id"
            @click="activeTab = idx"
            class="group cursor-pointer rounded-2xl border p-6 transition-all duration-300"
            :class="
              activeTab === idx
                ? 'border-[#D4AF37]/60 bg-[#0C0C12] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                : 'border-white/5 bg-[#08080B] hover:border-white/15'
            "
          >
            <h3 class="text-lg font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
              {{ p.title }}
            </h3>
            <p class="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
              {{ p.subtitle }}
            </p>
          </div>
        </div>

        <!-- Right: Interactive Code Terminal Window -->
        <div class="overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#060609] p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <!-- Terminal Header -->
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span class="h-3 w-3 rounded-full bg-green-500/80"></span>
                <span class="ml-3 text-xs font-mono text-zinc-500">valence-core // {{ principles[activeTab].id }}.ts</span>
              </div>
              <div class="flex items-center gap-2 text-[10px] font-mono text-[#D4AF37]">
                <Terminal :size="13" />
                <span>120 FPS PASSED</span>
              </div>
            </div>

            <!-- Description & Code -->
            <div class="mt-6">
              <p class="text-xs text-zinc-300 leading-relaxed font-light">
                {{ principles[activeTab].description }}
              </p>

              <div class="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#0A0A0E] p-4 font-mono text-xs text-[#FCF6BA]">
                <pre class="leading-relaxed"><code>{{ principles[activeTab].codeSnippet }}</code></pre>
              </div>
            </div>
          </div>

          <!-- Bottom Metric -->
          <div class="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-mono text-zinc-500">
            <span>Latency Target: &lt; 16ms</span>
            <span class="text-[#D4AF37]">Strict Quality Guarantee</span>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
