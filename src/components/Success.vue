<template>
  <div
    class="flex flex-col success top-[25%] sm:top-auto justify-content-center text-center z-10 self-center fixed max-h-[466px] w-[350px] sm:w-[422px] bg-white rounded-lg drop-shadow-2xl border-black px-5 py-5"
    v-bind:class="{ closeWindow1: toggleOut.value === true }"
    @mouseover="getposition"
  >
  <button class="pl-3 sm:pl-1 font-semibold"  @click="outToggle">X</button>
    <h1 class="text-3xl">!כל הכבוד</h1>
    <!-- <h2>שתפו את התוצאה:</h2> -->
    <h2 class="justify-self-end text-xl pt-4 pl-8">:שתפו את התוצאה</h2>
    <a href="#" @click="handleShare()">
      <div
        class="flex bg-green-500 gap-x-5 rounded-2xl py-4 px-4 mx-5 mt-4 justify-around"
         
         type="button"
      >
        <div
          class="flex flex-col gap-1 items-center gap-x-6 bg-white rounded-lg text-right px-2 py-2"
        >
          <div class="gap-3" v-for="(tiles, index) in gridImage" v-bind:key="index">
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
      <h1 class="text-2xl">המילה הבאה תופיע מחר, בהצלחה!</h1>
      <h1 class="text-2xl">position Y: {{positiony}}  and position X: {{positionx}}</h1>
      <!-- <CountDown :theDate="theDate" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { copyResult } from "../functions/copyResult"
import CountDown from "./CountDown.vue"
export default defineComponent({
  name: "Success",
  components: {CountDown},
  props: ["gridImage","handlesPopUp", "theDate", "outToggle", "toggleOut"],
  setup(props) {
    const { gridImage, handlesPopUp, theDate, outToggle, toggleOut } = props;
    // const handletoggle= ()=>{
    //   toggleOut.value = true
    // }
    const positionx= ref(0)
    const positiony= ref(0)
    const getposition= (event: any)=>{
      console.log(event);
      console.log("event");
      
      positionx.value = event.screenX;
      positiony.value = event.screenY;
    }
const link_url= ref("hell mary")
    const handleShare = ()=>{
        copyResult(gridImage)
        handlesPopUp("הועתק")
    }
    return { gridImage, link_url, handleShare, theDate, outToggle, toggleOut, positiony, positionx,getposition };
  },
});
</script>

<style>
.success{
  direction: ltr;
}
.closeWindow1{
  display: none !important;
}
</style>
