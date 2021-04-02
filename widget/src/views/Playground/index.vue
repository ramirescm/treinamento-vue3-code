<template>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main"
  >
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">
      Este é o playground, use para testar o widget.
    </p>
  </div>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray"
  >
    <h1 class="text-6xl font-black text-brand-graydark">🚀</h1>
    <br />
    <smal>ROCKET MAN.. BY ELTON JOHN</smal>
  </div>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main"
  >
    <h1 class="text-6xl font-black text-brand-gray">👀</h1>
    <br />
    <small>EYES WITHOUT A FACE.. BY BILLy IDOL</small>
  </div>
  <div
    class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray"
  >
    <h1 class="text-6xl font-black text-brand-graydark">🚨</h1>
    <br />
    <smal>DANGER ZONE.. BY KENNY LOGGINS</smal>
  </div>
  <widget />
</template>

<script lang="ts">
import { defineComponent } from 'vue' // melhorar o intelisense a usabilidade do desenvolvedor
import Widget from '../Widget/index.vue'

export default defineComponent({
  components: { Widget }
})
</script>

<style>
</style>
