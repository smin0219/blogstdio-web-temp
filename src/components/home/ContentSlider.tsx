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

  const nextSlide = () =>
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  const handleSlideClick = (slideId: number) => {
    router.push(`/blog/${slideId}`);
  };

  // 카드 기본 설정
  const cardWidth = 430;
  const gap = 10; //

  return (
    <Flex
      w="full"
      h="600px"
      pb={"50px"}
      overflow="hidden"
      position="relative"
      justify="center"
      align="center"
      bg="white"
    >
      {/* 슬라이드 컨테이너 */}
      <Flex
        w="full"
        h="full"
        justify="flex-start"
        align="center"
        position="relative"
        ml={"12vw"}
      >
        {slides.map((slide, i) => {
          const offset = i - index;
          const translateX = offset * (cardWidth + gap);

          return (
            <motion.div
              key={slide.id}
              style={{
                position: "absolute",
                width: `${cardWidth}px`,
                height: "500px",
                cursor: "pointer",
              }}
              animate={{
                x: translateX,
              }}
              transition={{
                type: "tween", // 🔹 자연스럽게 이어지는 슬라이드 느낌
                ease: "easeInOut",
                duration: 0.7,
              }}
              onClick={() => handleSlideClick(slide.id)}
            >
              <Box
                w="full"
                h="full"
                rounded="md"
                overflow="hidden"
                shadow="md"
                position="relative"
                bg="gray.100"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  filter="brightness(70%)"
                />

                {/* 텍스트 오버레이 */}
                <VStack
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="full"
                  color="white"
                  align="center"
                  p={6}
                  gap={2}
                >
                  <Text textStyle="head/bold_30/multi">{slide.title}</Text>
                  {slide.author && (
                    <Text textStyle="body/medium_16/multi">
                      by {slide.author}
                    </Text>
                  )}
                </VStack>
              </Box>
            </motion.div>
          );
        })}
      </Flex>

      {/* 왼쪽 화살표 */}
      {index > 0 && (
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
      )}

      {/* 오른쪽 화살표 */}
      {index < slides.length - 3 && (
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
      )}

      {/* 페이지 인디케이터 */}
      <HStack position="absolute" bottom="0px" gap={4}>
        {slides.slice(0, slides.length - 2).map((s, i) => (
          <Circle
            key={s.id}
            size="23px"
            bg={i === index ? "blackAlpha.900" : "blackAlpha.400"}
            cursor="pointer"
            onClick={() => setIndex(i)}
            transition="all 0.3s"
          >
            <Text
              textStyle={"body/bold_14/multi"}
              color={i === index ? "white" : "black"}
            >
              {i + 1}
            </Text>
          </Circle>
        ))}
      </HStack>
    </Flex>
  );
}
