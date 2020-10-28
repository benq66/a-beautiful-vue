<template>
  <div class="twoots">
    <p>Twoots:</p>
    <TwootItem
      class="user-profile__twoot"
      v-for="(twoot, index) in twoots"
      :key="index"
      :twoot="twoot"
      @toggle-favourite-twoot="emitToggleFavouriteTwoot"
    />
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
    },

    methods: {
      emitToggleFavouriteTwoot(id) {
        this.$emit("toggle-favourite-twoot", id);
      },
    }
  };
</script>

<style lang="scss" scoped>
.user-profile__twoot {
  width: fit-content;
  min-width: 25%;
  max-width: 50%;
}
</style>
