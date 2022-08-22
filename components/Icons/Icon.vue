<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="id"
    :fill="color"
  >
    <use :xlink:href="'#' + id"></use>
  </svg>
</template>

<script>
export default {
  component: {},
  props: ['xlink:href', 'id', 'width', 'height', 'color'],
  data: () => ({})

}
</script>

