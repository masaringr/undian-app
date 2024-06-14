<template>
  <svg
    data-icon-name="rotate-left"
    data-style="line"
    icon_origin_id="20588"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="rotate-left"
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
      d="M7,17.29A8,8,0,1,0,5.06,11"
      id="primary"
    ></path>
    <polyline
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      "
      points="3 6 5 11 10 9"
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
