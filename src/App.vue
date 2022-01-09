<template>
<div class="flex flex-col gap-y-4 w-full max-w-lg mx-auto h-[100vh] justify-around">
<!-- <div class="inline-block w-auto"> -->

  <TopBar />
  <div class="mt-14 flex flex-col gap-y-4">
  <FirstSlot />
  <FirstSlot />
  <FirstSlot />
  <FirstSlot />
  <FirstSlot />
  <FirstSlot />

  </div>
  <div class="flex flex-wrap gap-2 justify-center KeyBoardWrapper">

  <KeyBoard />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TopBar from './components/TopBar.vue'
import FirstSlot from './components/FirstSlot.vue'
import KeyBoard from './components/KeyBoard.vue'

export default defineComponent({
  name: 'App',
  components: {
    TopBar,
    FirstSlot,
    KeyBoard
  }
});
</script>

<style>
.KeyBoardWrapper{
  direction: rtl;
}
</style>
