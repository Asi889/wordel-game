<template>
  <div
    class="appWrapper w-full h-full scene_element bg-[#f6f6f6]"
    v-bind:class="{ appDarkmode: darkMode, sceneelementfadein: fadeIn }"
  >
    <div
      v-if="layout.main"
      class="flex flex-col gap-y-4 w-full max-w-lg mx-auto h-[100vh] justify-around"
    >
      <TopBar :layout="layout" :darkMode="darkMode" :toggleDarkMode="toggleDarkMode" />

      <Success
        v-if="success.success === true"
        :gridImage="gridImage"
        :handlesPopUp="handlesPopUp"
      />
      <Statistics
        v-if="statistics.statistics === true"
        :gridImage="gridImage"
        :wordoftheday="wordoftheday"
        :handlesPopUp="handlesPopUp"
      />
      <div class="mt-14 relative flex flex-col gap-y-4">
        <Popup v-if="testy.wiggle === true" :popUpValue="popUpValue" />
        <!-- <Row
          v-for="(row, index) in word"
          v-bind:key="row.id"
          :wiggle="wiggle.value"
          :row="row"
          :currentRow="currentRow"
          :testy="testy"
          :flipit="flipit"
          :darkMode="darkMode"
          :rowIndex="++index"
        /> -->
        <FrontTile
          v-for="(row, index) in word"
          v-bind:key="row.id"
          :wiggle="wiggle.value"
          :row="row"
          :currentRow="currentRow"
          :testy="testy"
          :flipit="flipit"
          :darkMode="darkMode"
          :rowIndex="++index"
          :flipTest="flipTest"
        />

        <div class="mt-14 innerCard absolute flex flex-col gap-y-4 bottom-0 w-full">
          <BackTile
            v-for="(row, index) in word"
            v-bind:key="row.id"
            :wiggle="wiggle.value"
            :row="row"
            :currentRow="currentRow"
            :testy="testy"
            :flipit="flipit"
            :darkMode="darkMode"
            :rowIndex="++index"
            :flipTest="flipTest"
          />
        </div>
      </div>

      <div
        class="flex flex-wrap gap-2 justify-center KeyBoardWrapper"
        v-bind:class="{ darkModeKeyboard: darkMode }"
      >
        <KeyBoard
          :enterKey="enterKey"
          :deleteKey="deleteKey"
          :makeGuess="makeGuess"
          :word="word"
          :darkMode="darkMode"
          :activateFlip="activateFlip"
          :flipit="flipit"
          :splitedWord="splitedWord"
          :gamerKeyBoard="gamerKeyBoard"
          :activateGamerMode="activateGamerMode"
        />
      </div>
    </div>
    <div class="w-full max-w-lg mx-auto h-[100vh] justify-around">
      <SettingsPage
        v-if="layout.settings"
        :layout="layout"
        :darkMode="darkMode"
        :toggleDarkMode="toggleDarkMode"
      />
      <InfoPage
        v-if="layout.info"
        :layout="layout"
        :darkMode="darkMode"
        :fadeEff="fadeEff"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import TopBar from "./components/TopBar.vue";
