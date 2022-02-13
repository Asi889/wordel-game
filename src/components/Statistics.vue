<template>
  <div
    class="self-center z-10 fixed statistics max-h-[466px] max-w-w[422px] slide-up h-[450px] w-[420px] bg-white rounded-lg shadow-2xl border-black px-5 py-5 bottom-[13%]"
  >
    <div class="grid">
      <h1 class="justify-self-center text-3xl font-bold">לא הצליח הפעם</h1>
      <div class="flex gap-x-2 justify-center">
        <h2 class="justify-self-center text-2xl pt-3 font-bold">
          {{ wordoftheday }}
        </h2>
        <h2 class="justify-self-center text-2xl pt-3">מילת היום היתה</h2>
      </div>
      <h2 class="justify-self-end text-xl pt-4 pr-8">:שתפו את התוצאה</h2>
      <a href="#" @click="handleShare()">
        <div
          class="flex bg-green-500 rounded-2xl py-4 px-4 mx-5 mt-4 justify-around"
        >
          <div class="grid bg-white rounded-lg text-right px-2 py-2">
            <div
              class="grid gap-3"
              v-for="(tiles, index) in gridImage"
              v-bind:key="index"
            >
              {{ tiles }}
            </div>
          </div>

          <svg
            class="h-14 w-14 self-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            version="1.1"
            viewBox="0 0 724.18 806.76"
          >
            <g transform="translate(1193.5 499.59)">
              <g
                color="#000"
                transform="matrix(0 -17.254 17.254 0 10443 -2252.9)"
              >
                <path
                  d="M-134.38 309.5a7.547 7.547 0 11-15.095 0 7.547 7.547 0 0115.095 0z"
                  transform="translate(1.105 -949.48)"
                ></path>
                <path
                  d="M-134.38 309.5a7.547 7.547 0 11-15.095 0 7.547 7.547 0 0115.095 0z"
                  transform="translate(32.767 -949.48)"
                ></path>
                <path
                  d="M-134.38 309.5a7.547 7.547 0 11-15.095 0 7.547 7.547 0 0115.095 0z"
                  transform="translate(16.936 -976.35)"
                ></path>
                <path
                  d="M488.22 -443.73H515.912V-440.73H488.22z"
                  transform="rotate(-60.001)"
                ></path>
                <path
                  d="M613.16 -226.9H640.852V-223.9H613.16z"
                  transform="scale(-1 1) rotate(-60)"
                ></path>
              </g>
            </g>
          </svg>
          <h2 class="text-white text-2xl self-center">לשיתוף</h2>
        </div>
      </a>

      <div class="justify-self-center pt-4">
        <h1 class="text-2xl">המילה הבאה העוד</h1>
        <CountDown :theDate="theDate" />
        <!-- <Timer :timeLeft="timeLeft" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { copyResult } from "../functions/copyResult";
import CountDown from "./CountDown.vue"
import Timer from "./Timer.vue";

export default defineComponent({
  name: "Statistics",
  components: { CountDown },
  props: ["gridImage", "wordoftheday", "handlesPopUp", "theDate"],
  setup(props) {
    const { gridImage, wordoftheday, handlesPopUp, theDate } = props as any;
    
    const handleShare = () => {
      copyResult(gridImage);
      handlesPopUp("הועתק");
    };
    

    return { gridImage, wordoftheday, handleShare };
  },
});
</script>

<style>
.statistics{
  direction: ltr;
}
</style>
