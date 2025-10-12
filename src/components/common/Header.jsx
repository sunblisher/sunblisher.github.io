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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.classList[1];
            const activeIndex = sectionMap[id];
            menuItems.forEach((item, index) => {
              if (index === activeIndex) {
                item.classList.add("active");
              } else {
                item.classList.remove("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
