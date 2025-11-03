// 썸네일 스와이퍼 START
var swiper = new Swiper(".thumbnailSwiper", {
  spaceBetween: 12,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".thumbnailSwiper2", {
  thumbs: {
    swiper: swiper,
  },
});
// 썸네일 스와이퍼 END
