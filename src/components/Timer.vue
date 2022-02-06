<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5" />
      </g>
    </svg>
    <span class="base-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent( {
  name: "Timer",
  props: ["timeLeft"],
  components: {},
  setup(props) {
    const { timeLeft } = props as any;
    const formattedTimeLeft = computed(() => {
      const timeLeft1 = timeLeft as any;
      const minutes = Math.floor(timeLeft1 / 60) as any;
      let seconds = timeLeft1 % 60 as any;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${seconds}:${minutes}`;
    }) as any;
    return {formattedTimeLeft}
  },
});
</script>

<style lang="scss">
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;

  /* Removes SVG styling that would hide the time label */
  &__circle {
    fill: none;
    stroke: none;
  }

  /* The SVG path that displays the timer's progress */
  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }
  &__label {
    position: absolute;

    /* Size should match the parent container */
    width: 300px;
    height: 300px;

    /* Keep the label aligned to the top */
    top: 0;

    /* Create a flexible box that centers content vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
  }
  
}
</style>
