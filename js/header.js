// email 클립복사
document.addEventListener("click", function (e) {
  const copyBtn = e.target.closest(".copy_email");
  if (copyBtn) {
    const email = "sunbisher@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("이메일이 복사되었습니다!");
    });
  }
});

// nav menu toggle
document.addEventListener("click", function (e) {
  const menuBtn = e.target.closest(".nav_btn");
  const overlay = document.querySelector(".overlay");
  const header = document.querySelector(".header");

  // 메뉴 버튼 또는 닫기 버튼 클릭 시
  if (menuBtn) {
    const isOpen = header.classList.toggle("on");

    // 스크롤 잠금/해제
    document.body.classList.toggle("no-scroll", isOpen);

    // 오버레이 표시/숨김
    if (overlay) {
      overlay.style.display = isOpen ? "block" : "none";
    }
  }

  // 오버레이 클릭 시 메뉴 닫기
  if (e.target.classList.contains("overlay")) {
    header.classList.remove("on");
    document.body.classList.remove("no-scroll");
    if (overlay) {
      overlay.style.display = "none";
    }
  }
});

// scroll 여부
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
