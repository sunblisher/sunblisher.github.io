let openBtn = document.querySelector(".menu_wrap");
let openNave = document.querySelector(".navigation");
let closeBtn = document.querySelector(".close_btn_wrap");
let winR = window.innerWidth;
let odpLink = document.querySelectorAll(".onedepth_link");
let visual = document.querySelector(".visual");

openBtn.addEventListener("click", () => {
  openNave.classList.add("on");
  document.querySelector("body").style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  openNave.classList.remove("on");
  document.querySelector("body").style.overflow = "auto";
});

window.addEventListener("resize", () => {
  winR = window.innerWidth;
  if (winR > 1340 /*최소크기*/) {
    openNave.classList.remove("on");
  }
});

odpLink.forEach(function (el) {
  el.addEventListener("click", (e) => {
    openNave.classList.remove("on");
    document.querySelector("body").style.overflow = "auto";
  });
});

// 이벤트페이지 클릭했을때

let pcBtn = document.querySelectorAll(".btn_pc");
let moBtn = document.querySelectorAll(".btn_mo");
let cloBtn = document.querySelectorAll(".overlay .btn_wrap");
let overlayPc = document.querySelectorAll(".overlay_pc");
let overlayMo = document.querySelectorAll(".overlay_mo");
let pcBtnClose = document.querySelectorAll(".btn_pc_close");
let moBtnClose = document.querySelectorAll(".btn_mo_close");
let overlay = document.querySelectorAll(".overlay");
let idxPc;
let idxMo;

for (let i = 0; i < pcBtn.length; i++) {
  pcBtn[i].addEventListener("click", function () {
    overlayPc.forEach(function (e) {
      e.classList.remove("on");
    });
    overlay.forEach(function (e) {
      e.classList.remove("on");
    });
    overlayPc[i].classList.add("on");
    document.querySelector("body").style.overflow = "hidden";
  });
}
for (let i = 0; i < moBtn.length; i++) {
  moBtn[i].addEventListener("click", function () {
    overlayMo.forEach(function (e) {
      e.classList.remove("on");
    });
    overlay.forEach(function (e) {
      e.classList.remove("on");
    });
    overlayMo[i].classList.add("on");
    document.querySelector("body").style.overflow = "hidden";
  });
}

for (let i = 0; i < cloBtn.length; i++) {
  cloBtn[i].addEventListener("click", function () {
    this.closest(".overlay").classList.remove("on");
    document.querySelector("body").style.overflow = "auto";
  });
}

// 첫번째 이벤트페이지 작품
let slide = document.querySelector(".slide_a");
// let slideT=slide.offsetTop+600
// const overlayA=document.querySelector("#overlay_a")

// 스크롤 좌표를 감지했을때 특정 위치까지 도달하면 실행되는 스크랩트
// overlayA.addEventListener("scroll",function(){
//     let top=this.scrollTop
//     console.log(top)
//     if(top>slideT){
//         slide.classList.add("on")
//     }else{
//         slide.classList.remove("on")
//     }
// })

let slideInterval = setInterval(function () {
  slide.classList.toggle("on");
}, 3000);

// 두번째 이벤트페이지 JS
let overlay2 = document.querySelector(".overlay_2");
let opacityWrap = document.querySelector(".opacity_wrap");
let grayWrap = document.querySelector(".gray_wrap");
let effectWrap = document.querySelector(".effect_wrap");

overlay2.addEventListener("scroll", function () {
  let overTop = this.scrollTop;
  console.log(overTop);
  let effectTop = effectWrap.offsetTop;
  let grayTop = grayWrap.offsetTop;
  console.log(grayTop);

  if (overTop > grayTop) {
    grayWrap.classList.add("on");
  } else {
    grayWrap.classList.remove("on");
  }
  if (overTop > effectTop) {
    effectWrap.classList.add("on");
  } else {
    effectWrap.classList.remove("on");
  }
});

// 두번째 이벤트페이지 모바일 JS

let overlayMo2 = document.querySelector(".mo_2");
let grayMo2 = document.querySelector(".mo_2 .gray_wrap");
let effectMo2 = document.querySelector(".mo_2 .effect_wrap");

overlayMo2.addEventListener("scroll", function () {
  let moTop = this.scrollTop;
  let grayMoTop = grayMo2.offsetTop;
  let effectMoTop = effectMo2.offsetTop;
  console.log(moTop);

  if (moTop > 500) {
    grayMo2.classList.add("on");
  } else {
    grayMo2.classList.remove("on");
  }

  if (moTop > 800) {
    effectMo2.classList.add("on");
  } else {
    effectMo2.classList.remove("on");
  }
});

// 배너 클릭시 오버레이 팝업창
let bannerImgWrap = document.querySelectorAll(".banner_img_wrap");
let overlayBanner = document.querySelector(".overlay_banner");
let btnArea = document.querySelector(".overlay .btn_area");
let did = true;

for (let i = 0; i < bannerImgWrap.length; i++) {
  bannerImgWrap[i].addEventListener("click", function () {
    let imgImport = this.querySelector("img").getAttribute("src");
    overlayBanner.classList.add("on");
    overlayBanner.querySelector("img").setAttribute("src", imgImport);
    document.querySelector("body").style.overflow = "hidden";
  });
  btnArea.addEventListener("click", function () {
    overlayBanner.classList.remove("on");
    document.querySelector("body").style.overflow = "auto";
  });
}

const btnTop = document.querySelector("#top");

window.addEventListener("scroll", function () {
  let top = window.scrollY;
  // console.log(top)
  if (top > 300) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
