// 100svh 정확히 계산하기 (모바일 브라우저 호환 대응용)
function get100svh() {
  const svhProbeElement = document.createElement("div");
  svhProbeElement.style.height = "100svh";
  svhProbeElement.style.position = "absolute";
  svhProbeElement.style.top = "-9999px";
  svhProbeElement.style.visibility = "hidden";

  document.body.appendChild(svhProbeElement);
  const svhHeight = svhProbeElement.offsetHeight;
  document.body.removeChild(svhProbeElement);

  return svhHeight;
}

// .gnb_list의 height 계산 및 적용
function updateLnbListHeight() {
  const header = document.querySelector(".header");
  const memberInfoContainer = document.querySelector(".memberInfo_container");
  const gnbContainer = document.querySelector(".nav_container");
  const lnbList = document.querySelector(".gnb_list");

  if (!header || !memberInfoContainer || !gnbContainer || !lnbList) return;

  // 메뉴가 열리지 않은 상태면 초기화
  if (!header.classList.contains("on")) {
    lnbList.style.height = "";
    return;
  }

  const svhHeight = get100svh();
  const memberInfoHeight = memberInfoContainer.offsetHeight;
  const gnbHeight = gnbContainer.offsetHeight;

  const resultHeight = svhHeight - memberInfoHeight - gnbHeight;

  lnbList.style.maxHeight = `${resultHeight}px`;
}

// 초기 로딩 및 리사이즈 시 높이 재계산
window.addEventListener("DOMContentLoaded", updateLnbListHeight);
window.addEventListener("resize", updateLnbListHeight);

// 모바일 GNB 햄버거 메뉴 열고 닫기
document.addEventListener("click", (e) => {
  const btnMenuOpen = e.target.closest(".btnMenuList");
  const btnMenuClose = e.target.closest(".btnMenuClose");
  const header = document.querySelector(".header");

  if (!header) return;

  if (btnMenuOpen) {
    header.classList.add("on");
    document.body.classList.add("lock");
    updateLnbListHeight();
  }

  if (btnMenuClose) {
    header.classList.remove("on");
    document.body.classList.remove("lock");

    // 열려 있던 아코디언도 전부 닫기
    document.querySelectorAll(".gnb_list .btn_area.on").forEach((openBtn) => {
      openBtn.classList.remove("on");
    });

    // 모든 .depth2_list .list_item에서 .on 제거
    document.querySelectorAll(".depth2_list .list_item.on").forEach((item) => {
      item.classList.remove("on");
    });

    updateLnbListHeight();
  }
});

// memberInfo 영역 변화 시 .gnb_list 높이 재계산
const memberInfo = document.querySelector(".memberInfo");
if (memberInfo) {
  const observer = new MutationObserver(updateLnbListHeight);
  observer.observe(memberInfo, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

// .btn_area 클릭 시 아코디언 열고 닫기
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn_area");
  if (!btn) return;

  const listItem = btn.closest(".list_item");
  if (!listItem) return;

  const isOpen = btn.classList.contains("on");

  // 열려 있던 모든 메뉴 닫기
  document.querySelectorAll(".gnb_list .btn_area.on").forEach((openBtn) => {
    openBtn.classList.remove("on");
  });

  // 현재 클릭한 버튼만 열기
  if (!isOpen) {
    btn.classList.add("on");
  }

  updateLnbListHeight();
});

// .depth2_list .list_item 클릭 시 .on 토글
document.addEventListener("click", (e) => {
  const depth2Item = e.target.closest(".depth2_list .list_item");
  if (!depth2Item) return;

  // 현재 클릭한 항목에 .on 추가
  depth2Item.classList.add("on");
});
