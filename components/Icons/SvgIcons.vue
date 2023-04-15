<template>
  <div hidden>
    <svg>
      <JavaScriptIcon />
      <BookmarkIcon />
      <BookIcon />
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <CloseIcon/>
      <MagnifierIcon />
      <InstagramIcon />
    </svg>
  </div>
</template>

<script>
import JavaScriptIcon from './langIcons/JavaScriptIcon';
import BookmarkIcon from './other/BookmarkIcon';
import BookIcon from './other/BookIcon.vue';
import ArrowLeftIcon from './buttons/ArrowLeftIcon.vue';
import ArrowRightIcon from './buttons/ArrowRightIcon.vue';
import CloseIcon from './buttons/CloseIcon.vue';
import MagnifierIcon from './buttons/MagnifierIcon.vue';
import InstagramIcon from './soc/InstagramIcon.vue';
export default {
  components: {
    JavaScriptIcon,
    BookmarkIcon,
    BookIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    CloseIcon,
    MagnifierIcon,
    InstagramIcon
}
}

</script>