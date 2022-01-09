<template>
  <div class="slotwrapper flex justify-center gap-1">
    <input
      maxlength="1"
      class="border-2 border-gray-400 w-16 h-16 inputF"
      type="text"
      v-model="word[0].letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      dir="rtl"
    />
    <input
      maxlength="1"
      class="border-2 border-gray-400 inputF w-16 h-16"
      type="text"
      v-model="word[1].letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      dir="rtl"
    />
    <!-- </form> -->
    <input
      maxlength="1"
      class="border-2 border-gray-400 inputF w-16 h-16"
      type="text"
      v-model="word[2].letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      dir="rtl"
    />
    <input
      maxlength="1"
      class="border-2 border-gray-400 inputF w-16 h-16"
      type="text"
      v-model="word[3].letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      dir="rtl"
    />
    <input
      maxlength="1"
      class="border-2 border-gray-400 inputF w-16 h-16"
      type="text"
      v-model="word[4].letter"
      v-on:keydown="focusNext"
      @change="focusNext"
      dir="rtl"
    />
  </div>

  <!-- <button @click="checkWord">check</button> -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
// import  { inputFocus }  from '../functions/inputFocus.jsx'

export default defineComponent({
  name: "FirstSlot",
  components: {  },
  setup() {
    const word = reactive([
      { id: "firstLetter", letter: "", inWord: "" as any, rightPosition: "" },
      { id: "secondLetter", letter: "", inWord: "" as any, rightPosition: "" },
      { id: "thirdLetter", letter: "", inWord: "" as any, rightPosition: "" },
      { id: "fourthLetter", letter: "", inWord: "" as any, rightPosition: "" },
      { id: "fithLetter", letter: "", inWord: "" as any, rightPosition: "" },
    ]);

    const dictionary = "בנאלי";
    // const focusNext=(e: any)=>{
    //   inputFocus(e)
    // }
    const focusNext = (e: any) => {
      var target = e.srcElement || e.target;
      console.log(target.value);
      console.log("target.attributes[asefsdg].value");

      var maxLength = parseInt(target.attributes["maxlength"].value, 10);
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        var next = target;
        while ((next = next.nextElementSibling)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();

            console.log(word);
            console.log("word");

            break;
          }
        }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
        var previous = target;
        while ((previous = previous.previousElementSibling)) {
          if (previous == null) break;
          if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            // console.log(word);
            // console.log("word111");
            break;
          }
        }
      }
    };

    const checkWord = () => {
      word.forEach((letterObj) => {
        if (dictionary.includes(letterObj.letter)) {
          letterObj.inWord = true;
        }
      });

      console.log(word);

      // const tt = word.map((letter) => {
      //   dictionary.includes(letter.letter);
      // });
      // console.log(tt);

      // return tt;
    };

    return { word, focusNext, checkWord };
  },
});
</script>

<style>
.slotwrapper {
  direction: rtl;
}
</style>
