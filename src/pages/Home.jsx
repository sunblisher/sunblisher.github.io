import "../style/pages/home.css";
import { useEffect, useState } from "react"; // ✅ useState 추가
import Masonry from "../components/ui/masonry";
import Modal from "../components/modal/modal"; // ✅ Modal 추가

function Home() {
  // ✅ 모달 상태 추가
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ fade-in 애니메이션 useEffect 추가
  useEffect(() => {
    const cards = document.querySelectorAll(".skill .cardList .row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // 한 번만 실행
          }
        });
      },
      { threshold: 0.2 } // 화면의 20% 진입 시 트리거
    );

    // 순차적으로 나타나도록 delay를 설정
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      id: "1",
      title: "Safe:re 리뉴얼 프로젝트",
      desc: "안전용품 브랜드 Safe:re의 웹사이트 리뉴얼 작업으로, 브랜드의 신뢰감을 강조하기 위해 인터랙션 중심의 반응형 구조를 설계했습니다.",
      tags: ["React", "GSAP", "Responsive", "UI/UX"],
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      link: "https://example.com/safere",
      height: 400,
    },
    {
      id: "2",
      title: "감성교복 브랜드 사이트",
      desc: "교복 대여 서비스를 위한 감성적인 랜딩페이지. 은은한 컬러와 세리프 서체를 활용하여 브랜드 감성을 표현했습니다.",
      tags: ["HTML", "CSS", "Vanilla JS", "Responsive"],
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      link: "https://example.com/school",
      height: 1000,
    },
    {
      id: "3",
      title: "온기 QR 기부 플랫폼",
      desc: "QR코드를 통한 간편 기부 플랫폼으로, 사용자의 접근성과 투명한 후원 흐름을 강조했습니다.",
      tags: ["Figma", "UI 설계", "Prototype", "Mobile Web"],
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      link: "https://example.com/on-gi",
      height: 700,
    },
    {
      id: "4",
      title: "DEVER Gift 관리자 UI",
      desc: "기프티콘 대량 발송 및 거래명세 관리 시스템의 관리자 페이지를 설계했습니다.",
      tags: ["Design System", "Admin UI", "Information Architecture"],
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      link: "https://example.com/devergift",
      height: 400,
    },
    {
      id: "5",
      title: "Sunrise Portfolio",
      desc: "퍼블리셔 중심 포트폴리오로, GSAP ScrollTrigger를 활용해 자연스러운 인터랙션을 구현했습니다.",
      tags: ["React", "GSAP", "ScrollTrigger", "UI Animation"],
      img: "https://picsum.photos/id/1012/600/750?grayscale",
      link: "https://example.com/sunrise",
      height: 800,
    },
    {
      id: "6",
      title: "Bluelane 수산 브랜드 웹사이트",
      desc: "고급 수산 브랜드 Bluelane의 공식 웹사이트로, 시각적 정갈함과 정보 신뢰도를 강조했습니다.",
      tags: ["HTML", "CSS", "JavaScript", "Branding"],
      img: "https://picsum.photos/id/1013/600/750?grayscale",
      link: "https://example.com/bluelane",
      height: 700,
    },
    {
      id: "7",
      title: "Faireat 브랜드 페이지",
      desc: "수달 캐릭터 'Fairee'를 중심으로 한 감성 브랜딩 페이지. 브랜드의 스토리텔링을 강조했습니다.",
      tags: ["Branding", "Illustration", "UI Design"],
      img: "https://picsum.photos/id/1014/600/750?grayscale",
      link: "https://example.com/faireat",
      height: 500,
    },
    {
      id: "8",
      title: "Visible.vc Style Fund Manager UI",
      desc: "투자사용 펀드 관리 대시보드 UI 설계로, 지표 시각화와 접근성을 높였습니다.",
      tags: ["UX Design", "Data Visualization", "UI Structure"],
      img: "https://picsum.photos/id/1016/600/750?grayscale",
      link: "https://example.com/fundmanager",
      height: 900,
    },
    {
      id: "9",
      title: "MeCo Wallet App Prototype",
      desc: "간편 송금 및 후원용 지갑 앱. QR코드 기반 송금과 후원 리포트를 시각화했습니다.",
      tags: ["Figma", "Prototype", "UX Flow"],
      img: "https://picsum.photos/id/1017/600/750?grayscale",
      link: "https://example.com/meco",
      height: 700,
    },
    {
      id: "10",
      title: "감성교복 인테리어 비주얼",
      desc: "브랜드 컬러와 공간감을 조화시킨 감성 교복 인테리어 웹 비주얼 디자인.",
      tags: ["Visual Design", "Brand Color", "Layout"],
      img: "https://picsum.photos/id/1018/600/750?grayscale",
      link: "https://example.com/school-visual",
      height: 400,
    },
    {
      id: "11",
      title: "Cook the Design",
      desc: "요리 레시피 기반 UI 시스템으로, 사용자 맞춤형 콘텐츠 인터페이스를 기획했습니다.",
      tags: ["Design Thinking", "UI System", "Web Structure"],
      img: "https://picsum.photos/id/1019/600/750?grayscale",
      link: "https://example.com/cookdesign",
      height: 700,
    },
    {
      id: "12",
      title: "Seoul Pro Art Platform",
      desc: "문화 예술인 대상 공모 플랫폼 UI로, 정보 위계와 콘텐츠 탐색성을 중심으로 설계했습니다.",
      tags: ["Accessibility", "UX Flow", "Design Tokens"],
      img: "https://picsum.photos/id/1021/600/750?grayscale",
      link: "https://example.com/seoulart",
      height: 600,
    },
  ];

  return (
    <div className="main">
      <section className="c_section hero">
        <div className="c_inner">
          <div className="textWrap">
            <h1 className="heroTitle">Sunrise</h1>
            <p className="subText">
              세상을 밝게 비춰주는 일출처럼 <sapn className="block"></sapn>
              프로덕트에 생기를 주고싶은 디자이너 권효선입니다.
            </p>
          </div>
        </div>
      </section>
      <section className="c_section skill">
        <div className="c_inner">
          <div className="left">
            <h2 className="sectionTitle">Skill</h2>
            <p className="subText">
              현재 프로젝트 투입 시 사용하고 있는 스킬 현황입니다.
            </p>
          </div>
          <div className="right">
            <div className="cardList">
              {/* ✅ Skill 카드 전체 유지 */}
              <div className="row">
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/ps.svg"
                        alt="포토샵"
                      />
                    </div>
                    <p className="text">
                      포토샵 작업 10년 경력이 있으며, 리터칭/합성 능숙하며 시안
                      작업이 가능한 정도로 준수한 실력을 보유했습니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#누끼</li>
                    <li className="list_item">#리터칭</li>
                    <li className="list_item">#AI활용</li>
                  </ul>
                </div>
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/ai.svg"
                        alt="일러스트"
                      />
                    </div>
                    <p className="text">
                      일러스트 기반의 벡터 디자인 및 로고, 아이콘 제작에
                      능숙하며 심볼/브랜딩 그래픽 작업 경험이 풍부합니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#로고디자인</li>
                    <li className="list_item">#아이콘제작</li>
                    <li className="list_item">#브랜딩</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/figma.svg"
                        alt="피그마"
                      />
                    </div>
                    <p className="text">
                      디자인 시스템 구축 및 프로토타입 설계 경험이 있으며 협업
                      환경(Figma)을 통한 커뮤니케이션 능력이 뛰어납니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#DesignSystem</li>
                    <li className="list_item">#Component</li>
                    <li className="list_item">#UIFlow</li>
                  </ul>
                </div>
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/html.svg"
                        alt="HTML"
                      />
                    </div>
                    <p className="text">
                      시멘틱 마크업과 구조적인 HTML 설계에 능숙하며, 웹 표준과
                      접근성을 고려한 반응형 레이아웃을 구현합니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#Semantic</li>
                    <li className="list_item">#Responsive</li>
                    <li className="list_item">#Accessibility</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/css.svg"
                        alt="CSS"
                      />
                    </div>
                    <p className="text">
                      CSS 변수 기반 토큰 시스템을 구축하며, 애니메이션과
                      트랜지션 효과를 활용한 인터랙티브 UI 구현이 가능합니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#Token</li>
                    <li className="list_item">#Animation</li>
                    <li className="list_item">#GridFlex</li>
                  </ul>
                </div>
                <div className="card_item">
                  <div className="wrap">
                    <div className="img_wrap">
                      <img
                        src="../../src/assets/images/home/js.svg"
                        alt="JavaScript"
                      />
                    </div>
                    <p className="text">
                      바닐라 JS를 통한 이벤트 핸들링, 스크롤 트리거, GSAP 활용
                      애니메이션을 구현하며 React 기본 구조를 이해하고 있습니다.
                    </p>
                  </div>
                  <ul className="tagList">
                    <li className="list_item">#GSAP</li>
                    <li className="list_item">#ScrollTrigger</li>
                    <li className="list_item">#ReactBasic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="c_section project">
        <div className="c_inner">
          {/* ✅ onSelect 추가 */}
          <Masonry
            items={items}
            onSelect={setSelectedItem}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      {/* ✅ 모달 추가 */}
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default Home;
