<template>
  <svg
    data-icon-name="full-cross-circle-alt"
    data-style="line"
    icon_origin_id="20474"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="full-cross-circle-alt"
    class="icon line stroke-current"
    :class="props.styles.color"
    :width="props.styles.width"
    :height="props.styles.height"
  >
    <path
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      "
      d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12ZM18.15,5.85,5.85,18.15"
      id="primary"
    ></path>
  </svg>
</template>
<script setup>
const props = defineProps({
  styles: {
    type: Object,
  },
});
</script>
