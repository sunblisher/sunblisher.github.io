import { useEffect } from "react";
import "../../style/components/header.css";

function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll(".c_section");
    const menuItems = document.querySelectorAll(".header .menu .list_item");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        const targetSection = sections[index];
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    const sectionMap = {
      hero: 0,
      skill: 1,
      project: 2,
      contact: 3,
    };

    // 스크롤 시 현재 보이는 섹션 확인하는 함수
    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;

      let activeIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = Array.from(section.classList).find(
          (cls) => cls !== "c_section"
        );

        // Contact 섹션은 화면에 보이면 활성화
        if (section.classList.contains("contact")) {
          if (rect.top < viewportHeight && rect.bottom > 0) {
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
              minDistance = distance;
              activeIndex = sectionMap.contact;
            }
          }
        } else {
          // 다른 섹션들은 상단 기준으로 계산
          if (rect.top <= viewportHeight / 2 && rect.bottom > 0) {
            const distance = Math.abs(rect.top - 100);
            if (
              distance < minDistance &&
              sectionId &&
              sectionMap[sectionId] !== undefined
            ) {
              minDistance = distance;
              activeIndex = sectionMap[sectionId];
            }
          }
        }
      });

      menuItems.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 1.0],
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // 스크롤 시에도 업데이트
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header">
      <nav className="c_inner">
        <ul className="menu">
          <li className="list_item">
            <span>Home</span>
          </li>
          <li className="list_item">
            <span>Skill</span>
          </li>
          <li className="list_item">
            <span>Project</span>
          </li>
          <li className="list_item">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
