<template>
  <svg
    data-icon-name="next"
    data-style="line"
    icon_origin_id="13937"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="next"
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
      d="M17,12,5,21V3Z"
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
