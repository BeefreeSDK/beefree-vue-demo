<template>
  <div class="app">
    <header class="header">
      <h1>Welcome to My Beefree Demo</h1>
      <a
        href="https://docs.beefree.io/beefree-sdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="docs-button">Read the Docs</button>
      </a>
    </header>
    <BeefreeEditor />
  </div>
</template>

<script setup lang="ts">
import BeefreeEditor from './components/BeefreeEditor.vue'
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
.header {
  margin-bottom: 30px;
}
.docs-button {
  padding: 10px 20px;
  font-size: 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
