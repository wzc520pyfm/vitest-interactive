<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import sdk from '@stackblitz/sdk';

defineOptions({ name: 'Stackblitz' })

const world = ref('Vitepress')
const containerRef = ref(null);

watchEffect(() => {
  if (containerRef.value) {
    sdk.embedGithubProject(
      containerRef.value, 
      'wzc520pyfm/vitest-interactive',
      {
        height: window.innerHeight - document.querySelector('.VPNav')?.clientHeight!,
        // width: window.innerWidth,
        view: 'preview',
      }
    )
  }
})
</script>

<template>
  <div ref="containerRef">{{ world }}</div>
</template>
