import "../../style/components/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="c_section contact">
        <div className="c_inner">
          <h2 className="sectionTitle">Contact</h2>
          <div className="footer_info">
            <div className="footer_info_item">
              <span className="footer_info_label">이름</span>
              <span className="footer_info_value">권효선</span>
            </div>
            <div className="footer_info_item">
              <span className="footer_info_label">생년월일</span>
              <span className="footer_info_value">1997.12.18</span>
            </div>
            <div className="footer_info_item">
              <span className="footer_info_label">경력</span>
              <span className="footer_info_value">
                총 7.8년 (디자이너 7.8년 / 퍼블리셔 1.5년)
              </span>
            </div>
            <div className="footer_info_item">
              <span className="footer_info_label">이메일</span>
              <span className="footer_info_value">sunblisher@gmail.com</span>
            </div>
          </div>
          <p className="footer_text">
            본 사이트는 개인 포트폴리오 사이트입니다. 본 사이트에 게시된 모든
            디자인, 콘텐츠, 이미지 및 텍스트는 포트폴리오 목적으로 제작되었으며,
            상업적 용도로 사용되지 않습니다.
          </p>
          <p className="footer_copyright">
            © 2025. All rights reserved. hyosun portfolio purposes only.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
