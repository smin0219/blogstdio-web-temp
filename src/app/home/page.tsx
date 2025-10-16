"use client";

import ContentSlider from "@/components/home/ContentSlider";
import Header from "@/components/layout/Header";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Header />
      <ContentSlider />
      <Box
        display={"flex"}
        w={"full"}
        p={"15vh 20vw"}
        justifyContent={"center"}
      >
        인기 카테고리
      </Box>
    </>
  );
}
