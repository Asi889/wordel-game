<template>
  <div class="appWrapper w-full h-full" v-bind:class="{ appDarkmode: darkMode }">
    <div
      v-if="layout.main"
      class="flex flex-col gap-y-4 w-full max-w-lg mx-auto h-[100vh] justify-around"
    >
      <TopBar :layout="layout" :darkMode="darkMode" :toggleDarkMode="toggleDarkMode" />

      <div class="mt-14 flex flex-col gap-y-4 last:">
        <FirstSlot
        :ref="`slot${index}`"
          v-for="(row, index) in word1"
          v-bind:key="row.id"
          :row="row"
          :word="word"
          :darkMode="darkMode"
          :rowIndex="index + 1"
        />
      </div>
      <div
        class="flex flex-wrap gap-2 justify-center KeyBoardWrapper"
        v-bind:class="{ darkModeKeyboard: darkMode }"
      >
        <KeyBoard :attempts="attempts" :word1="word1" :darkMode="darkMode" />
      </div>
    </div>
    <div class="w-full max-w-lg mx-auto h-[100vh] justify-around">
      <SettingsPage
        v-if="layout.settings"
        :layout="layout"
        :darkMode="darkMode"
        :toggleDarkMode="toggleDarkMode"
      />
      <InfoPage v-if="layout.info" :layout="layout" :darkMode="darkMode" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TopBar from "./components/TopBar.vue";
import FirstSlot from "./components/FirstSlot.vue";
import KeyBoard from "./components/KeyBoard.vue";
import SettingsPage from "./components/SettingsPage.vue";
import InfoPage from "./components/InfoPage.vue";
import { getTodayWord } from "./utils/letters";
import { currentInput } from "./state/focus";
interface Attemps {
  first: boolean;
  seconde: boolean;
  third: boolean;
  fourth: boolean;
  fith: boolean;
  six: boolean;
}

interface Layout {
  settings: boolean;
  info: boolean;
  main: boolean;
}
interface B {
  a: number;
  b: number;
}

export default defineComponent({
  name: "App",
  components: {
    TopBar,
    FirstSlot,
    KeyBoard,
    SettingsPage,
    InfoPage,
  },
  setup() {
    const todayWord = getTodayWord();
    const layout = reactive({
      settings: false,
      info: false,
      main: true,
    }) as Layout;

    const attempts = {
      first: false,
      seconde: false,
      third: false,
      fourth: false,
      fith: false,
      six: false,
    } as Attemps;

    const word = reactive([
      { id: 1, letter: "", inWord: "", rightPosition: "" },
      { id: 2, letter: "", inWord: "", rightPosition: "" },
      { id: 3, letter: "", inWord: "", rightPosition: "" },
      { id: 4, letter: "", inWord: "", rightPosition: "" },
      { id: 5, letter: "", inWord: "", rightPosition: "" },
    ]);
    const word1 = reactive([
      {
        rowNum: 1,
        id: 1,
        tried: null,
        letters: [
          { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "" },
        ],
      },
      {
        rowNum: 2,
        id: 2,
        tried: false,
        letters: [
          { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "" },
        ],
      },
      {
        rowNum: 3,
        id: 3,
        tried: false,
        letters: [
          { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "" },
        ],
      },
      {
        rowNum: 4,
        id: 4,
        tried: false,
        letters: [
          { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "" },
        ],
      },
      {
        rowNum: 5,
        id: 5,
        tried: false,
        letters: [
          { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "" },
          { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "" },
        ],
      },
    ]);
    const darkMode = ref(false);
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };


    return {
      layout,
      attempts,
      todayWord,
      word,
      word1,
      darkMode,
      toggleDarkMode,
    };
  },
  mounted() {
    const firstInput = document.querySelector(`#input-1-1`) as HTMLInputElement;
    if(firstInput){
      firstInput.focus()
    }
  }
});
</script>

<style>
.KeyBoardWrapper {
  direction: rtl;
}

.appDarkmode {
  background-color: #121213;
}
.darkModeText {
  color: #f8f1f1;
}
.darkModeKeyboard input {
  color: white;
  font-weight: bold;
  background-color: #818384;
}

/* div.slide-up {
  height: 300px;
  overflow: hidden;
}

div.slide-up div {
  transition: 5s slide-up;
  margin-top: 0%;
}

@keyframes slide-in {
  0% {
    margin-top: 100%;
    height: 300%;
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1 ;
    margin-top: 0%;
    height: 100%;
  }
} */
</style>
