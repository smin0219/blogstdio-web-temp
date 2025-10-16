"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { notFound, useParams } from "next/navigation";
import { getSlideById } from "@/data/slides";

export default function BlogReaderPage() {
  const params = useParams();
  const slideId = parseInt(params.id as string, 10);
  const slide = getSlideById(slideId);

  if (!slide) {
    notFound();
  }

  return (
    <Box w="full" bg="white">
      {/* ---------- HEADER COVER ---------- */}
      <Box position="relative" w="full" h="480px" overflow="hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          w="full"
          h="full"
          objectFit="cover"
          filter="brightness(80%)"
        />

        {/* Overlay Text */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          justify="center"
          align="center"
          direction="column"
          color="white"
          textAlign="center"
          px={4}
        >
          {slide.subtitle && (
            <Text fontSize="2xl" mb={2}>
              {slide.subtitle}
            </Text>
          )}
          <Text fontSize="5xl" fontWeight="medium">
            {slide.title}
          </Text>
          <Text fontSize="md" mt={3} opacity={0.9}>
            by {slide.author} · 2시간 전
          </Text>
          {slide.badge && (
            <Badge colorScheme="teal" mt={2} fontSize="sm" px={3} py={1}>
              {slide.badge}
            </Badge>
          )}
        </Flex>
      </Box>

      {/* ---------- ARTICLE BODY ---------- */}
      <Container maxW="4xl" py={20}>
        <VStack align="start" gap={5} lineHeight="taller">
          <Text>
            사춘기 자녀는 공부를 안 해도 공부를 잘해도 부모 속을 들쑤시는
            모양이다. E의 둘째는 학원을 다니지 않고도 공부를 곧 잘했다. 그래서
            E는 남들 다 학원 보낼 때 그 돈을 차곡차곡 모아 대학 등록금을
            대주자고 생각했다.
          </Text>
          <Text>
            하지만 생각만큼 돈을 모으는 게 녹록치 않았다. 코로나를 지나며 수입이
            30% 이상 줄었다.
          </Text>
          <Text fontWeight="medium" fontSize="lg" textAlign="center" my={8}>
            “부모는 가진 것을 다 줬놓고
            <br />더 줄 수 없는 마음에 부끄러워했다.”
          </Text>
          <Text>
            마지막 말을 속삭이듯 작게 내뱉고 E는 급하게 소매로 눈물을 훔쳤다.
          </Text>
        </VStack>

        {/* 태그 */}
        <HStack mt={10} gap={3}>
          {slide.tag && (
            <Box
              border="1px solid"
              borderColor="gray.300"
              px={3}
              py={1}
              rounded="full"
              fontSize="sm"
              color="gray.600"
            >
              {slide.tag}
            </Box>
          )}
          {slide.badge && (
            <Box
              border="1px solid"
              borderColor="teal.300"
              px={3}
              py={1}
              rounded="full"
              fontSize="sm"
              color="teal.600"
            >
              {slide.badge}
            </Box>
          )}
          {slide.released && (
            <Box
              border="1px solid"
              borderColor="purple.300"
              px={3}
              py={1}
              rounded="full"
              fontSize="sm"
              color="purple.600"
            >
              {slide.released}
            </Box>
          )}
        </HStack>

        {/* 회차 목록 */}
        <Box
          border="1px solid"
          borderColor="gray.200"
          mt={16}
          rounded="md"
          overflow="hidden"
        >
          <Flex
            justify="space-between"
            align="center"
            px={5}
            py={3}
            bg="gray.50"
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            <Text fontWeight="bold" fontSize="sm">
              brunch book
            </Text>
            <Text fontSize="sm" color="gray.500">
              목요일 연재
            </Text>
          </Flex>

          <VStack align="stretch" gap={0}>
            {[
              "Now or Never",
              "우정은 아닌 걸로.",
              "보고 싶다",
              "다 해주고 싶다",
              "5화 (발행 예정)",
            ].map((t, i) => (
              <Flex
                key={t}
                px={5}
                py={3}
                borderTop="1px solid"
                borderColor="gray.100"
                bg={t === "다 해주고 싶다" ? "gray.100" : "white"}
                justify="space-between"
              >
                <Text color="gray.800">
                  {String(i + 1).padStart(2, "0")} {t}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Container>

      {/* ---------- FOOTER (작가 정보) ---------- */}
      <Box bg="gray.50" py={16}>
        <Container maxW="4xl">
          <Flex justify="center" mb={10}>
            <Button
              colorScheme="blackAlpha"
              rounded="full"
              px={10}
              py={6}
              fontWeight="medium"
            >
              응원하기
            </Button>
          </Flex>

          <Separator />

          <Flex mt={14} align="center" justify="space-between">
            {/* 작가 프로필 */}
            <HStack gap={6}>
              <Avatar.Root size="xl">
                <Avatar.Image src={`/images/author-${slide.id}.jpg`} />
                <Avatar.Fallback name={slide.author} />
              </Avatar.Root>
              <VStack align="start" gap={2}>
                <Text fontSize="2xl" fontWeight="semibold">
                  {slide.author}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  크리에이터
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {slide.cardTitle || slide.title}에 대한 이야기를 씁니다.
                </Text>
                <Text fontSize="sm" color="gray.500">
                  구독자 20
                </Text>
              </VStack>
            </HStack>

            {/* 구독/제안 버튼 */}
            <HStack gap={4}>
              <Button
                colorScheme="teal"
                variant="solid"
                rounded="full"
                px={6}
                fontWeight="medium"
              >
                제안하기
              </Button>
              <Button
                variant="outline"
                rounded="full"
                borderColor="teal.400"
                color="teal.500"
                px={6}
                fontWeight="medium"
              >
                + 구독
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
