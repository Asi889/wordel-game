<template>
  <div class="settings-wrapper pt-3 w-full flex flex-col gap-y-4 slide-up" v-bind:class="{settingsWrapperDarkmode: darkMode}">
    <div class="flex justify-between">
      <span></span>
      <h1>הגדרות</h1>
      <button @click="handlClick">X</button>
    </div>
    <div
      class="flex justify-between border-b-2 border-gray-300 py-3 items-center"
    >
      <div>
        <h1>מצב קשה</h1>
        <p class="text-xs">יש להשתמש בכל רמז שנחשף בניחושים הבאים</p>
      </div>
      <label class="switch">
        <input type="checkbox" v-model="hardMode" @click="toggleHardMode" />
        <div class="slider round"></div>
      </label>
    </div>
    <div
      class="flex justify-between border-b-2 border-gray-300 py-3 items-center"
    >
      <h1>מצב כהה</h1>
      <label class="switch">
        <input type="checkbox" v-model="darkMode" @change="toggleDarkMode"  />
        <div class="slider round"></div>
      </label>
      <!-- <input type="checkbox" /> -->
    </div>
    <div
      class="flex justify-between border-b-2 border-gray-300 py-3 items-center"
    >
      <div>
        <h1>מצב עיוור צבעים</h1>
        <p class="text-xs">צבעים בניגודיות גבוהה</p>
      </div>
      <label class="switch">
        <input type="checkbox" v-model="colorBlindMode"  @click="toggleColorBlindMode" />
        <div class="slider round"></div>
      </label>
    </div>
    <div
      class="flex justify-between border-b-2 border-gray-300 py-3 items-center"
    >
      <h1>משוב</h1>
      <input type="checkbox" />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  props: ["layout","darkMode", "toggleDarkMode"],
  setup(props) {
    const { layout, darkMode, toggleDarkMode } = props;
    const handlClick = () => {
      layout.main = true;
      layout.settings = false;
      layout.info = false;
    };
    const hardMode = reactive(false);
    const colorBlindMode = reactive(false);

    
    const toggleHardMode = () => {
      console.log("toggleHardMode");
    };
    const toggleColorBlindMode = () => {
            console.log("toggleColorBlindMode");

    };
    return { handlClick, darkMode, toggleDarkMode, toggleHardMode, toggleColorBlindMode ,hardMode, colorBlindMode };
  },
};
</script>

<style>
.settings-wrapper {
  direction: rtl;
}

/* //////////////////////////////// */
.switch {
  position: relative;
  display: inline-block;
  width: 47px;
  height: 23px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #7e7979;
  /* background-color: #63aa5d; */
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #63aa5d;
  /* background-color: #7e7979; */
}

input:focus + .slider {
  box-shadow: 0 0 1px #63aa5d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.settingsWrapperDarkmode{
  color: #f8f1f1;
}

/* .slide-up {
  animation: animatebottom 1.4s;
  position: relative;
  animation: SlideIn 10000ms linear;
  z-index: 2000;
  height: 100%;
} */

</style>
