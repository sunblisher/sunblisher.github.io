import React, { useEffect } from "react";
import "../../style/components/modal.css";

const Modal = ({ item, onClose }) => {
  // ✅ item이 있을 때만 useEffect 실행
  useEffect(() => {
    if (!item) return; // 모달이 열리지 않았으면 아무것도 안 함

    // ✅ body 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      // ✅ 모달 닫힐 때 스크롤 다시 활성화
      document.body.style.overflow = "auto";
    };
  }, [item]); // item이 바뀔 때만 실행

  // ✅ 모달 열리지 않았으면 렌더하지 않음
  if (!item) return null;

  // ✅ 닫기 버튼 클릭 시 스크롤 즉시 복원
  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose?.();
  };

  return (
    <div className="modal_overlay" onClick={handleClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={handleClose}>
          닫기
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
              <h3 className="sub_title">사용 프로그램</h3>
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
        <div className="modal_images">
          {item.imgs?.map((image, i) => (
            <div key={i} className={`img_wrap ${image.type || ""}`}>
              <img src={image.src} alt={image.alt || item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
