<template>
  <div class="twoots">
    <p>Twoots:</p>
    <TwootItem class="user-profile__twoot" v-for="(twoot, index) in twoots" :key="index" :twoot="twoot" />
  </div>
</template>

<script>
import TwootItem from "./TwootItem.vue"

  export default {
    name: "Twoots",

    components: {
      TwootItem,
    },

    props: {
      twoots: {
        type: Object,
        required: true,
      },
    }
  };
</script>

<style>

</style>