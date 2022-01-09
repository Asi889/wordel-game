<template>
  <!-- <button class="w-9 h-9 border-2 border-black">א</button> -->
  <div v-for="letter in alpabet" v-bind:key="letter" >
  <input
    type="button"
    class="w-12 h-12  text-black bg-gray-200 rounded placeholder:text-black keyboardInput"
    v-bind:value="letter"
    @click="handlClick"
    
  />

  </div>

</template>

<script>
import { reactive } from '@vue/reactivity';


export default {
    setup() {
        const alpabet= reactive (["א", "ב", "ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת", ])

        const handlClick=()=>{
            let inputs = document.querySelectorAll('.slotwrapper')
            console.log(inputs);
            console.log("inputs test");

        }
    // const accept=()=>{
    
    return { alpabet,handlClick };
    // }
  },
};
</script>

<style>
.keyboardInput label {
color: red;
font-size:20px
}
.keyboardInput::placeholder {
color: red;
font-size:20px
}
</style>
