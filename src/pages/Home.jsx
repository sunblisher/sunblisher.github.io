import "../style/pages/home.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = [
      { el: ".title-left", x: -200 },
      { el: ".title-right", x: 200 },
    ];

    // 시작 좌표 0으로 고정
    gsap.set(
      targets.map((t) => t.el),
      { x: 0 }
    );

    // 패럴랙스 애니메이션
    targets.forEach(({ el, x }) => {
      gsap.to(el, {
        x,
        ease: "none", // 스크롤 = 애니메이션 1:1
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top+=300", // ✅ 구간을 길게 잡음
          scrub: 1,
          invalidateOnRefresh: true, // 리사이즈 시 다시 계산
        },
      });
    });
  }, []);

  return (
    <div className="main">
      <section className="hero" ref={sectionRef}>
        <div className="c_inner">
          <h1 className="title">
            <span className="title-left">Hyosun</span>
            <span className="title-right">Portfolio</span>
          </h1>
        </div>
      </section>
      <section className="test"></section>
    </div>
  );
}

export default Home;
