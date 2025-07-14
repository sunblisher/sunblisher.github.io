(function initFloatingButton() {
  const checkExist = setInterval(() => {
    const btnTop = document.querySelector(".btnTop");
    const btnWrap = document.querySelector(".fixBtn_wrap");

    if (!btnTop || !btnWrap) return;

    clearInterval(checkExist);

    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > windowHeight) {
        btnWrap.classList.add("on");
      } else {
        btnWrap.classList.remove("on");
      }
    }

    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 반영
  }, 50);
})();
