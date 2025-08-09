document.querySelectorAll(".card_list .list_item").forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal"); // 예: "modal-1"
    const modal = document.getElementById("project-modal"); // 공통 모달 ID

    // fetch: modalId 기반으로 콘텐츠 로드
    fetch(`./modal/${modalId}.html`)
      .then((res) => {
        if (!res.ok) throw new Error("파일 불러오기 실패");
        return res.text();
      })
      .then((html) => {
        modal.querySelector(".modal_content").innerHTML = html;
        modal.classList.add("on");

        document.body.style.overflow = "hidden";
      })
      .catch((err) => console.error("모달 콘텐츠 로딩 실패:", err));
  });
});

// 닫기 버튼
document
  .querySelector(".modal_overlay .btn_close")
  .addEventListener("click", () => {
    document.getElementById("project-modal").classList.remove("on");

    document.body.style.overflow = "";
  });
