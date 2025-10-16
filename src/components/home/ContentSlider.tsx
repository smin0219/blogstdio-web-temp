"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { slides } from "@/data/slides";

export default function ContentSlider() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSlideClick = (slideId: number) => {
    router.push(`/blog/${slideId}`);
  };

  return (
    <Flex
      w="full"
      h="700px"
      overflow="hidden"
      position="relative"
      justify="center"
      align="center"
      bg="white"
    >
      {/* 중앙 슬라이드 + 좌우 미리보기 */}
      <Flex
        w="full"
        h="full"
        justify="center"
        align="center"
        position="relative"
      >
        {slides.map((slide, i) => {
          const offset = i - index;
          const total = slides.length;
          const realOffset =
            ((offset + total + Math.floor(total / 2)) % total) -
            Math.floor(total / 2);

          let scale = 0.8;
          let opacity = 0.5;
          let zIndex = 0;
          const translateX = realOffset * 400;

          if (realOffset === 0) {
            scale = 1;
            opacity = 1;
            zIndex = 2;
          } else if (Math.abs(realOffset) === 1) {
            scale = 0.85;
            opacity = 0.8;
            zIndex = 1;
          }

          return (
            <motion.div
              key={slide.id}
              style={{
                position: "absolute",
                width: "400px",
                height: "550px",
                cursor: "pointer",
              }}
              animate={{
                scale,
                opacity,
                x: translateX,
                zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 15,
              }}
              onClick={() => {
                if (realOffset === 0) {
                  handleSlideClick(slide.id);
                } else {
                  setIndex(i);
                }
              }}
            >
              <Box
                w="full"
                h="full"
                rounded="md"
                overflow="hidden"
                shadow={realOffset === 0 ? "xl" : "base"}
                position="relative"
                bg="gray.100"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  filter={
                    realOffset === 0 ? "brightness(70%)" : "brightness(70%)"
                  }
                />

                {/* 텍스트 오버레이 */}
                <VStack
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="full"
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                  color="white"
                  align="center"
                  p={6}
                  gap={2}
                >
                  <Text textStyle={"head/bold_30/multi"}>{slide.title}</Text>
                  {slide.author && (
                    <Text textStyle={"body/medium_16/multi"}>
                      by {slide.author}
                    </Text>
                  )}
                </VStack>
              </Box>
            </motion.div>
          );
        })}
      </Flex>

      {/* 좌우 화살표 */}
      <IconButton
        aria-label="Previous"
        onClick={prevSlide}
        position="absolute"
        left="40px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="whiteAlpha.800"
        color="black"
        rounded="full"
        _hover={{ bg: "whiteAlpha.900" }}
        size="lg"
      >
        <ChevronLeftIcon boxSize={8} />
      </IconButton>

      <IconButton
        aria-label="Next"
        onClick={nextSlide}
        position="absolute"
        right="40px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="whiteAlpha.800"
        color="black"
        rounded="full"
        _hover={{ bg: "whiteAlpha.900" }}
        size="lg"
      >
        <ChevronRightIcon boxSize={8} />
      </IconButton>

      {/* 페이지 인디케이터 */}
      <HStack position="absolute" bottom="30px" gap={4}>
        {slides.map((s, i) => (
          <Circle
            key={s.id}
            size="8px"
            bg={i === index ? "blackAlpha.900" : "blackAlpha.400"}
            cursor="pointer"
            onClick={() => setIndex(i)}
            transition="all 0.3s"
          />
        ))}
      </HStack>
    </Flex>
  );
}