import FirstSlot from "./components/FirstSlot.vue";
import Statistics from "./components/Statistics.vue";
import Success from "./components/Success.vue";
import Row from "./components/Row.vue";
import KeyBoard from "./components/KeyBoard.vue";
import SettingsPage from "./components/SettingsPage.vue";
import InfoPage from "./components/InfoPage.vue";
import { getTodayWord, allWords } from "./utils/letters";
import Popup from "./components/Popup.vue";
import { board } from "./utils/board";
import { changeColor } from "./functions/changeColor";
import { changeColorKeyBoard } from "./functions/changeColorKeyBoard";
import FrontTile from "./components/FrontTile.vue";
import BackTile from "./components/BackTile.vue";
import { alphab, restOfElphabet1 } from "./utils/letters";

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
    Row,
    Popup,
    Statistics,
    Success,
    FrontTile,
    BackTile,
  },
  setup() {
    const wordoftheday = ref(getTodayWord());
    const allTheWord = reactive(allWords);
    // console.log(wordoftheday)
    // console.log("wordoftheday")

    const alphabet = reactive(alphab);
    const restOfLetters = reactive(restOfElphabet1);
    const allLetters = reactive([...alphab, ...restOfElphabet1]);

    const layout = reactive({
      settings: false,
      info: false,
      main: true,
    }) as Layout;

    const fadeIn = ref(false as any);
    const fadeEff = computed(() => {
      fadeIn.value = !fadeIn.value;
    });

    const word = reactive(board());
    console.log({ word });

    const darkMode = ref(false);
    const flipit = reactive({ flip: false });
    const flipTest = reactive({ testFlip: false });

    const currentRowIndex = ref(0) as any;
    const currentRow = computed(() => word[currentRowIndex.value]) as any;
    const guesses = reactive([]) as any;
    const loadGuesses = ref("") as any;
    const guess = ref([]) as any;
    const computedGuess = computed(() => {
      let word1 = "";
      for (let letter of guess.value) {
        word1 += letter;
      }
      return word1;
    });
    let computedKeyBoard = computed(() => {
      let word = [] as any;
      guess.value.forEach((letter: any, index: any) => {
        allLetters.forEach((char: any, charindex: any) => {
          if (char.letter === letter) {
            word.push(char);
          }
        });
      });

      return word;
    });
    const keyBoardWord = reactive(computedGuess) as any;

    const today = new Date().toLocaleDateString("he-IL", {
      timeZone: "Asia/Jerusalem",
    });

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    const activateFlip = () => {
      word.forEach((letter) => {
        letter.letters.forEach((char) => {
          if (char.letter.length) {
            setTimeout(() => {
              char.flipped = true;
            }, 1000);
          }
          ///
        });
      });
      flipit.flip = !flipit.flip;
    };
    const activateTestFlip = () => {
      flipTest.testFlip = !flipTest.testFlip;
    };

    const splitedWord = computed(() => wordoftheday.value.split(""));

    const row = ref(guesses.length + 1);
    const guessNum = ref(0);
    const testy = reactive({ wiggle: false });
    const statistics = reactive({ statistics: false });
    const success = reactive({ success: false });
    const done = reactive({ done: false });
    const wiggle = ref(false) as any;
    const popUpValue = ref("");
    const loadedfromlocalstorage = ref(undefined) as any;
    const gridImage = ref("") as any;
    const firstTimer = ref(false) as any;
    const activateWiggle = () => {
      wiggle.value = !wiggle.value;
    };

    const gamerKeyBoard = reactive({ active: false });
    const activateGamerMode = () => {
      gamerKeyBoard.active = !gamerKeyBoard.active;
    };
    // setTimeout(() => {
    //   activateFlip();
    // }, 3000);

    const deleteKey = () => {
      if (success.success === true) {
        return;
      }
      for (const letter of [...currentRow.value.letters].reverse()) {
        if (letter.letter) {
          letter.letter = "";
          guess.value.pop();
          break;
        }
      }
    };

    const createGridImage = () => {
      gridImage.value = word.map((letterObj) =>
        letterObj.letters
          .map((letter) => letter.status)
          .slice(0, 4)
          .join("")
      );

      // ⬛️🟩🟩🟥🟨🟨🟪🟦\gridImage
    };

    const enterKey = (event: any) => {
      if (success.success === true) {
        return;
      }
      for (const letter of currentRow.value.letters) {
        if (!letter.letter) {
          letter.letter = event.key;
          guess.value.push(event.key);
          break;
        }
      }
    };

    const handlesPopUp = (message: string) => {
      popUpValue.value = message;
      currentRow.value.tried = true;
      testy.wiggle = true;
      setTimeout(() => {
        wiggle.value = false;
        currentRow.value.tried = false;
        popUpValue.value = "";
        testy.wiggle = false;
      }, 2000);
      return;
    };

    const saveToLocalStorage = () => {
      localStorage.setItem("date", today);
      localStorage.setItem("guesses", JSON.stringify(guesses));
    };

    const makeGuess = () => {
      if (success.success === true) {
        return;
      }
      /////////// not enough characters   ////////////
      if (computedGuess.value.length < 5) {
        handlesPopUp("אין מספיק אותיות");
      }

      /////////// Not in the database ////////////
      if (!allTheWord.includes(computedGuess.value)) {
        handlesPopUp("לא במאגר");
        return;
      }

      ////// change color /////
      changeColor(currentRow, wordoftheday, splitedWord);
      changeColorKeyBoard(computedKeyBoard, wordoftheday, splitedWord);

      ////// Create Gtrid Img /////
      createGridImage();

      ///// Correct guess  /////
      if (computedGuess.value === wordoftheday.value) {
        success.success = true;
        return;
      }
      ////// In database but wrong guess  /////

      if (
        computedGuess.value !== wordoftheday.value &&
        allTheWord.includes(computedGuess.value)
      ) {
        guesses.push(computedGuess.value);
        if (guessNum.value < 5) {
          currentRow.value.tried = true;
          currentRowIndex.value = currentRowIndex.value + 1;
          guessNum.value = guessNum.value + 1;

          activateFlip();
          guess.value = [];

          /////////////////////
          // if (loadedfromlocalstorage.value === false) {
          saveToLocalStorage();
          // }
        }

        ///// Game over - No more guesses left ////
        if (guessNum.value === 5) {
          statistics.statistics = true;
        }
      }
    };

    const loadfromLocalStorage = () => {
      const date = localStorage.getItem("date");
      if (!date) {
        firstTimer.value = true;
        loadedfromlocalstorage.value = true;
      }

      // if (date !== today) {
      //   localStorage.removeItem("date");
      //   localStorage.removeItem("guesses");
      //   return;
      // }

      loadGuesses.value = JSON.parse(localStorage.getItem("guesses") as any);

      if (loadGuesses.value) {
        loadGuesses.value.forEach((word: any, index: any) => {
          guess.value = [...word.split("")];
          guess.value.forEach((char: any, index: any) => {
            enterKey({ key: char });
          });

          makeGuess();
        });
        loadedfromlocalstorage.value = true;
      }
    };

    // const date = localStorage.getItem("date");
    //   if (date) {
    //     loadfromLocalStorage();
    //   }

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
        deleteKey();
        return;
      }
      if (event.key === "Enter") {
        makeGuess();
        return;
      }
      enterKey(event);
    });

    return {
      layout,
      word,
      darkMode,
      toggleDarkMode,
      fadeIn,
      fadeEff,
      flipit,
      activateFlip,
      row,
      guesses,
      makeGuess,
      wiggle,
      activateWiggle,
      popUpValue,
      wordoftheday,
      enterKey,
      deleteKey,
      testy,
      currentRow,
      statistics,
      success,
      gridImage,
      handlesPopUp,
      computedGuess,
      keyBoardWord,
      splitedWord,
      allLetters,
      gamerKeyBoard,
      activateGamerMode,
      flipTest,
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

/** An element that fades in */
.sceneelementfadein {
  animation-name: fadeIn;
}
.innerCard {
  transition: transform 1.3s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
}

</style>
