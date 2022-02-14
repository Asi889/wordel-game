<template>
  <div
    class="slotwrapper flex gap-x-1 justify-center"
    v-bind:class="{
      wiggle: row.tried === true,
    }"
    v-bind:id="'guess-' + rowIndex"
  >
    <div
      v-for="(char, index) in row.letters"
      v-bind:key="char.id"
      class="flex items-center justify-center"
      v-bind:class="{
        flipcardAniamtion: char.flipped === true,
      }"
    >
      <div
        class="grid content-center border-2 border-gray-400 w-12 h-12 sm:w-16 sm:h-16 text-3xl font-bold text-center"
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
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "FrontTile",
  props: [
    "wiggle",
    "rowIndex",
    "row",
    "darkMode",
  ],
  components: {},
  setup(props) {
    const { rowIndex, row, darkMode } = props;
    
    return { rowIndex, row, darkMode,   };
  },
});
</script>

<style>
.active1 {
  border: 2px solid grey !important;
  outline: none !important;
}

.slotwrapper {
  direction: rtl;
}

.inword {
  background-color: rgb(210 179 92);
  color: rgb(236, 179, 54);
  color: white !important;
}
.inposition {
  background-color: rgb(107, 194, 107) !important;
  color: white !important;
}
.notInword {
  background-color: gray !important;
  color: white !important;
}
.darkModeRows {
  background-color: #121213;
  color: white;
}

.flipcardAniamtion {
    transform-style: preserve-3d;
  animation: flipcard-aniamtion 400ms ease-in-out 0ms 1;
}

@keyframes flipcard-aniamtion {
  0% {
  transform: rotateX(0deg);
  }
  50% {
  transform: rotateX(89deg);
  }
  100% {
  transform: rotateX(0deg);
  }
}


.wiggle {
  animation: wiggle 500ms ease-in-out 0ms 2;
}
@keyframes wiggle {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(calc(min(0.9vw, 0.5vh)));
  }
  75% {
    transform: translateX(calc(max(-0.9vw, -0.5vh)));
  }
  100% {
    transform: translateX(0);
  }
}
</style>
