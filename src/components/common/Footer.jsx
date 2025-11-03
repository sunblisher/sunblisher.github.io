import "../../style/components/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="c_section contact">
        <div className="c_inner">
          {/* <h2 className="sectionTitle">Contact</h2> */}
          <p className="subText">sunblisher@gmail.com</p>
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
