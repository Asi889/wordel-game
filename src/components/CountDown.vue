<template>
  <div
    class="timer-wrapper h-10 flex gap-x-3 w-full justify-center items-center"
  >
    <div>
      {{ hours.h }}
    </div>
    <div>:</div>
    <div>
      {{ min.m }}
    </div>
    <div>:</div>
    <div>
      {{ sec.s }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { getDate } from "../utils/words";
import {
  defineComponent,
  onMounted,
  watch,
  watchEffect,
} from "@vue/runtime-core";

export default defineComponent({
  name: "CountDown",
  props: ["theDate"],
  components: {},
  setup(props) {
    const { theDate } = props;
    // const dateTest= getDate()
    // console.log({dateTest})
    const d = reactive(new Date()) as any;
    const hours = reactive({ h: "" }) as any;
    const min = reactive({ m: "" }) as any;
    const sec = reactive({ s: "" }) as any;
    let countDown = "" as any;
    const countDown1 = () => {
      const now = Number(theDate);
      const now1 = Date.now();
      
      const then = now + 86400 * 1000;

      countDown = setInterval(() => {
        const secondsLeft = Math.round((then - now) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countDown);
          return;
        }

        hours.h = Math.floor((secondsLeft % 86400) / 3600);
        min.m = Math.floor(((secondsLeft % 86400) % 3600) / 60);
        sec.s =
          secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60;
      }, 1000);
    };
    countDown1();
    // onMounted(()=>{
    // })

    return { hours, min, sec };
  },
});
</script>

<style></style>
