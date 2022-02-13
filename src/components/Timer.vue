<template>
  <div class="timer-wrapper w-28 h-10 flex gap-x-3">
    <div>
      {{ hours.value }}
    </div>
    <div>:</div>
    <div>
      {{ min.value }}
    </div>
    <div>:</div>
    <div>
      {{ sec.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";
import { onMounted } from "vue";

export default defineComponent({
  name: "Timer",
  props: ["timeLeft"],
  components: {},
  setup(props) {
    const d = ref(new Date());
    const hours = ref(24 - d.value.getHours()) as any;
    const min = ref(60 - d.value.getMinutes()) as any;
    const sec = ref(60 - d.value.getSeconds()) as any;
    const timee = () => {
      console.log("wanker");
      
      if ((min.value + "").length == 1) {
        min.value = "0" + min.value;
      }
      // var sec = 60 - d.getSeconds();
      if ((sec.value + "").length == 1) {
        sec.value = "0" + sec;
      }
    };
    onMounted(() => {
      setInterval(() => {
        timee();
      }, 1000);
    });
    return { hours, min, sec };
  },
});
</script>

<style></style>
