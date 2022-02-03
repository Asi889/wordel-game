<template>
  <div v-bind:id="rowIndex" class="slotwrapper flex justify-center gap-1" >
    <input
      v-for="char in row.letters"
      v-bind:key="char.id"
      maxlength="1"
      class="border-2 border-gray-400 w-16 h-16 inputF text-3xl font-bold text-center rotate"
      :id="char.id"
      v-bind:class="{darkModeRows: darkMode , active1: char.letter.length > 0, inword: char.inWord === true, inposition: char.rightPosition === true, notInword: char.notInWord === false, veritaclfliph: flipit.value }"
      type="text"
      v-model="char.letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      :disabled="row.tried === false"
      dir="rtl"
    />
  </div>
</template>

<script lang="ts">
import { getTodayWord } from "../utils/letters";
import { defineComponent, reactive } from "@vue/runtime-core";
import { computed } from "vue";
import { inputFocus } from "../functions/inputFocus.jsx";

export default defineComponent({
  name: "FirstSlot",
  props: ["rowIndex", "word", "row", "darkMode", "flipit"],
  components: {},
  setup(props) {
    const { rowIndex, word, row, darkMode, flipit } = props;
// console.log(flipit);
//         console.log("flip9");
    const dictionary = getTodayWord();
    const isInWord = computed(()=>{

    })

    const focusNext = (e: any) => {
      inputFocus(e);
    };

    

    return { focusNext, word, rowIndex, row, darkMode, flipit };
  },
});
</script>

<style>
  .active1{
    border: 2px solid grey!important;
    outline: none !important;
  }
.slotwrapper {
  direction: rtl;
}
.inputF{
  caret-color: transparent;
}
.inputF:focus {
  outline: none;
  border: 2px solid grey;
}
.inword{
  background-color: rgb(210 179 92)!important;
  color: white !important;
  /* -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg); */
}
.inposition{
  background-color: rgb(107, 194, 107)!important;
  color: white !important;
  /* -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg); */
}
.notInword {
background-color: gray!important;
  color: white !important;
}
.darkModeRows {
  background-color: #121213;
  color: white;
  /* animation-name: vertical-rotate;
  animation-duration: 3.5s; */
}

.veritaclfliph {
  animation-name: vertical-rotate;
  animation-duration: 3.5s;
}

@keyframes vertical-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateX(500deg);
  }
}
</style>
