const state = () => ({
    lightboxIsOpened: false,
    lightboxImages: [],
    imageIndex: 0
  })
  
const getters = {
  
}
  
const mutations = {
   openLightbox(state, images) {
     state.lightboxIsOpened = true;
     state.lightboxImages = images;
   },
   closeLightbox(state) {
    state.lightboxIsOpened = false;
    // state.imageIndex = 0;
    // state.lightboxImages = [];
   },
   setCurrentImageIndex(state, ind) {
     state.imageIndex = ind;
   },
   nextImage(state) {
    state.imageIndex++;
    if(state.imageIndex >= state.lightboxImages.length) {
      state.imageIndex = 0;
    }
     
   },
   previousImage(state) {
    state.imageIndex--;
    if(state.imageIndex <= 0) {
      state.imageIndex = state.lightboxImages.length - 1;
    }
    
   }
}
  
const actions = {
  
}

export default {
    state,
    mutations,
    actions
}