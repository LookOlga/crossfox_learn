<template>
  <div hidden>
    <svg>
      <JavaScriptIcon />
      <BookmarkIcon />
      <BookIcon />
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <CloseIcon />
      <MagnifierIcon />
      <InstagramIcon />
      <DonutIcon />
      <YoomoneyIcon />
      <SoonRuIcon/>
    </svg>
  </div>
</template>

<script>
import JavaScriptIcon from './langIcons/JavaScriptIcon';
import BookmarkIcon from './other/BookmarkIcon';
import BookIcon from './other/BookIcon';
import ArrowLeftIcon from './buttons/ArrowLeftIcon';
import ArrowRightIcon from './buttons/ArrowRightIcon';
import CloseIcon from './buttons/CloseIcon';
import MagnifierIcon from './buttons/MagnifierIcon';
import InstagramIcon from './soc/InstagramIcon';
import DonutIcon from './other/DonutIcon';
import YoomoneyIcon from './donation/YoomoneyIcon';
import SoonRuIcon from './other/SoonRuIcon.vue';
export default {
  components: {
    JavaScriptIcon,
    BookmarkIcon,
    BookIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    CloseIcon,
    MagnifierIcon,
    InstagramIcon,
    DonutIcon,
    YoomoneyIcon,
    SoonRuIcon
  }
}

</script>