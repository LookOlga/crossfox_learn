<template>
    <div class="lightbox" @click.self="closeLightbox">
        <button type="button" class="lightbox__close btn-close" @click="closeLightbox">
            <Icon id="close-icon"/>
        </button>
        <div class="lightbox__img-wrapper">
            <img :src="currentImage" alt="">
        </div>
        <div class="lightbox__buttons">
            <button type="button" 
                    class="lightbox__btn lightbox__btn--prev arrow-left"
                    @click="prevImage">
                <Icon id="arrow-left-icon"/> 
            </button>
            <button type="button" 
                    class="lightbox__btn lightbox__btn--next arrow-right"
                    @click="nextImage">
                <Icon id="arrow-right-icon"/> 
            </button>
        </div>
    </div>
</template>

<script>
import Icon from '~/components/Icons/Icon';
export default {
    name: "LightboxComponent",
    components: {Icon},
    methods: {
        nextImage() {
            this.$store.commit('nextImage');
        },
        prevImage() {
            this.$store.commit('previousImage');
        },
        closeLightbox() {
            this.$store.commit('closeLightbox');
        }
    },
    computed: {
        lightboxImages() {
            return this.$store.state.lightboxImages;
        },
        currentIndex() {
            return this.$store.state.imageIndex;
        },
        currentImage() {
            return this.lightboxImages[this.currentIndex];
        }
    }
}
</script>

<style lang="scss">
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, 0.7);
        opacity: 0;
        transform: scale(0);
        transform-origin: top right;
        border-bottom-left-radius: 200%;
        pointer-events: none;
        z-index: 10;
        transition: all 0.5s ease-in-out;

        &__close {
            position: absolute;
            top: 4rem;
            right: 4rem;
        }

        &__img-wrapper {
            max-width: 70rem;
            width: 100%;
            height: auto;
        }

        &__buttons {
            position: absolute;
            top: 50%;
            left: 5rem;
            right: 5rem;
            display: flex;
            justify-content: space-between;
            max-width: 100%;
        }
    }

</style>