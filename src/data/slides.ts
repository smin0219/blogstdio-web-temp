export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  cardTitle?: string;
  author: string;
  tag?: string;
  background?: string;
  badge?: string;
  supporters?: string;
  released?: string;
  date?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "오늘만 무료",
    subtitle: "남은 시간 13:17:17",
    image: "/images/slide1.jpg",
    cardTitle: "질문 잘하는 후임에게 배운 소통하는 법",
    author: "거북이",
    tag: "brunch membership",
    background: "#1B3A33",
  },
  {
    id: 2,
    title: "향수병 해부학",
    author: "이가은",
    image: "/images/slide2.jpg",
    badge: "응원",
    supporters: "17명이 응원",
    background: "#6E489D",
  },
  {
    id: 3,
    title: "10년차 육아중이지만 글을 씁니다",
    author: "별하맘",
    image: "/images/slide3.jpg",
    released: "First Edition",
    date: "Released date. Oct 25, 2024",
    background: "#D9D9D9",
  },
  {
    id: 4,
    title: "양양시장 농산물 트레이더 관찰기",
    author: "허자",
    image: "/images/slide4.jpg",
  },
  {
    id: 5,
    title: "아이와 강원도 여행을 마무리합니다",
    author: "소화록",
    image: "/images/slide5.jpg",
  },
  {
    id: 6,
    title: "아이와 강원도 여행을 마무리합니다",
    author: "소화록",
    image: "/images/slide5.jpg",
  },
  {
    id: 7,
    title: "아이와 강원도 여행을 마무리합니다",
    author: "소화록",
    image: "/images/slide5.jpg",
  },
  {
    id: 8,
    title: "아이와 강원도 여행을 마무리합니다",
    author: "소화록",
    image: "/images/slide5.jpg",
  },
];

export const getSlideById = (id: number): Slide | undefined => {
  return slides.find((slide) => slide.id === id);
};
