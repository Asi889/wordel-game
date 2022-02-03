<template>
  <div class="w-44 h-16 text-lg bg-black rounded-lg text-white grid text-center content-center mx-auto my-auto">
      {{popUpValue}} 
  </div>
</template>

<script>
export default {
    props:["popUpValue"],
    setup(props){
        const {popUpValue} = props

        return{popUpValue}
    }

}
</script>

<style>

</style>