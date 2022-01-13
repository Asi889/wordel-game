<template>
  <div class="settings-wrapper pt-3 w-full flex flex-col gap-y-4" v-bind:class="{settingsWrapperDark: darkMode}">
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
                א
              </div>
              <div
                class="back w-[70px] h-[70px] border-2 text-white bg-[#6bc26b] border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
              >
                א
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
        <p>האות א נמצא במילה ובמיקום הנכון</p>
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
                class="front w-[70px] h-[70px] border-2 text-white bg-[#d2b35c] border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
              >
                ג
              </div>
              <div
                class="back w-[70px] h-[70px] border-2 text-white bg-[#d2b35c] border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
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
              <div
                class="back w-[70px] h-[70px] border-2 text-white bg-gray-500 border-gray-500 flex justify-center items-center text-5xl pb-2 font-bold"
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
        <p>האות ט לא נמצא במילה </p>
      </div>
      <div class="font-bold">בכל יום יופיע וורדל חדש ליפאנוח!</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["layout", "darkMode"],
  setup(props) {
    const { layout, darkMode } = props;
    const handlClick = () => {
      layout.main = true;
      layout.settings = false;
      layout.info = false;
    };

    return { handlClick, darkMode };
  },
};
</script>

<style>
@-webkit-keyframes flip {
  from {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  to {
    -webkit-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
}

@keyframes flip {
  from {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  to {
    -webkit-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
}

/* entire container, keeps perspective */
.flip-container {
  /* perspective: 1000; */
}

.flip-container,
.front,
.back {
  width: 70px;
  height: 70px;
}

/* flip speed goes here */
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  -webkit-animation-name: flip;
  animation-name: flip;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

/* hide back of pane during swap */
.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  /* display: flex;
  justify-content: center;
    align-items: center;
    border: 1px solid black; */
  /* background: blue; */
  /* z-index: 2; */
  /* for firefox 31 */
  transform: rotateX(0deg);
}

/* back, initially hidden pane */
.back {
  transform: rotateX(180deg);
  background: green;
}
.settingsWrapperDark {
  color: white
}
</style>
