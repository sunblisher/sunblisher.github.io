import "../style/pages/home.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. 로딩 직후 무조건 중앙 좌표 0으로 세팅
      gsap.set([".title-left", ".title-right"], { xPercent: 0 });

      // 2. 스크롤 시 패럴랙스 적용
      gsap.fromTo(
        ".title-left",
        { xPercent: 0 },
        {
          xPercent: -20, // 왼쪽으로 벌어짐
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // hero 맨 위가 화면 맨 위에 닿을 때 시작
            end: "bottom top+=300",
            scrub: true,
          },
          immediateRender: false, // 스크롤 전에는 0값 유지
        }
      );

      gsap.fromTo(
        ".title-right",
        { xPercent: 0 },
        {
          xPercent: 20, // 오른쪽으로 벌어짐
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top+=300",
            scrub: true,
          },
          immediateRender: false,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main">
      <section className="hero" ref={sectionRef}>
        <div className="c_inner">
          <h1 className="title">
            <span className="title-left">Sunrise</span>
            <span className="title-right">Portfolio</span>
          </h1>
        </div>
      </section>
      <section className="test"></section>
    </div>
  );
}

export default Home;
