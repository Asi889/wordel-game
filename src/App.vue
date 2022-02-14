<template>
  <div
    class="appWrapper w-full h-full scene_element bg-[#f6f6f6]"
    v-bind:class="{ appDarkmode: darkMode }"
  >
    <div
      v-if="layout.main"
      class="flex flex-col gap-y-12 sm:gap-y-4 w-full max-w-lg mx-auto h-[100vh] pt-4 sm:pt-1 sm:justify-around"
    >
      <TopBar
        :layout="layout"
        :darkMode="darkMode"
        :toggleDarkMode="toggleDarkMode"
      />

      <Success
        v-if="success.success === true"
        :gridImage="gridImage"
        :handlesPopUp="handlesPopUp"
        :theDate="theDate"
      />
      <Statistics
        v-if="statistics.statistics === true"
        :gridImage="gridImage"
        :wordoftheday="wordoftheday"
        :handlesPopUp="handlesPopUp"
        :theDate="theDate"
      />
      <div
        class="mt-5 sm:mt-14 relative flex flex-col gap-y-4"
        v-bind:class="{
          'opacity-50': statistics.statistics || success.success,
        }"
      >
        <Popup v-if="wiggle.wiggle === true" :popUpValue="popUpValue" />

        <FrontTile
          v-for="(row, index) in word"
          v-bind:key="row.id"
          :row="row"
          :currentRow="currentRow"
          :wiggle="wiggle"
          :darkMode="darkMode"
          :rowIndex="++index"
        />
      </div>

      <div
        class="flex flex-wrap gap-2 justify-center px-4 sm:px-1 pt-3 sm:pt-0 KeyBoardWrapper"
        v-bind:class="{
          darkModeKeyboard: darkMode,
          'opacity-50': statistics.statistics || success.success,
        }"
      >
        <KeyBoard
          :makeGuess="makeGuess"
          :gamerKeyBoard="gamerKeyBoard"
          :removeChar="removeChar"
          :enterKey="enterKey"
        />
      </div>
    </div>
    <div  v-if="layout.settings || layout.info" class="w-full max-w-lg mx-auto h-[100vh] justify-around">
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
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from "vue";
import TopBar from "./components/TopBar.vue";
import Statistics from "./components/Statistics.vue";
import Success from "./components/Success.vue";
import KeyBoard from "./components/KeyBoard.vue";
import SettingsPage from "./components/SettingsPage.vue";
import InfoPage from "./components/InfoPage.vue";
import { getTodayWord, getlAllWords, getDate } from "./utils/words";
import Popup from "./components/Popup.vue";
import { board } from "./utils/board";
import FrontTile from "./components/FrontTile.vue";
import { alphab, restOfElphabet1, endLetters } from "./utils/letters";
import { makeguess2 } from "./functions/makeguess2";
import { deleteKey } from "./functions/deleteKey";
import { keyEnter } from "./functions/keyEnter";
import { handlePopUp } from "./functions/handlePopUp";
import { loadFromStorage } from "./functions/loadFromStorage";
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
    KeyBoard,
    SettingsPage,
    InfoPage,
    Popup,
    Statistics,
    Success,
    FrontTile,
  },
  setup() {
    const wordoftheday1 = ref(getTodayWord()) as any;
    const wordoftheday = ref(wordoftheday1.value.word) as any;
    const allTheWord = getlAllWords();
    const theDate = ref(wordoftheday1.value.date);
    const word = ref(board());
    
    // console.log(wordoftheday);
    // console.log("wordoftheday");
    
    
    const allLetters = reactive([...alphab, ...restOfElphabet1]);
    const finalLetters = reactive(endLetters);
    const layout = reactive({
      settings: false,
      info: false,
      main: true,
    }) as Layout;
    const darkMode = ref(false);
    const currentRowIndex = ref(0) as any;
    const currentRow = computed(() => word.value[currentRowIndex.value]) as any;
  
    const guess = ref([]) as any;
    const today = new Date().toLocaleDateString("he-IL", {
      timeZone: "Asia/Jerusalem",
    });
    const splitedWord = computed(() => wordoftheday.value.split(""));
    const guessNum = ref(0);
    const wiggle = reactive({ wiggle: false });
    const statistics = reactive({ statistics: false });
    const success = reactive({ success: false });
    const popUpValue = ref("");
    const gridImage = ref("") as any;
    const firstTimer = ref(false) as any;
    const gamerKeyBoard = reactive({ active: false });
    const keboardDelay = ref(true);

    const computedGuess = computed(() => {
      let word1 = "";
      for (let letter of guess.value) {
        word1 += letter;
      }
      return word1;
    });

    let computedKeyBoard = computed(() => {
      let word = [] as any;
      guess.value.forEach((letter: string) => {
        allLetters.forEach((char: any) => {
          if (char.letter === letter) {
            word.push(char);
          }
        });
      });

      return word;
    });

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    const removeChar = () => {
      deleteKey(success, currentRow, guess);
    };

    const enterKey = (event: any) => {
      keyEnter(success, currentRow, guess, event, wordoftheday, finalLetters);
    };

    const handlesPopUp = (message: string) => {
      handlePopUp(popUpValue, currentRow, wiggle, message);
    };

    const makeGuess = () => {
      makeguess2(
        keboardDelay,
        computedGuess,
        allTheWord,
        success,
        currentRow,
        guess,
        wordoftheday,
        splitedWord,
        computedKeyBoard,
        currentRowIndex,
        guessNum,
        statistics,
        popUpValue,
        wiggle,
        gridImage,
        today,
        word
      );
    };

    const loadfromLocalStorage = () => {
      loadFromStorage(
        gridImage,
        word,
        currentRowIndex,
        success,
        statistics,
        firstTimer,
        today,
        wordoftheday,
        splitedWord,
        allLetters,
      );
    };

    onBeforeMount(() => {
      loadfromLocalStorage();
    });

    document.body.addEventListener("keydown", function (event) {
      if (
        event.key === "Shift" ||
        event.key === "Alt" ||
        event.key === "Tab" ||
        event.key === "CapsLock" ||
        event.key === "Control"
      )
        return;
      if (event.key === "Backspace") {
        removeChar();
        return;
      }
      if (event.key === "Enter") {
        makeguess2(
          keboardDelay,
          computedGuess,
          allTheWord,
          success,
          currentRow,
          guess,
          wordoftheday,
          splitedWord,
          computedKeyBoard,
          currentRowIndex,
          guessNum,
          statistics,
          popUpValue,
          wiggle,
          gridImage,
          today,
          word
        );
        return;
      }

      enterKey(event);
    });

    return {
      layout,
      word,
      darkMode,
      toggleDarkMode,
      makeGuess,
      popUpValue,
      wordoftheday,
      deleteKey,
      wiggle,
      currentRow,
      statistics,
      success,
      gridImage,
      handlesPopUp,
      computedGuess,
      splitedWord,
      allLetters,
      gamerKeyBoard,
      theDate,
      removeChar,
      enterKey,
    };
  },
});
</script>

<style>
.KeyBoardWrapper {
  direction: rtl;
}

.appDarkmode {
  background-color: #121213 !important;
}
.darkModeText {
  color: #f8f1f1;
}
.darkModeKeyboard input {
  color: white;
  font-weight: bold;
  background-color: #818384;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
.scene_element {
  animation-duration: 0.25s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
}

.sceneelementfadein {
  animation-name: fadeIn;
}

.innerCard {
  transition: transform 1.3s;
  transform-style: preserve-3d;
}
</style>
