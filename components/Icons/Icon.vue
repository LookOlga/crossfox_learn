<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="'min-width:' + width + 'rem;' + 'width:' + width + 'rem;' + 'height:' + height + 'rem;'"
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

