import "../style/pages/home.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([".title-left", ".title-right"], { xPercent: 0 });

      gsap.fromTo(
        ".title-left",
        { xPercent: 0 },
        {
          xPercent: -20,
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

      gsap.fromTo(
        ".title-right",
        { xPercent: 0 },
        {
          xPercent: 20,
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
