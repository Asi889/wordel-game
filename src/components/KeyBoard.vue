<template>
  <div
    v-for="letter in alphabet"
    v-bind:key="letter"
    class="grid tilee justify-center items-center w-6 h-9 sm:w-12 sm:h-12 text-black bg-gray-400 rounded placeholder:text-black"
    v-bind:class="{
      inposition: letter.position === 'inPosition',
      inword: letter.position === 'inWord',
      notInword: letter.position === 'notInWord',
      blueChar:
        (letter.letter === 'א' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ב' && gamerKeyBoard.active === true) ||
        (letter.letter === 'י' && gamerKeyBoard.active === true) ||
        (letter.letter === 'כ' && gamerKeyBoard.active === true),
      purpleChar:
        (letter.letter === 'ג' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ל' && gamerKeyBoard.active === true) ||
        (letter.letter === 'מ' && gamerKeyBoard.active === true),
      redChar:
        (letter.letter === 'ד' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ה' && gamerKeyBoard.active === true) ||
        (letter.letter === 'נ' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ר' && gamerKeyBoard.active === true),
      orangeChar:
        (letter.letter === 'ו' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ס' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ק' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ז' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ע' && gamerKeyBoard.active === true),
      greenChar:
        (letter.letter === 'ח' && gamerKeyBoard.active === true) ||
        (letter.letter === 'פ' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ט' && gamerKeyBoard.active === true) ||
        (letter.letter === 'צ' && gamerKeyBoard.active === true),
    }"
    @click="enterKey({ key: letter.letter })"
  >
    {{ letter.letter }}
  </div>
  <div
    class="grid justify-center items-center w-6 h-9 sm:w-12 sm:h-12  text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:class="{ blueChar: gamerKeyBoard.active === true }"
    @click="gamer"
  >
    <svg
      class="w-5"
      v-bind:class="{ sunMode: gamerKeyBoard.active === true }"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 105.5c-83.9 0-152.2 68.3-152.2 152.2 0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2c-11.3 0-20.4 9.1-20.4 20.4v22.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h23c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4zM54.4 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h22.9c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.4-20.3-20.4zM400.4 82.8L384.1 99c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-8-28.8 0zM99 384.1l-16.2 16.2c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9 0zM413 384.1c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9l16.2 16.2c8 8 20.9 8 28.9 0s8-20.9 0-28.9L413 384.1zM99 127.9c8 8 20.9 8 28.9 0s8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9L99 127.9z"
      ></path>
    </svg>
  </div>
  <div
    class="grid justify-center items-center text-xs sm:text-base w-8 h-9 sm:w-12 sm:h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:class="{ blueChar: gamerKeyBoard.active === true }"
    @click="removeChar()"
  >
    מחק
  </div>
  <div
    v-for="letter in restOfLetters"
    v-bind:key="letter"
    class="grid justify-center items-center w-6 h-9 sm:w-12 sm:h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:class="{
      inposition: letter.position === 'inPosition',
      inword: letter.position === 'inWord',
      notInword: letter.position === 'notInWord',
      purpleChar:
        (letter.letter === 'ת' && gamerKeyBoard.active === true) ||
        (letter.letter === 'ש' && gamerKeyBoard.active === true),
      redChar: letter.letter === 'ר' && gamerKeyBoard.active === true,
      orangeChar: letter.letter === 'ק' && gamerKeyBoard.active === true,
    }"
    @click="enterKey({ key: letter.letter })"
  >
    <!-- @click="enterKey({ key: letter.letter })" -->
    {{ letter.letter }}
  </div>
  <div
    type="button"
    class="grid justify-center items-center text-xs sm:text-base w-8 h-9 sm:w-12 sm:h-12 text-black bg-gray-400 rounded placeholder:text-black keyboardInput"
    v-bind:class="{ greenChar: gamerKeyBoard.active === true }"
    value="Enter"
    @click="handleGuess"
  >
    Enter
  </div>
</template>
// v-bind:class="{greenChar: gamerKeyBoard.active === true,}"

<script>
import { reactive } from "@vue/reactivity";
import { alphab, restOfElphabet1 } from "../utils/letters";
import { activateGamerMode } from "../functions/acivateGamerMode";

export default {
  props: [
    "makeGuess",
    "gamerKeyBoard",
    "success",
    "currentRow",
    "guess",
    "removeChar",
    "enterKey",
    
  ],
  setup(props) {
    const {
      makeGuess,
      gamerKeyBoard,
      removeChar,
      enterKey
    } = props;

    const alphabet = reactive(alphab);
    const restOfLetters = reactive(restOfElphabet1);
    const gamer = () => {
      activateGamerMode(gamerKeyBoard);
    };

    const handleKey = (letter) => {
      enterKey({ key: letter });
    };

    const handleGuess = () => {
      makeGuess();
    };
    

    return {
      handleKey,
      handleGuess,
      alphabet,
      restOfLetters,
      gamerKeyBoard,
      gamer,
      removeChar,
      enterKey
    };
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
.inposition1 {
  background-color: rgb(107, 194, 107) !important;
  color: white !important;
  
}

.inword {
  background-color: rgb(210 179 92)!important;
  color: rgb(236, 179, 54) !important;
 
}
.inposition {
  background-color: rgb(107, 194, 107) !important;
  color: white !important;
  
}
.notInword {
  background-color: gray !important;
  color: white !important;
}

.redChar {
  box-shadow: 3px 3px 3px 3px #e90e0ea8;
}
.greenChar {
  box-shadow: 3px 3px 3px 3px #12b43ca8;
}
.blueChar {
  box-shadow: 3px 3px 3px 3px #0b1df7a8;
}
.purpleChar {
  box-shadow: 3px 3px 3px 3px #7b0bf7a8;
}
.orangeChar {
  box-shadow: 3px 3px 3px 3px #d99126a8;
}
.sunMode {
  fill: red;
}
</style>
