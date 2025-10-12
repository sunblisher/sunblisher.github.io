import React, { useEffect } from "react";
import "../../style/components/modal.css";

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  useEffect(() => {
    // ✅ body 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      // ✅ 모달 닫힐 때 스크롤 다시 활성화
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ 닫기 버튼 클릭 시 스크롤 즉시 복원
  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose?.();
  };

  return (
    <div className="modal_overlay" onClick={handleClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={handleClose}>
          ✕
        </button>

        <div className="modal_image">
          <img src={item.img} alt={item.title} />
        </div>

        <div className="modal_info">
          <h2 className="modal_title">{item.title}</h2>
          <p className="modal_desc">{item.desc}</p>
          <ul className="modal_tags">
            {item.tags?.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          {item.link && (
            <a
              href={item.link}
              className="modal_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              프로젝트 보기
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
