<template>
  <div
    class="info-wrapper pt-3 w-full flex flex-col gap-y-2 sm:gap-y-4 px-1 sm:px-0 scene_element scene_element--fadeinup"
    v-bind:class="{ settingsWrapperDark: darkMode, fadeOut: fadeout1.value }"
  >
    <div class="flex justify-between">
      <span></span>
      <h1 class="mx-auto text-xl">איך משחקים</h1>
      <button class="pl-3 sm:pl-1 font-semibold" @click="handlClick">X</button>
    </div>
    <div
      class="border-b-2 border-gray-500 flex flex-col gap-y-3 pt-1 pb-4 sm:pb-4 pr-2 sm:pr-0 text-base sm:text-base"
    >
      <p>יש לנחש/י את המילה ב6 ניסיונות</p>
      <p>
        ל ניחוש חייב להיות מילה תקפה בת 5 אותיות. לחץ על כפתור ה-Enter כדי
        להגיש.
      </p>
      <p>
        לאחר כל ניחוש, צבע האריחים ישתנה כדי להראות עד כמה הניחוש שלך היה קרוב
        למילה.
      </p>
    </div>
    <div class="grid gap-y-2 sm:gap-y-4 pr-2 sm:pr-0">
      <p class=" ">דוגמאות</p>
      <div class="grid gap-y-2">
        <div class="flex gap-x-3">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="front w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 text-white bg-[#6bc26b] border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
              >
                ס
              </div>
            </div>
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            פ
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ג
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ט
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            י
          </div>
        </div>
        <p class="">האות ס נמצא במילה ובמיקום הנכון</p>
      </div>

      <!-- //////// -->
      <div class="grid gap-y-2">
        <div class="flex gap-x-3">
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ב
          </div>
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="veritacl-flip w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 text-white bg-[#d2b35c] border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
              >
                י
              </div>
            </div>
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            צ
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            י
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ם
          </div>
        </div>
        <p class="">האות י נמצא במילה אבל במיקום הלא נכון</p>
      </div>
      <!-- //////// -->
      <div class="grid gap-y-2 border-b-2 border-gray-500 pb-2 sm:pb-5">
        <div class="flex gap-x-3">
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ק
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
           י
          </div>
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="front w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 text-white bg-gray-500 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
              >
                נ
              </div>
            </div>
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ו
          </div>
          <div
            class="w-[50px] h-[50px] sm:h-[70px] sm:w-[70px] border-2 border-gray-500 flex justify-center items-center text-xl sm:text-5xl font-bold"
          >
            ח
          </div>
        </div>
        <p class="">האות נ לא נמצא במילה</p>
      </div>
      <div class="font-bold pr-1 sm:pr-0">בכל יום תופיע מילה חדשה לפענוח!</div>
      <div class="grid">
        <div class="flex  gap-2">
          <p>כל הזכויות שמורות ל</p>
          <a class="text-[#3b0494] flex" href="https://asimarom.com/">
          אסף מרום
          
          <img class="w-10 h-10" src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png" />
          </a>
          <p>2022</p>
        </div>
        <div class="flex gap-2">
          <p>המשחק מבוסס על</p>
          <a class="link" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>
          <p>וקוד המקור שלו</p>
          <a class="link" href="https://github.com/Asi889/wordel-game">זמין לצפייה</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["layout", "darkMode"],
  setup(props) {
    const { layout, darkMode } = props;
    let fadeout1 = ref(false);
    const handlClick = () => {
      layout.main = true;
      layout.settings = false;
      layout.info = false;
      fadeout1 = !fadeout1;
      // fadeEff()
    };

    return { handlClick, darkMode, fadeout1 };
  },
};
</script>

<style>
.info-wrapper {
  direction: rtl;
  height: 0px;
}

.veritacl-flip {
  animation-name: vertical-rotate;
  animation-duration: 3.5s;
}
.front {
  animation-name: rotate;
  animation-duration: 2s;
}
.link{
  color: rgb(59, 4, 148);
  border-bottom: 1px solid rgb(59, 4, 148);
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateY(700deg);
  }
}
@keyframes vertical-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateX(700deg);
  }
}
.settingsWrapperDark {
  color: white;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(50%, 70%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    /* transform: none; */
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
