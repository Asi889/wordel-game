<template>
  <div
    class="info-wrapper pt-3 w-full flex flex-col gap-y-4 scene_element scene_element--fadeinup"
    v-bind:class="{ settingsWrapperDark: darkMode, fadeOut: fadeout1 }"
  >
    <div class="flex justify-between">
      <span></span>
      <h1 class="mx-auto text-xl">איך משחקים</h1>
      <button @click="handlClick">X</button>
    </div>
    <div class="border-b-2 border-gray-500 flex flex-col gap-y-3 py-4">
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
    <div class="grid gap-y-4">
      <p>דוגמאות</p>
      <div class="grid gap-y-2">
        <div class="flex gap-x-3">
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="front w-[70px] h-[70px] border-2 text-white bg-[#6bc26b] border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
              >
                ב
              </div>
            </div>
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            נ
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            א
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            ל
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            י
          </div>
        </div>
        <p>האות ב נמצא במילה ובמיקום הנכון</p>
      </div>

      <!-- //////// -->
      <div class="grid gap-y-2">
        <div class="flex gap-x-3">
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            ו
          </div>
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="veritacl-flip w-[70px] h-[70px] border-2 text-white bg-[#d2b35c] border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
              >
                ג
              </div>
            </div>
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            י
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            נ
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            ה
          </div>
        </div>
        <p>האות ג נמצא במילה אבל במיקום הלא נכון</p>
      </div>
      <!-- //////// -->
      <div class="grid gap-y-2 border-b-2 border-gray-500 pb-5">
        <div class="flex gap-x-3">
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            א
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            נ
          </div>
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div
                class="front w-[70px] h-[70px] border-2 text-white bg-gray-500 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
              >
                ט
              </div>
            </div>
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            מ
          </div>
          <div
            class="w-[70px] h-[70px] border-2 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
          >
            נ
          </div>
        </div>
        <p>האות ט לא נמצא במילה</p>
      </div>
      <div class="font-bold">בכל יום יופיע וורדל חדש ליפאנוח!</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["layout", "darkMode", "fadeEff"],
  setup(props) {
    const { layout, darkMode, fadeEff} = props;
    let fadeout1= false
    const handlClick = () => {
      layout.main = true;
      layout.settings = false;
      layout.info = false;
      fadeout1= !fadeout1
      // fadeEff()
    };

    return { handlClick, darkMode,fadeout1 };
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
    transform: translate3d(0, 70%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
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


  /** Basic styles for an animated element */
  .scene_element {
    animation-duration: 0.25s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;

  }
  .fadeOut {
    animation-direction: alternate-reverse;
  }

  

  /** An element that fades in and slides up */
  .scene_element--fadeinup {
    animation-name: fadeInUp;
  }

  /** An element that fades in and slides from the right */
  .scene_element--fadeinright {
    animation-name: fadeInRight;
  }




</style>
