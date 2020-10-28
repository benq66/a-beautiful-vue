<template>
  <div class="twoot-item" @click="emitToggleFavouriteTwoot(twoot.id)">
    <div class="twoot-header">
      <strong>@{{ twoot.username }}</strong>:
    </div>
    <div class="twoot-content">
      "{{ twoot.content }}"
    </div>
    <div class="twoot-favourite-mark">
      <div v-if="twoot.favourite === true">
        ★
      </div>
      <div v-else>
        ☆
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",

  props: {
    twoot: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emitToggleFavouriteTwoot(id) {
      this.$emit("toggle-favourite-twoot", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.twoot-item {
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  .twoot-favourite-mark {
    font-size: 25px;
  }

  .twoot-content {
    margin-top: 3px;
  }
}
</style>
