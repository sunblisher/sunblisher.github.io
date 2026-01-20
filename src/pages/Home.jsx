import "/src/style/pages/home.css";
import { useEffect, useState, useRef } from "react";
import Modal from "../components/modal/modal";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  const tabRefs = useRef({});
  const projectSectionRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const updateSliderPosition = () => {
      const activeTabElement = tabRefs.current[activeFilter];
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
  }, [activeFilter]);

  const prevActiveFilterRef = useRef(activeFilter);
  useEffect(() => {
    if (
      prevActiveFilterRef.current !== activeFilter &&
      projectSectionRef.current
    ) {
      projectSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      prevActiveFilterRef.current = activeFilter;
    }
  }, [activeFilter]);

  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill .cardList .card_item");

    const projectCards = document.querySelectorAll(
      ".project_grid .project_card"
    );

    const profileItems = document.querySelectorAll(".profile_info_item");
    const profileIntro = document.querySelector(".profile_intro");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    skillCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(card);
    });

    projectCards.forEach((card, index) => {
      const row = Math.floor(index / 3);
      card.style.transitionDelay = `${row * 0.1}s`;
      projectObserver.observe(card);
    });

    profileItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });

    if (profileIntro) {
      profileIntro.style.transitionDelay = `${profileItems.length * 0.1}s`;
      observer.observe(profileIntro);
    }

    return () => {
      observer.disconnect();
      projectObserver.disconnect();
    };
  }, [activeFilter]);

  const items = [
    {
      id: "1",
      title: "실리콘 APP",
      desc: "모바일쿠폰을 자동으로 찾아 스마트하게 관리할 수 있는 어플",
      period: "2025.01 - 2025.05",
      tags: ["웹/앱", "디자인 100%", "화면설계 30%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },

    {
      id: "2",
      title: "온기 랜딩페이지",
      desc: "기부 플랫폼 홍보용 랜딩페이지",
      period: "2025.10",
      tags: ["출시 전", "반응형", "디자인 100%", "화면설계 100%"],
      tools: ["photoshop", "illustrator", "figma"],
      thumbnail: "/src/assets/images/home/ongi_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/ongi_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongi_02.png", type: "desktop" },
        { src: "/src/assets/images/home/ongi_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/ongi_04.jpg", type: "desktop" },
      ],
      link: "https://www.ongi.site/",
    },
    {
      id: "3",
      title: "데버 Careers 사이트",
      desc: "기업 비전과 문화를 담은 채용/영입 전용 사이트",
      period: "2025.12",
      tags: ["반응형", "디자인 100%", "화면설계 70%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "4",
      title: "데버 Gift 사이트",
      desc: "개인/단체 주문이 가능한 기프티콘 발송 사이트",
      period: "2025.07 - 2025.08",
      tags: ["반응형", "디자인 100%", "화면설계 90%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "5",
      title: "헤이홀더 커뮤니티 사이트",
      desc: "주주가 쉽고 빠르게 의결권을 행사하고 기업 가치 제고에 참여할 수 있도록 돕는 플랫폼",
      period: "2025.07",
      tags: ["출시 전", "리디자인", "PC 최적화", "디자인 40%"],
      tools: ["photoshop", "illustrator", "figma"],
      thumbnail: "/src/assets/images/home/heyholder_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/heyholder_01.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_02.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_03.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_04.jpg", type: "wide" },
        { src: "/src/assets/images/home/heyholder_05.jpg", type: "wide" },
      ],
    },
    {
      id: "6",
      title: "임상시험 데이터 관리 솔루션",
      desc: "임상시험 데이터 수집/관리등을 지원하는 관리 솔루션",
      period: "2025.08",
      tags: ["PC 최적화", "디자인 100%", "화면설계 70%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "7",
      title: "통합 관리자페이지",
      desc: "여러개의 플랫폼을 통합적으로 관리하고 인사관리를 처리할 수 있는 통합 관리 솔루션",
      period: "2025.07",
      tags: ["PC최적화", "디자인 30%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "8",
      title: "데버 Accounts 사이트",
      desc: "관련 솔루션의 통합 로그인/계정 설정을 할 수 있는 통합 로그인 플랫폼",
      period: "2024. 10",
      tags: ["반응형", "디자인 40%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "9",
      title: "온기 관리자페이지",
      desc: "기부관련하여 여러개의 관리자페이지로 구성됐으며, 관리자페이지들의 데이터 로직을 고려하여 제작된 관리 플랫폼",
      period: "2025.09",
      tags: ["출시 전", "일부 반응형", "디자인 100%", "화면설계 50%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "10",
      title: "데버 고객센터 사이트",
      desc: "솔루션별 자주묻는질문/1:1문의를 지원하는 고객센터",
      period: "2024. 10",
      tags: ["반응형", "디자인 100%", "화면기획 60%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "11",
      title: "데버 Tech 기술블로그",
      desc: "사내 기술과 프로젝트 인사이트를 공유하는 기업형 테크 블로그",
      period: "2025. 01",
      tags: ["반응형", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator", "figma"],
      thumbnail: "/src/assets/images/home/deverTech_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/deverTech_01.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_02.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_03.jpg", type: "desktop" },
        { src: "/src/assets/images/home/deverTech_04.jpg", type: "desktop" },
      ],
      link: "https://tech.dever.team/",
    },
    {
      id: "12",
      title: "인쇄 주문제작 사이트",
      desc: "아이콘 형태 위주의 인쇄 주문 제작 사이트",
      period: "2025.03 - 2025.05",
      tags: ["출시 전", "반응형", "디자인 70%", "화면기획 50%", "퍼블리싱 60%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      thumbnail: "/src/assets/images/home/print_thumbnail.png",
      link: "/src/publishing/paperseven/Home/Home.html",
      projectType: "personal",
    },
    {
      id: "13",
      title: "인쇄 주문제작 사이트2",
      desc: "실사형/목업 위주의 인쇄 주문 제작 사이트",
      period: "2025.01 - 2025.02",
      tags: ["출시 전", "반응형", "디자인 70%", "화면기획 50%", "퍼블리싱 60%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      thumbnail: "/src/assets/images/home/print2_thumbnail.png",
      link: "/src/publishing/boxguide/Home/Home.html",
      projectType: "personal",
    },

    {
      id: "14",
      title: "실리콘 BI구축",
      desc: "실리콘 서비스의 브랜드아이덴티티 구축",
      period: "2025. 01",
      tags: ["디자인 100%", "기획 60%"],
      tools: ["photoshop", "illustrator"],
      thumbnail: "/src/assets/images/home/sealeconBi_thumbnail.png",
      imgs: [
        { src: "/src/assets/images/home/sealeconBi_01.png", type: "wide" },
      ],
    },
    {
      id: "15",
      title: "함께하는 요양보호사교육원 사이트",
      desc: "기존 기능은 유지하며, UI/UX를 재정의한 교육원 사이트",
      period: "2025. 06",
      tags: ["출시 전", "반응형", "리디자인", "디자인 80%"],
      tools: ["photoshop", "illustrator", "figma"],
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
    },
    {
      id: "16",
      title: "2023 권효선 포트폴리오",
      desc: "UIUX 퍼블리셔 권효선 포트폴리오",
      period: "2023.10 - 2023.11 ",
      tags: ["사이드프로젝트", "반응형", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      thumbnail: "/src/assets/images/home/2024portfolio_thumbnail.png",
      link: "/src/publishing/portpolio/home.html",
      projectType: "personal",
      isPersonal: true,
    },
    {
      id: "17",
      title: "JNSONS KOREA 사이트",
      desc: "미용 관련 소품을 볼 수 있으며, 기업 정보를 확인할 수 있는 사이트",
      period: "2024.07",
      tags: ["반응형", "디자인 100%", "화면기획 90%", "퍼블리싱 100%"],
      tools: ["photoshop", "illustrator", "figma", "html", "css", "javascript"],
      thumbnail: "/src/assets/images/home/jnsonskorea_thumbnail.png",
      link: "https://www.jnsonskorea.com/",
      projectType: "personal",
    },
    {
      id: "18",
      title: "잭시믹스 랜딩페이지",
      period: "2023.09",
      desc: "기존 이벤트를 재해석/리디자인한 잭시믹스 랜딩페이지",
      tags: [
        "사이드프로젝트",
        "반응형",
        "디자인 100%",
        "화면기획 100%",
        "퍼블리싱 100%",
      ],
      tools: ["photoshop", "illustrator", "figma", "html", "css"],
      thumbnail: "/src/assets/images/home/xexymix_thumbnail.png",
      link: "/src/publishing/xexymix/home.html",
      projectType: "personal",
      isPersonal: true,
    },
    {
      id: "19",
      title: "아로마티카 이벤트페이지",
      period: "2023.09",
      desc: "기존 이벤트를 재해석/리디자인한 아로마티카 이벤트페이지",
      tags: ["사이드프로젝트", "디자인 100%", "화면기획 100%"],
      tools: ["photoshop", "illustrator"],
      thumbnail: "/src/assets/images/home/aromatica_thumbnail.png",
      isPersonal: true,
      imgs: [
        {
          src: "/src/assets/images/home/aromatica_01.jpg",
          type: "wide",
        },
      ],
    },
    {
      id: "20",
      title: "마리끌레르 22fw 컬렉션 인트로",
      period: "2022.07",
      desc: "시즌 컬렉션의 브랜드 무드와 컨셉을 녹여낸 브랜드 인트로",
      tags: ["디자인 100%"],
      tools: ["photoshop"],
      thumbnail: "/src/assets/images/home/graphic01_thumbnail.png",
    },
    {
      id: "21",
      title: "마리끌레르 22ss 컬렉션 인트로",
      period: "2022.01",
      desc: "시즌 컬렉션의 브랜드 무드와 컨셉을 녹여낸 브랜드 인트로",
      tags: ["디자인 100%"],
      tools: ["photoshop"],
      thumbnail: "/src/assets/images/home/graphic02_thumbnail.png",
    },
    {
      id: "22",
      title: "시엔 23ss 컬렉션 인트로",
      period: "2023.01",
      desc: "시즌 컬렉션의 브랜드 무드와 컨셉을 녹여낸 브랜드 인트로",
      tags: ["디자인 100%"],
      tools: ["photoshop"],
      thumbnail: "/src/assets/images/home/graphic03_thumbnail.png",
    },
    {
      id: "23",
      title: "마리끌레르 23ss 컬렉션 인트로",
      period: "2023.01",
      desc: "시즌 컬렉션의 브랜드 무드와 컨셉을 녹여낸 브랜드 인트로",
      tags: ["디자인 100%"],
      tools: ["photoshop"],
      thumbnail: "/src/assets/images/home/graphic04_thumbnail.png",
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
          <div className="hero_scroll_indicator">
            <div className="scroll_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffffa4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevrons-down-icon lucide-chevrons-down"
              >
                <path d="m7 6 5 5 5-5" />
                <path d="m7 13 5 5 5-5" />
              </svg>
            </div>
            <span className="scroll_text">scroll</span>
          </div>
        </div>
      </section>
      <section className="c_section skill">
        <div className="c_inner profile">
          <div className="left">
            <h2 className="sectionTitle">Profile</h2>
            <p className="subText">
              안녕하세요.
              <span className="block">협업능력, 성실함, 소통력이 우수한</span>
              UIUX 디자이너/퍼블리셔 권효선입니다.
            </p>
          </div>
          <div className="right">
            <div className="profile_container">
              <ul className="profile_info_list">
                <li className="profile_info_item">
                  <h3 className="info_title">이름</h3>
                  <p className="text">권효선</p>
                </li>
                <li className="profile_info_item">
                  <h3 className="info_title">이메일</h3>
                  <p className="text">sunblisher@gmail.com</p>
                </li>
                <li className="profile_info_item">
                  <h3 className="info_title">교육이력</h3>
                  <div className="date_wrap">
                    <p className="date">2013.03 - 2016.02</p>
                    <p className="text">세그루패션디자인고등학교 졸업</p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2023.03 - 2023.04</p>
                    <p className="text">
                      웹퍼블리셔 기초 교육과정 (하이미디어컴퓨터학원)
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2023.07 - 2023.11</p>
                    <p className="text">
                      웹&앱 디자인 퍼블리셔 교육과정 (이젠아카데미 DX교육센터)
                    </p>
                  </div>
                </li>
                <li className="profile_info_item">
                  <h3 className="info_title">자격증</h3>
                  <div className="date_wrap">
                    <p className="date">2014.08</p>
                    <p className="text">샵마스터3급</p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2015.07</p>
                    <p className="text">컴퓨터그래픽스운용기능사</p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2015.08</p>
                    <p className="text">정보기술자격 (ITQ)인증시험</p>
                  </div>
                </li>
                <li className="profile_info_item experience">
                  <h3 className="info_title">경력사항</h3>
                  <div className="date_wrap">
                    <p className="date">2015.08 - 2016.03</p>
                    <p className="text">
                      이오F&P (팬시/문구 쇼핑몰)
                      <sapn className="work">
                        배너 제작, 제품 상세페이지 제작, 이벤트페이지 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2016.10 ~ 2017.11</p>
                    <p className="text">
                      쥬뗌므 (의류 쇼핑몰)
                      <sapn className="work">
                        인물/제품 리터칭, 배너 제작, 제품 상세페이지 제작,
                        이벤트페이지 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2018.10 ~ 2019.01</p>
                    <p className="text">
                      부티크드루시드 (의류 쇼핑몰)
                      <sapn className="work">
                        인물/제품 리터칭, 배너 제작, 제품 상세페이지 제작,
                        이벤트페이지 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2019.01 ~ 2019.07</p>
                    <p className="text">
                      내셔널비 (의류 쇼핑몰)
                      <sapn className="work">
                        인물/제품 리터칭, 제품 상세페이지 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2019.11 ~ 2020.12</p>
                    <p className="text">
                      에프엠씨패션코리아 (의류 벤더사)
                      <sapn className="work">
                        인물/제품 리터칭, 제품 상세페이지 제작, 이벤트 페이지
                        제작, 오픈마켓 딜 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2021.04 ~ 2023.07</p>
                    <p className="text">
                      퍼스트에프엔씨 (마리끌레르 브랜드)
                      <sapn className="work">
                        인물/제품 리터칭, 배너 제작, 제품 상세페이지 제작,
                        이벤트페이지 제작, 제품 촬영, 팜플렛 제작
                      </sapn>
                    </p>
                  </div>
                  <div className="date_wrap">
                    <p className="date">2024.05 ~ 2025.11</p>
                    <p className="text">
                      데버 (IT 웹에이전시)
                      <sapn className="work">
                        UIUX디자인, 퍼블리싱, BI제작, 사내 디자인
                      </sapn>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="profile_intro profile_info_item">
                <h4 className="info_title">자기소개</h4>
                <p className="text">
                  저는 사용자의 행동을 이해하고 그 경험을 시각적으로 풀어내는
                  UI/UX 디자이너이자 웹 퍼블리셔 권효선입니다. 단순히 예쁜
                  화면을 만드는 것이 아니라, 논리적인 구조와 명확한 정보 전달을
                  통해 사용자가 '생각하지 않아도 자연스럽게 이해할 수 있는
                  인터페이스'를 구현하는 데 집중합니다. 약 6년간 웹디자인을 통해
                  비주얼 스토리텔링과 브랜드 이해력을 쌓았고, 이후 UI/UX
                  디자인과 퍼블리싱을 병행하며 구조적 UI 구현과 사용자 흐름
                  중심의 설계에 집중했습니다. 이를 통해 디자인과 개발의 연결
                  고리를 이해하고, 복잡한 정보를 '이해 → 단순화 → 시각화'의
                  과정으로 정리하여 일관된 톤앤매너로 표현하는 능력을
                  길렀습니다. 저에게 디자인은 단순한 감각의 표현이 아니라,
                  이해와 공감에서 출발한 사용자 경험의 설계라고 생각합니다.
                  사용자 관점에서의 생각하며, 직관적이고 완성도 높은 프로덕트를
                  구현하는 것을 목표로 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="c_inner">
          <div className="left">
            <h2 className="sectionTitle">Skill</h2>
            <p className="subText">실무에서 사용하고 있는 기술스택입니다.</p>
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
                ref={(el) => (tabRefs.current["all"] = el)}
                className={`project_tab ${
                  activeFilter === "all" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("all")}
              >
                전체
              </button>
              <button
                ref={(el) => (tabRefs.current["design"] = el)}
                className={`project_tab ${
                  activeFilter === "design" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("design")}
              >
                디자인
              </button>
              <button
                ref={(el) => (tabRefs.current["publishing"] = el)}
                className={`project_tab ${
                  activeFilter === "publishing" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("publishing")}
              >
                퍼블리싱
              </button>
            </div>
          </div>
          <div className="right">
            <div className="project_grid">
              {items
                .filter((item) => {
                  if (activeFilter === "all") return true;

                  const isPublishing = item.projectType === "personal";

                  if (activeFilter === "design") {
                    return !isPublishing;
                  }
                  if (activeFilter === "publishing") {
                    return isPublishing;
                  }
                  return true;
                })
                .map((item) => {
                  const isPublishing = item.projectType === "personal";
                  const isPersonal = item.isPersonal === true;

                  return (
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
                        <div className="project_card_badges">
                          {item.period &&
                            (() => {
                              const year =
                                item.period.split(".")[0] ||
                                item.period.split(" ")[0];
                              return (
                                <span className="project_card_year">
                                  {year}
                                </span>
                              );
                            })()}
                          <span className="project_card_type project_card_type_design">
                            디자인
                          </span>
                          {isPublishing && (
                            <span className="project_card_type project_card_type_publishing">
                              퍼블리싱
                            </span>
                          )}
                          {isPersonal && (
                            <span className="project_card_type project_card_type_personal">
                              개인작업
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default Home;
