<template>
  <div hidden>
    <svg>
      <JavaScriptIcon />
      <BookmarkIcon />
      <BookIcon />
    </svg>
  </div>
</template>

<script>
import JavaScriptIcon from './langIcons/JavaScriptIcon';
import BookmarkIcon from './other/BookmarkIcon';
import BookIcon from './other/BookIcon.vue';
export default {
  components: {
    JavaScriptIcon,
    BookmarkIcon,
    BookIcon
}
}

</script>