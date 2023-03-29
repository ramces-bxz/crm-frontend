<template>
  <button :class="classBtn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      outline:
        "hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
      bordered:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
    };
  },
  computed: {
    classBtn() {
      if (this.mode === "outline") {
        return this.outline;
      }
      if (this.mode === "bordered") {
        return this.bordered + " bg-" + this.bgColor;
      }
    },
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: "outline",
    },
    bgColor: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
