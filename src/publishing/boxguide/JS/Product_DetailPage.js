// 마우스오버 시 노출 화면 START
document.querySelectorAll(".hover_list_area").forEach((list) => {
  const hoverItems = list.querySelectorAll(".list_item");
  const hoverWrap = list.closest("div").querySelector(".mouseover_wrap");

  hoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const text = item.querySelector(".text")?.innerText || item.innerText;
      const hasSelectWord = text.includes("선택");

      if (!hasSelectWord && hoverWrap) {
        // 부모가 .custom_popup_area인 경우, .custom_popup의 높이값을 이용하여 top 설정
        const parentArea = list.closest(".custom_popup_area");

        if (parentArea) {
          const customPopup = parentArea.querySelector(".custom_popup");

          if (customPopup) {
            const customPopupHeight = customPopup.offsetHeight; // .custom_popup의 높이 (px 단위)

            // customPopupHeight에 8px 추가
            // hoverWrap.style.top = `${customPopupHeight + 4}px`;
            hoverWrap.style.top = `${0 + 4}px`;
          }
        }

        // Hover wrap display 설정
        hoverWrap.style.display = "flex";
        hoverWrap.querySelector(".title").innerText = text;
      }
    });

    item.addEventListener("mouseleave", () => {
      if (hoverWrap) {
        hoverWrap.style.display = "none";
      }
    });
  });
});
// 마우스오버 시 노출 화면 END

// 썸네일 스와이퍼 START
var swiper = new Swiper(".thumbnailSwiper", {
  spaceBetween: 12,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".thumbnailSwiper2", {
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".gridSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 썸네일 스와이퍼 END
