import React, { useEffect, useState, useRef } from "react";
import "../../style/components/modal.css";

const Modal = ({ item, onClose }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [item]);

  useEffect(() => {
    if (!item || !overlayRef.current) return;

    const handleScroll = () => {
      const scrollTop = overlayRef.current.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    const overlay = overlayRef.current;
    overlay.addEventListener("scroll", handleScroll);

    // 초기 체크
    handleScroll();

    return () => {
      overlay.removeEventListener("scroll", handleScroll);
    };
  }, [item]);

  if (!item) return null;

  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose?.();
  };

  const handleScrollToTop = () => {
    if (overlayRef.current) {
      overlayRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="modal_overlay" ref={overlayRef}>
      <div className="modal_content">
        <button className="modal_close" onClick={handleClose}>
          닫기
        </button>
        <button
          className={`modal_scroll_top ${showScrollTop ? "show" : ""}`}
          onClick={handleScrollToTop}
          aria-label="맨 위로 스크롤"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L12 5L19 12M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="modal_info">
          <div className="info_text">
            <h2 className="modal_title">{item.title}</h2>
            <div className="info_wrap">
              <h3 className="sub_title">서비스 요약</h3>
              <p className="modal_desc">{item.desc}</p>
            </div>
            {item.period && (
              <div className="info_wrap">
                <h3 className="sub_title">작업 기간</h3>
                <p className="modal_desc">{item.period}</p>
              </div>
            )}
            <div className="info_wrap">
              <h3 className="sub_title">작업 기여도</h3>
              <ul className="modal_tags">
                {item.tags?.map((tag, i) => (
                  <li key={i}>
                    {tag}
                    {i !== item.tags.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info_wrap">
              <h3 className="sub_title">사용 스킬</h3>
              {item.tools && (
                <ul className="modal_tools">
                  {item.tools.map((tool, i) => {
                    const icons = {
                      photoshop: "/src/assets/images/home/ps.svg",
                      illustrator: "/src/assets/images/home/ai.svg",
                      figma: "/src/assets/images/home/figma.svg",
                      html: "/src/assets/images/home/html.svg",
                      css: "/src/assets/images/home/css.svg",
                      javascript: "/src/assets/images/home/js.svg",
                    };
                    return (
                      <li key={i}>
                        <img src={icons[tool]} alt={tool} title={tool} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {item.link && (
              <a
                href={item.link}
                className="modal_btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // React Router(HashRouter)를 우회하여 직접 링크 이동
                  if (
                    item.link.startsWith("/src/publishing/") ||
                    item.link.startsWith("../")
                  ) {
                    e.preventDefault();
                    // 새 창에서 열기
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                링크이동
                <img
                  src="/src/assets/images/home/right_arrow.svg"
                  alt="이동하기"
                />
              </a>
            )}
          </div>
          <div className="modal_thumnail">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        </div>
        {item.imgs && item.imgs.length > 0 && (
          <div className="modal_images">
            {item.imgs.map((image, i) => (
              <div key={i} className={`img_wrap ${image.type || ""}`}>
                <img src={image.src} alt={image.alt || item.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
