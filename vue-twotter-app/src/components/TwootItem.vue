<template>
  <div class="twoot-item">
    <div class="twoot-header">
      #{{ twoot.id }} by @{{ twoot.username }}:
    </div>
    <div class="twoot-content">
      "{{ twoot.content }}"
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
};
</script>

<style>
  .twoot-item {
    margin-bottom: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .twoot-item:hover {
    transform: scale(1.1, 1.1);
  }
</style>