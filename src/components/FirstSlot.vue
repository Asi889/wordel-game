<template>
  <div v-bind:id="rowIndex" class="slotwrapper flex justify-center gap-1" >
    <input
      v-for="char in row.letters"
      v-bind:key="char.id"
      maxlength="1"
      class="border-2 border-gray-400 w-16 h-16 inputF text-3xl font-bold text-center focus:ring-1 ring-purple-700"
      :id="`input-${rowIndex}-${char.id}`"
      v-bind:class="{darkModeRows: darkMode , active1: char.letter.length > 0, inword: char.inWord === true, inposition: char.rightPosition === true, notInword: char.notInWord === false}"
      type="text"
      v-model="char.letter"
      :disabled="row.tried === false"
      dir="rtl"
      @input="setFocus(char)"
    />
  </div>
</template>

<script lang="ts">
import { getTodayWord } from "../utils/words";
import { defineComponent, reactive } from "@vue/runtime-core";
import { computed } from "vue";
import { inputFocus } from "../functions/inputFocus.jsx";

export default defineComponent({
  name: "FirstSlot",
  props: ["rowIndex", "word", "row", "darkMode"],
  components: {},
  setup(props) {
    const { rowIndex, word, row, darkMode } = props;
    const setFocus =(char:any)=>{
      console.log(char);
      
    }

    return {  word, rowIndex, row, darkMode,setFocus };
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
}
</style>
