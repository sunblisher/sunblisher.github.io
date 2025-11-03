function get100svh() {
  const testEl = document.createElement("div");
  testEl.style.height = "100svh";
  testEl.style.position = "absolute";
  testEl.style.top = "-9999px";
  testEl.style.visibility = "hidden";
  document.body.appendChild(testEl);

  const svhHeight = testEl.offsetHeight;
  document.body.removeChild(testEl);
  return svhHeight;
}

function convertToPx(value) {
  const raw = value.trim();

  if (raw.includes("rem") || /^[\d.]+$/.test(raw)) {
    const rem = parseFloat(raw);
    const fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return rem * fontSize;
  }

  if (raw.includes("px")) {
    return parseFloat(raw);
  }

  return parseFloat(raw);
}

function updateGnbContainerHeight() {
  const header = document.querySelector(".header");
  const gnbContainer = document.querySelector(".gnb_container");
  const memberInfoContainer = document.querySelector(".memberInfo_container");
  const root = document.documentElement;

  if (!header || !header.classList.contains("on")) {
    if (gnbContainer) gnbContainer.style.height = "";
    return;
  }

  const headerHeightVar = getComputedStyle(root)
    .getPropertyValue("--m-header-height")
    .trim();
  const headerHeight = convertToPx(headerHeightVar);
  const memberInfoHeight = memberInfoContainer.offsetHeight;
  const svhHeight = get100svh();
  const gnbHeight = svhHeight - headerHeight * 2 - memberInfoHeight;

  gnbContainer.style.height = `${gnbHeight}px`;
}

window.addEventListener("resize", updateGnbContainerHeight);
window.addEventListener("DOMContentLoaded", updateGnbContainerHeight);

const memberInfo = document.querySelector(".memberInfo");
if (memberInfo) {
  const observer = new MutationObserver(updateGnbContainerHeight);
  observer.observe(memberInfo, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

// ✅ 모바일 링크 차단 함수 (그대로 유지)
function blockMainCategoryLinksOnMobile() {
  const isMobile = window.innerWidth <= 1020;
  const mainCategories = document.querySelectorAll(".mainCategory");

  mainCategories.forEach((el) => {
    el.onclick = null;

    if (isMobile) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });
}

(function initGNB() {
  const mainCategories = document.querySelectorAll(
    ".gnbMenu_list .item .mainCategory"
  );
  const subItems = document.querySelectorAll(".gnbMenu_list .sub_list .item");
  const btnMenuList = document.querySelector(".btnMenuList");
  const btnMenuClose = document.querySelector(".btnMenuClose");
  const header = document.querySelector(".header");

  if (btnMenuList && header) {
    btnMenuList.addEventListener("click", function () {
      header.classList.add("on");
      document.body.classList.add("lock");
      updateGnbContainerHeight();
    });
  }

  if (btnMenuClose && header) {
    btnMenuClose.addEventListener("click", function () {
      header.classList.remove("on");
      document.body.classList.remove("lock");
      updateGnbContainerHeight();
    });
  }

  function updateParentHeight(element) {
    if (element) {
      setTimeout(() => {
        element.style.maxHeight = element.scrollHeight + "px";
        updateGnbContainerHeight();
      }, 50);
    }
  }

  mainCategories.forEach((category) => {
    category.addEventListener("click", function () {
      const parentItem = this.parentElement;
      const subList = parentItem.querySelector(".sub_list");

      if (subList && window.innerWidth <= 1020) {
        if (subList.classList.contains("on")) {
          subList.style.maxHeight = subList.scrollHeight + "px";
          setTimeout(() => {
            subList.style.maxHeight = "0px";
          }, 10);

          setTimeout(() => {
            subList.classList.remove("on");
            subList.style.display = "none";
            updateGnbContainerHeight();
          }, 300);

          this.classList.remove("on");
        } else {
          document
            .querySelectorAll(".gnbMenu_list .sub_list.on")
            .forEach((item) => {
              if (item !== subList) {
                item.style.maxHeight = "0px";
                setTimeout(() => {
                  item.classList.remove("on");
                  item.style.display = "none";
                }, 300);
              }
            });

          document
            .querySelectorAll(".gnbMenu_list .mainCategory.on")
            .forEach((mc) => {
              if (mc !== this) {
                mc.classList.remove("on");
              }
            });

          subList.style.display = "block";
          subList.style.maxHeight = "0px";
          subList.classList.add("on");
          this.classList.add("on");

          setTimeout(() => {
            subList.style.maxHeight = subList.scrollHeight + "px";
            updateGnbContainerHeight();
          }, 50);
        }
      }
    });
  });

  subItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const depthList = this.querySelector(".depth_list");
      const subList = this.closest(".sub_list");

      if (depthList && subList && window.innerWidth <= 1020) {
        event.stopPropagation();

        if (depthList.classList.contains("on")) {
          depthList.style.maxHeight = depthList.scrollHeight + "px";
          setTimeout(() => {
            depthList.style.maxHeight = "0px";
          }, 10);

          setTimeout(() => {
            depthList.classList.remove("on");
            updateParentHeight(subList);
          }, 300);
        } else {
          document
            .querySelectorAll(".gnbMenu_list .depth_list.on")
            .forEach((dl) => {
              if (dl !== depthList) {
                dl.style.maxHeight = "0px";
                setTimeout(() => {
                  dl.classList.remove("on");
                }, 300);
              }
            });

          depthList.style.maxHeight = "0px";
          depthList.classList.add("on");

          setTimeout(() => {
            depthList.style.maxHeight = depthList.scrollHeight + "px";
            updateParentHeight(subList);
            updateGnbContainerHeight();
          }, 50);
        }
      }
    });
  });

  // ✅ 여기서 확실하게 실행되게 수정 (초기 렌더 완료 후)
  blockMainCategoryLinksOnMobile();
})();

// ✅ resize 시에만 유지
window.addEventListener("resize", blockMainCategoryLinksOnMobile);

window.addEventListener("resize", function () {
  document.querySelectorAll(".gnbMenu_list .sub_list").forEach((subList) => {
    subList.classList.remove("on");
    subList.style.maxHeight = "";
    subList.style.display = "";
  });

  document
    .querySelectorAll(".gnbMenu_list .depth_list")
    .forEach((depthList) => {
      depthList.classList.remove("on");
      depthList.style.maxHeight = "";
    });

  document.querySelectorAll(".gnbMenu_list .mainCategory.on").forEach((mc) => {
    mc.classList.remove("on");
  });

  document.querySelector(".header")?.classList.remove("on");
  document.body.classList.remove("lock");
});
