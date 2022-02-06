<template>
  <input
    v-for="letter in alpabet"
    v-bind:key="letter"
    type="button"
    class="w-12 h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:value="letter"
    @click="enterChar"
  />
  <input
    type="button"
    class="w-12 h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    value="מחק"
    @click="handlClick"
  />
  <input
    v-for="letter in restOfElphabet"
    v-bind:key="letter"
    type="button"
    class="w-12 h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:value="letter"
    @click="enterChar"
  />
  <input
    type="button"
    class="w-12 h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    value="Enter"
    @click="checkWord"
  />
  <!-- </div> -->
</template>

<script>
import { reactive } from "@vue/reactivity";
import { getTodayWord } from '@/utils/words';

export default {
  props: ["attempts", "word1", "darkMode"],
  setup(props) {
    const { attempts, word1, darkMode } = props;
    const alpabet = reactive([
      "א",
      "ב",
      "ג",
      "ד",
      "ה",
      "ו",
      "ז",
      "ח",
      "ט",
      "י",
      "כ",
      "ל",
      "מ",
      "נ",
      "ס",
      "ע",
      "פ",
      "צ",
    ]);
    const restOfElphabet = reactive(["ק", "ר", "ש", "ת"]);


    const enterChar = (e) => {
      const foundd = word1.find(
        (row) => row.tried === null || row.tried === false
      );
      const slots = [...document.querySelectorAll(".slotwrapper")];

      const emptyRow = slots.find((slot) => slot.id == foundd.id);
      const testyy = [...emptyRow.children];
      const emptyInput = testyy.find((input) => input.value === "");

      word1.map((wordObj) => {
        wordObj.letters.map((letter) => {
          if (wordObj.id == emptyRow.id && letter.id == emptyInput.id)
            letter.letter = e.target.value;
        });
      });
      emptyInput.value = e.target.value;

      ///not working getting error in console
      if (!emptyInput.nextSibling) {
        console.log("notttttt");
        // emptyInput.nextSibling.focus();
      }
      // if (emptyInput.nextSibling) {
      //   emptyInput.nextSibling.focus();
      // }
    };

    const dictionary = getTodayWord();

    const checkWord = () => {
      const firstRow = word1.find(
        (rowObj) => rowObj.tried === true || rowObj.tried === null
      );
      firstRow.letters.map((letterObj, index) => {
        if (dictionary.includes(letterObj.letter)) {
          letterObj.inWord = true;
        } else {
          letterObj.inWord = false;
          letterObj.notInWord = false;
        }

        if (dictionary[index] === letterObj.letter) {
          letterObj.rightPosition = true;
        } else {
          letterObj.rightPosition = false;
        }
      });

    };

    return { alpabet, restOfElphabet, word1, checkWord, enterChar, darkMode };
  },
};
</script>

<style>
.keyboardInput label {
  color: red;
  font-size: 20px;
}
.keyboardInput::placeholder {
  color: red;
  font-size: 20px;
}
.symble {
  color: red;
}
</style>
