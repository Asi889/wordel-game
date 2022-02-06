<template>
  <div
    class="innerCard slotwrapper flex justify-center gap-1"
    v-bind:class="{
      wiggle: row.tried === true,
      flipcardactive: flipit.flip === true,
    }"
    v-bind:id="'guess-' + rowIndex"
  >
    <div
      v-for="(char, index) in row.letters"
      v-bind:key="char.id"
      class="flip-card-front  justify-center gap-1"
    >
      <div
        class="grid items-center justify-center ffront border-2 border-gray-400 w-16 h-16 inputF text-3xl font-bold text-center"
        v-bind:id="'letter-' + rowIndex + '-' + ++index"
        v-bind:class="{
          darkModeRows: darkMode,
          active1: char.letter.length > 0,
          inword: char.inWord === true,
          inposition: char.rightPosition === true,
          notInword: char.notInWord === true,
        }"
      >
        {{ char.letter }}
      </div>
    </div>
    <div  v-for="(char, index) in row.letters"
        v-bind:key="char.id" class="flip-card-back flex  justify-center gap-1">
      <div
       
        class=" items-center justify-center grid border-2 inputF border-gray-400 w-16 h-16 text-3xl font-bold text-center"
        v-bind:id="'letter-' + rowIndex + '-' + ++index"
        v-bind:class="{
          darkModeRows: darkMode,
          active1: char.letter.length > 0,
          inword: char.inWord === true,
          inposition: char.rightPosition === true,
          notInword: char.notInWord === true,
        }"
      >
        {{ char.letter }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getTodayWord } from "../utils/words";
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { computed } from "vue";
import { inputFocus } from "../functions/inputFocus.jsx";
export default defineComponent({
  name: "Row",
  props: ["wiggle", "rowIndex", "row", "darkMode", "flipit", "testy"],
  components: {},
  setup(props) {
    const { rowIndex, row, darkMode, flipit, wiggle, testy } = props;

    const dictionary = getTodayWord();
    const isInWord = computed(() => {});
    const back = ref(false);

    const focusNext = (e: any) => {
      inputFocus(e);
    };

    return { focusNext, rowIndex, row, darkMode, flipit, wiggle, testy, back };
  },
});
</script>

<style>

</style>
