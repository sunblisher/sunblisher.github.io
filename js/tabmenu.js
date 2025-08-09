document.addEventListener("DOMContentLoaded", () => {
  // 모든 .tab_menu 요소 순회
  document.querySelectorAll(".tab_menu").forEach((tabMenu) => {
    const tabBtns = tabMenu.querySelectorAll(".tab_btn");
    const container = tabMenu.closest(".c_section, .profile"); // 상위 섹션 탐색
    const cardLists = container.querySelectorAll(".card_list");

    tabBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // 탭 초기화
        tabBtns.forEach((b) => b.classList.remove("on"));
        cardLists.forEach((list) => list.classList.remove("on"));

        // 해당 탭/리스트만 활성화
        btn.classList.add("on");
        if (cardLists[index]) {
          cardLists[index].classList.add("on");
        }
      });
    });
  });
});
