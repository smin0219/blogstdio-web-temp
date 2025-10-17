"use client";

import ContentSlider from "@/components/home/ContentSlider";
import PopularPosts from "@/components/home/PopularPosts";
import PopularTags from "@/components/home/PopularTags";
import RecommendedAuthors from "@/components/home/RecommendedAuthors";
import Header from "@/components/layout/Header";

export default function Page() {
  return (
    <>
      <Header />
      <ContentSlider />
      <PopularTags />
      <PopularPosts />
      <RecommendedAuthors />
    </>
  );
}
