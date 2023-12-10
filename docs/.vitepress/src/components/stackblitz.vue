<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useData } from 'vitepress'
import sdk from '@stackblitz/sdk';
import type { VM } from '@stackblitz/sdk';

defineOptions({ name: 'Stackblitz' })

const { isDark } = useData()
const welcome = ref('Welcome Vitest Interactive!')
const containerRef = ref(null);
const stackblitzVm = ref<VM | null>(null);

watchEffect(async () => {
  if (containerRef.value) {
    stackblitzVm.value = await sdk.embedGithubProject(
      containerRef.value, 
      'wzc520pyfm/vitest-interactive',
      {
        height: window.innerHeight - document.querySelector('.VPNav')?.clientHeight!,
        view: 'preview',
        theme: isDark.value ? 'dark' : 'light',
        hideExplorer: true,
        hideNavigation: true,
      }
    )
  }
})

watchEffect(() => {
  if (stackblitzVm.value) {
    stackblitzVm.value.editor.setTheme(isDark.value ? 'dark' : 'light')
  }
})
</script>

<template>
  <div ref="containerRef">{{ welcome }}</div>
</template>
