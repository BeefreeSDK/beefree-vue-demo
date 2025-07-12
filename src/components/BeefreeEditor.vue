<template>
  <div
    id="beefree-container"
    ref="containerRef"
    class="editor-container"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BeefreeSDK from '@beefree.io/sdk'

const containerRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  try {
    const beeConfig = {
      container: 'beefree-container',
      language: 'en-US',
      onSave: (pageJson: string, pageHtml: string, ampHtml: string | null, templateVersion: number, language: string | null) => {
        console.log('Saved!', { pageJson, pageHtml, ampHtml, templateVersion, language })
      },
      onError: (error: unknown) => {
        console.error('Error:', error)
      }
    }

    const token = await fetch('http://localhost:3001/proxy/bee-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: 'demo-user' })
    }).then(res => res.json())

    const bee = new BeefreeSDK(token)
    bee.start(beeConfig, {})

  } catch (error) {
    console.error('Initialization error:', error)
  }
})
</script>

<style scoped>
.editor-container {
  height: 600px;
  width: 90%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
