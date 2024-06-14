<template>
  <svg
    data-icon-name="check-mark-circle-2"
    data-style="line"
    icon_origin_id="11802"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="check-mark-circle-2"
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
      d="M20.94,11A8.26,8.26,0,0,1,21,12a9,9,0,1,1-9-9,8.83,8.83,0,0,1,4,1"
      id="primary"
    ></path>
    <polyline
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      "
      points="21 5 12 14 8 10"
      data-name="primary"
      id="primary-2"
    ></polyline>
  </svg>
</template>
<script setup>
const props = defineProps({
  styles: {
    type: Object,
  },
});
</script>
