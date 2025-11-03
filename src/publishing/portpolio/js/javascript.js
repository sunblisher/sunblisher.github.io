let openBtn = document.querySelector(".menu_wrap");
let openNave = document.querySelector(".navigation");
let closeBtn = document.querySelector(".close_btn_wrap");
let winR = window.innerWidth;
let odpLink = document.querySelectorAll(".onedepth_link");
let visual = document.querySelector(".visual");
let visualTop = visual.offsetHeight;

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

let cloud = document.querySelectorAll(".cloud");
// console.log(구름)

// 비쥬얼 텍스트 슬라이드업 효과(영역에 들어오면 다시 실행됨)
window.addEventListener("scroll", function () {
  let top = window.scrollY;
  if (top < visualTop) {
    visual.classList.remove("on");
    visual.classList.add("on");
  } else {
    visual.classList.remove("on");
    cloud[0].style.left = "-20%";
  }
});

// 푸터 라인 효과 (영역에 들어오면 다시 실행됨)
const footer = document.querySelector("#contact");
let footerTop = footer.offsetTop - 600;
const boxLineF = document.querySelector("#box_line_f");
const boxLineL = document.querySelector("#box_line_l");
const visualTotal = document.querySelector(".visual");
let imgTotal = document.querySelector(".profile_wrap .img_area .img_wrap");
let aniMove = document.querySelectorAll(".ani_move");

window.addEventListener("scroll", function () {
  let top = window.scrollY;
  let visualH = visualTotal.offsetHeight;
  let imgH = imgTotal.offsetHeight;

  if (top > footerTop) {
    sliceWrap.classList.add("on");
    boxLineF.classList.add("on");
    boxLineL.classList.add("on");
  } else {
    sliceWrap.classList.remove("on");
    boxLineF.classList.remove("on");
    boxLineL.classList.remove("on");
  }
  if (window.innerWidth < 1340) {
    if (top > visualH) {
      aniMove.forEach(function (el) {
        el.classList.add("on");
      });
    }
  } else if (window.innerWidth > 1340) {
    if (top > visualH - 600) {
      aniMove.forEach(function (el) {
        el.classList.add("on");
      });
    }
  }
});

// 탭메뉴 효과
let btn = document.querySelectorAll(".tit_btn");
let tab = document.querySelectorAll(".tab_pannel");
let btnSkil = document.querySelector(".btn_skill");
let btnPro = document.querySelector(".btn_profile");
let btnWrap = document.querySelector(".tit_btn_wrap");
let profileImg = document.querySelector(".profile_img");

tab[0].classList.add("on");

btn.forEach(function (el, i) {
  el.addEventListener("click", function () {
    tab.forEach((t) => {
      t.classList.remove("on");
    });
    tab[i].classList.add("on");
  });
});

btnPro.addEventListener("click", function () {
  this.classList.remove("on");
  this.classList.add("on");
  btnSkil.classList.remove("on");
  aniMove.forEach(function (el) {
    el.classList.add("on");
  });
});

btnSkil.addEventListener("click", function () {
  this.classList.remove("on");
  this.classList.add("on");
  btnPro.classList.remove("on");
  aniMove.forEach(function (el) {
    el.classList.add("on");
  });
});

// 목업 슬라이드 효과
let pics = document.querySelectorAll(".pic");
let mockupH = document.querySelector(".mockup_wrap").offsetHeight;
let mouseOver = document.querySelectorAll(".mouse_over_area");
let graphic = document.querySelectorAll(".link");
let mockupWrap = document.querySelectorAll(".mockup_wrap");
// console.log(mockupWrap)

/*수정*/
mockupWrap.forEach((mockup) => {
  mockup.addEventListener("mouseover", (e) => {
    let target = e.currentTarget;
    target.classList.add("on");
    let picH = target.children[0].children[0].offsetHeight;
    let totalH = picH - mockupH;
    pics.forEach((pic) => {
      pic.style.top = `-${totalH}px`;
    });
  });
  mockup.addEventListener("mouseout", (e) => {
    let target = e.currentTarget;
    target.classList.remove("on");
    pics.forEach((pic) => {
      pic.style.top = 0;
    });
  });
});
/* */

// mouseOver.forEach(function(el){
//     el.addEventListener("mouseover",()=>{
//         el.style.top="-100%"
//     })

// })

// pics.forEach((pic)=>{
//     pic.addEventListener("mouseover",(e)=>{
//         let picH=e.currentTarget.offsetHeight
//         let totalH=picH-mockupH
//         // console.log(totalH)
//         pic.style.top=`-${totalH}px`

//     })
//     pic.addEventListener("mouseout",()=>{
//         pic.style.top=`0px`
//         // mouseOver.style.opacity="1"
//     })
// })

// TOP버튼 자바스크립트
const btnTop = document.querySelector("#top");
const workBtnTop = document.querySelector("#work");

