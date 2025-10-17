"use client";

import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const recommendedAuthors = [
  {
    name: "일상리셋",
    role: "출간작가",
    bio: "평범한 일상 속에서 배움과 감사의 흔적을 기록합니다.",
    avatar: "/images/author1.jpg",
    tags: ["자기계발", "라이프스타일"],
  },
  {
    name: "이드id",
    role: "출간작가",
    bio: "직장생활 19년 차, 글을 통해 성장하는 아버지의 기록.",
    avatar: "/images/author2.jpg",
    tags: ["자기계발", "글쓰기"],
  },
  {
    name: "글천개",
    role: "출간작가",
    bio: "유튜브 <글천개> 운영자, 디지털 트렌드와 창작의 기술을 탐구합니다.",
    avatar: "/images/author3.jpg",
    tags: ["자기계발", "글쓰기"],
  },
  {
    name: "구범 강정수",
    role: "강사",
    bio: "조용하지만 깊은 대화, 교직에서 배운 삶의 통찰을 공유합니다.",
    avatar: "/images/author4.jpg",
    tags: ["자기계발", "에세이"],
  },
  {
    name: "소행성 쌔비Savvy",
    role: "기획자",
    bio: "서울과 보령을 오가며, 의미 있는 콘텐츠를 기획하고 기록합니다.",
    avatar: "/images/author5.jpg",
    tags: ["자기계발", "글쓰기"],
  },
  {
    name: "부야c",
    role: "출간작가",
    bio: "SNS에서 글을 쓰는 3.5만 팔로워 크리에이터입니다.",
    avatar: "/images/author6.jpg",
    tags: ["자기계발", "인문교양"],
  },
];

export default function RecommendedAuthors() {
  return (
    <Box px={{ base: 4, md: 12 }} py={48} bg="white" maxW="1200px" mx="auto">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={10}
        maxW="1000px"
        mx="auto"
      >
        {recommendedAuthors.map((author) => (
          <VStack
            key={author.name}
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            p={10}
            gap={4}
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "md",
              transition: "all 0.25s ease",
              cursor: "pointer",
            }}
          >
            <Image
              src={author.avatar}
              alt={author.name}
              borderRadius="full"
              boxSize="100px"
              objectFit="cover"
            />
            <VStack gap={1}>
              <Text fontWeight="bold" fontSize="lg">
                {author.name}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {author.role}
              </Text>
              <Text
                color="gray.600"
                fontSize="sm"
                textAlign="center"
                lineClamp={3}
              >
                {author.bio}
              </Text>
            </VStack>

            <HStack gap={3} mt={3}>
              {author.tags.map((tag) => (
                <Button
                  key={tag}
                  size="sm"
                  variant="outline"
                  borderRadius="full"
                  fontSize="xs"
                >
                  #{tag}
                </Button>
              ))}
            </HStack>
          </VStack>
        ))}
      </SimpleGrid>
      {/* 전체보기 버튼 */}
      <Box display={"flex"} mt={8} justifyContent={"center"}>
        <Button
          variant="outline"
          size="lg"
          borderRadius="full"
          px={8}
          py={6}
          mt={10}
          fontWeight="600"
          _hover={{
            bg: "bs.green.600",
            color: "white",
            borderColor: "bs.green.600",
            transform: "scale(1.05)",
            transition: "all 0.2s ease",
          }}
        >
          추천 블로거 전체보기
        </Button>
      </Box>
    </Box>
  );
}
