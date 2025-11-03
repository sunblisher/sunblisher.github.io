import "/src/style/pages/home.css";
import { useEffect, useState, useRef } from "react";
import Modal from "../components/modal/modal";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [activeTab, setActiveTab] = useState("company");

  const tabRefs = useRef({});
  const projectSectionRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const updateSliderPosition = () => {
      const activeTabElement = tabRefs.current[activeTab];
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        setSliderStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    };

    updateSliderPosition();

    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, [activeTab]);

  const prevActiveTabRef = useRef(activeTab);
  useEffect(() => {
    if (prevActiveTabRef.current !== activeTab && projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      prevActiveTabRef.current = activeTab;
    }
  }, [activeTab]);

  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill .cardList .card_item");

    const projectCards = document.querySelectorAll(
      ".project_grid .project_card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    skillCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(card);
    });

    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const items = [
    {
      id: "1",
      title: "실리콘",
      desc: "기기에 있는 모든 기프티콘을 자동 업로드 및 직접 등록이 가능한 스마트 모바일쿠폰 관리어플",
      period: "2025.01 - 2025.05",
      tags: ["웹/앱", "디자인 100%", "화면설계 30%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/sealecon_main.jpg",
      thumbnail: "/src/assets/images/home/sealecon_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/sealecon_01.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_02.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_03.png", type: "app" },
        { src: "/src/assets/images/home/sealecon_04.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_05.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_06.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_07.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_08.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_09.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_10.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_11.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_12.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_13.png", type: "app" },
        { src: "/src/assets/images/home/sealecon_14.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_15.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_16.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_17.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_18.png", type: "app" },
        { src: "/src/assets/images/home/sealecon_19.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_20.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_21.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_22.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_23.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_24.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_25.jpg", type: "app" },
        { src: "/src/assets/images/home/sealecon_26.jpg", type: "app" },
      ],
      link: "https://apps.apple.com/kr/app/%EC%8B%A4%EB%A6%AC%EC%BD%98-%EB%82%B4-%EC%86%90-%EC%95%88%EC%9D%98-%EC%BF%A0%ED%8F%B0%EB%A7%A4%EB%8B%88%EC%A0%80/id6744006001",
      height: 700,
    },

    {
      id: "2",
      title: "온기 랜딩페이지",
      desc: "ON:GI는 QR코드로 쉽고 빠르게 기부할 수 있는 간편기부 플랫폼으로, 기부 경험을 제공합니다.",
      period: "2025.10",
      tags: ["출시 전", "반응형", "디자인 100%", "화면설계 100%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/ongi_main.jpg",
      thumbnail: "/src/assets/images/home/ongi_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/ongi_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongi_02.png", type: "desktop" },
        { src: "/src/assets/images/home/ongi_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongi_04.jpg", type: "desktop" },
      ],
      height: 1000,
    },
    {
      id: "3",
      title: "데버 Careers",
      desc: "기업 비전과 문화를 담은 채용/영입 전용 사이트",
      period: "2025.12",
      tags: ["반응형", "디자인 100%", "화면설계 70%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/deverCareers_main.jpg",
      thumbnail: "/src/assets/images/home/deverCareers_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/deverCareers_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_09.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_10.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_11.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_12.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_13.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_14.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_15.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_16.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_17.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_18.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_19.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_20.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_21.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCareers_22.jpg", type: "desktop" },
      ],
      link: "https://careers.dever.team/",
      height: 900,
    },
    {
      id: "4",
      title: "데버 Gift",
      desc: "대량 발송부터 취소, 환불까지 한 번에 관리 가능한 통합형 기프티콘 구매 사이트",
      period: "2025.07 - 2025.08",
      tags: ["반응형", "디자인 100%", "화면설계 90%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/deverGift_main.jpg",
      thumbnail: "/src/assets/images/home/deverGift_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/deverGift_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_08_1.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_08_2.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_09.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_10.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_11.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_12.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_13.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_14.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_15.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_16.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_17.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_18.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverGift_19.jpg", type: "app" },
        { src: "/src/assets/images/home/deverGift_20.jpg", type: "app" },
        { src: "/src/assets/images/home/deverGift_21.jpg", type: "app" },
        { src: "/src/assets/images/home/deverGift_22.jpg", type: "app" },
      ],
      link: "https://gift.dever.team/#price-range-recommendation",
      height: 1000,
    },
    {
      id: "5",
      title: "헤이홀더 커뮤니티 사이트",
      desc: "주주가 쉽고 빠르게 의결권을 행사하고 기업 가치 제고에 참여할 수 있도록 돕는 플랫폼입니다.",
      period: "2025.07",
      tags: ["출시 전", "리디자인", "PC 최적화", "디자인 40%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/heyholder_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/heyholder_01.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_02.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_03.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_04.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_05.jpg", type: "wide" },
      ],
      height: 800,
    },
    {
      id: "6",
      title: "임상 데이터 관리자",
      desc: "임상 데이터 수집부터 관리까지 지원하는 전용 관리자 플랫폼",
      period: "2025.08",
      tags: ["PC 최적화", "디자인 100%", "화면설계 70%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/dataAdmin_main.jpg",
      thumbnail: "/src/assets/images/home/dataAdmin_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/dataAdmin_02.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_03.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_04.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_05.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_06.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_07.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_08.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_09.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_10.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_11.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_12.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_13.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_14.jpg", type: "wide" },
        { src: "/src/assets/images/home/dataAdmin_15.jpg", type: "wide" },
      ],
      height: 1000,
    },
    {
      id: "7",
      title: "통합 관리자페이지",
      desc: "플랫폼 통합 관리, 인사관리를 한번에 사용할 수 있는 플랫폼",
      period: "2025.07",
      tags: ["PC최적화", "디자인 30%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/admin_main.jpg",
      thumbnail: "/src/assets/images/home/admin_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/admin_01.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_02.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_03.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_04.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_05.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_06.jpg", type: "wide" },
        { src: "/src/assets/images/home/admin_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/admin_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/admin_09.jpg", type: "wide" },
      ],
      height: 700,
    },
    {
      id: "8",
      title: "데버 Accounts",
      desc: "로그인과 계정 설정을 간편하게 진행할 수 있는 통합 로그인 플랫폼",
      period: "2024. 10",
      tags: ["반응형", "디자인 40%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/accounts_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/accounts_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/accounts_07.jpg", type: "wide" },
        { src: "/src/assets/images/home/accounts_08.jpg", type: "wide" },
        { src: "/src/assets/images/home/accounts_09.jpg", type: "wide" },
        { src: "/src/assets/images/home/accounts_10.jpg", type: "wide" },
        { src: "/src/assets/images/home/accounts_11.jpg", type: "wide" },
      ],
      link: "https://accounts.dever.team/auth/login",
      height: 600,
    },
    {
      id: "9",
      title: "온기 관리자페이지",
      desc: "4가지 케이스의 사용자 구분으로 관리자 ~ 사용자 페이지까지 작업한 프로젝트",
      period: "2025.09",
      tags: ["출시 전", "일부 반응형", "디자인 100%", "화면설계 50%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "/src/assets/images/home/ongiAdmin_main.jpg",
      thumbnail: "/src/assets/images/home/ongiAdmin_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/ongiAdmin_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_09.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_10.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_11.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_12.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongiAdmin_13.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_14.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_15.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_16.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_17.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_18.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_19.jpg", type: "wide" },
        { src: "/src/assets/images/home/ongiAdmin_20.jpg", type: "wide" },
      ],
      height: 800,
    },
    {
      id: "10",
      title: "데버 고객센터",
      desc: "각 서비스의 자주묻는질문과 1:1문의, 서비스 개선 피드백을 줄 수 있는 고객지원 플랫폼",
      period: "2024. 10",
      tags: ["반응형", "디자인 100%", "화면기획 60%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/deverCs_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/deverCs_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_09.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_10.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_11.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_12.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_14.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_15.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverCs_13.jpg", type: "wide" },
      ],
      link: "https://cs.dever.team/",
      height: 1000,
    },
    {
      id: "11",
      title: "데버 Tech",
      desc: "사내 기술과 프로젝트 인사이트를 공유하는 기업형 테크 블로그",
      period: "2025. 01",
      tags: ["반응형", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/deverTech_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/deverTech_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_04.jpg", type: "desktop" },
      ],
      link: "https://tech.dever.team/",
      height: 400,
    },
    {
      id: "12",
      title: "인쇄 주문제작 사이트",
      desc: "아이콘 형태 위주의 인쇄 주문 제작 사이트",
      period: "2025.03 - 2025.05",
      tags: ["출시 전", "반응형", "디자인 70%", "화면기획 50%", "퍼블리싱 60%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/print_thumbnail.png",
      link: "https://sunblisher.github.io/paperseven/Home/Home.html",
      height: 1000,
      projectType: "personal",
    },
    {
      id: "13",
      title: "인쇄 주문제작 사이트2",
      desc: "아이콘 형태 위주의 인쇄 주문 제작 사이트",
      period: "2025.01 - 2025.02",
      tags: ["출시 전", "반응형", "디자인 70%", "화면기획 50%", "퍼블리싱 60%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/print2_thumbnail.png",
      link: "https://sunblisher.github.io/boxguide/Home/Home.html",
      height: 600,
      projectType: "personal",
    },
    {
      id: "14",
      title: "2024 권효선 포트폴리오",
      desc: "신입 퍼블리셔 권효선의 포트폴리오",
      period: "2023.10 - 2023.11 ",
      tags: ["반응형", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/2024portfolio_thumbnail.png",
      link: "https://sunblisher.github.io/",
      height: 900,
      projectType: "personal",
    },
    {
      id: "15",
      title: "실리콘 BI제작",
      desc: "실리콘 서비스의 브랜드아이덴티티 제작",
      period: "2025. 01",
      tags: ["디자인 100%", "기획 60%"],
      tools: ["photoshop", "illustrator"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/sealeconBi_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/sealeconBi_01.png", type: "wide" },
      ],
      height: 700,
    },
    {
      id: "16",
      title: "함께하는 요양보호사교육원",
      desc: "기존 기능은 유지하며, UI/UX를 재정의한 리디자인 프로젝트",
      period: "2025. 06",
      tags: ["출시 전전", "반응형", "리디자인", "디자인 80%"],
      tools: ["photoshop", "illustrator", "figma"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/together_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/together_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_04.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_05.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_06.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_07.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_08.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_09.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_10.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_11.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_12.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_13.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_14.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_15.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_16.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_17.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_18.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_19.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_20.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_21.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_22.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_23.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_24.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_25.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_26.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_27.jpg", type: "desktop" },
        { src: "/src/assets/images/home/together_28.jpg", type: "desktop" },
      ],
      height: 1000,
    },
    {
      id: "17",
      title: "JNSONS KOREA",
      desc: "미용 관련 소품을 볼 수 있으며, 기업 정보를 확인할 수 있는 사이트",
      period: "2024.07",
      tags: ["반응형", "디자인 100%", "화면기획 90%", "퍼블리싱 100%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/jnsonskorea_thumbnail.png",
      link: "https://www.jnsonskorea.com/",
      height: 500,
      projectType: "personal",
    },
    {
      id: "18",
      title: "잭시믹스 랜딩페이지",
      period: "2023.09",
      desc: "잭시믹스 행사 랜딩페이지 사이드프로젝트",
      tags: ["사이드프로젝트", "반응형", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css"],
      mainImg: "https://picsum.photos/id/1015/600/900?grayscale",
      thumbnail: "/src/assets/images/home/xexymix_thumbnail.png",
      link: "https://sunblisher.github.io/xexymix/index.html",
      height: 600,
      projectType: "personal",
    },
  ];

  return (
    <div className="main">
      <section className="c_section hero">
        <div className="c_inner">
          <div className="textWrap">
            <h1 className="heroTitle">Sunrise</h1>
            <p className="subText">
              세상을 밝게 비춰주는 일출처럼 <span className="block"></span>
              프로덕트에 생기를 불어넣는 디자이너 권효선입니다.
            </p>
          </div>
        </div>
      </section>
      <section className="c_section skill">
        <div className="c_inner">
          <div className="left">
            <h2 className="sectionTitle">Skill</h2>
            <p className="subText">
              <span className="block">
                실무에서 사용하고 있는 기술스택입니다.
              </span>
              최근 AI 도구를 적극 활용해 라이브러리나 리액트를 학습하고, 이미지
              제작을 실무에 적용하고 있습니다.
            </p>
          </div>
          <div className="right">
            <div className="cardList">
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img src="/src/assets/images/home/ps.svg" alt="포토샵" />
                  </div>
                  <p className="text">
                    제품 리터칭·색보정·합성 작업에 능숙합니다. 프로모션 배너,
                    이벤트 페이지, 상세페이지 등 실무 중심의 웹 그래픽 제작
                    경험을 다수 보유하고 있습니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#리터칭</li>
                  <li className="list_item">#웹그래픽제작</li>
                </ul>
              </div>
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img src="/src/assets/images/home/ai.svg" alt="일러스트" />
                  </div>
                  <p className="text">
                    벡터 기반의 로고, 아이콘 제작이 가능하며 브랜드 아이덴티티
                    구축 경험이 있습니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#로고디자인</li>
                  <li className="list_item">#아이콘제작</li>
                  <li className="list_item">#벡터그래픽</li>
                </ul>
              </div>
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img src="/src/assets/images/home/figma.svg" alt="피그마" />
                  </div>
                  <p className="text">
                    UI/UX 디자인 시 주력 툴로 사용하며, Component·Auto
                    Layout·Prototype 설계 등 협업 기반 기능에 능숙합니다. 디자인
                    시스템과 토큰 단위를 활용하여 일관된 UI 구조와 인터랙션
                    플로우를 설계할 수 있습니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#컴포넌트</li>
                  <li className="list_item">#오토 레이아웃</li>
                  <li className="list_item">#디자인시스템</li>
                </ul>
              </div>
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img src="/src/assets/images/home/html.svg" alt="HTML" />
                  </div>
                  <p className="text">
                    시멘틱 마크업을 기반으로 구조적인 HTML 설계가 가능하며, 웹
                    표준·접근성·SEO를 고려한 반응형 페이지를 구축할 수 있습니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#시멘틱 마크업</li>
                  <li className="list_item">#웹표준</li>
                  <li className="list_item">#접근성</li>
                </ul>
              </div>
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img src="/src/assets/images/home/css.svg" alt="CSS" />
                  </div>
                  <p className="text">
                    디자인 토큰 시스템을 구축하여 변수 기반의 스타일 관리 및
                    유지보수가 용이한 구조를 구현할 수 있습니다. 애니메이션,
                    상호작용을 활용해 직관적인 인터랙션 UI를 제공합니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#디자인 토큰</li>
                  <li className="list_item">#변수 활용</li>
                  <li className="list_item">#반응형</li>
                </ul>
              </div>
              <div className="card_item">
                <div className="wrap">
                  <div className="img_wrap">
                    <img
                      src="/src/assets/images/home/js.svg"
                      alt="JavaScript"
                    />
                  </div>
                  <p className="text">
                    바닐라 JS를 활용하여 이벤트 핸들링·DOM 조작·조건 기반
                    인터랙션을 구현할 수 있습니다. ScrollTrigger, Intersection
                    Observer 등을 이용해 상호작용에 따른 애니메이션과 UI 동작을
                    설계할 수 있습니다.
                  </p>
                </div>
                <ul className="tagList">
                  <li className="list_item">#인터랙션 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={projectSectionRef} className="c_section project">
        <div className="c_inner">
          <div className="left">
            <h2 className="sectionTitle">Project</h2>
            <p className="subText">
              카테고리에 맞춰 작업물을 확인하실 수 있으며,
              <span className="block">클릭 시 상세화면을 볼 수 있습니다.</span>
            </p>
            <div className="project_tabs">
              <div className="project_tab_slider" style={sliderStyle}></div>
              <button
                ref={(el) => (tabRefs.current["company"] = el)}
                className={`project_tab ${
                  activeTab === "company" ? "active" : ""
                }`}
                onClick={() => setActiveTab("company")}
              >
                디자인 작업
              </button>
              <button
                ref={(el) => (tabRefs.current["personal"] = el)}
                className={`project_tab ${
                  activeTab === "personal" ? "active" : ""
                }`}
                onClick={() => setActiveTab("personal")}
              >
                퍼블리싱 작업
              </button>
            </div>
          </div>
          <div className="right">
            <div className="project_grid">
              {items
                .filter((item) => {
                  const itemType = item.projectType || "company";
                  return itemType === activeTab;
                })
                .map((item) => (
                  <div
                    key={item.id}
                    className="project_card"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="project_card_image">
                      <img
                        src={item.thumbnail || item.mainImg}
                        alt={item.title}
                      />
                    </div>
                    <div className="project_card_content">
                      <h3 className="project_card_title">{item.title}</h3>
                      {item.desc && (
                        <p className="project_card_desc">{item.desc}</p>
                      )}
                      {item.period &&
                        (() => {
                          const year =
                            item.period.split(".")[0] ||
                            item.period.split(" ")[0];
                          return (
                            <p
                              className={`project_card_year project_card_year_${year}`}
                            >
                              {year}
                            </p>
                          );
                        })()}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default Home;