window.addEventListener("scroll", function () {
  let top = window.scrollY;
  // console.log(top)
  if (top > 300) {
    btnTop.classList.add("active");
    workBtnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
    workBtnTop.classList.remove("active");
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 컨텍트 효과
let sliceWrap = document.querySelector(".slice_wrap");
let boxWrap = document.querySelectorAll(".box_wrap"); // querySelectorAll로 잡으면 스크립트로 클래스잡은것들을 전부 돌려줘야함 그래서 forEach 사용
// console.log(boxWrap)

boxWrap.forEach(function (el) {
  el.classList.add("on");
});

// 퀵메뉴 효과
let wheelArea = document.querySelectorAll(".mousewheel");
let winH = window.innerHeight;
let wheelH = wheelArea[0].offsetHeight;
let page = 0;
let wheelT = wheelArea[0].offsetTop;
// console.log(wheelH)

// 원댑스 클릭시 해당 섹션으로 이동
odpLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let num = e.currentTarget.getAttribute("data-link");
    window.scrollTo({ top: wheelArea[num].offsetTop, behavior: "smooth" });
  });
});

let quik = document.querySelector("#quikmenu");
let link = document.querySelectorAll(".link");
let middle = winH / 2;
let dotte = document.querySelectorAll(".dotte");
let txt = document.querySelectorAll(".txt");
// console.log(middle)

let areatop = [];
link[0].classList.add("on");

wheelArea.forEach((el) => {
  areatop.push(el.offsetTop);
});

// 퀵메뉴 클릭시 이동되면 퀵메뉴 중간배치 되는 효과
quik.style.top = `${middle}px`;
window.addEventListener("scroll", () => {
  let scrollTop = scrollY;
  let pos = scrollTop + middle;
  quik.style.top = `${pos}px`;

  for (let i = 0; i < wheelArea.length; i++) {
    if (scrollTop >= areatop[i] && scrollTop < areatop[i] + winH) {
      link.forEach((blink) => {
        blink.classList.remove("on");
      });
      link[i].classList.add("on");
    }
  }
});

// 퀵메뉴 클릭시 이동 효과
link.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let num = e.currentTarget.getAttribute("data-num");
    window.scrollTo({ top: winH * num, behavior: "smooth" });
    link.forEach((btnlink) => {
      btnlink.classList.remove("on");
    });
    e.currentTarget.classList.add("on");
  });
});

// 그래픽디자인 팝업창 효과
let grpLink = document.querySelectorAll(".graphic_link");
let overlay = document.querySelector(".overlay");
let btnArea = document.querySelector(".btn_area");
let moreBtn = document.querySelector(".more_btn");
let cloBtn = document.querySelector(".graphic_wrap .close_btn");
let none = document.querySelectorAll(".row .none");
let did = true;
// console.log(cloBtn)

// grpLink.forEach(function(el){
//     el.addEventListener("click",(e)=>{
//         e.preventDefault()
//         overlay.classList.add("on")
//         document.querySelector("body").style.overflowY="hidden"
//     })
// })

// html 한 구조로 이미지 불러오기
for (let i = 0; i < grpLink.length; i++) {
  grpLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    let imgSrc = this.querySelector("img").getAttribute("src");

    overlay.classList.add("on");
    overlay.querySelector("img").setAttribute("src", imgSrc);
    document.querySelector("body").style.overflow = "hidden";
    did = false;
  });
  btnArea.addEventListener("click", (e) => {
    overlay.classList.remove("on");
    did = true;
    document.querySelector("body").style.overflow = "auto";
  });
}

// grpLink.forEach((el)=>{
//     el.addEventListener("click",function(e){
//         document.querySelector("body").style.overflowY="hidden"
//         did=false
//     })
// })

// btnArea.addEventListener("click",(e)=>{
//     overlay.classList.remove("on")
//     did=true
//     document.querySelector("body").style.overflowY="auto"
// })

moreBtn.addEventListener("click", function () {
  none.forEach(function (e) {
    e.classList.remove("on");
    e.classList.add("on");
  });
  this.classList.add("on");
  cloBtn.classList.add("on");
});

cloBtn.addEventListener("click", function () {
  none.forEach(function (e) {
    e.classList.remove("on");
  });
  this.classList.remove("on");
  moreBtn.classList.remove("on");
});

let secTop = [];

wheelArea.forEach((el) => {
  secTop.push(el.offsetTop);
});

window.addEventListener("resize", () => {
  winH = window.innerHeight;
  wheelArea.forEach((el) => {
    secTop.push(el.offsetTop);
  });
});

window.addEventListener("resize", function () {
  winH = window.innerHeight;
  // console.log(winH)
});

// 마우스 휠을 돌리면 브라우저 하나씩 이동하는 스크립트(휠오류로 잠시 주석처리함)

// wheelArea.forEach((mouse)=>{
//     mouse.addEventListener("wheel",(e)=>{
//         if(did){
//             e.preventDefault()
//             let index=Number(e.currentTarget.getAttribute('data-id'))
//             if(e.deltaY>0){
//                 page=index+1
//                 if(page>=4){page=4}
//             }else{
//                 page=index-1
//                 if(page<=0){page=0}
//             }
//             window.scrollTo({top:winH*page, behavior:"smooth"})
//         }
//     })
// })
