"use client";

interface SlideData {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  bgColor: string;
  textColor: string;
  supporters?: number;
}

const mockData: SlideData[] = [
  {
    id: 1,
    title: "숙성=부패라는 오해는 어디서 시작되었을까?",
    author: "보나스토리",
    content: "음식의 숙성 과정에 대한 과학적 접근과 오해의 진실을 파헤쳐본다.",
    category: "brunch membership",
    bgColor: "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
    textColor: "white",
  },
  {
    id: 2,
    title: "생기의 긴 머리 2",
    author: "리인",
    content: "물 위를 걷는 두 사람의 이야기, 생명의 신비로운 순간을 담다.",
    category: "응원",
    bgColor: "linear-gradient(135deg, #4A90E2 0%, #7BB3F0 100%)",
    textColor: "white",
    supporters: 1,
  },
  {
    id: 3,
    title: "12년 동안 임산부",
    author: "청유",
    content: "First Edition - Released date. Oct 24, 2024",
    category: "brunch book",
    bgColor: "linear-gradient(135deg, #E8E8E8 0%, #F5F5F5 100%)",
    textColor: "#333333",
  },
  {
    id: 4,
    title: "더워도 입맛 없는 날이 없도록",
    author: "달콤한복이",
    content: "잠깐 내려올래? 콩잎 가지고 지금 출발하는데 그 한마디에 벌써 침이...",
    category: "요리",
    bgColor: "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
    textColor: "white",
    supporters: 15,
  },
  {
    id: 5,
    title: "번쯤은 질리도록 먹어보자!!",
    author: "이야 아저씨",
    content: "가끔은 질리도록 맛있는 것들을 먹어보는 것도 좋지 않을까요?",
    category: "음식",
    bgColor: "linear-gradient(135deg, #D4A574 0%, #F4E4BC 100%)",
    textColor: "#2D5016",
    supporters: 8,
  },
];

export default function ContentSlider() {
  return (
    <>slider</>
  );
}
